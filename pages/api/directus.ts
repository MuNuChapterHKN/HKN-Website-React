import StudyGroup, { StudyGroupProps } from "@/components/Events/StudyGroup";
import { BadgeType, Badge } from "@/components/People/Alumno";
import { AlumnoProps } from "@/pages/People/Alumni";
import { createDirectus, rest, readAssetArrayBuffer, readItems, readFile, readProviders, staticToken } from '@directus/sdk';
import { TeamMemberProps, TeamProps, BoardMemberProps } from '@/pages/People/People';
import { PastBoardProps, PastBoardMemberProps } from '@/pages/People/PastBoards';
import { ProfessionalProps } from '@/pages/People/Professionals';
import { Mention } from "@/components/Recognitions/MentionCard";
import { Event, YearEvents } from "@/components/Events/YearEventsColumn";
import exp from "constants";

const API_URL = 'https://hknpolito.org/directus/';
const IMPORT_LIMIT = 500;

export type FeatureFlag = {
	name: string;
	status: boolean;
}

export async function fetchFeatureFlags() {
	const directus = createDirectus(API_URL).with(rest());
	const featureFlags = await directus.request(
		readItems('feature_flags')
	);
	return featureFlags as FeatureFlag[];
}

export async function fetchActiveStudyGroups() {
	const directus = createDirectus(API_URL).with(rest());
	const studyGroups = await directus.request(
		readItems('study_group', {
			"filter": { "active": { _eq: true } },
		})
	);
	return studyGroups as StudyGroupProps[];
}

export async function fetchAlumni() {
	const directus = createDirectus(API_URL).with(rest());
	const alumni = await directus.request(
		readItems('member', {
			"filter": { "is_alumno": { _eq: true } },
			"limit": IMPORT_LIMIT,
		})
	);
	const boards = await directus.request(
		readItems('board', {
			"limit": IMPORT_LIMIT,
		})
	);
	const heads = await directus.request(
		readItems('head', {
			"limit": IMPORT_LIMIT,
			"fields": ["member", "team.name", "year"],
		})
	);

	const alumniMap = new Map<number, AlumnoProps>();
	for (const alumnus of alumni) {
		let memberName = alumnus.name.split(" ")[0];
		let name = memberName + " " + alumnus.last_name;
		let imageSrc = `${API_URL}assets/${alumnus.image}`;
		let badges: Badge[] = []
		if (alumnus.induction_date) {
			badges.push({ type: BadgeType.Inducted, year: alumnus.induction_date.split("-")[0] });
		}
		alumniMap.set(alumnus.id, { name: name, imageSrc: imageSrc, badges: badges });
	}
	for (const board of boards) {
		let role = board.role;
		let year = board.year;
		let badge = { type: BadgeType.Board, year: year, role: role };
		const alumno: AlumnoProps | undefined = alumniMap.get(board.member);
		if (!alumno) {
			continue;
		}
		alumno?.badges?.push(badge);
	}
	for (const head of heads) {
		let team = head.team.name
		let year = head.year;
		let badge = { type: BadgeType.Head, year: year, role: team };
		const alumno: AlumnoProps | undefined = alumniMap.get(head.member);
		if (!alumno) {
			continue;
		}
		alumno?.badges?.push(badge);
	}

	const alumniProps: AlumnoProps[] = [];
	alumniMap.forEach((value, key) => {
		alumniProps.push(value);
	});
	return alumniProps;
}

