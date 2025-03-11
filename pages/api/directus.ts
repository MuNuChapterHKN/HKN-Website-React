import { createDirectus, rest, readAssetArrayBuffer, readItem, readFile, readProviders, staticToken } from '@directus/sdk';


const getMemberImage = async (teamId: number = 1) => {
	const client = createDirectus('https://hknpolito.org/directus/').with(rest());
	//console.log(client);
	
	const told = await client.request(readItem('team', teamId, {
		fields: ['*.*']
	}));
	const stream = await client.request(readAssetArrayBuffer(told.image.id));

    return new ImageData(stream, told.image.width, told.image.height);

	//try{
	//	const result = await client.request(readItems('team', {
	//		fields: ['*.*'],
	//		//deep: {
	//		//	members: {
	//		//		_filter: {
	//		//			alumno: {
	//		//				_eq: false
	//		//			}
	//		//		}
	//		//	}
	//		//}
	//	}));
	//	//console.log(result);
	//	for (it of result) {
	//		console.log(it);
	//		it.members.forEach(async (it2)=> {
	//			console.log(it2)
	//			const stream = await client.request(readAssetArrayBuffer(it2.image));
	//			console.log(stream);
	//			//const img = Uint8Array.from(stream);
	//			//console.log(img);

	//		});
	//	}
	//} catch(e) {
	//	console.log('Got exeptions at readItem')
	//	console.log(e);
	//}
	//try{
	//	const result = await client.request(readFile('bc90e3dd-ee54-453b-a602-61959dc63e8e'));
	//	console.log(result);
	//} catch(e) {
	//	console.log('Got exeptions at readFile')
	//	console.log(e);
	//}
}
