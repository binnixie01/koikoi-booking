import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image, { StaticImageData } from "next/image"
import kangla1 from "@/public/places/kangla.jpg";
import khongjom1 from "@/public/places/khongjom.jpg";
import marjing1 from "@/public/places/marjing.jpg";
import mi1 from "@/public/places/mayangimphal.jpeg";
import hiyangthang1 from "@/public/places/hiyang.jpg"
import kangla2 from "@/public/places/kangla2.jpg";
import khongjom2 from "@/public/places/khongjom.jpg";
import marjing2 from "@/public/places/marjing.jpg";
import mi2 from "@/public/places/mayangimphal.jpeg";
import hiyangthang2 from "@/public/places/hiyang.jpg"
import kangla3 from "@/public/places/kangla3.jpg";
import khongjom3 from "@/public/places/khongjom.jpg";
import marjing3 from "@/public/places/marjing.jpg";
import mi3 from "@/public/places/mayangimphal.jpeg";
import hiyangthang3 from "@/public/places/hiyang.jpg"
interface MyComponentProps{
    card:string|undefined;
}

const images={
    kangla:[kangla1,kangla2,kangla3],
    khongjom:[khongjom1,khongjom2,khongjom3],
    marjing:[marjing1,marjing2,marjing3],
    mi:[mi1,mi2,mi3],
    hiyangthang:[hiyangthang1,hiyangthang2,hiyangthang3]
}

export const ExploreCard:React.FC<MyComponentProps>=({card})=> {
    const image = images[card] ||[]
    return (
      <Carousel className="lg:w-full w-2/3 max-w-xs">
        <CarouselContent>
        {image.map((imageSrc:any, index:number) => (
            <CarouselItem key={index}>
                
              <div className="p-1">
                <Card className="border-0">
                  <CardContent className="flex items-center p-0 justify-center">
                    <Image src={imageSrc} alt="picture" className="w-full h-full object-cover" width={500}
                    height={300} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  }