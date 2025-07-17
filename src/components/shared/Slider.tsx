'use client';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface EmblaCarouselProps {
    children: ReactNode,
    length: number
}

export default function Slider({ children, length }: EmblaCarouselProps) {

    const autoplay = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'center',
            containScroll: 'trimSnaps',
        },
        [autoplay.current]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollTo = useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <div>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex py-5">
                    {children}
                </div>
            </div>

            {
                length > 3 && <div className="flex justify-center mt-4 gap-2">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`cursor-pointer h-2 w-2 rounded-full ${index === selectedIndex ? 'bg-blue-900' : 'bg-blue-400'
                                }`}
                        />
                    ))}
                </div>}
        </div>
    );
}
