import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function CarouselImages(){
    return(
        <Carousel className="w-full rounded-xl" infiniteLoop autoPlay dynamicHeight showStatus={false} showThumbs={false}>
            <div className="bg-green-500 h-full flex">
                <div className="w-[350px] h-[400px]">

                </div>
            </div>
            <div className="bg-orange-400 h-full" >
                
            </div>
            <div className="bg-purple-400 h-full" >
                
            </div>
            <div className="bg-emerald-400 h-full" >
                
            </div>
            <div className="bg-rose-600 h-full" >
                
            </div>
        </Carousel>
    )
}