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
        <div className="mt-5">
            <Carousel
                height={400}
                withIndicators
            >
                {
                    images.map((src ,i) => (
                        <Carousel.Slide
                            className="flex justify-center items-center"
                        >
                            <img src={src} alt={`Slide ${i + 1}`} className="max-h-full ml-6" />
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
