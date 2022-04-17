// const faker = require("faker");
// const bcrypt = require("bcryptjs");

// const randomNum = (max) => Math.ceil(Math.random() * max);
// const randomNumFloor = (max) => Math.floor(Math.random() * max);

// const spotNames = [
// 	{
// 		name: "Guanella Pass Campground",
// 		address: "",
// 		city: "Bailey",
// 		lat: 39.611617,
// 		long: -105.718656,
// 	},
// 	{
// 		name: "Clear Lake Campground",
// 		address: "",
// 		city: "Idaho Springs",
// 		lat: 39.653649,
// 		long: -105.708646,
// 	},
// 	{
// 		name: "Echo Lake Campground",
// 		address: "",
// 		city: "Evergreen",
// 		lat: 39.662328,
// 		long: -105.595553,
// 	},
// 	{
// 		name: "Buffalo Creek Campground",
// 		address: "",
// 		city: "Pine",
// 		lat: 39.367691,
// 		long: -105.332681,
// 	},
// 	{
// 		name: "Geneva Park Campground",
// 		address: "",
// 		city: "Dillon",
// 		lat: 39.537705,
// 		long: -105.733472,
// 	},
// 	{
// 		name: "Pawnee Campground",
// 		address: "",
// 		city: "Ward",
// 		lat: 40.087755,
// 		long: -105.571472,
// 	},
// 	{
// 		name: "Bogan Flats Campground",
// 		address: "",
// 		city: "Carbondale",
// 		lat: 39.105834,
// 		long: -107.267646,
// 	},
// 	{
// 		name: "South Fork Campground",
// 		address: "",
// 		city: "South Fork",
// 		lat: 37.693618,
// 		long: -106.569404,
// 	},
// 	{
// 		name: "Red Bridge Campground",
// 		address: "2258 Blue Mesa Rd",
// 		city: "Powderhorn",
// 		lat: 38.339811,
// 		long: -107.226687,
// 	},
// 	{
// 		name: "Lake Fork Campground",
// 		address: "",
// 		city: "Gunnison",
// 		lat: 38.466541,
// 		long: -107.32351,
// 	},
// 	{
// 		name: "Buffalo Pass Campground",
// 		address: "",
// 		city: "Saguache",
// 		lat: 38.189957,
// 		long: -106.515939,
// 	},
// 	{
// 		name: "Storm King Campground",
// 		address: "",
// 		city: "Del Norte",
// 		lat: 37.962576,
// 		long: -106.427481,
// 	},
// 	{
// 		name: "Alamosa Campground",
// 		address: "",
// 		city: "La Jara",
// 		lat: 37.384788,
// 		long: -106.341346,
// 	},
// 	{
// 		name: "Zapata Falls Campground",
// 		address: "",
// 		city: "Mosca",
// 		lat: 37.625677,
// 		long: -105.560244,
// 	},
// 	{
// 		name: "Great Sand Dunes Oasis",
// 		address: "",
// 		city: "Mosca",
// 		lat: 37.697591,
// 		long: -105.547759,
// 	},
// 	{
// 		name: "Picture Canyon",
// 		address: "",
// 		city: "Campo",
// 		lat: 37.010883,
// 		long: -102.744805,
// 	},
// 	{
// 		name: "Genoa RV Park",
// 		address: "205 5th St",
// 		city: "Genoa",
// 		lat: 39.298739,
// 		long: -103.494084,
// 	},
// 	{
// 		name: "Akron RV Park",
// 		address: "65 Gum Ave",
// 		city: "Akron",
// 		lat: 40.179456,
// 		long: -103.205293,
// 	},
// 	{
// 		name: "Estes Park Campground",
// 		address: "2120 Marys Lake Rd",
// 		city: "Estes Park",
// 		lat: 40.349491,
// 		long: -105.532908,
// 	},
// 	{
// 		name: "Aspen Glen Campground",
// 		address: "",
// 		city: "Estes Park",
// 		lat: 40.400519,
// 		long: -105.592699,
// 	},
// 	{
// 		name: "Pinewood Reservoir Campground",
// 		address: "",
// 		city: "Loveland",
// 		lat: 40.365012,
// 		long: -105.28196,
// 	},
// 	{
// 		name: "Arapaho Bay Campground",
// 		address: "77 Arapaho Bay Rd",
// 		city: "Granby",
// 		lat: 40.131326,
// 		long: -105.768782,
// 	},
// 	{
// 		name: "Moraine Park Campground",
// 		address: "",
// 		city: "Estes Park",
// 		lat: 40.362349,
// 		long: -105.604769,
// 	},
// 	{
// 		name: "Grizzly Creek Campground",
// 		address: "",
// 		city: "Coalmont",
// 		lat: 40.569543,
// 		long: -106.600919,
// 	},
// 	{
// 		name: "Dry Lake Campground",
// 		address: "",
// 		city: "Steamboat Springs",
// 		lat: 40.549326,
// 		long: -106.780176,
// 	},
// 	{
// 		name: "Hinman Park Campground",
// 		address: "",
// 		city: "Clark",
// 		lat: 40.753386,
// 		long: -106.83296,
// 	},
// 	{
// 		name: "North Fork Campground",
// 		address: "",
// 		city: "Meeker",
// 		lat: 40.080072,
// 		long: -107.434558,
// 	},
// 	{
// 		name: "Big Joe Camp",
// 		address: "",
// 		city: "Maybell",
// 		lat: 40.551325,
// 		long: -108.810851,
// 	},
// 	{
// 		name: "Saddlehorn Campground",
// 		address: "",
// 		city: "Grand Junction",
// 		lat: 39.113051,
// 		long: -108.727335,
// 	},
// 	{
// 		name: "Ute Campground",
// 		address: "",
// 		city: "Pagosa Springs",
// 		lat: 37.220513,
// 		long: -107.266577,
// 	},
// 	{
// 		name: "Graham Creek Campground",
// 		address: "",
// 		city: "Vallecito",
// 		lat: 37.394108,
// 		long: -107.538176,
// 	},
// 	{
// 		name: "Sunshine Campground",
// 		address: "7676 CO-145",
// 		city: "Telluride",
// 		lat: 37.892405,
// 		long: -107.886811,
// 	},
// ];

