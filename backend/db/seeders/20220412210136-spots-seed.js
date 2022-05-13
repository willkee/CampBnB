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
						"The Guanella Pass Campground is located about 7 miles south of Georgetown on the Gunaella Pass Scenic Byway. Visitors enjoy hiking and fishing in the area. Facilities: The campground is split into two loops by the county road and South Clear Creek. There are 18 sites in the campground. Elevan are suitable for RV camping and seven are more suitable for tents. Large RVs are not recommended on the byway. Each site has a tent pad, picnic table, fire ring and charcoal grill. The facility also provides hand pumps with potable water, vault toilets and trash dumpsters. There are not electric/water/sewer site hook-ups at this campground. Firewood is for sale at the campground. Natural Features: This campground is located at an elevation of 10,900 feet, so cold nights should be expected. Most of the sites are in the open, but there are some tent sites located among the spruce trees.",
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
						"Located on the eastern shore of Clear Lake. Wheelchair accessible. Clear Lake is not a natural lake but a reservoir created and managed under a long-term permit for agricultural irrigation off the forest.  The lake usually becomes increasingly shallow beginning in early July in order to meet these agricultural water rights needs.",
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
						"The Echo Lake Campground is located near its namesake lake at the base of Mount Evans along Highway 103. Visitors enjoy hiking, fishing and taking scenic drives along Mount Evans Road. Facilities: There are 17 sites available. Ten sites are suitable for RV camping and seven sites are suitable for tents. Each site is equipped with a picnic table and campfire ring. Other facilities include vault toilets, hand pumps with potable water and trash service. There are no electric/water/sewer site hook-ups at this campground. Firewood is for sale at the campground. Natural Features: Echo Lake Campground sits in a spruce forest near the shores of Echo Lake. The campground's 10,600 feet elevation creates chilly nights, even in summer, and its location on a mountain pass makes for windy conditions year-round. Recreation: Activities in the area include hiking in the Mount Evans Wilderness, fishing, scenic driving and wildlife viewing. Several trails leave directly from the campground.",
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
						"The Buffalo Creek Recreation Area is more than 50 miles of multi-use, non-motorized trails that tie into the Colorado Trail in several places. There are a lot of options available for riding or hiking. Some of the old logging roads provide two-track while connecting trails offer single track. It takes about an 1.5 hours to drive to this area from Denver. Please know and respect local area restrictions including; parking and camping in designated sites only. Developed camping is available at nearby Forest Service campgrounds including Buffalo, Green Mountain, Kelsey, and Meadows Group Campground.",
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
						"NOTICE: As of June 14, 2021 this campground will be closed until further notice. As of June 15, 2020, the water system at this campground is closed until further notice pending repairs. More information regarding this closure is posted at the entrance to the campground in accordance with Colorado Department of Public Health and Environment.Please ensure you bring enough water to serve your needs for the duration of your trip. At an elevation of 9,815', Geneva Park Campground offers cooler temperatures during summer months. Along the Guanella Pass Scenic Byway, this campground is near opportunities for wildlife viewing, scenic driving, landscape photography, hiking, mountain biking, and access to 4-wheel drive roads. No dump station, or hook-ups available.",
					capacity: 5,
					open: false,
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
						"This campground has a total of 47 campsites for tents, campers, trailers, or RVs. Picnic tables, fire grates, water, vault toilets, and trash services are provided. Not provided: electricity, hook-ups, dump stations, or showers. All campsites with a tent pad have a bear locker. Eight people are allowed per site except for units 12 and 32 which will accommodate 15 people each. Situated at the foot of the Continental Divide, Pawnee Campground is in a mature spruce-fir forest. Be prepared for cold and wet weather at any time. Hiking trails west of this campground enter into the Indian Peaks Wilderness.",
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
						"This campground offers 35 campsites plus a host site near the Crystal River. Bogan Flats Campground is located adjacent to the Crystal River. It is one of the most scenic and therefore popular campgrounds on the Sopris District. Bogan Flats Group Campground is 1/4 mile east of Bogan Flats Campground. Camping units for auto and trailer, pickup campers, motor homes and tents. No hook ups. Water available from faucets in the main campground 1/3 mile away. Campsites have table and benches, firerings, and spurs for parking. Paved campground roads. Attractions, Considerations & Nearest Services: Coffee Bar, Store - Marble (5 miles east); Grocery Store - Redstone (8 miles north) Gas Station - Carbondale (25 miles north); Dump Station - Glenwood Springs (35 miles northwest); Drug Store - Carbondale;  Physicians - Carbondale; Hospital - Glenwood Springs; Church - Marble/Redstone.",
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
						"Welcome to South Fork, Colorado, where the Rio Grande River flows from evergreen and aspen-covered mountains before it winds into the San Luis Valley! Visit us at South Fork Campground on your next trip to the Colorado Mountains. Whether your stay is for one night, a week, or a month, we will do our best to make your visit an enjoyable one. Our campground offers large RV spaces, riverfront spaces, fishing on the Rio Grande, and access to our large array of campground amenities.",
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
						"Red Bridge Campground is a short distance off of the Silver Thread National Scenic Byway. You'll find public fishing access to the Lake Fork of the Gunnison River, and access to the Lake Fork Spur scenic drive. Red Bridge Campground located on the Lake Fork of the Gunnison River and is a perfect place for someone to relax and fish. The campground has 7 campsites and 1 restroom. Each campsite has a parking spur, metal fire ring, and a picnic table. Potable water is not available at this campground. For more information, please contact the Gunnison Field Office.",
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
						"The campground has 18 sites among Aspen and mixed conifers, adjacent to the Conejos River.Gold Medal trout fishing (fly-fishing only) in the Conejos River. Hiking on numerous area trails. The campground, among Aspen and mixed conifer trees, with some sites overlooking the river. It is convenient to several trails, the resort community of Platoro and the Platoro Reservoir.",
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
						"The campground is comprised of a single large loop, surrounded by a grass meadow in a Ponderosa Pine grove. There are 19 sites, 4 are pull-through. The sites are large and well-spaced with sites #16, 17 and 18 on a dead-end spur with no turn around. The open areas are dotted with wildflowers. The campground is conveniently situated to State Hwy 114 for an overnight stay.",
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
						"The campground is situated at the base of Storm King Mountain (elevation 10,849). It lies in an Aspen glen amidst rolling and rocky hills on the Middle Fork of Carnero Creek. There are 11 campsites with tables, fireplaces and vault toilets available. There is no drinking water available here. Firewood is limited and no refuse receptacles are provided.  Fishing is found in area streams and mountain biking on forest roads.  4WD forest roads 685 and 684 are nearby.",
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
						"Alamosa Campground is on the Alamosa River 4.5 miles above Terrace Reservoir Dam. There are 5 campsites, one is pull through,  with tables and fireplaces, and ample parking. At present, there are no restrooms, vault type toilets will be installed later this summer. There is no water available, bring your own. There is public fishing at Terrace Reservoir and trail access to Alamosa-Rock Creek and Big Lake Trails. Maneuvering space for large trailers and recreation vehicles is limited. Naturally acidic water severely limits fishing in the Alamosa river between Stunner Campground and Terrace Reservoir.",
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
						"A short drive up the gravel road that leads to the Bureau of Land Management's Zapata Falls Campground (CG) will let visitors to the area see the San Luis Valley and Great Sand Dunes National Park & Preserve from a whole new perspective. The campground offers bird's-eye views of the valley floor below, the San Juan Mountains to the west, the adjacent Great Sand Dunes National Park and Preserve, and several 14er's and many other towering peaks of the Sangre de Cristo Mountain range that Zapata Falls CG sits on — not to mention spectacular sunrises, sunsets and night skies! Zapata Falls CG has 23 single campsites, 1 group site and 1 camp host site nestled among piñon pines along two one-mile long loops. The sites on one loop are designed for tent campers. Parking spurs on the second loop vary a little in length but in general can handle RVs, towed campers, or other configurations of vehicles up to about 50 feet long. A new trailhead in the campground supplies a link to the South Zapata Creek Trail and the Sangre de Cristo Wilderness. A second trail, next door to the campground in the day-use area, leads visitors on a mildly steep half-mile hike to Zapata Falls, which gives the campground its name.",
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
						"On the eastern side of the remote, high-mountain San Luis Valley, between the Blanca Massif and Crestone Needle, are the Great Sand Dunes, the tallest sand dunes in North America. The dunes cover approximately 39 square miles and rise to almost 750' above the valley floor. The dunes are the product of the wind and rain eroding the San Juan and Sangre de Cristo Mountains that ring the San Luis Valley. They have collected here because the prevailing winds across the valley blow in this direction. But here, at the foot of the mountians, the wind has to drop some of its load of sand in order to clear the mountains. So over the course of millenia, the dunes have built up to where they are today. And tomorrow they will be different because the wind still blows and still moves and deposits more sand here.",
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
						"Picture Canyon allows visitors to step back in time to discover remnants of Plains Indian cultures in rock art and early 20th century homestead remains. Its also an excellent site for viewing Bullock's oriole, Scaled quail, several species of towhees, wrens and sparrows, Ladder-backed woodpecker, Eastern phoebe and Blue grosbeaks. Scenic vistas, unique rock formations, gentle sandstone canyons and rolling hills, are the main attractions on the 13 miles of hiking and horseback riding trails that start here.",
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
						"Genoa sits 85 miles, respectively, from the eastern edge of Denver/ DIA and Colorado Springs. Located in Lincoln County, Colorado. About 5 miles east of the intersection of five state and federal highways: Interstate 70, U.S. 40/287, U.S. 24, CO 71 and CO 86. 8 hours travel to any location in Colorado and most portions of Nebraska, Wyoming, Kansas, Oklahoma, Texas, Utah and New Mexico. Full service RV Park. Dine in or take out great comfort foods. 24 hour laundry services. Game room with pool and darts. Choice selection of spirits, beer and wine. Professional Karaoke setup.",
					capacity: 8,
					open: true,
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
						"Akron began as a small camp along the railroad, halfway between McCook and Denver. It became a settlement, and soon was named Akron by the wife of a train engineer. She was fond of the name Akron, based from her hometown in Ohio. The name came from a Greek word meaning “an elevation”. At the elevation of 4,662 feet, Akron is the highest point from Denver to Chicago along the BNSF Railway. As the county seat for Washington County, Akron has much to offer to both the residents and travelers passing through. There are multiple food service options for every meal while you are in town. If you are in a hurry, there are two gas stations for snacks and fuel to get you down the road. South of town is the Akron Pond and Washington County Golf Club. Within town limits, Akron has three parks open year-round and one swimming pool that is open during the summer. The Akron Museum is open on Sundays in the summer from 2:00- 4:00 PM and has five different builds to explore and see the interesting history of the area. The Akron School District is home to the mighty Rams. Grades K-12 are all in one building, which makes it easy to host school events that get every age group involved. A major feature of the school building is the field-house (sports complex) that measures just over 10,000 square feet. There are many extracurricular activities the Akron School offers to students to see them succeed in both athletics and academics. Organizations at the school are very involved with the community and vise versa. The community and the school work hard to supporting each other and promoting success for everyone.",
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
						"Estes Park is a town in northern Colorado. It's known as a base for the Rocky Mountain National Park, home to wildlife including elk and bears, plus miles of trails. The park's Trail Ridge Road winds past craggy peaks, forests and tundra. Nearby are the wilderness areas of Roosevelt National Forest. The Estes Park Aerial Tramway connects the town to the summit of Prospect Mountain for views over the valley. ",
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
						"Near the Fall River Entrance. Douglas fir, lodgepole pine, ponderosa pine and the occasional Engelmann spruce forests the campground, offering equal amounts of sun and shade. Grasses, shrubs and seasonal wildflowers fill the open meadows. Aspenglen contains several drive-to family sites for tents and RVs. A few sites are more secluded, walk-to tent sites.",
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
						"Three hundred and twenty-seven acres of public lands encircle this idyllic 100-acre reservoir. Kayaking, camping and fishing make it the ideal place for a little fun in the mountains without driving too far. As part of the Colorado-Big Thompson Project to divert water from the West Slope to the East Slope for drinking water, irrigation and hydropower generation, the reservoir is jointly operated by the Bureau of Reclamation and the Northern Colorado Water Conservancy District, which manage water levels for irrigation, municipal and industry use. Larimer County manages recreation. Pinewood Reservoir requires entrance and camping permits, and is open year round. At 6,580 feet in elevation, it is west of Flatiron Reservoir, southwest of Loveland, Colorado, and northwest of Berthoud, Colorado.",
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
						"The Arapaho Bay Campground is located in the Arapaho National Recreation Area on Lake Granby, southeast of Grand Lake. Visitors enjoy the area for its great boating, fishing and hiking opportunities. Facilities: The campground offers three loops of single and double-family sites, a few of which are accessible. Each site is equipped with a picnic table, campfire ring and tent pad. Vault toilets, drinking water and trash collection are provided. Natural Features: The campground is situated on Arapaho Bay, on the eastern tip of Lake Granby, at an elevation of 8,300 feet. Afternoon thunder showers should be expected during the summer months. Due to the mountain pine beetle infestation and consequent hazardous tree removal, the campground offers little shade. Recreation: Lake Granby is part of the Arapaho National Recreation Area. It offers boating, sailing, swimming and fishing. Anglers can cast for kokanee salmon and a variety of trout. Numerous hiking and horseback riding trails are nearby in the Indian Peaks Wilderness, including the Roaring Fork Trail and the Cascade Creek Trail.",
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
						"Moraine Park Campground (8,160 feet) is located in Colorado's awe-inspiring Rocky Mountain National Park, near the Beaver Meadows Entrance on Highway 36. It is situated on the north side of Moraine Park, offering beautiful views of the vast park and the surrounding mountains.",
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
					type: "backpacking",
					price: 11,
					description:
						"The natural splendor at this primitive campground is nice, and when you go camping for a couple of days at a primitive campground like this one you're in fact camping.This camp ground is one of the good locations to camp here in the Park Range. This part of Colorado is always a pleasure to have a look at through camping season. At Grizzly Creek Campground amusing stuff to do is bountiful, and many people love to come here to get away. The nice local attractions and the nice variety of outdoors recreation will definitely have you coming back repeatedly. There's more to do near Grizzly Creek Campground other than just hanging out such as playing golf, hiking, and whitewater paddling, so most likely you want to stick around for a while.",
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
					type: "tent",
					price: 98,
					description:
						"Dry Lake Campground is located 8 miles northeast of Steamboat Springs, Colorado on the Buffalo Pass Road. This small campground is surrounded by Aspen, Spruce and Fir trees and is in a good location to access some great hiking and biking, one the roadway and the Spring Creek Trail. Camping limit is 14 days. It is within a reasonable driving distance of community events and the commercially operated Strawberry Park Hot Springs. Dry Lake has 8 campsites with tables and fireplace grates. Vault toilets and trash services are available. Trailer spaces are available with a maximum length of 20 feet.",
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
						"Hinman Park Campground has 13 campsites and is located near the Elk River. This campground recently underwent a timber sale and clean-up to remove hazard trees due to the mountain pine beetle outbreak. Camping limit is 14 days. The area offers trout fishing in the river, hiking, biking and horse back trails. The South Fork Trailhead is 0.25 miles away. This campground is located in North Routt County and is managed by the Hahns Peak/Bears Ears Ranger District.",
					capacity: 8,
					open: false,
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
						"The North Fork Campground is set in an aspen grove overlooking the North Fork of the White River. Most sites are widely spaced, and a heavy understory of tall grass and wild roses provides privacy. This is an ideal setting for guests seeking access to trails open to motorized recreation.",
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
						"Big Joe Camp is a campsite in Colorado at 5598ft. Big Joe Camp is situated nearby to Big Joe Rapid, and northwest of Schoonover Buttes. Campers may find numerous amenities with and a comfy place to pitch a tent. The surrounding area also offers outdoor enthusiasts the simple pleasure of being outside.",
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
					price: 22,
					description:
						"Saddlehorn Campground is located near the Saddlehorn Visitor Center, four miles from the west entrance (near Fruita, CO), and is the only established campground within the Monument. Free backcountry camping permits are available for people planning overnight backcountry trips. Overnighting in overlooks, picnic areas and other pull-offs is not permited.",
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
						"Ute Campground, just north of Hwy 160, has 26 campsites on a gentle, south-facing slope. Ponderosa pines give shade, but the area gets very warm in summer. There is one group campsite. The hillside above the campground offers excellent views of the pinnacles of Chimney Rock National Monument. Services include potable water, trash pickup, vault toilets, picnic tables, and fire grates.",
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
						"Graham Creek Campground is located near Vallecito Reservoir with 25 sites - 15 reservable sites and 10 non-reservable sites.  Some sites are surrounded by large trees while others are more open offering some sun and some shade. Underbrush separates campsites for privacy. The hillside sites are about 100 yards from the high-water line. Willows separate campground from lake but paths provide access to the shoreline. Sites are available for large RVs, although entrance and exit roads are steep. Services include water, trash pickup, fire grates, picnic tables, and pit toilets. The only commercial development on the east side of the reservoir is the resorts just north of Pine Point. They have most camper services, but gasoline is not available. The old rough, natural-surface boat ramp at the campground is closed to vessels larger than can be carried.  Trailered boats must use the boatramp on the west side of the lake after getting a Colorado Parks and Wildlife inspection.",
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
