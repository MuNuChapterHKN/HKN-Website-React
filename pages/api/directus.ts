import StudyGroup, {StudyGroupProps} from "@/components/Events/StudyGroup";
import { BadgeType, Badge } from "@/components/People/Alumno";
import { AlumnoProps } from "@/pages/People/Alumni";
import { createDirectus, rest, readAssetArrayBuffer, readItems, readFile, readProviders, staticToken } from '@directus/sdk';
import { TeamMemberProps, TeamProps, BoardMemberProps } from '@/pages/People/People';
import { PastBoardProps, PastBoardMemberProps} from '@/pages/People/PastBoards';
import { ProfessionalProps } from '@/pages/People/Professionals';

const API_URL = 'https://hknpolito.org/directus/';
const IMPORT_LIMIT = 500;

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
		})
	);
	const teams = await directus.request(
		readItems('team', {
			"limit": IMPORT_LIMIT,
		})
	);
	const teamMap = new Map();
	for (const team of teams) {
		teamMap.set(team.id, team.longName);
	}

	const alumniMap = new Map();
	for (const alumnus of alumni) {
		let name = alumnus.name + " " + alumnus.last_name;
		let imageSrc = "/People/members/"+name.replace(/ /g, "_").replace("'","").toLowerCase()+".png";
		let badges: Badge[] = []
		if (alumnus.induction_date){
			badges.push({type: BadgeType.Inducted, year: alumnus.induction_date.split("-")[0]});
		}
		alumniMap.set(alumnus.id, {name: name, imageSrc: imageSrc, badges: badges});
	}
	console.log(alumniMap)
	for (const board of boards) {
		let role = board.role;
		let year = board.year;
		let badge = {type: BadgeType.Board, year: year, role: role};
		console.log(board.member)
		if (!alumniMap.has(board.member)) {
			continue;
		}
		alumniMap.get(board.member).badges.push(badge);
	}
	for (const head of heads) {
		let team = teamMap.get(head.team);
		let year = head.year;
		let badge = {type: BadgeType.Head, year: year, role: team};
		if (!alumniMap.has(head.member)) {
			continue;
		}
		alumniMap.get(head.member).badges.push(badge);
	}

	const alumniProps: AlumnoProps[] = [];
	for (const [key, value] of alumniMap) {
		alumniProps.push(value);
	}
	return alumniProps;
}

export async function fetchTeams() {
	const directus = createDirectus(API_URL).with(rest());
	const teams = await directus.request(
		readItems('team', {
			"limit": IMPORT_LIMIT,
			"filter": { "is_active": { _eq: true } },
		})
	);
	const members = await directus.request(
		readItems('member', {
			"limit": IMPORT_LIMIT,
		})
	);
	const last_head = await directus.request(
		readItems('head', {
			"limit": 1,
			"sort": "-year",
		})
	);
	const last_year = last_head[0].year;
	const heads = await directus.request(
		readItems('head', {
			"limit": IMPORT_LIMIT,
			"filter": { "year": { _eq: last_year } },
		})
	);

	const memberMap = new Map();
	for (const member of members) {
		memberMap.set(member.id, member);
	}

	const teamMap = new Map();
	for (const team of teams) {
		let area = team.name;
		let longName = team.longName;
		let description = team.description;
		let managers: TeamMemberProps[] = [];
		let members: TeamMemberProps[] = [];
		let imageSrc = "/People/Resp/resp-"+area.toLowerCase()+".png";
		for (const memberID of team.members){
			let member = memberMap.get(memberID);
			let memberName = member.name + " " + member.last_name;
			let memberImageSrc = "/People/members/"+memberName.replace(/ /g, "_").replace("'","").toLowerCase()+".png";
			let memberProps: TeamMemberProps = {
				name: memberName,
				imageSrc: memberImageSrc,
			}
			members.push(memberProps);
		}
		teamMap.set(team.id, {area: area, longName: longName, description: description, managers: managers, members: members, imageSrc: imageSrc});
	}

	for (const head of heads) {
		let member = memberMap.get(head.member);
		let memberName = member.name + " " + member.last_name;
		let memberImageSrc = "/People/members/"+memberName.replace(/ /g, "_").replace("'","").toLowerCase()+".png";
		let memberProps: TeamMemberProps = {
			name: memberName,
			imageSrc: memberImageSrc,
		}
		console.log(head.team)
		teamMap.get(head.team).managers.push(memberProps);
	}

	const teamProps: TeamProps[] = [];
	for (const [key, value] of teamMap) {
		teamProps.push(value);
	}
	return teamProps;
}

export async function fetchBoard() {
	const directus = createDirectus(API_URL).with(rest());
	const last_board = await directus.request(
		readItems('board', {
			"limit": 1,
			"sort": "-year",
		})
	);
	const last_year = last_board[0].year;
	const boards = await directus.request(
		readItems('board', {
			"limit": IMPORT_LIMIT,
			"filter": { "year": { _eq: last_year } },
		})
	);
	const members = await directus.request(
		readItems('member', {
			"limit": IMPORT_LIMIT,
		})
	);

	const memberMap = new Map();
	for (const member of members) {
		memberMap.set(member.id, member);
	}

	const boardProps: BoardMemberProps[] = [];
	for (let i = boards.length - 1; i >= 0; i--) {
		const board = boards[i];
		let member = memberMap.get(board.member);
		let name = member.name + " " + member.last_name;
		let role = board.role;
		let imageSrc = "/People/members/"+name.replace(/ /g, "_").replace("'","").toLowerCase()+".png";
		boardProps.push({name: name, role: role, imageSrc: imageSrc, roleDescription:""});
	}

	return boardProps;
}

export async function fetchPastBoards() {
	const directus = createDirectus(API_URL).with(rest());
	const boards = await directus.request(
		readItems('board', {
			"limit": IMPORT_LIMIT,
			"sort": "-year",
		})
	);
	const members = await directus.request(
		readItems('member', {
			"limit": IMPORT_LIMIT,
		})
	);

	const memberMap = new Map();
	for (const member of members) {
		memberMap.set(member.id, member);
	}

	const boardMap = new Map();
	for (const board of boards) {
		let year = board.year;
		let member = memberMap.get(board.member);
		let name = member.name + " " + member.last_name;
		let role = board.role;
		let imageSrc = "/People/members/"+name.replace(/ /g, "_").replace("'","").toLowerCase()+".png";
		if (!boardMap.has(year)) {
			boardMap.set(year, []);
		}
		boardMap.get(year).push({name: name, role: role, imageSrc: imageSrc});
	}

	const boardProps: PastBoardProps[] = [];
	for (const [key, value] of boardMap) {
		boardProps.push({year: key, members: value});
	}

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
		let name = professional.name + " " + professional.last_name;
		let imageSrc = "/People/professionals/"+name.replace(/ /g, "_").replace("'","").toLowerCase()+".png";
		console.log(imageSrc);
		professionalProps.push({name: name, imageSrc: imageSrc});
	}

	return professionalProps;
}