// const tf = [true, true, true, false];

// const types = ["vehicle", "rv", "tent", "backpacking"];

// const images = [
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed1.jpeg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed2.jpg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed3.jpg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed4.jpg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed5.jpg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed6.jpeg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed7.jpeg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed8.jpg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed9.jpg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed10.jpg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed11.jpg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed12.jpg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed13.jpg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed14.jpg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed15.jpg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed16.jpg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed17.jpeg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed18.jpeg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed19.jpg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed20.jpg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed21.jpeg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed22.jpeg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed23.jpeg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed24.jpeg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed25.jpeg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed26.jpg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed27.jpeg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed28.jpeg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed29.jpeg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed30.jpeg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed31.jpeg",
// 	"https://campbnb.s3.us-west-1.amazonaws.com/seed32.jpeg",
// ];

// const spotFakerSeed = (num) => {
// 	let i = 0;

// 	while (i < num) {
// 		const spot = {
// 			ownerId: randomNum(30),
// 			name: faker.lorem.sentence(),
// 			address: randomAddresses[i].address,
// 			city: randomAddresses[i].city,
// 			lat: null,
// 			long: null,
// 			imageUrl: images[randomNumFloor(38)],
// 			type: types[randomNumFloor(3)],
// 			price: randomNum(100),
// 			description: faker.lorem.paragraph(),
// 			capacity: 4 + randomNum(4),
// 			open: tf[randomNumFloor(2)],
// 		};

// 		console.log(spot, ",");
// 		i++;
// 	}
// };
// spotFakerSeed(20);
// const spotSeed = (num) => {
// 	let i = 0;

// 	while (i < num) {
// 		const spot = {
// 			ownerId: randomNum(25),
// 			name: spotNames[i].name,
// 			address: spotNames[i].address,
// 			city: spotNames[i].city,
// 			lat: spotNames[i].lat,
// 			long: spotNames[i].long,
// 			imageUrl: images[i],
// 			type: types[randomNumFloor(3)],
// 			price: randomNum(100),
// 			description: faker.lorem.paragraphs(10),
// 			capacity: 4 + randomNum(4),
// 			open: tf[randomNumFloor(4)],
// 		};

// 		console.log(spot, ",");
// 		i++;
// 	}
// };

// spotSeed(31);

// const bookingSeed = (num) => {
// 	let i = 0;
// 	const booked = {};
// 	while (i < num) {
// 		const start = faker.date.between("2021-01-01", "2023-12-31");
// 		const end = new Date(
// 			new Date(start).setDate(start.getDate() + 1 + randomNum(4))
// 		);

// 		const allDates = [];
// 		let tempStart = new Date(start);
// 		let tempEnd = new Date(end);

// 		while (tempStart <= tempEnd) {
// 			allDates.push(new Date(tempStart));
// 			tempStart.setDate(tempStart.getDate() + 1);
// 		}

// 		const spotId = randomNum(31);

// 		if (booked[spotId]) {
// 			if (
// 				booked[spotId].includes(start) ||
// 				booked[spotId].includes(end)
// 			) {
// 				continue;
// 			}
// 			booked[spotId].concat(allDates);
// 		} else {
// 			booked[spotId] = [...allDates];
// 		}

// 		const booking = {
// 			spotId: spotId,
// 			userId: randomNum(30),
// 			startDate: start,
// 			endDate: end,
// 			people: 1 + randomNum(3),
// 		};

// 		console.log(booking, ",");
// 		i++;
// 	}
// };
// bookingSeed(50);
// const day = faker.date.between("2022-01-01", "2023-12-31");
// const day2 = new Date(new Date(day).setDate(day.getDate() + 3));
// console.log("day", day, "day + 1", day2);

// const userSeed = (max) => {
// 	let i = 0;
// 	while (i < max) {
// 		const user = {
// 			firstName: faker.name.firstName(),
// 			lastName: faker.name.lastName(),
// 			email: faker.internet.email(),
// 			hashedPassword: bcrypt.hashSync(faker.internet.password()),
// 		};

// 		console.log(user, ",");
// 		i++;
// 	}
// };

// userSeed(29);
