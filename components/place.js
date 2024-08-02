import kangla from "@/public/places/kangla1.jpg";
import khongjom from "@/public/places/khongjom.jpg";
import marjing from "@/public/places/marjing.jpg";
import shirui from "@/public/places/shirui2.jpg"
import hiyang from "@/public/places/hiyang.jpg"
import loktak from "@/public/places/loktak.jpg"
import dzukou from "@/public/places/dzukou1.jpg";
import keibul from "@/public/places/keibul1.webp"
import govind from "@/public/places/govind1.jpg"
import cemetery from "@/public/places/cemetery1.jpg"


const place = [{
    id: "kangla",
    title: "Kangla Fort",
    photoUrl: kangla,
    address: " RW4V+X4M, Kangla, Imphal, Manipur 795001",
    description: "Kangla is a sacred place for the state and has a history of being the seat of the state\'s political power since 33 A.D. It is one of the most important tourist attraction in the state and holds special significance to state of Manipur and its people. The remains of this historic site bear the marks of the ancestral forefathers and the Kings who ruled Manipur till the British took over the state in 1891. The Kangla and its remains are living symbol of Manipur\'s civilization and its age old culture and traditions lies embedded here in its architecture. It is believed that Kangla was the first piece of dry land that emerged after continued submersion of the valley under water in the prehistoric times. The word 'Kangla' emphasizes the area of earth which freshly emerged as dry land at the spot where the Kangla Fort stands today.   The strategic location of Kangla at the heart of the Imphal city also makes it a most sought after tourist spot in Manipur. The nearby surroundings of Kangla Fort is dotted with iconic tourist spots like the World War II cemeteries maintained by the Commonwealth Graves Commission, Shree Shree Govindajee Temple, Ema Market and Shaheed Minar etc. which encourage travel enthusiasts, pilgrims and photographers  alike to visit Kangla and learn more the devout culture of the local inhabitants of Manipur.",
    link: "/explore/kangla"
},
{
    id: "khongjom",
    title: "Khongjom War Memorial Complex",
    photoUrl: khongjom,
    address: "Lamding Mamang Leikai, Thoubal, Manipur 795148",
    description: "The Khongjom War Memorial Complex is a war memorial site of the Anglo-Manipuri War, fought at Khongjom, Thoubal district of Manipur. The war memorial complex has the tallest sword statue of the world. The sword statue symbolizes the courage, dedication and patriotism of the freedom fighters of Manipur, who fought against the three sides of the charging attacks of the British Army, from Kohima, Silchar and Myanmar on the 23rd of April, 1891",
    link: "/explore/khongjom"
},
{
    id: "marjing",
    title: "Marjing Polo Statue",
    photoUrl: marjing,
    address: "VXH3+QJ, Heingang, Manipur 795002",
    description: "The Marjing Polo Statue is a colossal classical equestrian statue of a player of Sagol Kangjei, riding a Meitei horse, constructed at the Marjing Polo Complex, the sacred sports site dedicated to God Marjing, the ancient Meitei deity of polo and horses, in Heingang, Imphal East District, Kangleipak. It is the world's tallest statue of a polo player. It is built to commemorate the game of 'modern polo' being originated from Kangleipak.",
    link: "/explore/marjing"
},
{
    id: "hiyangthang",
    title: "Hiyangthang Lairembi Temple",
    photoUrl: hiyang,
    address: "PWG3+J73, Hiyangthang Mayai Leikai, Hiyangthang, Manipur 795009",
    description: "The Hiyangthang Lairembi Temple is an ancient temple of Goddess Hiyangthang Lairembi of Meitei religion. The sacred building is situated on the hilltop of Heibok Ching in the Hiyangthang, Manipur. Thousands of devotees thronged at the holy site during the festival time of Lai Haraoba of Sanamahism as well as Durga Puja of Hinduism.",
    link: "/explore/hiyangthang"
},
{
    id: "loktak",
    title: "Loktak Paat",
    photoUrl: loktak,
    address: "Loktak Lake, Moirang, Bishnupur District, Manipur",
    description: "For any visitor, the principal attraction of the state is the Loktak Lake in Bishnupur District which is 48kms from Imphal City and it is the largest fresh water lake in the North-East India. It is a beautiful stretch of water resembling a miniature inland sea. A day spent at Loktak Lake is a lifetime of memory. Visitors can catch a bird\'s eye view of the lake from Sendra. Fishermen living in floating islands called Phumdis in floating huts known as Phumsangs are unique sights of this lake. The Sendra Tourist Home with an attached Cafeteria is a sought after tourist spot. Boating and other water sports are organised here at Takmu Water Sports Complex.",
    link: "/explore/loktak"
},
{
    id:'shirui',
    title:'Shirui Kashung Peak',
    photoUrl:shirui,
    address:'Altitude of 2,835 m above sea level,Ukhrul,Manipur',
    description:'Shirui is 18 km from Ukhrul Town and 97 km from Imphal. It is the home of world famous Shirui (Siroy) Lily (Lilium Mackliniae).The name Shirui Lily originates from a British Botanist named F. Kingdom Ward who in 1948 discovered the uniqueness of this lily flower. The local name of the flower is Kashong Timrawon. According to local legends the Kashong Timrawon is also a protective spirit which resides on the Shirui Peak. Every year thousand of Scientists and Tourists all over the World come to see this precious flower. The ordinary looking Shirui lily blossoms on the hilltop during May - June.',
    link:"/explore/shirui"
},
{
    id:'dzukou',
    title:'Dzukou Valley',
    photoUrl:dzukou,
    address:'Manipur Nagaland Border',
   description:'Dzukou Valley is a mesmerizing destination on the border between Manipur and Nagaland, celebrated for its enchanting natural beauty. This stunning valley is renowned for its rolling hills, lush green landscapes, and a vibrant array of seasonal flowers, including the rare Dzukou lily. The valley becomes a paradise for trekkers, offering scenic trails through dense forests and breathtaking panoramic views. Beyond its picturesque scenery, Dzukou Valley holds cultural significance, symbolizing harmony between diverse communities. Whether you\'re an adventure seeker or a nature enthusiast, this tranquil haven promises a unique experience, combining adventure, serenity, and a deep connection to the natural world.' ,
   link:'/explore/dzukou'
},
{
    id:'govindajee',
    title:'Shree Shree Govindajee Temple',
    photoUrl:govind,
    address:'Wangkhei, Imphal,Manipur',
    description:'Shree Shree Govindajee Temple is a historic centre of the Vaishnavites in Manipur. It has a golden twin domed temple which attracts large number of devotees who participate in various devotional activities. Tourists are welcomed to come and join in the daily festivities at the historic Govindajee temple. The Temple was a part of the project for Development of Spiritual Circuit in Manipur, which covered the Shri Shri Govindajee Temple, Shri Bijoy Govindajee Temple, Shri Gopinath Temple, Shri Bungshibodon Temple and the Kaina Temple under Swadesh Darshan Scheme, 2016-2017.',
    link:'/explore/govindajee'
},
{
    id:'cemetery',
    title:'Imphal War Cemetery',
    photoUrl:cemetery,
    address:'Kabo Leika, Imphal, Manipur 795001',
    description:'The War Cemeteries in Imphal commemorates the memories of the British and Indian soldiers who died during the World War II. These War Cemeteries are managed by the Commonwealth War Graves Commission. Serene and well-maintained, the War Cemetery carries little stone markers and bronze plaques recording the sacrifices of those gallant soldiers.',
    link:'/explore/cemetery'
},
{
    id:'kbj',
    title:'Keibul Lamjao National Park',
    photoUrl:keibul,
    address:'Keibul Lamjao Rd,Bishnupur, Manipur 795133',
    description:'The park is located in the south western part of the Loktak lake. This is the last natural habitat of the brow-antlered deer(Sangai) the dancing deer of Manipur. Keibul Lamjao National Park is the only floating park in the world. A glimpse of the deer in this unique wetland ecosystem is a must for any wildlife enthusiast. Other wildlife to be seen include: Hog Deer, Otter, a host of water fowls and migratory birds, the latter usually sighted during November to March. The Forest Department of Manipur maintains watch towers and two rest houses within the park. Shooting game is prohibited there.',
    link:'/explore/kbj'
}

]
export { place };