export async function fetchTeams() {

	const directus = createDirectus(API_URL).with(rest());

	const teams = await directus.request(
		readItems('team', {
			"limit": IMPORT_LIMIT,
			"filter": { "is_active": { _eq: true } },
			"fields": ["id", "name", "long_name", "description", "members.name", "members.last_name", "members.image"],
		})
	);

	const heads = await directus.request(
		readItems('head', {
			"limit": IMPORT_LIMIT,
			"sort": "-year",
			"fields": ["member", "team", "year", "member.name", "member.last_name", "member.image"],
		})
	).then(heads => heads.filter(head => head.year === heads[0].year));

	const teamMap = new Map();

	for (const team of teams) {

		let area = team.name;
		let long_name = team.long_name;
		let description = team.description;
		let managers: TeamMemberProps[] = [];
		let members: TeamMemberProps[] = [];
		let imageSrc = "/People/Resp/resp-" + area.toLowerCase().replace(/ /g, "_") + ".png";

		for (const member of team.members) {

			let memberName = member.name + " " + member.last_name;
			let memberImageSrc = `${API_URL}assets/${member.image}`;
			let memberProps: TeamMemberProps = { name: memberName, imageSrc: memberImageSrc }
			members.push(memberProps);

		}

		teamMap.set(team.id, { area: area, long_name: long_name, description: description, managers: managers, members: members, imageSrc: imageSrc });
	}

	for (const head of heads) {

		let memberName = head.member.name.split(" ")[0];
		let name = memberName + " " + head.member.last_name;
		let ImageSrc = `${API_URL}assets/${head.member.image}`;
		let memberProps: TeamMemberProps = { name: name, imageSrc: ImageSrc }

		teamMap.get(head.team).managers.push(memberProps);
	}

	const teamProps: TeamProps[] = [];

	teamMap.forEach((value, key) => {
		teamProps.push(value);
	});

	return teamProps;
}

export async function fetchBoard() {
	const directus = createDirectus(API_URL).with(rest());
	const boards = await directus.request(
		readItems('board', {
			"limit": IMPORT_LIMIT,
			"sort": ["-year"],
			"fields": ["id", "member.name", "member.last_name", "role", "year", "member.image"],
		})
	).then(boards => boards.filter(board => board.year === boards[0].year));

	const boardProps: BoardMemberProps[] = [];

	for (const board of boards) {

		let member = board.member
		let memberName = member.name.split(" ")[0];
		let name = memberName + " " + member.last_name;
		let role = board.role;
		let imageSrc = `${API_URL}assets/${member.image}`;

		boardProps.push({ name: name, role: role, imageSrc: imageSrc, roleDescription: "" });
	}

	return boardProps;
}

export async function fetchPastBoards() {
	const directus = createDirectus(API_URL).with(rest());
	const boards = await directus.request(
		readItems('board', {
			"limit": IMPORT_LIMIT,
			"sort": ["-year", "-id"],
			"fields": ["id", "member.name", "member.last_name", "role", "year", "member.image"],
		})
	);

	const boardMap = new Map();
	for (const board of boards) {
		let year = board.year;
		let member = board.member
		let memberName = member.name.split(" ")[0];
		let name = memberName + " " + member.last_name;
		let role = board.role;
		let imageSrc = `${API_URL}assets/${member.image}`;
		if (!boardMap.has(year)) {
			boardMap.set(year, []);
		}
		boardMap.get(year).push({ name: name, role: role, imageSrc: imageSrc });
	}

	const boardProps: PastBoardProps[] = [];
	boardMap.forEach((value, key) => {
		boardProps.push({ year: key, members: value });
	});

	boardProps.shift();

	return boardProps;
}

export async function fetchProfessionals() {
	const directus = createDirectus(API_URL).with(rest());
	const professionals = await directus.request(
		readItems('professional', {
			"limit": IMPORT_LIMIT,
		})
	);

	const professionalProps: ProfessionalProps[] = [];
	for (const professional of professionals) {
		let profName = professional.name.split(" ")[0];
		let name = profName + " " + professional.last_name;
		let imageSrc = `${API_URL}assets/${professional.image}`;
		professionalProps.push({ name: name, imageSrc: imageSrc });
	}

	return professionalProps;
}

export async function fetchAwards() {
	const directus = createDirectus(API_URL).with(rest());
	const awards = await directus.request(
		readItems('award', {
			"limit": IMPORT_LIMIT,
			"sort": ["-year"],
			"fields": ["image"]
		})
	);

	const awardImages: string[] = [];
	for (const award of awards) {
		if (award.image) {
			const imageUrl = `${API_URL}assets/${award.image}`;
			awardImages.push(imageUrl);
		}
	}

	return awardImages;
}

