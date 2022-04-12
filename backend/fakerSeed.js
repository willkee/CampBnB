const faker = require("faker");

const randomNum = (max) => Math.ceil(Math.random() * max);
const randomNumFloor = (max) => Math.floor(Math.random() * max);

const spotNames = [
	{
		name: "Guanella Pass Campground\n",
		address: "",
		city: "Bailey",
		lat: 39.611617,
		long: -105.718656,
	},
	{
		name: "Clear Lake Campground",
		address: "",
		city: "Idaho Springs",
		lat: 39.653649,
		long: -105.708646,
	},
	{
		name: "Echo Lake Campground",
		address: "",
		city: "Evergreen",
		lat: 39.662328,
		long: -105.595553,
	},
	{
		name: "Buffalo Creek Campground",
		address: "",
		city: "Pine",
		lat: 39.367691,
		long: -105.332681,
	},
	{
		name: "Geneva Park Campground",
		address: "",
		city: "Dillon",
		lat: 39.537705,
		long: -105.733472,
	},
	{
		name: "Pawnee Campground",
		address: "",
		city: "Ward",
		lat: 40.087755,
		long: -105.571472,
	},
	{
		name: "Bogan Flats Campground",
		address: "",
		city: "Carbondale",
		lat: 39.105834,
		long: -107.267646,
	},
	{
		name: "South Fork Campground",
		address: "",
		city: "South Fork",
		lat: 37.693618,
		long: -106.569404,
	},
	{
		name: "Red Bridge Campground",
		address: "2258 Blue Mesa Rd",
		city: "Powderhorn",
		lat: 38.339811,
		long: -107.226687,
	},
	{
		name: "Lake Fork Campground",
		address: "",
		city: "Gunnison",
		lat: 38.466541,
		long: -107.32351,
	},
	{
		name: "Buffalo Pass Campground",
		address: "",
		city: "Saguache",
		lat: 38.189957,
		long: -106.515939,
	},
	{
		name: "Storm King Campground",
		address: "",
		city: "Del Norte",
		lat: 37.962576,
		long: -106.427481,
	},
	{
		name: "Alamosa Campground",
		address: "",
		city: "La Jara",
		lat: 37.384788,
		long: -106.341346,
	},
	{
		name: "Zapata Falls Campground",
		address: "",
		city: "Mosca",
		lat: 37.625677,
		long: -105.560244,
	},
	{
		name: "Great Sand Dunes Oasis",
		address: "",
		city: "Mosca",
		lat: 37.697591,
		long: -105.547759,
	},
	{
		name: "Picture Canyon",
		address: "",
		city: "Campo",
		lat: 37.010883,
		long: -102.744805,
	},
	{
		name: "Genoa RV Park",
		address: "205 5th St",
		city: "Genoa",
		lat: 39.298739,
		long: -103.494084,
	},
	{
		name: "Akron RV Park",
		address: "65 Gum Ave",
		city: "Akron",
		lat: 40.179456,
		long: -103.205293,
	},
	{
		name: "Estes Park Campground",
		address: "2120 Marys Lake Rd",
		city: "Estes Park",
		lat: 40.349491,
		long: -105.532908,
	},
	{
		name: "Aspen Glen Campground",
		address: "",
		city: "Estes Park",
		lat: 40.400519,
		long: -105.592699,
	},
	{
		name: "Pinewood Reservoir Campground",
		address: "",
		city: "Loveland",
		lat: 40.365012,
		long: -105.28196,
	},
	{
		name: "Arapaho Bay Campground",
		address: "77 Arapaho Bay Rd",
		city: "Granby",
		lat: 40.131326,
		long: -105.768782,
	},
	{
		name: "Moraine Park Campground",
		address: "",
		city: "Estes Park",
		lat: 40.362349,
		long: -105.604769,
	},
	{
		name: "Grizzly Creek Campground",
		address: "",
		city: "Coalmont",
		lat: 40.569543,
		long: -106.600919,
	},
	{
		name: "Dry Lake Campground",
		address: "",
		city: "Steamboat Springs",
		lat: 40.549326,
		long: -106.780176,
	},
	{
		name: "Hinman Park Campground",
		address: "",
		city: "Clark",
		lat: 40.753386,
		long: -106.83296,
	},
	{
		name: "North Fork Campground",
		address: "",
		city: "Meeker",
		lat: 40.080072,
		long: -107.434558,
	},
	{
		name: "Big Joe Camp",
		address: "",
		city: "Maybell",
		lat: 40.551325,
		long: -108.810851,
	},
	{
		name: "Saddlehorn Campground",
		address: "",
		city: "Grand Junction",
		lat: 39.113051,
		long: -108.727335,
	},
	{
		name: "Ute Campground",
		address: "",
		city: "Pagosa Springs",
		lat: 37.220513,
		long: -107.266577,
	},
	{
		name: "Graham Creek Campground",
		address: "",
		city: "Vallecito",
		lat: 37.394108,
		long: -107.538176,
	},
	{
		name: "Sunshine Campground",
		address: "7676 CO-145",
		city: "Telluride",
		lat: 37.892405,
		long: -107.886811,
	},
];

