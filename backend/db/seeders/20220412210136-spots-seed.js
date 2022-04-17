"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Spots",
			[
				{
					ownerId: 6,
					name: "Guanella Pass Campground",
					address: "",
					city: "Bailey",
					lat: 39.611617,
					long: -105.718656,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/michael-guite-1o41Wy3Z3kc-unsplash.jpg",
					type: "tent",
					price: 35,
					description:
						"Molestiae nostrum odio explicabo possimus consequatur voluptas quia. Sit totam nam voluptate placeat ea nemo aut reiciendis. Fugit quia velit sed quis.",
					capacity: 5,
					open: true,
				},
				{
					ownerId: 22,
					name: "Clear Lake Campground",
					address: "",
					city: "Idaho Springs",
					lat: 39.653649,
					long: -105.708646,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/Yampa-River_LaurynWachs.jpeg",
					type: "rv",
					price: 32,
					description:
						"Perferendis ea fuga veritatis et nisi maiores exercitationem autem itaque. Placeat a architecto voluptas perspiciatis vel voluptatibus. Officia dolores numquam. Quis id non cumque ut distinctio quaerat hic. Non earum inventore magnam corrupti exercitationem aperiam.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 23,
					name: "Echo Lake Campground",
					address: "",
					city: "Evergreen",
					lat: 39.662328,
					long: -105.595553,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg",
					type: "vehicle",
					price: 26,
					description:
						"Vitae totam molestiae et. Sint in ut facere. Laudantium minima harum architecto dolorem nihil maiores dolor odit.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 11,
					name: "Buffalo Creek Campground",
					address: "",
					city: "Pine",
					lat: 39.367691,
					long: -105.332681,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/natural-wonder-colorado-trappers-lake-1440x960.jpeg",
					type: "vehicle",
					price: 55,
					description:
						"Asperiores non omnis. Tempora aliquam eum esse mollitia et. Enim a voluptatibus inventore ad culpa tenetur perferendis autem. Vitae consequatur quia aut et ut dolorem sint consequatur nisi. Ad porro illo eum.",
					capacity: 7,
					open: true,
				},
				{
					ownerId: 10,
					name: "Geneva Park Campground",
					address: "",
					city: "Dillon",
					lat: 39.537705,
					long: -105.733472,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/2607013389940-e1496544310584.jpeg",
					type: "rv",
					price: 8,
					description:
						"Repellat dolorem eos ipsa blanditiis. Porro nulla eum animi temporibus et eius. Sed ullam dolorem dolor delectus distinctio consequuntur ut. Nihil ut vel. Minus amet earum deserunt ipsa id.",
					capacity: 8,
					open: false,
				},
				{
					ownerId: 6,
					name: "Pawnee Campground",
					address: "",
					city: "Ward",
					lat: 40.087755,
					long: -105.571472,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/sara-moezzi-OPzoMjIyBOo-unsplash.jpg",
					type: "rv",
					price: 45,
					description:
						"Velit et voluptas deserunt neque esse. Dicta repellendus velit saepe consectetur error consectetur quisquam laborum. Voluptas eius delectus esse mollitia rerum error. Pariatur nam vero ut ducimus quia perferendis saepe similique tenetur. Voluptatum aut alias sapiente.",
					capacity: 7,
					open: false,
				},
				{
					ownerId: 4,
					name: "Bogan Flats Campground",
					address: "",
					city: "Carbondale",
					lat: 39.105834,
					long: -107.267646,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/w5bx4klr-2-e1615214483265.jpeg",
					type: "tent",
					price: 87,
					description:
						"Numquam quis sed aliquid. Qui rerum sed. Deleniti officiis iste et expedita enim et non officiis. Sit et blanditiis totam. Impedit vitae qui. Ut est expedita ex et maxime quo tenetur.",
					capacity: 5,
					open: false,
				},
				{
					ownerId: 3,
					name: "South Fork Campground",
					address: "",
					city: "South Fork",
					lat: 37.693618,
					long: -106.569404,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/michael-guite-1o41Wy3Z3kc-unsplash.jpg",
					type: "rv",
					price: 77,
					description:
						"Non ex dolorem consequuntur ut unde ratione. Amet repellendus quaerat rerum ab nobis et. Ut pariatur praesentium nostrum deserunt suscipit sint qui. Deleniti et voluptas. Pariatur minus esse sunt dolores iusto et reiciendis necessitatibus adipisci. In illum illum quo eaque unde modi beatae aut culpa.",
					capacity: 5,
					open: true,
				},
				{
					ownerId: 1,
					name: "Red Bridge Campground",
					address: "2258 Blue Mesa Rd",
					city: "Powderhorn",
					lat: 38.339811,
					long: -107.226687,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg",
					type: "vehicle",
					price: 1,
					description:
						"Excepturi et quia eaque. Numquam facere corporis totam id. Repellendus ipsa et blanditiis ipsa sint. Voluptatem provident fugit. Nostrum expedita mollitia cumque molestias.",
					capacity: 6,
					open: true,
				},
				{
					ownerId: 18,
					name: "Lake Fork Campground",
					address: "",
					city: "Gunnison",
					lat: 38.466541,
					long: -107.32351,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/pmx070118summercamping-005-1529681336.jpeg",
					type: "rv",
					price: 25,
					description:
						"Voluptates eveniet est. Nesciunt dolores unde consequatur officiis vitae illum praesentium eligendi quia. Ratione mollitia eveniet ea consectetur animi ut voluptatibus reiciendis. Voluptatem fuga voluptas tempore et eum eius veniam. Quae cumque provident eos perferendis enim natus.",
					capacity: 7,
					open: false,
				},
				{
					ownerId: 24,
					name: "Buffalo Pass Campground",
					address: "",
					city: "Saguache",
					lat: 38.189957,
					long: -106.515939,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/pavel-brodsky-IMPs8FtEyHc-unsplash.jpg",
					type: "rv",
					price: 84,
					description:
						"Qui suscipit rerum aliquam earum quae consectetur fugiat quisquam itaque. Vel quibusdam alias quo error. Saepe voluptatem sit laudantium modi ratione hic consequuntur tempora tenetur. Sint odit nihil architecto quia voluptas qui quibusdam.",
					capacity: 5,
					open: true,
				},
				{
					ownerId: 5,
					name: "Storm King Campground",
					address: "",
					city: "Del Norte",
					lat: 37.962576,
					long: -106.427481,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/natural-wonder-colorado-trappers-lake-1440x960.jpeg",
					type: "tent",
					price: 62,
					description:
						"Quisquam sint in qui est quo. Commodi et fugit. Reprehenderit dolores est delectus quam. Cumque repudiandae dicta non harum esse maiores. Dicta consequatur velit soluta impedit provident vel voluptatem veritatis.",
					capacity: 5,
					open: true,
				},
				{
					ownerId: 16,
					name: "Alamosa Campground",
					address: "",
					city: "La Jara",
					lat: 37.384788,
					long: -106.341346,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/Lupnies.jpeg",
					type: "rv",
					price: 30,
					description:
						"Vitae nemo rerum rerum iusto iusto. Voluptatem vel repellat impedit aspernatur qui sed. Corrupti rerum ut aut nihil. Pariatur excepturi aliquid omnis qui.",
					capacity: 5,
					open: true,
				},
				{
					ownerId: 11,
					name: "Zapata Falls Campground",
					address: "",
					city: "Mosca",
					lat: 37.625677,
					long: -105.560244,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/kevin-ianeselli-ebnlHkqfUHY-unsplash.jpg",
					type: "rv",
					price: 37,
					description:
						"Inventore eum ipsam quia similique. Accusantium hic vero. Voluptate non expedita quas error ut ipsa sed.",
					capacity: 6,
					open: false,
				},
				{
					ownerId: 16,
					name: "Great Sand Dunes Oasis",
					address: "",
					city: "Mosca",
					lat: 37.697591,
					long: -105.547759,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/2607013389940-e1496544310584.jpeg",
					type: "rv",
					price: 59,
					description:
						"Quos cupiditate doloribus nisi quo natus aspernatur pariatur. Et id enim quia ea enim provident excepturi. Blanditiis id error voluptas expedita. Sunt cupiditate provident qui molestiae nobis dolores quia. Eum est mollitia enim cupiditate ut est aut amet sit.",
					capacity: 6,
					open: true,
				},
				{
					ownerId: 5,
					name: "Picture Canyon",
					address: "",
					city: "Campo",
					lat: 37.010883,
					long: -102.744805,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/camping-in-colorado.jpeg",
					type: "rv",
					price: 81,
					description:
						"Voluptates sit quo provident sint non est qui sint inventore. Perferendis voluptatem similique doloribus ut est deserunt non occaecati amet. Id eveniet ipsum nihil quos eveniet. Voluptas cupiditate impedit enim iusto sequi nesciunt vel sunt.",
					capacity: 7,
					open: true,
				},
				{
					ownerId: 17,
					name: "Genoa RV Park",
					address: "205 5th St",
					city: "Genoa",
					lat: 39.298739,
					long: -103.494084,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/Lupnies.jpeg",
					type: "tent",
					price: 36,
					description:
						"Quae unde tempora rerum dolorem ut nisi. Assumenda fugiat ut fugiat velit eos error. Est sint repudiandae ea esse alias vitae. Consequuntur incidunt sit et eveniet voluptatem numquam laborum.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 15,
					name: "Akron RV Park",
					address: "65 Gum Ave",
					city: "Akron",
					lat: 40.179456,
					long: -103.205293,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/rockymountain.jpeg",
					type: "rv",
					price: 82,
					description:
						"Id neque labore sed omnis sed aut sed et. Aut eaque suscipit ut. Hic deleniti pariatur blanditiis.",
					capacity: 5,
					open: false,
				},
				{
					ownerId: 8,
					name: "Estes Park Campground",
					address: "2120 Marys Lake Rd",
					city: "Estes Park",
					lat: 40.349491,
					long: -105.532908,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/luca-baggio-GKLIsLZxhj0-unsplash.jpg",
					type: "rv",
					price: 66,
					description:
						"Qui iusto nulla non quasi. Unde facere inventore debitis magni numquam sapiente aspernatur quae. Deserunt alias repudiandae quaerat minima sit. Ducimus aut dolore saepe eligendi ullam assumenda. Perferendis sed fuga quia ut at provident sit. Molestiae aut natus nihil velit voluptate ut suscipit et.",
					capacity: 6,
					open: true,
				},
				{
					ownerId: 14,
					name: "Aspen Glen Campground",
					address: "",
					city: "Estes Park",
					lat: 40.400519,
					long: -105.592699,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/kevin-ianeselli-ebnlHkqfUHY-unsplash.jpg",
					type: "tent",
					price: 20,
					description:
						"Vel nemo non aut itaque nobis. Consequatur asperiores dignissimos aut autem corporis rerum. Non velit quibusdam earum autem aut iure at. Consequatur voluptas necessitatibus corrupti. Ut corporis occaecati harum perspiciatis tenetur. Ut at molestias et blanditiis quia est sit.",
					capacity: 5,
					open: false,
				},
				{
					ownerId: 10,
					name: "Pinewood Reservoir Campground",
					address: "",
					city: "Loveland",
					lat: 40.365012,
					long: -105.28196,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/vail-1732961_960_720.jpeg",
					type: "rv",
					price: 99,
					description:
						"Ex necessitatibus nihil. Harum unde facere. Quis voluptatum quia ab. Dolores consequatur amet quidem. Id sunt exercitationem reprehenderit consectetur est.",
					capacity: 8,
					open: false,
				},
				{
					ownerId: 10,
					name: "Arapaho Bay Campground",
					address: "77 Arapaho Bay Rd",
					city: "Granby",
					lat: 40.131326,
					long: -105.768782,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/kenneth-gaerlan-FKAANdTWen0-unsplash.jpg",
					type: "vehicle",
					price: 58,
					description:
						"Molestias sint magni mollitia quia beatae aut. Rerum doloribus animi aliquid sint. Quia nesciunt minus at aut labore laboriosam ut voluptate ipsum. In labore est omnis enim excepturi modi.",
					capacity: 5,
					open: false,
				},
				{
					ownerId: 21,
					name: "Moraine Park Campground",
					address: "",
					city: "Estes Park",
					lat: 40.362349,
					long: -105.604769,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/campsiteislandlg.jpeg",
					type: "vehicle",
					price: 16,
					description:
						"Accusantium natus modi dolores vel eum rerum maxime et. Aut sed vel adipisci qui commodi amet. Magni et sit beatae est vitae ex. Similique dolorum placeat doloremque dolorem.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 23,
					name: "Grizzly Creek Campground",
					address: "",
					city: "Coalmont",
					lat: 40.569543,
					long: -106.600919,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/photo-1600683575273-39de9491d8a3.jpeg",
					type: "vehicle",
					price: 46,
					description:
						"Est recusandae cupiditate mollitia perspiciatis vero incidunt deserunt nam. Id voluptatem et et et in animi qui cumque. Quas libero eos ea eaque. Eveniet similique praesentium.",
					capacity: 7,
					open: false,
				},
				{
					ownerId: 19,
					name: "Dry Lake Campground",
					address: "",
					city: "Steamboat Springs",
					lat: 40.549326,
					long: -106.780176,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/pexels-photo-618848.jpeg",
					type: "tent",
					price: 19,
					description:
						"Cumque quo rerum rerum atque. Magnam doloremque atque nihil. Adipisci voluptates neque.",
					capacity: 6,
					open: false,
				},
				{
					ownerId: 2,
					name: "Hinman Park Campground",
					address: "",
					city: "Clark",
					lat: 40.753386,
					long: -106.83296,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/dave-hoefler-a3e7yEtQxJs-unsplash.jpg",
					type: "tent",
					price: 77,
					description:
						"Ducimus quam sed. Rerum eos excepturi laboriosam ut. Ipsa vero amet corporis minima provident totam qui. A et ducimus.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 3,
					name: "North Fork Campground",
					address: "",
					city: "Meeker",
					lat: 40.080072,
					long: -107.434558,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/photo-1600683575273-39de9491d8a3.jpeg",
					type: "tent",
					price: 50,
					description:
						"Unde iusto est est quis. Ipsum dolorem voluptate rerum. Distinctio qui itaque.",
					capacity: 6,
					open: false,
				},
				{
					ownerId: 9,
					name: "Big Joe Camp",
					address: "",
					city: "Maybell",
					lat: 40.551325,
					long: -108.810851,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/Lupnies.jpeg",
					type: "vehicle",
					price: 24,
					description:
						"Consectetur possimus quibusdam sit ex. Sint laboriosam itaque cum ut. Fugiat asperiores ipsa odio vel et. Voluptate ex sapiente doloremque deleniti dolore nemo illum culpa. Fuga necessitatibus debitis dolor ad. Quas ex doloremque consectetur recusandae excepturi fuga quos odio.",
					capacity: 7,
					open: true,
				},
				{
					ownerId: 8,
					name: "Saddlehorn Campground",
					address: "",
					city: "Grand Junction",
					lat: 39.113051,
					long: -108.727335,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/natural-wonder-colorado-trappers-lake-1440x960.jpeg",
					type: "tent",
					price: 76,
					description:
						"Odio consequuntur ex quos quo autem dicta voluptatum occaecati. Perferendis sapiente et quisquam placeat. Deleniti nesciunt vitae qui eaque.",
					capacity: 7,
					open: true,
				},
				{
					ownerId: 18,
					name: "Ute Campground",
					address: "",
					city: "Pagosa Springs",
					lat: 37.220513,
					long: -107.266577,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/everett-mcintire-BPCsppbNRMI-unsplash.jpg",
					type: "rv",
					price: 69,
					description:
						"Omnis voluptate dolore quod dignissimos dolorum assumenda consectetur. Qui fugit architecto cupiditate aperiam. Ipsum ut autem ea.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 2,
					name: "Graham Creek Campground",
					address: "",
					city: "Vallecito",
					lat: 37.394108,
					long: -107.538176,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/Lupnies.jpeg",
					type: "rv",
					price: 56,
					description:
						"Facere incidunt suscipit aliquid ab et aut. Natus ut eos. In eveniet et voluptas unde unde autem eaque. Esse inventore eos. Voluptas eum quaerat culpa.",
					capacity: 7,
					open: true,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Spots", null, {});
	},
};
