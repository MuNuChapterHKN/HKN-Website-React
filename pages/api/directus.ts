import StudyGroup, {StudyGroupProps} from "@/components/Events/StudyGroup";
import { BadgeType, Badge } from "@/components/People/Alumno";
import {AlumnoProps} from "@/pages/People/Alumni";
import { createDirectus, rest, readAssetArrayBuffer, readItems, readFile, readProviders, staticToken } from '@directus/sdk';


// const getMemberImage = async (teamId: number = 1) => {
// 	const client = createDirectus('https://hknpolito.org/directus/').with(rest());
// 	//console.log(client);
	
// 	const told = await client.request(readItem('team', teamId, {
// 		fields: ['*.*']
// 	}));
// 	const stream = await client.request(readAssetArrayBuffer(told.image.id));

//     return new ImageData(stream, told.image.width, told.image.height);

// 	//try{
// 	//	const result = await client.request(readItems('team', {
// 	//		fields: ['*.*'],
// 	//		//deep: {
// 	//		//	members: {
// 	//		//		_filter: {
// 	//		//			alumno: {
// 	//		//				_eq: false
// 	//		//			}
// 	//		//		}
// 	//		//	}
// 	//		//}
// 	//	}));
// 	//	//console.log(result);
// 	//	for (it of result) {
// 	//		console.log(it);
// 	//		it.members.forEach(async (it2)=> {
// 	//			console.log(it2)
// 	//			const stream = await client.request(readAssetArrayBuffer(it2.image));
// 	//			console.log(stream);
// 	//			//const img = Uint8Array.from(stream);
// 	//			//console.log(img);

// 	//		});
// 	//	}
// 	//} catch(e) {
// 	//	console.log('Got exeptions at readItem')
// 	//	console.log(e);
// 	//}
// 	//try{
// 	//	const result = await client.request(readFile('bc90e3dd-ee54-453b-a602-61959dc63e8e'));
// 	//	console.log(result);
// 	//} catch(e) {
// 	//	console.log('Got exeptions at readFile')
// 	//	console.log(e);
// 	//}
// }



export async function fetchActiveStudyGroups() {
	const directus = createDirectus('https://hknpolito.org/directus/').with(rest());
	const studyGroups = await directus.request(
		readItems('study_group', {
			"filter": { "active": { _eq: true } },
		})
	);
	return studyGroups as StudyGroupProps[];
}


export async function fetchAlumni() {
	const directus = createDirectus('https://hknpolito.org/directus/').with(rest());
	const alumni = await directus.request(
		readItems('member', {
			"filter": { "alumno": { _eq: true } },
			"limit": 500,
		})
	);
	const alumniProps: AlumnoProps[] = [];
	for (const alumnus of alumni) {
		console.log(alumnus);
		let name = alumnus.name + " " + alumnus.lastname;
		let imageSrc = "/People/members/"+alumnus.name.toLowerCase()+"_"+alumnus.lastname.toLowerCase()+".png";
		let badges: Badge[] = [];
		if (alumnus.board){
			badges.push({type: BadgeType.Board, year: alumnus.board.split(" - ")[1], role: alumnus.board.split(" - ")[0]});
		}
		if (alumnus.resp){
			badges.push({type: BadgeType.Head, year: alumnus.resp.split(" - ")[1], role: alumnus.resp.split(" - ")[0]});
		}
		if (alumnus.induction_date){
			badges.push({type: BadgeType.Inducted, year: alumnus.induction_date.split("-")[0]});
		}
		//console.log({name: name, imageSrc: imageSrc, badges: badges});
		alumniProps.push({name: name, imageSrc: imageSrc, badges: badges});
	}
	return alumniProps;
}