const tf = [true, false];

const types = ["vehicle", "rv", "tent", "backpacking"];

const images = [
	"https://cdn.pixabay.com/photo/2021/10/09/00/15/landscape-6692712_960_720.jpg",
	"https://cdn.pixabay.com/photo/2020/06/14/17/57/mountains-5298769_960_720.jpg",
	"https://cdn.pixabay.com/photo/2016/07/01/07/51/tent-1490599_960_720.jpg",
	"https://cdn.pixabay.com/photo/2020/07/27/14/34/forest-5442598_960_720.jpg",
	"https://cdn.pixabay.com/photo/2020/07/27/02/09/tent-5441144_960_720.jpg",
	"https://cdn.pixabay.com/photo/2018/12/24/22/19/camping-3893587_960_720.jpg",
	"https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022_960_720.jpg",
	"https://cdn.pixabay.com/photo/2016/11/21/16/03/campfire-1846142_960_720.jpg",
	"https://cdn.pixabay.com/photo/2017/08/17/08/08/camp-2650359_960_720.jpg",
	"https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970_960_720.jpg",
	"https://cdn.pixabay.com/photo/2015/08/19/16/00/campfire-896196_960_720.jpg",
	"https://cdn.pixabay.com/photo/2016/03/30/02/57/camping-1289930_960_720.jpg",
	"https://cdn.pixabay.com/photo/2016/01/26/23/32/camp-1163419_960_720.jpg",
	"https://cdn.pixabay.com/photo/2017/06/17/03/17/gongga-snow-mountain-2411069_960_720.jpg",
	"https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg",
	"https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg",
	"https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg",
	"https://images.pexels.com/photos/11795851/pexels-photo-11795851.jpeg",
	"https://images.pexels.com/photos/11775761/pexels-photo-11775761.jpeg",
	"https://images.pexels.com/photos/753299/pexels-photo-753299.jpeg",
];

const spotSeed = (num) => {
	let i = 0;

	while (i < num) {
		const spot = {
			ownerId: randomNum(25),
			name: spotNames[i].name,
			address: spotNames[i].address,
			city: spotNames[i].city,
			lat: spotNames[i].lat,
			long: spotNames[i].long,
			imageUrl: images[randomNumFloor(20)],
			type: types[randomNumFloor(3)],
			price: faker.finance.amount(0, 100, 2),
			description: faker.lorem.paragraph(),
			capacity: randomNum(6),
			open: tf[randomNumFloor(2)],
		};

		console.log(spot, ",");
		i++;
	}
};

// spotSeed(31);

const bookingSeed = (num) => {
	let i = 0;

	while (i < num) {
		const start = faker.date.between(
			"2022-01-01T00:00:00.000Z",
			"2022-04-10T00:00:00.000Z"
		);
		const end = faker.date.between(start, "2022-04-10T00:00:00.000Z");
		const booking = {
			spotId: randomNum(31),
			userId: randomNum(25),
			startDate: start,
			endDate: end,
			people: randomNum(4),
		};

		console.log(booking, ",");
		i++;
	}
};
bookingSeed(30);
