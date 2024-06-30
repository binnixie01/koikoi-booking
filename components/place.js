import Image from "next/image";
import kangla from "@/public/places/kangla.jpg";
import khongjom from "@/public/places/khongjom.jpg";
import marjing from "@/public/places/marjing.jpg";
import mi from "@/public/places/mayangimphal.jpeg";
import hiyang from "@/public/places/hiyang.jpg"

export const Monument = ({ url }) => (
    // <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ">
    <Image src={url} alt="photo Monument" />
    // </div>
);

const place = [{
    id:"kangla",
    title: "Kangla Fort",
    photoUrl: kangla,
    address: " RW4V+X4M, Kangla, Imphal, Manipur 795001",
    description: "Kangla is a sacred place for the state and has a history of being the seat of the state’s political power since 33 A.D. It is one of the most important tourist attraction in the state and holds special significance to state of Manipur and its people. The remains of this historic site bear the marks of the ancestral forefathers and the Kings who ruled Manipur till the British took over the state in 1891. The Kangla and its remains are living symbol of Manipur’s civilization and its age old culture and traditions lies embedded here in its architecture. It is believed that Kangla was the first piece of dry land that emerged after continued submersion of the valley under water in the prehistoric times. The word 'Kangla' emphasizes the area of earth which freshly emerged as dry land at the spot where the Kangla Fort stands today.   The strategic location of Kangla at the heart of the Imphal city also makes it a most sought after tourist spot in Manipur. The nearby surroundings of Kangla Fort is dotted with iconic tourist spots like the World War II cemeteries maintained by the Commonwealth Graves Commission, Shree Shree Govindajee Temple, Ema Market and Shaheed Minar etc. which encourage travel enthusiasts, pilgrims and photographers  alike to visit Kangla and learn more the devout culture of the local inhabitants of Manipur.",
    link: "/explore/kangla"
},
{id:"khongjom",
    title: "Khongjom War Memorial Complex",
    photoUrl: khongjom,
    address: "Lamding Mamang Leikai, Thoubal, Manipur 795148",
    description: "The Khongjom War Memorial Complex is a war memorial site of the Anglo-Manipuri War, fought at Khongjom, Thoubal district of Manipur. The war memorial complex has the tallest sword statue of the world. The sword statue symbolizes the courage, dedication and patriotism of the freedom fighters of Manipur, who fought against the three sides of the charging attacks of the British Army, from Kohima, Silchar and Myanmar on the 23rd of April, 1891", 
    link: "/explore/khongjom"
},
{id:"marjing",
    title: "Marjing Polo Statue",
    photoUrl: marjing,
    address: "VXH3+QJ, Heingang, Manipur 795002",
    description: "", 
    link: "/explore/marjing"
},
{id:"hiyangthang",
    title: "Hiyangthang Lairembi Temple",
    photoUrl: hiyang,
    address: "PWG3+J73, Hiyangthang Mayai Leikai, Hiyangthang, Manipur 795009",
    description: "", 
    link: "/explore/hiyangthang"
},
{id:"mi",
    title: "Mayang Imphal Bungalow",
    photoUrl: mi,
    address: "",
    description: "", 
    link: "/explore/mi"
}

]
export { place };