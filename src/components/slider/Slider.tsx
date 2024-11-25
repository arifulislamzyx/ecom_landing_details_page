import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import Button from "@/components/button/Button";
import { SliderProps } from "@/types/slider";

const Slider = ({
  children,
  headline,
  perView = 3,
  spacing = 15,
  breakpoints = {
    480: {
      slides: {
        perView: 1,
        spacing: 10,
      },
    },
  },
  loop = true,
}: SliderProps) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop,
    mode: "free",
    slides: {
      perView,
      spacing,
    },
    breakpoints,
  });

  //use for update rerated product in product deatails page
  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.update();
    }
  }, [children, perView, spacing, breakpoints, loop, instanceRef]);

  const goToPrev = () => instanceRef.current?.prev();
  const goToNext = () => instanceRef.current?.next();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        {headline && (
          <p className="text-xl md:text-3xl font-bold">{headline}</p>
        )}
        <div className="flex gap-2">
          <Button onClick={goToPrev} className=" text-primary-600">
            <CircleArrowLeft />
          </Button>
          <Button onClick={goToNext} className=" text-primary-600">
            <CircleArrowRight />
          </Button>
        </div>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>
    </div>
  );
};

export default Slider;
