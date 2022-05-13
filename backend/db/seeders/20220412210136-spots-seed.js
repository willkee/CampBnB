"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Spots",
			[
				{
					ownerId: 16,
					name: "Guanella Pass Campground",
					address: "",
					city: "Bailey",
					lat: 39.611617,
					long: -105.718656,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/guanellapass.jpeg",
					type: "tent",
					price: 3,
					description:
						"Soluta consequatur eum iusto tenetur ab deleniti. Aut aliquid vel eum corporis quas ut. Voluptas architecto excepturi sed facere similique quis ea velit.\n" +
						" \rCum mollitia quia est officia. Eos aperiam corporis nam corporis. Modi modi voluptatem ducimus dolores aliquid nam.\n" +
						" \rIpsa labore magni laudantium aut cum rem voluptate. Natus repellat qui officiis earum rerum labore nulla aut totam. Necessitatibus ea velit adipisci. Reiciendis id aliquid maiores corrupti labore ea. Non alias mollitia vel sunt qui ea quasi fugit.\n" +
						" \rAdipisci similique in repudiandae quae iste. Sint corporis culpa ipsam eaque eum inventore rerum accusantium rem. Neque provident saepe. Tempore iste eligendi perferendis fuga. Impedit ipsam reprehenderit occaecati. Ea porro placeat itaque voluptas voluptatem omnis et quia reprehenderit.\n" +
						" \rQuibusdam et et odit rem aperiam animi rerum et reprehenderit. Nihil at est blanditiis quod. Quod adipisci rerum nam consequuntur impedit est. Qui cumque beatae rem officia omnis nam cum facilis.\n" +
						" \rPerspiciatis consequatur odio animi omnis dolor omnis aut eveniet. Totam ipsum aliquid aut et et rerum dolores. Ipsam dolor accusamus omnis autem. Aliquid totam rerum et velit excepturi.\n" +
						" \rExcepturi excepturi nisi qui laborum. Tempora velit quibusdam et optio nesciunt nulla repellendus ea autem. Et omnis et neque nemo voluptate quo dolorem vitae. Provident aut quia unde quia quas assumenda quae.\n" +
						" \rFugiat eum doloremque in ipsam et et odit ut ut. Fugiat maiores omnis magni nisi quam eligendi magni. Rerum id et nam impedit est dicta. Accusantium tempore et nemo aut iste corrupti quo quis. Assumenda eos dolorum repudiandae eius eos eos ut delectus.\n" +
						" \rSaepe consequatur cumque ad odit deleniti nihil quis quis corrupti. Quisquam assumenda voluptatem ut odit dolorem ex autem doloribus excepturi. Nostrum ex impedit adipisci soluta.\n" +
						" \rDoloremque quidem sint. Excepturi velit dolorum neque alias non accusamus. Esse aperiam unde explicabo blanditiis cumque provident rerum excepturi.",
					capacity: 7,
					open: false,
				},
				{
					ownerId: 4,
					name: "Clear Lake Campground",
					address: "",
					city: "Idaho Springs",
					lat: 39.653649,
					long: -105.708646,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/clearlake.jpeg",
					type: "tent",
					price: 83,
					description:
						"Eum mollitia id necessitatibus. Autem non nostrum aut et sint itaque voluptas. Aut excepturi qui qui ipsum facilis. Quo soluta ad dolorum non amet illo.\n" +
						" \rAccusamus iure aliquid earum et modi illo. Voluptas et expedita iste omnis dolor atque officiis. Deserunt ad est corporis id quis ad eos deserunt. Facilis alias est. Porro quia eos error nam inventore.\n" +
						" \rVel sit consequatur voluptas non. Voluptate id sunt. Ipsa ratione temporibus cupiditate quis sed totam est. Nihil distinctio iste deleniti dicta quia. Libero hic ut nemo eum non. Molestiae aut porro mollitia omnis aut reprehenderit qui veritatis.\n" +
						" \rRatione itaque nulla error at. Doloremque maxime cumque quaerat quo perferendis blanditiis atque. Fuga maiores est praesentium. Molestias nam sit eos praesentium ex est nobis adipisci alias. Dolores omnis cumque sunt voluptas nisi debitis.\n" +
						" \rDeserunt ab qui tenetur velit quia laboriosam. Velit voluptatum non. Neque maxime distinctio aut.\n" +
						" \rVoluptate mollitia quo. Accusantium iste incidunt illo. Ea non omnis. Eum voluptatem adipisci eum praesentium et veniam maiores impedit. Pariatur qui blanditiis voluptatum quia deleniti dolores accusamus placeat ullam.\n" +
						" \rRepudiandae quia vel est sunt. Eius et iusto temporibus porro eius esse qui. Corrupti dolore fugit est nulla.\n" +
						" \rNesciunt cupiditate laudantium ipsum ex nemo. Quod voluptate est aut. Quia ad incidunt.\n" +
						" \rQuis voluptatem quia. Voluptatibus quia delectus fugiat. Voluptate iusto quia. Dolores eos omnis vel officia aut. Aliquid illum dolores eum reprehenderit veniam.\n" +
						" \rEos aliquam id fugiat necessitatibus. Aspernatur facere deleniti voluptatem labore et dolor dolores quae incidunt. Modi voluptas corrupti labore sunt reprehenderit labore iure iste fugiat. Est id molestiae doloribus ut.",
					capacity: 5,
					open: false,
				},
				{
					ownerId: 15,
					name: "Echo Lake Campground",
					address: "",
					city: "Evergreen",
					lat: 39.662328,
					long: -105.595553,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/echolake.jpg",
					type: "tent",
					price: 2,
					description:
						"Excepturi similique placeat tempora tempora cumque maiores voluptatibus aut. Quis et commodi soluta dolorem. Sed quia et corrupti dolorem. Quia vel cum earum. Aut harum natus. Tempore natus quaerat autem ex.\n" +
						" \rDignissimos atque delectus quae cupiditate. Laborum aut est vero labore cum. Aut voluptatem quia vitae harum sed. Molestias hic molestias quasi error harum explicabo quam eius quia. Vel sunt eveniet saepe nemo qui.\n" +
						" \rAmet deserunt eos non saepe quo. Eum dolorum in veniam dolore. Pariatur ducimus consequatur distinctio molestiae ab voluptates vero.\n" +
						" \rIusto et aut. Ut eum atque corrupti non architecto molestiae et ullam. Et est aut. Ut incidunt labore.\n" +
						" \rNon velit delectus. Rem fugit eum. Modi voluptatibus autem praesentium enim distinctio rerum tenetur in. Quas libero deleniti quidem aut placeat fugit fugit.\n" +
						" \rIpsa ut commodi nobis molestias eveniet qui et aut architecto. Et dolorem sint saepe quis totam et omnis accusamus facilis. Omnis dolores ut ut nam.\n" +
						" \rAutem velit ratione itaque occaecati. Autem qui quia labore omnis qui blanditiis tenetur ab. Doloremque repudiandae atque voluptatibus repudiandae dignissimos.\n" +
						" \rDeleniti modi sed. In laborum voluptatum laboriosam qui cupiditate. Dolore ratione sed reiciendis quia in aut. Reiciendis placeat expedita molestiae doloremque sed.\n" +
						" \rVoluptatem similique sequi qui ut et necessitatibus dolorum ullam. Qui perspiciatis inventore voluptatem officia omnis eaque. Dolores cum inventore quidem sit esse tempore commodi aut impedit. Mollitia provident incidunt voluptas architecto iure.\n" +
						" \rPerspiciatis est dignissimos. Veniam vero fugit reiciendis. Facilis labore ullam voluptate repudiandae assumenda non eius totam. Alias vel ea amet. In nobis dolor qui fugit exercitationem.",
					capacity: 5,
					open: true,
				},
				{
					ownerId: 24,
					name: "Buffalo Creek Campground",
					address: "",
					city: "Pine",
					lat: 39.367691,
					long: -105.332681,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/buffalocreek.jpeg",
					type: "tent",
					price: 58,
					description:
						"Temporibus recusandae voluptatem et et est ut. Voluptate nemo praesentium. Quo provident aspernatur eos dicta deleniti laborum modi ut. Qui quibusdam velit alias aperiam at maxime. Eos ducimus eum quod quo nihil porro.\n" +
						" \rEst dolorum quis delectus blanditiis velit dicta quia quod. Beatae eos molestiae. Aut recusandae aliquid autem earum. Maiores ipsum nemo aspernatur maxime est consequatur. Cum nihil nam rerum quos ab.\n" +
						" \rReprehenderit omnis harum. Eos animi ut tenetur earum voluptatibus. Voluptas hic vero rerum dolor sit voluptate et deserunt.\n" +
						" \rNeque temporibus saepe sint ea voluptas corrupti et ipsum delectus. Sunt enim vero aliquid cumque et amet animi eveniet quod. Alias necessitatibus excepturi ea ipsum facere quaerat. Ipsam saepe voluptates necessitatibus sit quod alias temporibus non dolorem. Ipsum rerum praesentium est quidem est corrupti voluptatibus voluptates dignissimos.\n" +
						" \rExercitationem nisi fugit et nam excepturi delectus minus pariatur. Est quo ut corporis et facilis molestiae. Ullam velit necessitatibus hic aspernatur enim vero temporibus provident ipsam. Facere fuga praesentium sed corrupti et saepe. Voluptatibus libero sit sit corrupti. Est exercitationem et eveniet ipsa enim.\n" +
						" \rVeniam possimus repudiandae possimus assumenda. Autem perferendis maiores rerum molestias itaque quo. Ipsam iure debitis aut. Rerum molestiae quia nobis. Est corporis in non quis corporis cumque laboriosam et et.\n" +
						" \rNisi sint nihil error. Aut sint nemo quis quia voluptatem aut architecto occaecati rem. Itaque nihil voluptas rerum nemo blanditiis dignissimos aut quam sit. Rerum in non veniam. Consequatur est fugit dolorum provident voluptatem et corporis voluptas occaecati. Vel nihil soluta eum consectetur et molestiae dolor veniam debitis.\n" +
						" \rQuia qui aut eos et quisquam. Eum alias ut alias. Porro sint quia rem eaque velit. Sed consequuntur dolor qui quia architecto quisquam.\n" +
						" \rQuidem nesciunt dolores. In est et pariatur. Ut excepturi maiores animi et delectus. Suscipit enim nihil assumenda maiores dolor recusandae.\n" +
						" \rAut cumque rerum quia est est consequatur repellat. Quidem dolorum harum ut quibusdam sit accusantium harum. Doloremque sequi sint et. Possimus non quos. Velit maxime incidunt incidunt officia quo consequatur rerum.",
					capacity: 5,
					open: false,
				},
				{
					ownerId: 14,
					name: "Geneva Park Campground",
					address: "",
					city: "Dillon",
					lat: 39.537705,
					long: -105.733472,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/genevapark.jpeg",
					type: "tent",
					price: 89,
					description:
						"Dolores facilis eligendi error. Ea distinctio soluta perspiciatis at. Qui laboriosam similique. Delectus praesentium eaque. Et blanditiis eum officia voluptates et ullam quod quas.\n" +
						" \rOmnis aut enim quibusdam eius aut autem. Aliquam quo sunt distinctio commodi id suscipit cumque voluptas accusantium. Alias dolorem sed et necessitatibus. Aut aspernatur atque debitis quod.\n" +
						" \rRerum aut et ipsum unde officia. Ut et ea dolorem. Illo soluta atque sed est error et ut consequuntur qui. Optio molestiae qui fugit laudantium commodi nesciunt. Quia modi minima alias natus quia dolor.\n" +
						" \rConsequatur suscipit et eius dolores. Rerum exercitationem sed voluptatem et sunt. Sed quo est quasi est mollitia incidunt ad. Expedita suscipit laborum velit voluptatem non eaque qui sequi. Et suscipit et consequatur ea.\n" +
						" \rOdio fugiat maiores vel. Est ipsam expedita odio quidem facilis. Nemo voluptatum natus non iste exercitationem. Labore ratione quis non suscipit quia modi ex.\n" +
						" \rVoluptatem quae qui. Quibusdam voluptatem ex. Maiores ratione unde atque unde voluptatem cum consequuntur. Deserunt earum libero dolor ea praesentium quibusdam. Veniam quasi nemo quaerat possimus.\n" +
						" \rPraesentium quam ut et ipsam qui ea qui vitae quia. Repellat qui atque sit natus hic ut rerum. Alias sed incidunt expedita numquam nesciunt. Dolores id impedit sed.\n" +
						" \rMaxime possimus consequatur necessitatibus aut repellat nostrum fugiat nihil. Vel culpa perspiciatis blanditiis fugiat assumenda. Quam voluptates vero enim at voluptatem autem tempore ut. Assumenda quidem assumenda odio voluptatem esse.\n" +
						" \rSit et officia odit voluptatem amet ex est. Quaerat aut reprehenderit. Totam enim culpa sed id eos cupiditate facere. Provident esse adipisci consequatur maxime animi perspiciatis laudantium molestias aut. Minima odio assumenda quibusdam harum nostrum aspernatur. Distinctio dolorum commodi dolore velit dolorem.\n" +
						" \rQuis dolore impedit assumenda dolorum omnis ea repellat fugiat. Distinctio deserunt ipsa nemo voluptatem. Dolore quod est ut ad quibusdam qui. Magnam sit quam molestiae aut quaerat nobis odio ea debitis. Non quia et necessitatibus est est. Et non sit eius id.",
					capacity: 5,
					open: true,
				},
				{
					ownerId: 24,
					name: "Pawnee Campground",
					address: "",
					city: "Ward",
					lat: 40.087755,
					long: -105.571472,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/pawnee.jpeg",
					type: "tent",
					price: 2,
					description:
						"Soluta autem nisi est. Pariatur sed qui. Deserunt perspiciatis nesciunt. Et sunt corrupti fugiat exercitationem.\n" +
						" \rOccaecati maiores aut quo consequatur sit a. Labore nisi blanditiis possimus. Quo nostrum nobis. Nulla qui et.\n" +
						" \rSequi aut eum. Et quisquam temporibus aut. Hic dicta expedita eaque facere dicta architecto recusandae molestiae. Consequatur ut pariatur rerum.\n" +
						" \rSint dolores beatae totam beatae. Consectetur qui dolor maiores voluptatem vero consequatur deserunt et. Eum optio provident reprehenderit ut qui culpa veritatis laboriosam est. Quidem laborum deserunt ratione quo provident nobis. Et et consequatur veniam officia suscipit excepturi consequatur explicabo. Qui nihil est accusantium.\n" +
						" \rVoluptates odit perferendis nam vero. Voluptates et et ipsa neque aliquid et esse earum. Autem repellendus ratione ad cum aspernatur voluptas qui. Neque consequuntur illum corporis. In quibusdam repellendus dolor molestiae. Voluptatem maxime blanditiis ut placeat aut.\n" +
						" \rNobis rerum dicta sapiente a molestiae soluta. Sunt corrupti et est incidunt deleniti iusto sapiente. Quis quibusdam cumque.\n" +
						" \rAut eos aspernatur dolorem ab. Alias iusto voluptatem nesciunt. Et voluptas quia voluptatibus suscipit. Sed eum quia voluptatem. Placeat eius ut sed at nesciunt numquam fuga qui non.\n" +
						" \rIn id dolore quo dolore aliquam rerum nostrum. Pariatur omnis voluptatum quibusdam voluptatem commodi velit rerum sit enim. Eligendi corporis impedit nostrum est inventore. Distinctio ratione error atque dolorum aut voluptatem.\n" +
						" \rRerum et ex aut culpa veritatis est eum cum laudantium. Dolor accusantium quo error nostrum explicabo aliquid et adipisci autem. Et pariatur totam quaerat totam quasi. Non a expedita.\n" +
						" \rQuas id facere accusantium distinctio. Ut ab quis non similique consequatur nemo est enim corrupti. Aut occaecati inventore eum ut.",
					capacity: 6,
					open: true,
				},
				{
					ownerId: 21,
					name: "Bogan Flats Campground",
					address: "",
					city: "Carbondale",
					lat: 39.105834,
					long: -107.267646,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/boganflats.jpeg",
					type: "vehicle",
					price: 64,
					description:
						"Eaque vel consectetur ipsam voluptas commodi occaecati eius laborum nihil. Magni explicabo eos dignissimos ex consequatur possimus non nesciunt sunt. Dignissimos a debitis dolorum dolores quia eius in ea molestiae.\n" +
						" \rIllum harum eos architecto dignissimos culpa quaerat vel inventore odit. Excepturi similique aperiam aut veniam sed nostrum fugiat ea. Aut eum adipisci nemo.\n" +
						" \rDucimus necessitatibus et temporibus ut dolores deleniti. Veniam a in ullam quae enim necessitatibus inventore et. Quaerat repellendus magnam in sunt dolor vero magni repellendus totam. Maiores voluptate accusamus voluptas nobis vel quae.\n" +
						" \rNisi repellat et vitae numquam consectetur est est. Itaque necessitatibus dolores iusto eaque ducimus qui. Ex ab voluptatem ullam incidunt non eos labore quia et.\n" +
						" \rLabore laborum maiores veritatis dicta repellat eum et distinctio qui. Et magnam aliquid repellat ratione cum iste hic odio nesciunt. Vel quod adipisci. Voluptatem dolores nam maiores molestiae amet laboriosam laborum dolorem. Voluptas laboriosam maxime nesciunt delectus dicta porro accusamus. Quidem facilis doloremque fuga.\n" +
						" \rNecessitatibus sit totam est unde. Ut consequatur pariatur non alias est. Laborum possimus commodi. Autem quam doloremque aut impedit et autem dolor. Totam soluta placeat atque repellat rerum consequatur modi reprehenderit non.\n" +
						" \rOccaecati sunt commodi voluptatum accusamus aut voluptatibus. Omnis sunt dolorem voluptas eos. Consequatur laboriosam qui quas sed corrupti doloribus aut. Ipsam nihil neque. Aut in nihil nihil. Voluptatem velit est et enim rerum praesentium minus ut quod.\n" +
						" \rRepellat consequuntur assumenda et magni libero placeat soluta. Eveniet quas quos. Consectetur quasi dolores soluta qui voluptatem quis. At omnis delectus ab quae quibusdam quo.\n" +
						" \rIpsam deleniti dignissimos rerum velit reprehenderit consequatur. Cupiditate cupiditate ipsam rerum aut. Sint quia et magnam consequatur.\n" +
						" \rQuia voluptatibus aut nemo debitis aut et ut ut provident. Provident eius optio provident sit incidunt. Sint et nobis quia in. Aliquam deleniti optio sunt. Nihil vel in. Repellat voluptate alias voluptates ex enim nisi necessitatibus.",
					capacity: 5,
					open: true,
				},
				{
					ownerId: 1,
					name: "Southfork Campground",
					address: "",
					city: "South Fork",
					lat: 37.693618,
					long: -106.569404,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/southfork.jpeg",
					type: "rv",
					price: 52,
					description:
						"Mollitia repellat distinctio inventore earum ratione modi labore. Expedita reiciendis qui beatae. Eveniet omnis voluptatum id quo. Qui autem aut eos consequatur voluptatem sequi. Qui expedita debitis aut voluptatem provident corporis non. Ullam molestiae nam dicta possimus.\n" +
						" \rEt labore ad. Aut sit cupiditate sed excepturi. Repellendus voluptatibus tempora et sit ipsa ducimus perspiciatis. Rerum officia repudiandae optio molestiae quam quis nostrum et. Nihil iure quod asperiores ex et.\n" +
						" \rAd sunt aut. Qui ea fugiat quia blanditiis possimus iste delectus et. Illo ipsam quidem. Corporis illo deleniti est vel eveniet explicabo.\n" +
						" \rRepellendus qui omnis consequatur temporibus cum recusandae sed. Et autem rem ut ut rem non sunt. Voluptas odit et soluta voluptas placeat est ea doloribus cumque. Unde amet sed accusantium necessitatibus.\n" +
						" \rReiciendis quae autem. Inventore molestiae explicabo. Aliquid cupiditate earum eos. Libero error nihil sequi hic. Tempore ut architecto. Dolor vel voluptatem voluptatum quasi velit consequuntur quibusdam quas quia.\n" +
						" \rEt facere occaecati vel. Nostrum culpa aliquam. Quasi repellat omnis.\n" +
						" \rNobis eligendi qui aliquam. Dolorem quia iusto deleniti totam velit suscipit sunt et laboriosam. Voluptatibus veritatis officiis consequatur aut repellendus incidunt ut dolorem. Voluptas debitis ullam unde nostrum totam sed sequi explicabo.\n" +
						" \rVoluptas vel similique voluptate. Iste voluptatem dolores. Reprehenderit vitae iusto eveniet.\n" +
						" \rUt eum libero libero voluptatem dignissimos expedita incidunt. Voluptas magni unde aperiam et debitis. Animi blanditiis laudantium et perferendis quae consequuntur omnis sequi facilis. Excepturi magnam architecto et et culpa eum necessitatibus reiciendis. Asperiores odit consequuntur laudantium cum et qui.\n" +
						" \rEos ullam voluptatibus et. Rerum eos voluptatem. Harum facilis quia rem magnam minus eveniet. Provident vel et libero delectus. Distinctio minus sunt perferendis laudantium quisquam occaecati sint rerum. Explicabo ut id assumenda quia vel.",
					capacity: 5,
					open: false,
				},
				{
					ownerId: 8,
					name: "Red Bridge Campground",
					address: "2258 Blue Mesa Rd",
					city: "Powderhorn",
					lat: 38.339811,
					long: -107.226687,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/redbridge.jpeg",
					type: "tent",
					price: 42,
					description:
						"Quas dolores id illum quis. Rerum doloremque magni sed quod. Quo voluptas fuga praesentium eius similique illo sunt.\n" +
						" \rPlaceat voluptas maiores saepe occaecati. Minus cupiditate excepturi suscipit non repellendus delectus quia. Ipsum maxime debitis. Debitis dolorem numquam dolore facilis. Asperiores voluptatem magni qui dignissimos est.\n" +
						" \rTenetur dolore tempore et facilis porro et voluptate. Atque quos aut ab corporis aperiam dicta et. Et quia nulla. Ad aut recusandae debitis ad similique ad rerum explicabo error. Eligendi velit eligendi iure minima tempora voluptas fugit.\n" +
						" \rMollitia temporibus culpa consequatur est numquam quia sint est et. Sit voluptas eaque. Doloremque maiores sint cumque modi porro ipsum harum. Velit fugit eos voluptate sed.\n" +
						" \rQuia in et ex maxime veritatis ullam et dolor. Sit et suscipit deserunt eveniet unde consequatur maiores repellat. Corrupti ad facilis animi dolorum est sit. Qui aspernatur voluptas quam ut. Quod fugiat aspernatur. Eum et repudiandae.\n" +
						" \rReprehenderit voluptas praesentium dolore rerum quia eveniet. Tenetur repellendus eveniet. Et quam illo dignissimos quo asperiores voluptate dignissimos magnam. Iste magni aperiam incidunt et unde qui et et necessitatibus.\n" +
						" \rNesciunt velit omnis. Sed dolor dolor omnis voluptatum non. Vel consequuntur fugiat deleniti.\n" +
						" \rMolestiae cum quia nulla. Eos suscipit in sunt voluptatum explicabo enim fugit. Facilis aspernatur enim inventore quia aperiam voluptatem expedita. Itaque sequi sit soluta omnis sit et consequatur consequuntur.\n" +
						" \rTotam omnis doloribus eum iure asperiores non vitae quibusdam. Qui quia voluptatem pariatur quasi sunt ab accusamus. Consequatur assumenda corporis vero eos veritatis.\n" +
						" \rQuam sint cum officia aut velit ullam hic consequuntur perspiciatis. Veritatis aspernatur fuga recusandae modi. Unde est quis in architecto iusto minus et sequi suscipit.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 6,
					name: "Lake Fork Campground",
					address: "",
					city: "Gunnison",
					lat: 38.466541,
					long: -107.32351,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/lakefork.jpeg",
					type: "vehicle",
					price: 94,
					description:
						"Ipsa excepturi omnis quod perferendis et debitis. Omnis itaque maiores perspiciatis aut non vel officia natus quis. Est eum omnis facilis reiciendis debitis eum ut. Veritatis asperiores sit maxime veritatis eos. Excepturi totam autem ut vitae voluptas reiciendis doloremque.\n" +
						" \rVoluptatibus quo veniam recusandae facere inventore voluptatem eum unde incidunt. Veniam quisquam blanditiis et molestiae explicabo. Officiis sint saepe veniam labore eligendi eligendi sint velit rerum. Ipsam aperiam aperiam. Culpa pariatur est eius perferendis consequatur architecto ducimus enim dolor.\n" +
						" \rEt quasi unde molestiae esse. Nemo aliquid recusandae totam debitis quisquam labore. Maiores voluptas cupiditate error.\n" +
						" \rAtque animi voluptatibus impedit et. Commodi id occaecati ex quia voluptatem. Quas quas sit maxime tempora suscipit. Fugiat ducimus ullam iste aliquam fugit ad beatae molestias quia. Aut ut dolorum iure repellat nisi sit totam eos ea.\n" +
						" \rIn excepturi quae impedit provident beatae a. Sit dolor ea qui qui dolorem soluta ut architecto veniam. Officia quam sed quisquam id odio. Sequi voluptates mollitia vitae.\n" +
						" \rNon accusamus quo veritatis suscipit. Quod porro veniam. Illo ex expedita dicta tempore aut explicabo quod. Consequatur optio eligendi et distinctio.\n" +
						" \rRatione dicta mollitia qui voluptate repudiandae rerum. Sed quod nihil aut cum consequatur unde vero magni. Incidunt mollitia tempore tempora veniam nostrum quae. Temporibus accusamus fuga. Molestiae praesentium maiores optio cumque corrupti itaque fugit quibusdam.\n" +
						" \rConsequuntur est veniam quia amet corporis placeat. Sequi eos mollitia non natus quam et accusamus sed ut. Neque quos debitis. Rerum possimus voluptatum ipsa omnis iure aut quod. Libero itaque laudantium eum magni quaerat sapiente ea. Est autem sit.\n" +
						" \rEx omnis praesentium est iusto voluptatem labore. Sunt iusto doloribus accusantium id. Perspiciatis quia quia aliquam non. Officiis velit voluptas voluptatibus. Magnam qui quidem.\n" +
						" \rQuidem et voluptatibus dolorum adipisci et. Unde consequatur nulla. Minus quod blanditiis est eum.",
					capacity: 7,
					open: true,
				},
				{
					ownerId: 12,
					name: "Buffalo Pass Campground",
					address: "",
					city: "Saguache",
					lat: 38.189957,
					long: -106.515939,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/buffalopass.jpeg",
					type: "tent",
					price: 61,
					description:
						"Quis natus illo alias. Commodi soluta quis quia iste doloremque quaerat. Laborum iusto odit qui voluptates sunt non cumque. Nihil ut est quo. Et consectetur itaque et consequuntur eligendi. Et dolor eligendi voluptatem nobis voluptatibus.\n" +
						" \rQui quis iste officia odio aliquid aut dicta. Libero harum vel. Quo molestias voluptas et laboriosam laboriosam. Hic nostrum sit. Hic velit optio. Quos officia a consectetur architecto nisi itaque.\n" +
						" \rQui magnam aut commodi fugiat. Facere autem provident quod numquam est incidunt. Ipsum nihil assumenda perferendis ea facere. Omnis quidem quas laboriosam omnis atque magnam libero.\n" +
						" \rArchitecto ea nihil est itaque. In quae doloribus cupiditate perspiciatis deleniti qui est et. Sed nisi totam nulla dolorem blanditiis ut. Nihil sapiente ea veniam consequatur fuga provident pariatur sint expedita.\n" +
						" \rVoluptatem aut omnis ullam officia distinctio voluptates temporibus. Dolores est porro dicta. Dignissimos dolores corporis modi.\n" +
						" \rLabore fugiat aliquid nam hic ullam qui. Ad omnis et voluptates atque aliquid doloremque et. Natus quis aut quia.\n" +
						" \rVelit numquam id. Voluptatibus quo deserunt voluptatem adipisci et quo. Non ut quibusdam sint fugit debitis nemo sed ut quaerat.\n" +
						" \rEnim et neque in eaque et quasi adipisci voluptates qui. Doloremque eos voluptas nesciunt in atque. Unde quod porro nostrum at dolorum numquam est. Aliquid eos dolor maiores consequatur praesentium tempora quasi. Mollitia dolores minima sed ipsum mollitia. Est voluptatem est facere libero sit in adipisci.\n" +
						" \rQuasi esse mollitia. Est quis facere nesciunt. Voluptatem velit fugiat impedit aperiam laborum ex ut perferendis qui. Placeat eveniet similique. Omnis soluta voluptatem sed accusamus.\n" +
						" \rCulpa itaque qui reiciendis doloribus. Sunt ut voluptates. Ipsum necessitatibus libero tenetur sint iste est eos est. Nisi est eaque et dolorum. Incidunt nemo non distinctio qui enim.",
					capacity: 5,
					open: true,
				},
				{
					ownerId: 6,
					name: "Storm King Campground",
					address: "",
					city: "Del Norte",
					lat: 37.962576,
					long: -106.427481,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/stormking.jpeg",
					type: "vehicle",
					price: 64,
					description:
						"Eos ullam quis. Quos dolore porro qui nihil nihil sunt ab occaecati est. Cupiditate non dicta explicabo voluptates cum optio vero vel perferendis. Fugiat exercitationem iure aliquid. Porro aut aliquam perspiciatis recusandae eveniet mollitia expedita itaque et.\n" +
						" \rAut ut magni qui repellat facere vitae magnam iure. Ut minima suscipit dolor quia doloremque delectus non similique. Ut fuga ullam est aut sit necessitatibus voluptatem.\n" +
						" \rEarum corporis aut voluptas tempore consequatur quidem tempore vel. Doloribus eaque ad nihil dolorem sit. Ipsum sunt placeat error laborum qui porro qui.\n" +
						" \rOfficia reprehenderit voluptatem qui voluptatum odit. Voluptatem quo vel sed quis dolores. Dolores dolore dolores nesciunt et enim molestiae. Necessitatibus aut labore et dolorem quia voluptatem. Quas id qui hic veritatis dolore hic animi voluptate aut.\n" +
						" \rAutem vitae est consectetur qui quidem maxime sint quisquam. Cupiditate velit pariatur. Quia illo ut sunt. Quo odio esse fuga minus ex saepe beatae. Quia a eum dolorum animi unde molestias doloribus est adipisci. Expedita dolores enim optio et.\n" +
						" \rVel atque optio necessitatibus. Asperiores hic illum ipsum quas saepe similique. Laborum id officiis earum. Possimus sint dolor neque veritatis nulla ab deserunt. Perspiciatis dignissimos dolorem natus ducimus nisi laborum.\n" +
						" \rDolor in cum inventore velit excepturi nam. Ea qui esse qui. Eveniet corrupti voluptatem et ipsum. Temporibus non ut illum culpa pariatur tempore provident.\n" +
						" \rVoluptates modi sit in. Perferendis aspernatur id ea tempora. Nihil molestias cum qui id dolorem aut. Molestias accusamus alias quis vero quidem qui aut velit et. Fuga architecto illo rerum voluptatum.\n" +
						" \rEos optio vel tenetur. Ut maxime atque voluptatem odit veniam. Aspernatur consectetur eum magnam voluptate voluptas voluptatibus sit quae dignissimos. Vero quam eos quis eaque cum et quo. Nihil recusandae iure.\n" +
						" \rEum rerum dolores praesentium. Eaque architecto modi dolor. Et amet ipsa molestias voluptatem voluptas qui quibusdam veniam. Quisquam delectus porro nemo qui qui reprehenderit tempore sed aliquam. Perspiciatis beatae autem iusto deserunt ullam temporibus et consectetur.",
					capacity: 7,
					open: false,
				},
				{
					ownerId: 9,
					name: "Alamosa Campground",
					address: "",
					city: "La Jara",
					lat: 37.384788,
					long: -106.341346,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/alamosa.jpeg",
					type: "tent",
					price: 24,
					description:
						"Non nesciunt corrupti esse atque voluptatem. Impedit culpa libero ex totam nihil sed et. Eum commodi qui incidunt aut sit ratione recusandae. Harum sed dolor dicta unde quia quam voluptatem.\n" +
						" \rSit saepe aliquam commodi perspiciatis animi tempora nemo maiores voluptas. Rem nemo inventore ut. Repellendus temporibus aliquid velit. Ut dolore exercitationem facilis ut et molestias rerum illum. Dolorem alias dolor.\n" +
						" \rDeserunt ipsa delectus consectetur neque dolor nesciunt vel aut. Inventore est excepturi culpa rerum nihil iste autem voluptatum. In autem in ut iure nostrum explicabo dolorem.\n" +
						" \rVelit laboriosam debitis eum velit voluptates molestias nam. Ut aut ea voluptatem. Cum voluptate eum qui rerum aut perferendis sed. Ut blanditiis accusantium exercitationem aliquid aut possimus temporibus corporis. Et velit enim iste quos omnis.\n" +
						" \rVeniam illum tenetur porro magnam expedita ut itaque recusandae atque. Fugiat odio accusamus est repudiandae sed voluptatem. Ullam fugit earum dolorem blanditiis quod natus. Accusantium ut tempora et. Et commodi eius occaecati saepe sint ut repellendus.\n" +
						" \rAtque dignissimos quos voluptatibus fugiat dignissimos consequatur voluptas. Consectetur repellat qui non eos quasi aut eaque. Consequatur quidem harum autem assumenda voluptas eum. Aspernatur eius maiores incidunt. Dolores tempore qui omnis nobis voluptas voluptas et dolorem.\n" +
						" \rFugit qui saepe voluptate et incidunt perspiciatis. Repudiandae qui explicabo enim molestias et ex non vel dolorem. Dolores voluptas officiis eveniet omnis quo.\n" +
						" \rNihil reiciendis ut nisi rerum sunt ut molestiae. Dicta ut sit assumenda et qui inventore corrupti ut odio. Et temporibus beatae. Et fugit iste voluptates sit. Libero beatae tempore maiores est. Unde omnis animi neque laboriosam.\n" +
						" \rQui consequatur quia. Sapiente perspiciatis maiores ullam. Quo cum vel ut eveniet. Optio voluptas ab eos voluptas reiciendis asperiores recusandae culpa at. Eos delectus occaecati nam optio. Quis itaque reprehenderit laudantium sit ut sit magnam.\n" +
						" \rDolor voluptas nihil occaecati et odit et debitis maiores ratione. In ratione dolorum iusto non modi consequatur est exercitationem. Quas ea nostrum dolores voluptatum ea sint. Debitis sunt aspernatur ex voluptatem consectetur.",
					capacity: 8,
					open: false,
				},
				{
					ownerId: 21,
					name: "Zapata Falls Campground",
					address: "",
					city: "Mosca",
					lat: 37.625677,
					long: -105.560244,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/zapatafalls.jpeg",
					type: "rv",
					price: 44,
					description:
						"Nulla velit laborum aut. Fuga qui molestiae incidunt autem impedit in placeat expedita. Vero aperiam sint expedita vel blanditiis consequatur facere.\n" +
						" \rSint consectetur accusantium voluptate ea eos qui laudantium excepturi et. Nisi excepturi consequatur sint et error ea qui doloribus. Natus repudiandae non minima et soluta vitae voluptatem eaque omnis. Delectus harum corporis repudiandae iste delectus maxime atque aut.\n" +
						" \rRepudiandae quos voluptatem ut quibusdam similique omnis. Neque dolorem hic id similique incidunt laborum cum minus. Aspernatur et mollitia magni.\n" +
						" \rEius dolor consequatur occaecati ut consequatur omnis dolores qui. Ut in sed qui magnam sed qui qui mollitia. Omnis quos architecto nesciunt recusandae. Ad dignissimos laudantium vitae quod aliquid sapiente possimus unde.\n" +
						" \rBlanditiis natus voluptas perferendis sint. Error dolorem voluptates quo officiis minima. Ea quia ea animi placeat sit quos.\n" +
						" \rDignissimos nihil illum. Expedita fugiat vel inventore hic impedit itaque praesentium nihil consequatur. Occaecati illum omnis quas ea recusandae facilis nemo praesentium. Non facilis est. Eum fugiat repudiandae soluta consequatur.\n" +
						" \rNecessitatibus aliquid dicta saepe eligendi deserunt blanditiis ea voluptas. Recusandae distinctio odio. Et eaque sit voluptatem soluta reprehenderit molestiae.\n" +
						" \rError doloremque sunt illo qui excepturi quaerat. Enim voluptatem alias minima qui. Quia et magni voluptatibus animi voluptatem culpa. Ratione consequuntur perspiciatis quos hic quis sed est sapiente quia. Ut asperiores nemo vitae illum velit ducimus.\n" +
						" \rSuscipit et occaecati quod quos sit quis similique quae omnis. Optio aut hic voluptate nihil. Sed voluptatem quia qui commodi. Et error aut maxime. Nihil et quod ipsam.\n" +
						" \rEt sunt asperiores quidem reprehenderit aut deleniti. Voluptatum aspernatur fugit quia expedita nihil qui amet est. Odio quia repellat eum. Ea laboriosam eum est possimus culpa eum. Sequi reprehenderit reiciendis et quasi saepe at. Et in optio officia sunt quam natus cupiditate et architecto.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 10,
					name: "Great Sand Dunes Oasis",
					address: "",
					city: "Mosca",
					lat: 37.697591,
					long: -105.547759,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/greatsanddunes.jpeg",
					type: "tent",
					price: 39,
					description:
						"Et eligendi odit tempora quibusdam voluptas dolorem modi incidunt quos. Deleniti rem doloribus a quia. A praesentium in provident officia. Voluptatibus et ratione aut magni a consequatur cumque quia. Minus adipisci odit officia mollitia voluptatibus ut aspernatur a. Tempora voluptatum nihil officia exercitationem qui corporis officia dolore dolor.\n" +
						" \rCorrupti sit velit. Dolor dolorem modi ipsam aspernatur explicabo vero dolores. Quod et aperiam facere optio sint eos ea.\n" +
						" \rEa harum est. Nulla harum minus blanditiis ab expedita soluta repellat. Dolores earum ea nihil deleniti nulla hic. Rerum officiis exercitationem aliquam exercitationem qui illum. Tempore quia quis at officiis nostrum et. Repellendus voluptas ex in quod tempora architecto.\n" +
						" \rExercitationem enim id consectetur et officiis distinctio aspernatur optio aliquid. Accusamus ut quia voluptatibus ut qui nobis fugit dolor ut. Omnis sed quia inventore modi esse qui quo accusamus enim. Aut excepturi corporis et et. Est cum similique repellat numquam eos non sed dolor. Eaque facilis in perferendis sint cumque facilis voluptatibus soluta modi.\n" +
						" \rPerferendis suscipit fuga nesciunt voluptatem laborum. Dolores non est consequatur doloribus numquam qui voluptates architecto. Nulla optio omnis qui eum vitae officia. Itaque ea neque molestias necessitatibus.\n" +
						" \rSunt consectetur quo tenetur est et sunt et. Officiis fugit iusto ex culpa sit id voluptate. Est enim dolore ipsam iusto corrupti autem qui corrupti blanditiis. Fuga corporis nihil placeat quas.\n" +
						" \rEt iusto iure sit voluptas voluptas aut. Libero corrupti fuga quia inventore expedita dolorum dolorem. Et iste suscipit. Ea aut consequatur iusto autem aspernatur. Ut enim rerum deserunt culpa labore odio id occaecati incidunt. Quae voluptatem sapiente qui distinctio.\n" +
						" \rRepellendus ratione qui assumenda quia. Alias officia qui. Animi quia sunt. Natus eaque et sint officia voluptates iure quia possimus enim.\n" +
						" \rDistinctio enim ut praesentium est et quia magni consequatur sunt. Unde sint nihil quis veritatis veniam dolores minima. Odit aut enim quo aut qui. Labore sed asperiores consequatur natus sed ipsum. Reiciendis et at et similique animi excepturi totam dolor dolore.\n" +
						" \rDeleniti voluptatem facilis qui magni aut dicta non aut corrupti. Adipisci voluptate non sit enim quia rerum perferendis in. Sit sed ut necessitatibus aliquid et recusandae exercitationem. Nesciunt eveniet dolores voluptate eum provident est sit beatae voluptatem. Dolores odio pariatur.",
					capacity: 5,
					open: true,
				},
				{
					ownerId: 1,
					name: "Picture Canyon",
					address: "",
					city: "Campo",
					lat: 37.010883,
					long: -102.744805,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/picturecanyon.jpeg",
					type: "tent",
					price: 82,
					description:
						"Temporibus ipsum inventore aspernatur. Assumenda et aliquam veniam. Soluta consequatur libero labore non nulla assumenda. Et quis consequatur doloribus asperiores. Ut sint dolores qui beatae qui repellat placeat porro.\n" +
						" \rVoluptatem quia quia perferendis consequuntur eveniet quis quo. Consequuntur in sunt odit tempore rerum consequuntur vel. Aut nobis ab cupiditate blanditiis et.\n" +
						" \rSunt et ut quod et necessitatibus ut vero deleniti quidem. Ea ex animi expedita ut sed maxime sapiente. Id beatae sapiente soluta minima inventore ipsum quasi rerum vero. Voluptatem molestias impedit eligendi libero dolore. Cupiditate porro commodi omnis earum. Ut dolorum provident repellendus voluptatum vero sed et facere occaecati.\n" +
						" \rHic delectus et optio voluptatum quidem voluptatibus. Omnis eos tempore esse. Cum labore odio nam hic distinctio alias. Minima vel fugit expedita reiciendis qui.\n" +
						" \rError amet beatae tenetur. Nihil autem iure. Quae tenetur eius dolor. Voluptatum harum totam officiis ipsum consequatur dignissimos corrupti maiores. Eaque qui id perspiciatis corrupti qui dolor doloremque dolorum sunt. Culpa voluptas deserunt magni deserunt sed.\n" +
						" \rId ut odio sit. Aperiam qui deleniti. Magnam ut quia qui incidunt. Culpa sapiente impedit fugit temporibus ipsa quisquam ipsam pariatur. Necessitatibus officiis ea et voluptas ab.\n" +
						" \rOfficiis culpa quasi. Ab qui atque consequuntur saepe reiciendis. Non est quasi ut harum minima. Tempora eos sunt veniam tempore. Sed ipsum nihil et unde facere.\n" +
						" \rNostrum voluptates et dicta. Et odit omnis distinctio dicta cum dignissimos alias nisi ex. Sed qui atque quas nostrum et est. In doloremque ut eveniet et omnis omnis laboriosam atque voluptatem. Ut molestias harum exercitationem eos laborum accusamus dolor velit. Molestiae libero eos cum non est.\n" +
						" \rVelit harum dignissimos. A dolores nesciunt ut laboriosam. Autem voluptatem et omnis eligendi est. Sunt occaecati dolorem eaque blanditiis voluptas sit necessitatibus debitis ipsam.\n" +
						" \rEos explicabo corporis praesentium vero velit fugiat est. Doloribus qui enim sit dolorem molestiae aut vel. Ipsum fugiat voluptate optio possimus nisi ipsam neque sint.",
					capacity: 6,
					open: true,
				},
				{
					ownerId: 6,
					name: "Genoa RV Park",
					address: "205 5th St",
					city: "Genoa",
					lat: 39.298739,
					long: -103.494084,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/genoarv.jpeg",
					type: "rv",
					price: 99,
					description:
						"Provident autem nobis ratione maiores iusto molestiae vel deleniti. Praesentium et doloribus veritatis cum officiis officiis officia alias sed. Quidem a inventore. Qui sunt accusantium ad sint. Hic aperiam quaerat velit quisquam perferendis doloribus.\n" +
						" \rDeleniti quia explicabo aliquid reprehenderit. Voluptas ut magni. Nihil mollitia quod accusantium et aut quas ut. Tempora maxime impedit ut fuga ut maiores ipsum. Quis voluptas reprehenderit voluptas et quis aut aut nesciunt odio.\n" +
						" \rBlanditiis deserunt aut qui quas consequuntur in et in voluptatem. Vel minima quod modi illum. Eligendi amet eaque. Vel ipsam repellendus. Itaque ad ipsam dolore sunt in perferendis qui corrupti.\n" +
						" \rConsequatur ratione sequi ipsum. Aliquam cupiditate ab fugiat officiis. Aperiam mollitia eos et corporis iusto nisi earum. Quo voluptas nemo. Magni qui non aut est cumque. Eum ipsum dolor iste ratione ut.\n" +
						" \rUt et molestiae alias. Quod alias consequatur molestiae. Quia vitae aut sed unde eius quidem quia beatae fugiat. Itaque incidunt animi corporis officia est impedit est. Numquam placeat in accusamus.\n" +
						" \rDicta sunt qui in excepturi dolor beatae. Perferendis quasi harum autem eveniet. Eos et et hic tenetur nihil. Facere asperiores maxime repudiandae.\n" +
						" \rAsperiores dicta impedit consequatur ullam ullam. Ea iure saepe possimus quae at natus et aut. Enim doloribus quia reprehenderit dolorem sed officiis quo quidem asperiores. Tenetur qui ea accusamus sapiente aliquid.\n" +
						" \rItaque ut in voluptatibus harum. Sit neque sapiente voluptas reiciendis ducimus enim commodi. In ut autem est et. Quam inventore cupiditate in debitis ut qui porro. Necessitatibus rerum atque repudiandae voluptas. Eius tempora id aut dolores et.\n" +
						" \rDolor non et sit voluptas. Molestiae fugiat quos molestiae animi minima in dolore vero. Non repellat animi provident ut perferendis. Velit est cumque. Libero asperiores laboriosam illo dolorum.\n" +
						" \rAnimi alias voluptatum. Dolores consequatur ipsam provident omnis facere. Enim doloremque aut atque.",
					capacity: 8,
					open: false,
				},
				{
					ownerId: 25,
					name: "Akron RV Park",
					address: "65 Gum Ave",
					city: "Akron",
					lat: 40.179456,
					long: -103.205293,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/akronrv.jpeg",
					type: "rv",
					price: 94,
					description:
						"Eveniet expedita ducimus nemo nemo omnis quaerat nihil provident. Sunt voluptatum consequatur qui quia voluptatem ut et est dicta. Corrupti et autem blanditiis impedit voluptas ducimus. Accusantium incidunt deleniti distinctio ut eos porro ut consectetur assumenda.\n" +
						" \rQuisquam dolore quia optio deserunt consectetur nostrum. Odit ea qui alias aut in voluptatem. Est et possimus dolorem aut quae. Totam molestiae et doloremque earum rerum rerum quos qui. Fuga eaque qui quia perferendis.\n" +
						" \rUllam dolor voluptatibus blanditiis et. Earum asperiores aut. Dolor sapiente est voluptatem porro laborum non veniam.\n" +
						" \rTempora laborum saepe tenetur aut voluptate dolor. Vero pariatur magni dolor assumenda dolor. Dolore maiores nihil. Est id molestias rerum magni doloremque qui delectus et perspiciatis. Dolore at sequi autem quae. Ut aut ipsum quis fugiat quisquam rerum quia perspiciatis.\n" +
						" \rIncidunt voluptatem quidem libero et in. Earum non sed alias eaque veniam. Sint qui facere.\n" +
						" \rNisi autem laudantium sint. Soluta nostrum dolorum. Cupiditate sunt sit. Aperiam atque unde sed sequi veritatis quasi omnis eos. Sequi et consequatur commodi et aut beatae.\n" +
						" \rEt optio illum pariatur perferendis voluptas et. Ullam aspernatur veniam provident expedita mollitia porro. Qui vero sint reprehenderit officia architecto ut repellendus reiciendis. Soluta et sit in laborum velit amet. Quae dicta sit rerum.\n" +
						" \rMollitia rerum minima temporibus a. Doloremque aliquid quia doloribus repudiandae rerum molestiae aut est distinctio. Voluptatem amet numquam consectetur et. Facere voluptatem ut aut rerum ut. Quos quibusdam incidunt vitae similique et.\n" +
						" \rQuis ut ipsa dolorum repellendus nihil ducimus. Excepturi voluptas ratione voluptatem minima. Deleniti provident eos velit necessitatibus iure et aliquam veritatis rem.\n" +
						" \rSed qui est ad qui vitae aperiam expedita. Sapiente maxime hic dignissimos minus debitis aut dolores ut sit. Iste nam voluptatem eveniet quidem tempore aut quidem aliquid dolores. Et autem minus ullam neque. Suscipit doloremque cum recusandae nostrum quo aut omnis atque voluptas. Alias laborum earum sit pariatur sit tenetur ratione.",
					capacity: 7,
					open: false,
				},
				{
					ownerId: 7,
					name: "Estes Park Campground",
					address: "2120 Marys Lake Rd",
					city: "Estes Park",
					lat: 40.349491,
					long: -105.532908,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/estespark.jpeg",
					type: "vehicle",
					price: 74,
					description:
						"Autem quia et non eos. Laudantium est qui ipsa odit eligendi aut sapiente. Numquam doloribus vel qui.\n" +
						" \rAccusantium iste quo. Saepe est totam quo sunt voluptas voluptas. Similique nam quia repellendus ea tempora inventore blanditiis sed voluptate. Est et et natus dolores numquam et neque voluptates aliquid. Est ea rerum culpa ut sint tempore soluta. Quod minima doloremque officia cumque rerum delectus quia qui.\n" +
						" \rExcepturi ratione ut expedita placeat mollitia sequi praesentium cum dolorem. Temporibus ipsa harum aut praesentium soluta rerum totam et. Qui autem aut totam nihil quisquam harum est repudiandae. Culpa ex et excepturi. Sint nisi et quia et ut autem est in sunt.\n" +
						" \rEius molestias aperiam vel repellat recusandae accusamus. Perspiciatis error ad quibusdam in sit facere error et veniam. Autem praesentium sunt ab laborum magni quam dolores veniam nemo.\n" +
						" \rHarum perferendis impedit aut voluptatem. Quo necessitatibus qui voluptatem quisquam ab nesciunt maxime. Debitis rerum enim perferendis adipisci nostrum voluptas.\n" +
						" \rCorporis qui voluptatem fugit et similique. Quia quia nostrum soluta omnis mollitia non. Iure at provident minus sapiente non atque sint. Laborum nobis nobis dolorum ullam sint beatae exercitationem quia. Eligendi itaque et totam illo.\n" +
						" \rArchitecto ipsum eaque tempora sed nam qui. Nesciunt ut ut quasi animi et quia dolorem ea atque. Et quia cum odio voluptates repellat enim reiciendis quia. Ea et maiores autem in sint tempore et voluptate voluptatum.\n" +
						" \rIpsa mollitia ducimus. Dolor at dolores. Est aut temporibus unde reprehenderit ullam quidem quis facere. Et error sed dolor beatae maxime dolores velit tenetur.\n" +
						" \rQui sint omnis dignissimos sit recusandae voluptatem. Et libero perspiciatis. Iure cupiditate ut magni quaerat odio magnam.\n" +
						" \rEt odit eum error et saepe asperiores. Et aperiam occaecati ullam odio facere veritatis repellendus et officiis. Quia explicabo quae unde quis aut soluta. Illo eum totam.",
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
						"https://campbnb.s3.us-west-1.amazonaws.com/aspenglen.jpg",
					type: "vehicle",
					price: 44,
					description:
						"Inventore quis corrupti quo mollitia id neque ipsam. Non dolorem odio voluptatem delectus sit dolores magni aliquam quis. Ea aut voluptatum et fuga hic inventore sint enim. Quia aut sunt omnis asperiores veniam maxime. Eos qui consectetur reiciendis repellat in aut minus.\n" +
						" \rSuscipit ut praesentium suscipit sequi magnam aut voluptas qui voluptas. Alias officiis occaecati. Velit et et inventore qui deserunt expedita necessitatibus excepturi voluptatem. Et soluta quas consequatur.\n" +
						" \rSed magnam ad. Nobis quo dolores error error nemo veniam maxime. Quam suscipit facere voluptatem suscipit voluptatem amet cum.\n" +
						" \rAssumenda voluptas est voluptatum architecto nesciunt in eum optio assumenda. Nisi amet eius animi facere. Ipsa impedit consequuntur ut earum tempora ea et. Ut unde quia. Modi nisi quam accusantium inventore corrupti numquam blanditiis quae.\n" +
						" \rQuam tempora et dignissimos quidem officia. Ratione eos aut autem. Impedit assumenda doloremque in est ex quo consequuntur animi.\n" +
						" \rQuis porro sunt ut et id inventore. Sunt reprehenderit et non eligendi veniam deleniti consequatur. Eveniet labore eos mollitia perspiciatis atque. Iste iste vel iste id molestiae. Molestiae a sit dolorum facere veritatis similique debitis. Dolore ut nostrum corrupti.\n" +
						" \rInventore provident omnis quibusdam rerum magnam eveniet. Minus id quae sed odio aliquid velit doloremque tenetur vel. Fugit doloribus est voluptatem aut facere accusamus ipsa quo maxime.\n" +
						" \rAut perspiciatis dolorum laborum. Nemo nihil et quia enim modi illum odit unde. Et occaecati eveniet pariatur laudantium enim dignissimos distinctio repudiandae. Expedita voluptatibus quisquam sint enim aut in sunt voluptates vel.\n" +
						" \rCommodi facere fugiat totam est ut dolores odio sunt ea. Ducimus nam corrupti minus. Autem et sed odit ipsam sapiente voluptates praesentium. Autem voluptatem alias molestias aliquid dolore quia eveniet illum adipisci.\n" +
						" \rHarum quam libero modi id. Culpa maxime adipisci ad nemo earum est iste. Eaque neque ullam laudantium. Et rerum autem magnam dicta delectus ut. Placeat earum qui qui omnis.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 21,
					name: "Pinewood Reservoir Campground",
					address: "",
					city: "Loveland",
					lat: 40.365012,
					long: -105.28196,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/pinewood.jpeg",
					type: "vehicle",
					price: 41,
					description:
						"Qui vitae quos corrupti odit dolores praesentium laborum rerum alias. Est dolorem cum id quam est voluptatibus incidunt sit. Natus ducimus provident voluptas quia cupiditate quae. Et maiores maiores autem. Voluptates quos quia aut deserunt earum dolores aut eos. Illo quos sed est consequatur.\n" +
						" \rVel et aut tenetur consequatur consequuntur perspiciatis esse pariatur. Harum dolorum vitae incidunt cupiditate et enim rerum. Accusamus harum illo.\n" +
						" \rVoluptas earum ea quisquam amet occaecati aut. Voluptas id sint dicta ratione voluptatem et. Et qui qui.\n" +
						" \rDeleniti aperiam voluptatem laboriosam itaque numquam ut pariatur ea dignissimos. Facilis non aut officiis. Veritatis repellat exercitationem voluptatem sit tenetur.\n" +
						" \rEt voluptate explicabo quibusdam vero ut. Dolor laudantium pariatur iure eos. Commodi exercitationem deleniti non. Perspiciatis laboriosam sed quisquam natus autem quidem veniam.\n" +
						" \rEnim numquam iste aspernatur asperiores eum dolores. Ullam quis rerum ut consequatur consequatur. Qui dolores ducimus nulla explicabo voluptas ut.\n" +
						" \rVoluptas consequatur fuga repellendus et similique dolorum. Amet ducimus aut et culpa sed sed provident voluptatem. Explicabo nihil quod. Ut quia quisquam voluptatum repellat nobis quia. Tempora adipisci velit ut. Dignissimos quis consequuntur.\n" +
						" \rNihil maxime expedita ipsam magnam expedita minus illo. Illum aliquid corporis alias. Vero dicta animi. Corporis eos dolorem et fuga doloribus possimus pariatur animi. Delectus amet nostrum explicabo.\n" +
						" \rAtque aut molestiae. Ipsa beatae pariatur eum laborum molestiae dolores sed ipsam sint. Suscipit quidem esse deserunt qui dignissimos sequi. Totam voluptatibus delectus. Quisquam repellendus esse doloremque.\n" +
						" \rCupiditate nulla deserunt rem libero voluptatem alias omnis. Et et doloremque. Et quis qui est dicta dolor facilis explicabo.",
					capacity: 5,
					open: true,
				},
				{
					ownerId: 4,
					name: "Arapaho Bay Campground",
					address: "77 Arapaho Bay Rd",
					city: "Granby",
					lat: 40.131326,
					long: -105.768782,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/arapahoebay.jpeg",
					type: "vehicle",
					price: 90,
					description:
						"Labore cumque doloribus nulla nam deserunt amet voluptatem fugiat. Tempore quas debitis pariatur eveniet dicta voluptatem ab. Exercitationem aut est et voluptas autem. Nostrum quisquam voluptatum necessitatibus perspiciatis id fugit et non. Voluptatem exercitationem repellat libero fugiat.\n" +
						" \rLaudantium quaerat cupiditate qui voluptas. Sapiente blanditiis est ea laborum officia quibusdam. Voluptatum ea debitis nemo dolorum voluptas id at eius molestias. Laboriosam voluptatem iure.\n" +
						" \rVel ut eum rerum repellat assumenda doloribus quia ipsa. Ea in vel rerum deleniti dicta dolores error enim illo. Id sunt eos. Non aliquid repellat amet beatae voluptas doloremque voluptates distinctio. Autem quo rem sint distinctio aperiam saepe perferendis reiciendis. Eligendi delectus qui aliquam nemo est qui veniam accusantium.\n" +
						" \rSuscipit nesciunt ad perspiciatis ipsum. Sunt consequatur fuga beatae et asperiores autem tempora earum quia. Aperiam qui beatae facere quia voluptas omnis. Voluptatum autem voluptatum earum qui corrupti quo reiciendis quidem. Fugit aliquid nam.\n" +
						" \rAmet aliquam ut placeat ea quidem incidunt omnis occaecati. Voluptatem sint laborum nisi iste quibusdam. Aliquam distinctio quae autem qui ipsam consequatur. Voluptate laudantium suscipit accusamus ullam eos aliquam adipisci eum.\n" +
						" \rOccaecati quisquam impedit officia numquam voluptatem quam nihil perspiciatis. Non qui voluptate id hic consectetur nostrum. Modi quam a voluptatem aliquid et qui aspernatur veritatis. Quas iusto molestiae quo.\n" +
						" \rPariatur ipsa et enim occaecati illum nihil deserunt. In aut praesentium unde officia consequatur quia. Veniam voluptatem nostrum voluptatibus quasi aut consequuntur repellat voluptates.\n" +
						" \rDolor culpa nihil consequuntur. Quod tempora culpa excepturi maiores error officiis. Voluptatem et incidunt error molestias velit. Ab omnis sunt sunt quaerat. Incidunt provident blanditiis excepturi. Qui rerum laboriosam tempore qui quaerat nesciunt tempora tenetur.\n" +
						" \rTotam sed omnis laborum. Nesciunt dolor ex. Tempora eius fugiat dolor velit voluptas quia quo aut ullam.\n" +
						" \rUnde libero voluptatem distinctio est. Quia aut pariatur. Ab ipsum occaecati repellat vel temporibus rerum. Illum sed accusantium ut iste.",
					capacity: 5,
					open: true,
				},
				{
					ownerId: 13,
					name: "Moraine Park Campground",
					address: "",
					city: "Estes Park",
					lat: 40.362349,
					long: -105.604769,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/morainepark.jpeg",
					type: "rv",
					price: 13,
					description:
						"Id asperiores et. Et accusamus aliquid. Totam sunt esse dolorem ad id. Impedit eum dolorem et doloribus ab error. Ipsum fugit harum sit odit. Unde sunt aperiam ad sint sit nemo nihil.\n" +
						" \rQuo laborum id voluptatem. Quaerat eos error odit beatae debitis. Totam quod ipsum repellat.\n" +
						" \rAut cum debitis. Itaque ut exercitationem quas est qui nihil. Quia officiis quia quis minima accusantium delectus consequatur nihil.\n" +
						" \rEt dolore placeat et aut architecto nulla. Quidem eius beatae ab deleniti ex voluptatem blanditiis. Odio sunt eum explicabo quis.\n" +
						" \rUt ullam animi id quam sunt magnam. Tempora repellat rerum nihil similique aut unde laboriosam quasi. Error non non consequatur eius consectetur voluptatem. Quia beatae sit non molestiae. Omnis in omnis vel. Et vel iste exercitationem.\n" +
						" \rImpedit ipsam nostrum eveniet ipsum sunt repellat magni omnis. Ullam molestias aut odit. Est deserunt fuga rem aut quos quos iste excepturi beatae.\n" +
						" \rQuod ratione consequatur. Accusamus dicta ullam eaque nihil necessitatibus pariatur voluptatem autem. Et perferendis doloribus maiores voluptatum. Tenetur similique earum. Consequatur beatae eveniet velit nihil aut quos earum corporis. Voluptatem culpa eligendi consequatur voluptatem quisquam sed rerum.\n" +
						" \rDolor et soluta aut nihil. Asperiores aut distinctio quis minus aut dolor odio soluta qui. Velit ab magni. Ex aut ratione atque. Voluptatem et expedita et est eos soluta assumenda et optio. Debitis nisi iure ut numquam alias atque exercitationem.\n" +
						" \rEt nihil fuga. Quos fuga qui doloribus molestiae quae. Eum rerum fuga animi recusandae sapiente impedit sit atque exercitationem. Consequatur qui cum omnis velit quidem a nulla fuga iste.\n" +
						" \rOfficia rem expedita et eveniet ut voluptatem ea architecto recusandae. Sed voluptas eligendi expedita dicta explicabo et voluptatem. Ut quia iusto pariatur eos eligendi est ea.",
					capacity: 8,
					open: false,
				},
				{
					ownerId: 17,
					name: "Grizzly Creek Campground",
					address: "",
					city: "Coalmont",
					lat: 40.569543,
					long: -106.600919,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/grizzlycreek.jpeg",
					type: "vehicle",
					price: 11,
					description:
						"Voluptatem aliquam consequuntur occaecati recusandae ea ut a molestiae. Eius quibusdam ut sit et. Provident consequatur suscipit et quas. Omnis et deserunt atque vero. Deserunt molestiae aut. Dolorum aliquid consequatur quia dicta.\n" +
						" \rExercitationem sit aliquid consequatur et quasi autem saepe aut perferendis. Dicta ut et nobis enim dolorem accusamus. Tempore aut numquam. Quibusdam molestiae aut a enim in distinctio et repellat aliquam. Sint doloribus vel facere consequuntur possimus vitae et voluptas rerum.\n" +
						" \rDoloribus delectus sed expedita delectus at officia recusandae officia debitis. Voluptatibus quia quisquam est ducimus rerum voluptas. Mollitia atque officia. Itaque et et. Possimus voluptas aut. Et veritatis ut dolore.\n" +
						" \rQuis voluptatem optio qui. Eius eos sed dolorem magni veniam quia magni. Nostrum eligendi ut est sed et inventore quod rerum. Occaecati sequi suscipit dolore illo. Ex cumque in aut illo sit est magnam dolore. Odio et velit minima totam quasi totam quod autem.\n" +
						" \rVeritatis hic ducimus qui. Tenetur quaerat quo voluptas id veritatis commodi et debitis tenetur. Tempore exercitationem odio corrupti exercitationem et id voluptates maiores velit.\n" +
						" \rEt beatae inventore nam minus voluptatem occaecati mollitia. Fugit voluptatem aut ducimus porro. Rerum quia cupiditate.\n" +
						" \rFugit at saepe dolorum aut quo sint. Et libero expedita. Nesciunt molestias ipsa praesentium eos animi perferendis ab amet quia. Rerum id in omnis facere et autem id aut aspernatur. Quidem fuga modi. Laborum cumque exercitationem.\n" +
						" \rQui esse sint blanditiis cum expedita quis aut alias. Eligendi velit laudantium debitis corrupti nulla nulla et dolor nemo. Nesciunt sed facilis est sit qui autem et quae voluptatum.\n" +
						" \rDeserunt blanditiis fugiat ut asperiores aperiam sit sed asperiores ipsa. Blanditiis dignissimos alias at nesciunt asperiores eius. Ut maxime maxime at eum dolore et nemo.\n" +
						" \rFacere quam iste sint qui. Voluptas tenetur hic consectetur dolores tempora quis. Molestias reprehenderit quisquam et quos aliquam. Natus id hic dicta et itaque. Dolorem magni exercitationem quia.",
					capacity: 5,
					open: true,
				},
				{
					ownerId: 3,
					name: "Dry Lake Campground",
					address: "",
					city: "Steamboat Springs",
					lat: 40.549326,
					long: -106.780176,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/drylake.jpeg",
					type: "vehicle",
					price: 98,
					description:
						"Aut consectetur natus qui tenetur nostrum amet et. Commodi eligendi dolor. Maxime similique odit qui dignissimos veniam omnis.\n" +
						" \rAut quis eos nulla aut eaque qui laudantium nostrum. Beatae nesciunt animi omnis laborum magnam quia eligendi molestiae. Odio in ducimus ut maiores voluptate vel deserunt earum cumque. Magni harum est at in eos libero itaque. Voluptas debitis nulla expedita veniam. Aperiam dolores eius qui.\n" +
						" \rAmet vitae consectetur amet natus architecto ut sed. Fuga enim magni et qui tempore consequatur. Omnis perspiciatis unde. In dolor odio vero tempora. Corporis dolores dicta fuga accusantium porro nihil a. Odit repellendus illo autem officia porro.\n" +
						" \rExercitationem adipisci necessitatibus ut odio saepe. Sit enim iure. Non nam sunt numquam vel ea voluptatum quaerat.\n" +
						" \rUt occaecati molestias sed odio. Et et et ut dolorem molestiae repudiandae omnis iusto. Maiores consequatur inventore enim qui eos officiis.\n" +
						" \rOmnis reprehenderit tempore odit debitis. Quia ea alias velit occaecati dicta. Facilis eum sit praesentium quia consectetur et quibusdam est recusandae. Nesciunt iste ea ipsum rerum ratione. Sapiente laborum eius occaecati est voluptatibus. Recusandae est et alias totam rerum.\n" +
						" \rQuia unde velit labore est voluptate earum vitae molestias. Neque tempore eos quia qui. Sed dolores odit provident perferendis nisi. Nostrum molestiae saepe. Porro impedit inventore voluptates.\n" +
						" \rNon quas labore. Vel velit officia odit optio. Quae aut aspernatur sint.\n" +
						" \rEum et consectetur enim. Maxime blanditiis voluptatibus dolores et dolorem earum. Eaque ab rerum explicabo ut.\n" +
						" \rCulpa est voluptatem dolorum non qui quia at repellendus molestias. Distinctio officiis nam praesentium dolorem sed. Quis ratione delectus rerum sit.",
					capacity: 5,
					open: true,
				},
				{
					ownerId: 21,
					name: "Hinman Park Campground",
					address: "",
					city: "Clark",
					lat: 40.753386,
					long: -106.83296,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/hinmanpark.jpg",
					type: "vehicle",
					price: 76,
					description:
						"In natus neque mollitia ipsam hic pariatur soluta dolorem voluptas. Ad id doloribus quasi inventore minima. Nulla voluptates corporis voluptatibus.\n" +
						" \rEum ipsa explicabo quam adipisci est quia excepturi. Quisquam magnam aut eos sequi eius molestiae. Sit ipsa omnis eligendi quam necessitatibus quis qui.\n" +
						" \rSequi quasi dolorem laudantium aut aperiam rerum. Qui et molestiae blanditiis. Iure alias molestias error illo eum.\n" +
						" \rNulla voluptatum consequatur earum molestias nostrum et nam consectetur. Sint accusantium animi in. Nihil consequatur velit et ut.\n" +
						" \rEt in tenetur. Assumenda aperiam vitae consequatur asperiores voluptas. Dolorem rerum itaque temporibus quis qui esse aliquam omnis dolorem. Distinctio saepe non rerum. Adipisci minima nisi veniam. Et explicabo omnis praesentium minima autem.\n" +
						" \rNumquam esse optio quis laborum repudiandae dolorem sed sit. Earum non ut impedit eos libero voluptas veniam laborum esse. Aspernatur laudantium molestias officiis vero asperiores non facilis. Fugiat sunt nobis. Harum eius fugit.\n" +
						" \rSit officiis nemo harum perspiciatis rerum omnis. Eligendi velit temporibus veniam qui cupiditate. Saepe et ipsam dolorem soluta libero qui.\n" +
						" \rEos ut aut quos tempora laborum. Veniam ipsam voluptatem est perferendis. Facere nostrum sed. Non quasi voluptatem amet nam aut. Neque et magnam.\n" +
						" \rUt hic aut est architecto perferendis distinctio. Iusto quasi mollitia nulla sint. Exercitationem animi est et aut atque suscipit ut culpa. Iste ipsam non quae a aut non doloribus rerum est.\n" +
						" \rSimilique ab assumenda maiores ex assumenda in. Quia occaecati eaque eum vel hic assumenda ut quasi. Officiis quasi occaecati id dolores quia reprehenderit minima optio. Reprehenderit nobis totam nemo similique iste velit et esse.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 19,
					name: "North Fork Campground",
					address: "",
					city: "Meeker",
					lat: 40.080072,
					long: -107.434558,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/northfork.jpeg",
					type: "vehicle",
					price: 48,
					description:
						"Et quod molestiae magnam vitae suscipit. Qui veniam sed adipisci. Molestias officia sit sed commodi iusto. Quisquam ut voluptates rem magni architecto ut.\n" +
						" \rEum aliquid iusto ab mollitia aliquam. Enim quae et at at aliquid rerum consequuntur saepe et. Autem velit vitae aut tenetur qui. Aperiam magni libero. Odit officiis qui qui consequatur nemo deleniti animi eius.\n" +
						" \rRecusandae perferendis esse. Aut nisi nesciunt enim doloremque facilis rerum dolorem voluptatem. Perferendis et eos qui facere cum quas iste quas.\n" +
						" \rDolores tenetur vitae dolor qui sint eos. Corrupti eum excepturi est illum voluptatem officia sint. Eligendi amet et esse ut consequatur temporibus.\n" +
						" \rPorro quod tempora non voluptatem non. Dolorum consequatur et eum fuga quibusdam neque rerum. Earum vel doloremque et.\n" +
						" \rQuia odit error iste. Qui error quam et voluptate corporis incidunt natus exercitationem. Aut quia ut nihil neque mollitia qui at.\n" +
						" \rVoluptatum quidem non nemo ut. Ut itaque ea assumenda velit maxime. Optio et pariatur adipisci enim provident quia inventore tenetur recusandae.\n" +
						" \rEt expedita odit doloribus iure. Voluptatem est sit. Labore aut praesentium reprehenderit. Accusamus tempore culpa eos dolor.\n" +
						" \rNobis illum possimus quas laborum qui totam et voluptatem suscipit. Ad et accusantium tempore ut. Dolorum non qui quia beatae aliquid nemo dolor ducimus reprehenderit. Facere vitae accusantium dolores sed unde et sint non nihil.\n" +
						" \rUt et animi ab id praesentium commodi sed inventore. Omnis dignissimos saepe unde id dignissimos rerum rerum. Eos doloremque vitae qui neque autem. Dolore aut vero sint aperiam itaque possimus.",
					capacity: 7,
					open: true,
				},
				{
					ownerId: 14,
					name: "Big Joe Camp",
					address: "",
					city: "Maybell",
					lat: 40.551325,
					long: -108.810851,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/bigjoe.jpeg",
					type: "backpacking",
					price: 63,
					description:
						"Nostrum necessitatibus explicabo eaque. Eos itaque in doloribus eveniet occaecati tenetur illum ut. Esse quia sed aut. Et et voluptas dolorem assumenda facilis eius. Voluptatem nobis sit suscipit est omnis molestias tempore vero.\n" +
						" \rIn sit non distinctio. Qui velit voluptatem molestiae consectetur qui nihil. Voluptatem laboriosam veritatis occaecati reprehenderit quo laudantium hic. Et animi facilis porro sunt corrupti est libero.\n" +
						" \rCumque placeat nemo. Praesentium in autem debitis qui. Dignissimos autem accusamus. Omnis debitis et suscipit. Asperiores porro quod vero laboriosam molestiae nulla sunt quas. Fugiat est temporibus omnis excepturi sunt id voluptate.\n" +
						" \rAdipisci doloribus aut voluptatem. Voluptas et tenetur harum labore voluptatibus voluptatem rerum qui. Eaque temporibus magni repudiandae corporis voluptas corrupti soluta.\n" +
						" \rConsequatur laboriosam sunt voluptates perferendis dolor culpa quisquam blanditiis. Officia quaerat iste sit exercitationem itaque dicta maxime delectus. Rem dolores ad animi. Ut ex voluptas voluptates dignissimos quo. Dolor voluptas vel ea expedita nemo.\n" +
						" \rAtque non voluptatibus distinctio nesciunt voluptates enim cum voluptate error. Quae assumenda deleniti ratione. Id voluptatem ut vero.\n" +
						" \rNon voluptatem perferendis natus iste voluptatibus. Sapiente asperiores sunt sint enim. Quam ullam iste voluptatem beatae asperiores et qui. At in corrupti accusantium omnis deserunt. Eligendi ea sed dolorum accusamus fugiat.\n" +
						" \rEt incidunt fugit quidem id vel iusto deserunt aut molestiae. Reprehenderit fugit nam non laudantium. Provident et ex et consequatur accusantium sit id. Voluptatem laborum blanditiis est aliquid et.\n" +
						" \rHic dolorum culpa totam id tenetur ab quo id quasi. Nesciunt voluptas omnis consequatur expedita molestiae modi illum. Consequatur consequatur amet. Ea aperiam optio. Corporis ut aut et neque numquam ab rerum nemo doloribus. Sed iure maiores modi enim fugiat.\n" +
						" \rVitae in tempora in perferendis at et repellendus. Voluptatem dolore quasi officia culpa voluptas ea voluptates. Dolorem deserunt voluptates consequuntur quae quo odio.",
					capacity: 8,
					open: true,
				},
				{
					ownerId: 9,
					name: "Saddlehorn Campground",
					address: "",
					city: "Grand Junction",
					lat: 39.113051,
					long: -108.727335,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/saddlehorn.jpeg",
					type: "backpacking",
					price: 58,
					description:
						"Quo quae voluptate impedit est dolorem. Dicta tempore voluptatibus eos. Est aperiam voluptas et ut ea saepe dolor odit doloribus. Velit perferendis voluptatem aut ullam commodi qui qui. Enim praesentium animi aliquid eos aperiam odio perferendis aut non.\n" +
						" \rEt aut sapiente impedit quaerat quaerat quia reiciendis rerum. Et voluptatum aut. Eaque dignissimos eum voluptates doloribus qui deleniti. Quis eaque quas.\n" +
						" \rFuga delectus repudiandae ipsum cum reiciendis voluptates est sit. Veritatis et quo est recusandae error excepturi. Voluptas aut nisi inventore earum eaque. Soluta id aspernatur maiores commodi. Non facere sequi alias.\n" +
						" \rFugit repellat eum ut ex debitis voluptatem incidunt at. Velit sed dolor nihil repellendus laborum. Rerum qui iusto. Assumenda ea voluptatem ab aperiam quod recusandae labore et. Eum quibusdam beatae alias alias. Quia corrupti ad est debitis.\n" +
						" \rTenetur eos velit recusandae ipsum vel. Non accusantium quaerat ad quaerat aliquid. Qui cum qui et ut et velit eum accusamus sit. Dignissimos voluptatem fugiat. Consequuntur enim et molestias numquam reprehenderit culpa sequi rerum.\n" +
						" \rExercitationem quisquam placeat. Assumenda ut iure quisquam. Magnam dolor tempore. Sint aut cum sunt optio doloremque maiores ut libero vitae. Sint qui officiis accusamus sit quod voluptatum est voluptatum. Consectetur eos est occaecati eos.\n" +
						" \rVero et ut cupiditate atque enim modi ipsa. Laudantium esse a ut rerum eius quibusdam laudantium asperiores. Fugit dignissimos mollitia repellat voluptatem placeat.\n" +
						" \rQui accusantium rerum consequatur magni ad qui quam nobis. Ut beatae harum vero. Dolores doloribus in dolorem. Cum eligendi est laboriosam architecto. Voluptas neque deserunt possimus.\n" +
						" \rDucimus quo doloribus eius maiores hic aut. Perspiciatis quae ut nihil ipsa est iste excepturi. Saepe voluptatem aut aut illo. Corporis corporis vel placeat maxime. Iusto modi iste soluta vero itaque ipsam voluptas deserunt quam. Consequatur deserunt cum iure.\n" +
						" \rNisi doloribus neque. Animi vitae neque aut hic porro est tempore. Quam pariatur nobis eos. Ut dolores soluta laboriosam. Consequatur consectetur enim aut suscipit suscipit facilis vero incidunt perferendis.",
					capacity: 6,
					open: false,
				},
				{
					ownerId: 15,
					name: "Ute Campground",
					address: "",
					city: "Pagosa Springs",
					lat: 37.220513,
					long: -107.266577,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/utecamp.jpeg",
					type: "rv",
					price: 98,
					description:
						"Eum ratione et. Ex dolor necessitatibus et recusandae hic laborum minus. Aspernatur illo esse. Quibusdam consequatur ad debitis libero et ipsum eligendi. Rerum necessitatibus exercitationem. Dolore rerum et.\n" +
						" \rTempora eveniet dolor hic enim ad nihil vel. Velit quo nostrum tempora ut in. Sit quidem repudiandae repellendus.\n" +
						" \rEa accusantium numquam ex aspernatur et aut. Ratione eos esse. Voluptas labore sed vero in quos velit architecto fugiat. Nobis perspiciatis tenetur. Mollitia voluptatum aut. A excepturi velit.\n" +
						" \rDelectus veritatis repellendus. Nulla nostrum illum sit ut sint. Sed occaecati dolor quae quo quia aliquam aliquam aut quo. Deserunt voluptas eum et sapiente perferendis.\n" +
						" \rExcepturi et provident et non voluptatem modi delectus. Ut consequatur iste earum qui est nulla assumenda. Inventore quo quo minima molestias perspiciatis totam. Ea iusto quia cum.\n" +
						" \rAccusantium nemo non dolor voluptatum optio eaque suscipit. Neque quis repellendus nostrum. Est omnis debitis repellendus itaque voluptas et quis. Iusto rerum et eos et laudantium reiciendis enim aut consequuntur. Modi architecto accusantium non eum ut. Nostrum dolorem omnis eius in nostrum quos excepturi officia.\n" +
						" \rQui numquam fugiat vel. Libero ipsam natus ut deleniti. Rerum delectus dicta eum asperiores. Autem et aliquid ad.\n" +
						" \rSed vel aut aut est ex rerum libero sed architecto. Non natus et. Ut eum consequatur veniam eum tempore occaecati itaque saepe vel. Sed in repudiandae inventore adipisci voluptas. Beatae sit et quae nihil ea.\n" +
						" \rOfficiis debitis temporibus laboriosam magnam nulla sunt nisi sed ut. Dolore qui aut quasi provident vitae omnis sed veritatis laudantium. Quos minus dignissimos temporibus mollitia. Quia nobis quia quidem nemo eos. Voluptas et praesentium neque ut labore repellendus. Aut quo dolorem.\n" +
						" \rNon aut quia adipisci qui excepturi et ratione molestias itaque. Ullam unde qui enim eos sunt enim aspernatur. Corrupti voluptas necessitatibus rerum est fuga doloremque. Nulla maxime ut et unde unde rerum sint cumque. Dicta ducimus perspiciatis. Et nemo est hic.",
					capacity: 7,
					open: true,
				},
				{
					ownerId: 14,
					name: "Graham Creek Campground",
					address: "",
					city: "Vallecito",
					lat: 37.394108,
					long: -107.538176,
					imageUrl:
						"https://campbnb.s3.us-west-1.amazonaws.com/grahamcreek.jpeg",
					type: "tent",
					price: 85,
					description:
						"Sed voluptatibus saepe. Non animi consequatur. Quisquam praesentium aut dolorem assumenda ad. Quia rerum blanditiis commodi nostrum repellendus quos iusto adipisci occaecati.\n" +
						" \rAutem pariatur eos. Optio voluptatem officia. Quia maiores totam aut alias nulla. Reiciendis modi aliquam qui facilis rerum natus quo. Ab in rerum eveniet odio mollitia.\n" +
						" \rAutem eaque consequatur excepturi quaerat praesentium. Aliquid quod incidunt qui expedita ex deserunt. Dolores quos at.\n" +
						" \rVelit consectetur qui et qui. A sit qui. Quod nam vitae. Quas facilis molestiae debitis blanditiis quasi.\n" +
						" \rLaudantium tempora quis molestiae et est eveniet magnam. Modi voluptas harum similique qui assumenda voluptate. Ut rerum velit quasi occaecati nisi sit.\n" +
						" \rDolor eveniet ducimus enim ut ratione dignissimos officiis. Vero unde sapiente sit in repellendus tempore. Est consequatur rerum eos repudiandae perspiciatis inventore. Reiciendis saepe veniam enim exercitationem autem hic pariatur velit. A nisi voluptas laboriosam ut illum.\n" +
						" \rEst nihil voluptate repellat aut dolore corrupti et et rerum. Aperiam soluta rerum. Quas est sit quia excepturi deserunt temporibus nihil et eaque. Consequuntur molestias perspiciatis tempora veritatis rerum voluptas. Occaecati quo deleniti placeat omnis inventore. Culpa expedita et.\n" +
						" \rAliquam aliquid vel. Sed atque error architecto deserunt est cupiditate. Quibusdam nulla et maiores officiis libero et et cumque animi. Tenetur reiciendis ut hic rerum rerum nobis nemo consectetur. Voluptatem cupiditate eos dolores nesciunt architecto necessitatibus.\n" +
						" \rEius aut in. Voluptas laudantium eaque a cum maiores beatae vero sint tempora. Dignissimos optio qui asperiores consequuntur et ratione laboriosam quis libero. Dolor odio excepturi nesciunt voluptate.\n" +
						" \rUt odio consectetur. Ullam necessitatibus aut qui architecto maxime cumque facere ex. Repellendus unde impedit esse molestias vitae facilis cumque. Non quas quidem voluptatibus ea commodi hic qui libero.",
					capacity: 8,
					open: false,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Spots", null, {});
	},
};
