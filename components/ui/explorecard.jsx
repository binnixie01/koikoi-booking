import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import kangla1 from "@/public/places/kangla1.jpg";
import khongjom1 from "@/public/places/khongjom.jpg";
import marjing1 from "@/public/places/marjing.jpg";
import hiyangthang1 from "@/public/places/hiyang.jpg"
import kangla2 from "@/public/places/kangla2.jpg";
import kangla3 from "@/public/places/kangla3.jpg";
import khongjom2 from "@/public/places/khongjom.jpg";
import marjing2 from "@/public/places/marjing.jpg";
import dzukou1 from "@/public/places/dzukou1.jpg";
import dzukou2 from "@/public/places/dzukou2.jpg";
import dzukou3 from "@/public/places/dzukou3.jpeg";
import dzukou4 from "@/public/places/dzukou4.jpeg";
import hiyangthang2 from "@/public/places/hiyang.jpg"
import khongjom3 from "@/public/places/khongjom.jpg";
import marjing3 from "@/public/places/marjing.jpg";
import hiyangthang3 from "@/public/places/hiyang.jpg"
import loktak1 from "@/public/places/loktak.jpg"
import loktak2 from "@/public/places/loktak2.jpg"
import loktak3 from "@/public/places/loktak1.jpg"
import govind1 from "@/public/places/govind1.jpg"
import govind2 from "@/public/places/govind2.jpeg"
import govind3 from "@/public/places/govind3.jpeg"
import shirui1 from "@/public/places/shirui1.jpeg"
import shirui2 from "@/public/places/shirui2.jpg"
import shirui3 from "@/public/places/shirui3.png"
import shirui4 from "@/public/places/shirui4.png"
import cemetery1 from "@/public/places/cemetery1.jpg"
import cemetery2 from "@/public/places/cemetery2.jpg"
import cemetery3 from "@/public/places/cemetery3.jpg"
import keibul1 from "@/public/places/keibul1.webp"
import keibul2 from "@/public/places/keibul2.jpg"
import keibul3 from "@/public/places/keibul3.jpeg"
import keibul4 from "@/public/places/keibul4.jpeg"

const images = {
  kangla: [kangla1, kangla2, kangla3],
  khongjom: [khongjom1, khongjom2, khongjom3],
  marjing: [marjing1, marjing2, marjing3],
  hiyangthang: [hiyangthang1, hiyangthang2, hiyangthang3],
  loktak: [loktak1, loktak2, loktak3],
  shirui: [shirui2, shirui1, shirui3, shirui4],
  dzukou: [dzukou1, dzukou2, dzukou3, dzukou4],
  govindajee: [govind1, govind2, govind3],
  cemetery: [cemetery1, cemetery2, cemetery3],
  kbj: [keibul1, keibul2, keibul3, keibul4]
}

export const ExploreCard = ({ card }) => {
  const image = images[card] || [] //card is the id of the place object
  return (
    <Carousel className="lg:w-full w-2/3 max-w-xs">
      <CarouselContent>
        {image.map((imageSrc, index) => (
          <CarouselItem key={index} className="flex justify-center items-center">
            <Card className="border-0 m-1 ">
              <CardContent className="flex items-center p-0 justify-center">
                <Image src={imageSrc} alt="picture" className="w-full h-full object-cover " width={500}
                  height={300} />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}