export async function fetchHomeAwards() {
	const directus = createDirectus(API_URL).with(rest());
	const awards = await directus.request(
		readItems('award', {
			"limit": 4,
			"sort": ["-year"],
			"fields": ["image_monochrome"]
		})
	);
	const awardImages: string[] = [];
	for (const award of awards) {
		if (award.image_monochrome) {
			const imageUrl = `${API_URL}assets/${award.image_monochrome}`;
			awardImages.push(imageUrl);
		}
	}

	return awardImages;
}


export async function fetchMentions() {
	const directus = createDirectus(API_URL).with(rest());
	const mentions = await directus.request(
		readItems('mention', {
			"limit": IMPORT_LIMIT,
			"sort": ["-date"],
			"fields": ["image", "title", "subtitle", "text", "link"]
		})
	);
	const mentionProps: Mention[] = [];
	for (const mention of mentions) {
		let imageSrc = `${API_URL}assets/${mention.image}`;
		mentionProps.push({ imageSrc: imageSrc, title: mention.title, subtitle: mention.subtitle, text: mention.text, link: mention.link });
	}

	return mentionProps;
}

export async function fetchEvents() {
	const directus = createDirectus(API_URL).with(rest());
	const events = await directus.request(
		readItems('event', {
			"limit": IMPORT_LIMIT,
			"sort": ["-date"],
			"fields": ["year", "title", "date", "location", "link", "booking_link", "description", "image"]
		})
	);

	const eventMap = new Map<string, any[]>();
	const lastEvent  = events[0];
	const lastEventDate = new Date(lastEvent.date);
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
	const lastEventFormattedDate = lastEventDate.toLocaleDateString('en-US', options);

	events.shift();
	const lastEventProps = {
		title: lastEvent.title,
		date: lastEventFormattedDate,
		location: lastEvent.location,
		image: lastEvent.image ? `${API_URL}assets/${lastEvent.image}` : undefined,
		link: lastEvent.link || undefined,
		booking_link: lastEvent.booking_link || undefined,
		description: lastEvent.description || undefined,
	};


	for (const event of events) {
		const year = event.year;
		const eventDate = new Date(event.date);
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
		const formattedDate = eventDate.toLocaleDateString('en-US', options);

		const eventDetails = {
			location: event.location,
			title: event.title,
			date: formattedDate,
			image: event.image ? `${API_URL}assets/${event.image}` : undefined,
			link: event.link || undefined,
			booking_link: event.booking_link || undefined,
			description: event.description || undefined,
		};

		if (!eventMap.has(year)) {
			eventMap.set(year, []);
		}
		eventMap.get(year)?.push(eventDetails);
	}

	const pastEventsProps = Array.from(eventMap.entries()).map(([year, events]) => ({
		year,
		events,
	}));

	return {
		pastEvents: pastEventsProps,
		lastEvent: lastEventProps,
	};
}

export async function fetchPhotogallery() {
	const directus = createDirectus(API_URL).with(rest());
	const photogallery = await directus.request(
		readItems('photogallery', {
			"limit": IMPORT_LIMIT,
			"sort": ["-date"],
			"fields": ["image", "title", "period", "date"]
		})
	);

	const photogalleryProps = [];
	for (const photo of photogallery) {
		let imageSrc = `${API_URL}assets/${photo.image}`;
		photogalleryProps.push({ src: imageSrc, title: photo.title, date: photo.period });
	}

	return photogalleryProps;
}

export async function fetchRecruitment() {
	const directus = createDirectus(API_URL).with(rest());
	const recruitment = await directus.request(
		readItems('recruitment', {
			"limit": 1,
			"sort": ["-id"],
			"fields": ["open"]
		})
	);

	for (const rec of recruitment) {
		if (rec.open) {
			return true;
		}
	}
	return false;
}
