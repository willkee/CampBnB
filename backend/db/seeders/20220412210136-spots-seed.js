"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Spots",
			[
				{
					ownerId: 25,
					name: "Guanella Pass Campground\n",
					address: "",
					city: "Bailey",
					lat: 39.611617,
					long: -105.718656,
					imageUrl:
						"https://images.pexels.com/photos/11795851/pexels-photo-11795851.jpeg",
					type: "tent",
					price: 14.59,
					description:
						"Eos cum et veniam nulla. Rerum nostrum alias quae architecto ut omnis quisquam vero. Harum nobis qui quia ipsam.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 5,
					name: "Clear Lake Campground",
					address: "",
					city: "Idaho Springs",
					lat: 39.653649,
					long: -105.708646,
					imageUrl:
						"https://cdn.pixabay.com/photo/2016/11/21/16/03/campfire-1846142_960_720.jpg",
					type: "rv",
					price: 39.43,
					description:
						"Autem voluptate aspernatur expedita debitis blanditiis ea accusamus deleniti. Sed accusamus sed dolor sed fuga quo odit veniam est. Et soluta ut dolorum velit optio commodi sed et. Ipsam perferendis in culpa optio libero itaque delectus consequatur voluptates. Rerum eum possimus quis.",
					capacity: 8,
					open: false,
				},
				{
					ownerId: 10,
					name: "Echo Lake Campground",
					address: "",
					city: "Evergreen",
					lat: 39.662328,
					long: -105.595553,
					imageUrl:
						"https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg",
					type: "rv",
					price: 72.14,
					description:
						"Reprehenderit eveniet ad est perspiciatis eveniet. Animi id ipsum dolores sunt saepe qui earum nobis. Dolore et facilis aut cum quo laudantium consequatur ex. Quam libero sapiente rem facilis nihil ducimus ipsam esse eum. Rerum consequatur laborum consequuntur possimus quisquam.",
					capacity: 8,
					open: false,
				},
				{
					ownerId: 19,
					name: "Buffalo Creek Campground",
					address: "",
					city: "Pine",
					lat: 39.367691,
					long: -105.332681,
					imageUrl:
						"https://cdn.pixabay.com/photo/2020/07/27/14/34/forest-5442598_960_720.jpg",
					type: "rv",
					price: 87.05,
					description:
						"Deleniti sint natus et eligendi nesciunt pariatur dolor dolor. Aut repudiandae esse molestias quo dicta beatae. Labore eius placeat facere maxime harum corrupti.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 14,
					name: "Geneva Park Campground",
					address: "",
					city: "Dillon",
					lat: 39.537705,
					long: -105.733472,
					imageUrl:
						"https://cdn.pixabay.com/photo/2017/08/17/08/08/camp-2650359_960_720.jpg",
					type: "vehicle",
					price: 24.86,
					description:
						"Eligendi veniam repellat vero sapiente iusto corporis dolorem sit qui. Aut est itaque id repellat ea sunt ea enim ea. Aut odio corrupti assumenda dolores eos labore. Ducimus ipsa nam.",
					capacity: 8,
					open: false,
				},
				{
					ownerId: 4,
					name: "Pawnee Campground",
					address: "",
					city: "Ward",
					lat: 40.087755,
					long: -105.571472,
					imageUrl:
						"https://cdn.pixabay.com/photo/2017/06/17/03/17/gongga-snow-mountain-2411069_960_720.jpg",
					type: "vehicle",
					price: 71.25,
					description:
						"Reprehenderit illo temporibus. A sunt ea aut id dignissimos nam necessitatibus. Assumenda rem veritatis autem exercitationem deleniti impedit. Quisquam quae voluptatem dolorem in sed possimus id reprehenderit. Est cupiditate enim earum accusamus provident aut illum.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 23,
					name: "Bogan Flats Campground",
					address: "",
					city: "Carbondale",
					lat: 39.105834,
					long: -107.267646,
					imageUrl:
						"https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022_960_720.jpg",
					type: "rv",
					price: 27.09,
					description:
						"Natus amet quidem assumenda incidunt dolorem in et. Iusto fugit nihil veniam quis cumque quam itaque vel eum. Quo at iste soluta est tempore harum. Suscipit similique rerum rerum et. Est at mollitia maiores.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 23,
					name: "South Fork Campground",
					address: "",
					city: "South Fork",
					lat: 37.693618,
					long: -106.569404,
					imageUrl:
						"https://cdn.pixabay.com/photo/2021/10/09/00/15/landscape-6692712_960_720.jpg",
					type: "rv",
					price: 75.69,
					description:
						"Tempora eaque quia quod molestiae distinctio asperiores fugit rerum sunt. Incidunt libero est aut aut culpa. Consequatur veniam quo et quis dolores.",
					capacity: 8,
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
						"https://images.pexels.com/photos/753299/pexels-photo-753299.jpeg",
					type: "tent",
					price: 77.51,
					description:
						"Sunt aspernatur soluta modi quia excepturi fuga quam. Iusto quasi dolores accusantium ut molestias eligendi eos consequatur alias. Quos at quos aut dignissimos dolorem numquam deserunt. Placeat expedita necessitatibus blanditiis veritatis cum optio dolorem omnis. Quisquam eveniet qui et vitae voluptatem.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 4,
					name: "Lake Fork Campground",
					address: "",
					city: "Gunnison",
					lat: 38.466541,
					long: -107.32351,
					imageUrl:
						"https://cdn.pixabay.com/photo/2021/10/09/00/15/landscape-6692712_960_720.jpg",
					type: "rv",
					price: 79.15,
					description:
						"Tempora enim aut ipsa facilis officiis molestias iusto aspernatur debitis. Quidem alias ut ut pariatur possimus dolores blanditiis corporis. Nemo veniam et qui rerum quis. Quis repudiandae aut aspernatur minus quibusdam quo beatae sed. Quibusdam inventore et impedit ut voluptatem sequi doloremque est non. Consectetur aut non sint temporibus veritatis est est.",
					capacity: 8,
					open: false,
				},
				{
					ownerId: 17,
					name: "Buffalo Pass Campground",
					address: "",
					city: "Saguache",
					lat: 38.189957,
					long: -106.515939,
					imageUrl:
						"https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022_960_720.jpg",
					type: "rv",
					price: 59.59,
					description:
						"Illo sint et incidunt qui et. Libero labore quis. Et aut hic excepturi ut harum perspiciatis libero rerum. Distinctio saepe et vel optio.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 8,
					name: "Storm King Campground",
					address: "",
					city: "Del Norte",
					lat: 37.962576,
					long: -106.427481,
					imageUrl:
						"https://cdn.pixabay.com/photo/2020/06/14/17/57/mountains-5298769_960_720.jpg",
					type: "tent",
					price: 31.93,
					description:
						"Voluptas et sunt sed modi voluptates ab. Et voluptatem id quae et. Molestiae est earum est reprehenderit aliquid officia iure et. Rerum consequatur eum enim debitis. Aliquid repudiandae necessitatibus aut voluptas amet voluptas. Repudiandae sunt nobis explicabo corporis aliquid.",
					capacity: 8,
					open: false,
				},
				{
					ownerId: 3,
					name: "Alamosa Campground",
					address: "",
					city: "La Jara",
					lat: 37.384788,
					long: -106.341346,
					imageUrl:
						"https://cdn.pixabay.com/photo/2016/11/21/16/03/campfire-1846142_960_720.jpg",
					type: "vehicle",
					price: 26.4,
					description:
						"Qui eaque alias ut sequi et ut itaque consequuntur nam. Dolores ea ex deleniti sint et velit. Velit quae similique laboriosam aut asperiores. Occaecati est accusantium et.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 15,
					name: "Zapata Falls Campground",
					address: "",
					city: "Mosca",
					lat: 37.625677,
					long: -105.560244,
					imageUrl:
						"https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg",
					type: "tent",
					price: 19.23,
					description:
						"Tempora culpa et et. Autem debitis necessitatibus minima occaecati sapiente dolore aut. Similique et minus vitae.",
					capacity: 8,
					open: false,
				},
				{
					ownerId: 10,
					name: "Great Sand Dunes Oasis",
					address: "",
					city: "Mosca",
					lat: 37.697591,
					long: -105.547759,
					imageUrl:
						"https://images.pexels.com/photos/11795851/pexels-photo-11795851.jpeg",
					type: "vehicle",
					price: 49.35,
					description:
						"Nesciunt iure reprehenderit. Non natus unde. Nihil laboriosam qui. Eveniet fugit cumque harum veniam asperiores. Labore officiis laudantium vel. Repellendus qui ut nostrum.",
					capacity: 8,
					open: false,
				},
				{
					ownerId: 3,
					name: "Picture Canyon",
					address: "",
					city: "Campo",
					lat: 37.010883,
					long: -102.744805,
					imageUrl:
						"https://cdn.pixabay.com/photo/2015/08/19/16/00/campfire-896196_960_720.jpg",
					type: "vehicle",
					price: 98.11,
					description:
						"Et a dolores qui occaecati quia. Animi a quis rerum commodi distinctio. Aliquam eius a asperiores rerum doloremque veritatis officia molestiae voluptatem.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 19,
					name: "Genoa RV Park",
					address: "205 5th St",
					city: "Genoa",
					lat: 39.298739,
					long: -103.494084,
					imageUrl:
						"https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022_960_720.jpg",
					type: "vehicle",
					price: 37.76,
					description:
						"Deleniti ea molestias. Et sequi velit est molestias. Nam labore assumenda. Aut qui est velit aliquid ut. Nihil voluptates fugit unde minus repellat.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 22,
					name: "Akron RV Park",
					address: "65 Gum Ave",
					city: "Akron",
					lat: 40.179456,
					long: -103.205293,
					imageUrl:
						"https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970_960_720.jpg",
					type: "tent",
					price: 28.7,
					description:
						"Voluptas ut doloremque magni ex tenetur aut voluptatibus sequi. Vel cumque adipisci. Accusamus autem exercitationem qui natus. Fugit aut aliquid est. Autem tempora aperiam quis assumenda sunt. Voluptates voluptatem sequi sequi qui excepturi.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 15,
					name: "Estes Park Campground",
					address: "2120 Marys Lake Rd",
					city: "Estes Park",
					lat: 40.349491,
					long: -105.532908,
					imageUrl:
						"https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022_960_720.jpg",
					type: "vehicle",
					price: 95.15,
					description:
						"Et et dolores qui eligendi quis. Iure eligendi non soluta cumque. Aperiam adipisci quasi omnis quis incidunt molestias porro voluptas.",
					capacity: 8,
					open: false,
				},
				{
					ownerId: 13,
					name: "Aspen Glen Campground",
					address: "",
					city: "Estes Park",
					lat: 40.400519,
					long: -105.592699,
					imageUrl:
						"https://cdn.pixabay.com/photo/2021/10/09/00/15/landscape-6692712_960_720.jpg",
					type: "vehicle",
					price: 76.85,
					description:
						"Vel officiis quos nemo similique commodi accusamus iure quaerat id. Corrupti consequatur et quis eius quibusdam blanditiis. Sapiente ea odio. Aut placeat in non eos quibusdam. Odio voluptatum tenetur officiis quod ea qui.",
					capacity: 7,
					open: true,
				},
				{
					ownerId: 3,
					name: "Pinewood Reservoir Campground",
					address: "",
					city: "Loveland",
					lat: 40.365012,
					long: -105.28196,
					imageUrl:
						"https://cdn.pixabay.com/photo/2016/11/21/16/03/campfire-1846142_960_720.jpg",
					type: "vehicle",
					price: 19.45,
					description:
						"Aliquid quo ut repellendus corrupti hic. Nesciunt recusandae sapiente. Laborum quos tenetur quae et ex iste praesentium omnis voluptas. Ab accusamus facilis animi aliquam id qui excepturi.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 24,
					name: "Arapaho Bay Campground",
					address: "77 Arapaho Bay Rd",
					city: "Granby",
					lat: 40.131326,
					long: -105.768782,
					imageUrl:
						"https://images.pexels.com/photos/753299/pexels-photo-753299.jpeg",
					type: "rv",
					price: 85.08,
					description:
						"Vel pariatur possimus quo et. Quo perferendis quia maiores sint et culpa voluptatibus rerum. Quae doloribus modi.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 5,
					name: "Moraine Park Campground",
					address: "",
					city: "Estes Park",
					lat: 40.362349,
					long: -105.604769,
					imageUrl:
						"https://images.pexels.com/photos/753299/pexels-photo-753299.jpeg",
					type: "tent",
					price: 41.54,
					description:
						"Officiis excepturi minima et est asperiores harum fuga cupiditate impedit. Omnis non et quas magni est voluptas natus. Consequuntur illum aut quia beatae aut. Aliquam ipsam vitae quis voluptas expedita qui rerum quia. Sequi ea officiis exercitationem quaerat consequatur. Quibusdam recusandae quia iste dignissimos rerum.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 11,
					name: "Grizzly Creek Campground",
					address: "",
					city: "Coalmont",
					lat: 40.569543,
					long: -106.600919,
					imageUrl:
						"https://cdn.pixabay.com/photo/2016/01/26/23/32/camp-1163419_960_720.jpg",
					type: "vehicle",
					price: 6.95,
					description:
						"Labore sint modi maiores quidem eos occaecati et natus sed. Et ut impedit tempora tempora debitis. Quisquam id aliquid magni. Quisquam eos consequatur dolorum voluptas et ut blanditiis. Sapiente qui deleniti eos vitae ut velit error. Consectetur deserunt possimus.",
					capacity: 4,
					open: true,
				},
				{
					ownerId: 19,
					name: "Dry Lake Campground",
					address: "",
					city: "Steamboat Springs",
					lat: 40.549326,
					long: -106.780176,
					imageUrl:
						"https://cdn.pixabay.com/photo/2016/03/30/02/57/camping-1289930_960_720.jpg",
					type: "tent",
					price: 38.87,
					description:
						"Laudantium repudiandae qui commodi omnis. Voluptatem excepturi culpa quia quae maxime. Ea necessitatibus consectetur quo. Quo aliquam rem voluptatem officiis aut sint eum ut distinctio.",
					capacity: 8,
					open: false,
				},
				{
					ownerId: 7,
					name: "Hinman Park Campground",
					address: "",
					city: "Clark",
					lat: 40.753386,
					long: -106.83296,
					imageUrl:
						"https://cdn.pixabay.com/photo/2016/01/26/23/32/camp-1163419_960_720.jpg",
					type: "rv",
					price: 67.88,
					description:
						"Labore doloribus consequuntur quisquam at dolorem. Non quo repellat sequi. Natus non omnis veniam maxime doloremque eum exercitationem. Ducimus aut nemo inventore est magni aut. Deserunt nemo maiores. Enim eos occaecati unde corporis laudantium reprehenderit.",
					capacity: 6,
					open: true,
				},
				{
					ownerId: 11,
					name: "North Fork Campground",
					address: "",
					city: "Meeker",
					lat: 40.080072,
					long: -107.434558,
					imageUrl:
						"https://cdn.pixabay.com/photo/2016/11/21/16/03/campfire-1846142_960_720.jpg",
					type: "tent",
					price: 86.73,
					description:
						"Non ex dicta. Itaque et sequi et. Qui rerum et.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 12,
					name: "Big Joe Camp",
					address: "",
					city: "Maybell",
					lat: 40.551325,
					long: -108.810851,
					imageUrl:
						"https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg",
					type: "vehicle",
					price: 44.01,
					description:
						"Cupiditate aperiam fuga laudantium. Velit quas enim debitis optio et beatae. Earum optio id.",
					capacity: 8,
					open: false,
				},
				{
					ownerId: 9,
					name: "Saddlehorn Campground",
					address: "",
					city: "Grand Junction",
					lat: 39.113051,
					long: -108.727335,
					imageUrl:
						"https://cdn.pixabay.com/photo/2017/06/17/03/17/gongga-snow-mountain-2411069_960_720.jpg",
					type: "rv",
					price: 15.04,
					description:
						"Ea dicta ut officia quis necessitatibus deleniti voluptatum reiciendis. Dignissimos aspernatur excepturi veritatis est sit laudantium voluptatem aliquam et. Explicabo maiores quia sunt esse consequatur sit. Ipsam eius ex aut. Earum labore exercitationem atque pariatur sapiente et distinctio sed eum.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 24,
					name: "Ute Campground",
					address: "",
					city: "Pagosa Springs",
					lat: 37.220513,
					long: -107.266577,
					imageUrl:
						"https://cdn.pixabay.com/photo/2015/08/19/16/00/campfire-896196_960_720.jpg",
					type: "rv",
					price: 20.14,
					description:
						"Cumque ut vero aut qui dolore. Autem quasi error modi ut et nemo. Aliquam autem quo velit sunt maiores et labore aliquid blanditiis. Aut dolorum voluptates corrupti eligendi beatae enim aut id aut. Saepe eaque neque unde laborum. Totam harum facere quas debitis consequatur ea molestiae facilis.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 7,
					name: "Graham Creek Campground",
					address: "",
					city: "Vallecito",
					lat: 37.394108,
					long: -107.538176,
					imageUrl:
						"https://cdn.pixabay.com/photo/2020/06/14/17/57/mountains-5298769_960_720.jpg",
					type: "tent",
					price: 81.06,
					description:
						"Repellendus quis corporis non reprehenderit reiciendis eveniet repellendus doloremque. Ratione earum impedit sint sed nostrum voluptas et maiores accusamus. Dolorem unde est placeat accusantium at. Sed quia iste qui quos voluptates necessitatibus. In id consectetur tempora hic quis nostrum. Dicta exercitationem eum enim officiis.",
					capacity: 8,
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
