import React from "react";
import { Carousel } from '@mantine/carousel';

interface CarouselWithIndicatorsProps {
    images?: string[];
}

const CarouselWithIndicators: React.FC<CarouselWithIndicatorsProps> = ({
    images = [
        "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
        "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
        "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
    ],
}) => {
    return (
        <div>
            <Carousel
                height={500}
                withIndicators
            >
                {
                    images.map((src ,i) => (
                        <Carousel.Slide
                            className=""
                        >
                            <img src={src} alt={`Slide ${i + 1}`} className="w-full" />
                        </Carousel.Slide>
                    ))
                }
            </Carousel>
        </div>
    );
};
/*
                        

*/
export default CarouselWithIndicators;
