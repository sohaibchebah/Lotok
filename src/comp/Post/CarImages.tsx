import * as React from "react";

import { Card, CardContent } from "../../../@/components/ui/card";
import { Button } from "../../../@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../@/components/ui/carousel";
interface Props {
  id: number; 
  name : string; 
}
interface Imgs {
  imageList: Props[]; 
}
export function CarImages( {imageList} : Imgs ) {
  return (
    <Carousel className="bg-secondary-gray h-fit w-full max-md:overflow-hidden">
      <CarouselContent>
        {imageList.map((item, index) => (
          <CarouselItem key={index}>
            <div className=" p  max-h-[460px]    flex items-center justify-center">
              <Card className="  flex items-center justify-center">
                <CardContent className="  ">
                  <img
                    src={item.name}
                    alt="#"
                    className=" w-full h-[240px] sm:h-[340px]  md:h-[457px] "
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="" />
      <CarouselNext />
    </Carousel>
  );
}
