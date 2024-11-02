import React from "react";
import CarouselImages from "./CarouselImages";

export default function CarouselContainer(){

    return(
        <div className="w-full items-center justify-center flex p-1 mt-4">
            <div className="w-[93%] h-full justify-center flex rounded-xl overflow-hidden">
                <CarouselImages />
            </div>
        </div>
    )
}