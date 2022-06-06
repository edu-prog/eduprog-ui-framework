import clsx from "clsx";
import _ from "lodash";
import React, { FC, useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./FullScreenSlider.scss";

export interface IFullScreenSliderLayout {
  image: string;
}

export type FullScreenSliderProps = {
  open?: boolean;

  slides: React.ReactNode[];

  onClose?: () => void;
};

const FullScreenSlider: FC<FullScreenSliderProps> = ({
  open = false,
  slides,
  onClose,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [deltaY, setDeltaY] = useState(0);

  const getLastSlideIndex = () => slides.length - 1;

  const slidesCount = () => slides.length;

  const getNextSlideIndex = () => {
    return Math.abs(slideIndex + 1) % slides.length;
  };

  const getPrevSlideIndex = () => {
    return Math.abs(slideIndex - 1) % slides.length;
  };

  const nextSlide = () => {
    const nextSlide = getNextSlideIndex();
    if (!nextSlide) {
      return onClose && onClose();
    }
    setSlideIndex(getNextSlideIndex());
  };

  const prevSlide = () => {
    const prevSlide = getPrevSlideIndex();
    console.log(prevSlide, getLastSlideIndex());
    if (prevSlide == getLastSlideIndex()) {
      return onClose && onClose();
    }
    setSlideIndex(getPrevSlideIndex());
  };

  const swipeableHandlers = useSwipeable({
    onSwipedUp: _.debounce(
      ({ velocity }) => {
        setDeltaY(0);

        if (velocity > 0.5) {
          onClose && onClose();
        }
      },
      500,
      { leading: true }
    ),
    onSwipedDown: _.debounce(
      ({ velocity }) => {
        setDeltaY(0);

        if (velocity > 0.5) {
          onClose && onClose();
        }
      },
      500,
      { leading: true }
    ),
    onSwiping: ({ deltaY }) => {
      setDeltaY(deltaY);
    },
  });

  // useEffect(() => {
  //   if (open) {
  //     setInterval(() => {
  //       nextSlide();
  //     }, 20000);
  //   }
  // }, [open, slideIndex]);

  useEffect(() => {
    console.log(deltaY);
  }, [deltaY]);

  return (
    <div className="FullScreenSlider">
      {open && (
        <>
          <div className="FullScreenSlider-wrapper">
            <div
              className="FullScreenSlider-control"
              {...swipeableHandlers}
              onClick={(event: React.MouseEvent) => {
                if (deltaY) {
                  return;
                }

                // @ts-ignore
                const elementSize = event.target.offsetWidth;
                if (event.clientX > elementSize / 2) {
                  nextSlide();
                } else {
                  prevSlide();
                }
              }}
              style={{ transform: `translate3d(0, ${deltaY}px, 0)` }}
            >
              <div className="FullScreenSlider-counter">
                {_.range(slidesCount()).map((item) => (
                  <div
                    key={item}
                    className="FullScreenSlider-counter-item"
                    style={{
                      width: `calc(100%/${slidesCount()} - 0.5rem)`,
                    }}
                  >
                    <div
                      className={clsx(
                        "FullScreenSlider-counter-item-static",
                        slideIndex > item &&
                          "FullScreenSlider-counter-item-active"
                      )}
                    ></div>
                    {slideIndex == item && (
                      <div className="FullScreenSlider-counter-item-processing"></div>
                    )}
                  </div>
                ))}
              </div>

              <div className="FullScreenSlider-content">
                {slides[slideIndex]}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FullScreenSlider;
