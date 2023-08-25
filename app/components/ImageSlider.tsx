"use client";
import { ImageSliderProps } from "@/typings";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import RightArrow from "../icons/RightArrow";
import LeftArrow from "../icons/LeftArrow";
import CloseButton from "../icons/CloseButton";
import { useModalContext } from "../context/ModalContext";

export default function ImageSlider({
  name,
  previewImgSrcList,
  previewImgMainWidth,
  previewImgMainHeight,
  previewImgBase64DataList,
  previewImgMenuWidthList,
  previewImgMenuHeightList,
  fullSizeImgMaxWidth,
}: ImageSliderProps) {
  // Index of which image is displayed in the main image container
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  // Boolean that tracks if the enlarged image modal is opened
  const [showFullImage, setShowFullImage] = useState<boolean>(false);
  // Short fade animation that plays when switching images in main image container
  const [isPreviewAnimOngoing, setIsPreviewAnimOngoing] =
    useState<boolean>(false);
  // Short fade animation that plays when switching images in the enlarged image modal
  const [isFullSizeAnimOngoing, setIsFullSizeAnimOngoing] =
    useState<boolean>(false);
  // useState that keeps track of the user's viewport width
  const [windowResizeStage, setWindowResizeStage] = useState<number>(0);
  // Boolean that is true if user's viewport width is smaller than the first resize breakpoint
  const [isScreenSmall, setIsScreenSmall] = useState<boolean>(false);

  // useRef that keeps track of the user window width before the last resize
  const previousWindowWidthRef = useRef<number>(0);

  const numImages: number = previewImgSrcList.length;

  const maxSlideIndex: number = numImages - 1;

  // Calculate the height of the enlarged image based on its width
  const fullSizeImgMaxHeight: number = Math.floor(
    (previewImgMainHeight / previewImgMainWidth) * fullSizeImgMaxWidth
  );

  // useRef for the enlarged image modal
  const fullImageRef = useRef<HTMLDivElement>(null);

  const onlyOneImage: boolean = maxSlideIndex === 0 ? true : false;

  // useContext boolean variable that is true if the enlarged image modal is opened
  const { setIsEnlargeModalOpen } = useModalContext();

  // List of what the width of the main image container should be at different viewport widths
  const imageResizeList: number[][] = [
    [previewImgMainWidth, previewImgMainHeight],
    [
      Math.floor(previewImgMainWidth * 0.9),
      Math.floor(previewImgMainHeight * 0.9),
    ],
    [
      Math.floor(previewImgMainWidth * 0.8),
      Math.floor(previewImgMainHeight * 0.8),
    ],
    [
      Math.floor(previewImgMainWidth * 0.7),
      Math.floor(previewImgMainHeight * 0.7),
    ],
  ];

  // Viewport width breakpoints for when component should rerender after a window resize
  const resizeBp0: number = 870;
  const resizeBp1: number = 767;
  const resizeBp2: number = 639;
  const resizeBp3: number = 490;

  // Set windowResizeStage and isScreenSmall on page load
  useEffect(() => {
    const currWidth = window.innerWidth;

    if (currWidth > resizeBp1) {
      setWindowResizeStage(0);
    } else if (currWidth <= resizeBp1 && currWidth > resizeBp2) {
      setWindowResizeStage(1);
    } else if (currWidth <= resizeBp2 && currWidth > resizeBp3) {
      setWindowResizeStage(2);
    } else if (currWidth <= resizeBp3) {
      setWindowResizeStage(3);
    }

    if (currWidth > resizeBp0) {
      setIsScreenSmall(false);
    } else {
      setIsScreenSmall(true);
    }
  }, []);

  // useEffect that only rerenders the component when a resize breakpoint
  // has been passed, instead of every time the window is resized
  useEffect(() => {
    const handleResize = () => {
      const currWidth = window.innerWidth;

      if (currWidth > resizeBp1) {
        if (previousWindowWidthRef.current <= resizeBp1)
          setWindowResizeStage(0);
      } else if (currWidth <= resizeBp1 && currWidth > resizeBp2) {
        if (
          previousWindowWidthRef.current > resizeBp1 ||
          previousWindowWidthRef.current <= resizeBp2
        )
          setWindowResizeStage(1);
      } else if (currWidth <= resizeBp2 && currWidth > resizeBp3) {
        if (
          previousWindowWidthRef.current > resizeBp2 ||
          previousWindowWidthRef.current <= resizeBp3
        )
          setWindowResizeStage(2);
      } else if (currWidth <= resizeBp3) {
        if (previousWindowWidthRef.current > resizeBp3) setWindowResizeStage(3);
      }

      if (
        currWidth <= resizeBp0 &&
        previousWindowWidthRef.current > resizeBp0
      ) {
        setIsScreenSmall(true);
      } else if (
        currWidth > resizeBp0 &&
        previousWindowWidthRef.current <= resizeBp0
      ) {
        setIsScreenSmall(false);
      }

      previousWindowWidthRef.current = currWidth;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close enlarged image modal when user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        event.button === 0 &&
        fullImageRef.current &&
        !fullImageRef.current.contains(event.target as Node)
      ) {
        setTimeout(() => {
          hideFullSizeImage();
        }, 100);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  // Close enlarged image modal when user presses Escape
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        setTimeout(() => {
          hideFullSizeImage();
        }, 100);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const moveImageLeft = (imageId: string) => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(maxSlideIndex);
    }
    if (imageId === "preview") animatePreviewImageChange();
    if (imageId === "full-size") animateFullSizeImageChange();
  };

  const moveImageRight = (imageId: string) => {
    if (currentImageIndex < maxSlideIndex) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
    if (imageId === "preview") animatePreviewImageChange();
    if (imageId === "full-size") animateFullSizeImageChange();
  };

  // Change the current image to the specific one the user clicked on
  const changeCurrentImageIndex = (index: number, imageId: string) => {
    setCurrentImageIndex(index);
    if (imageId === "preview") animatePreviewImageChange();
    if (imageId === "full-size") animateFullSizeImageChange();
  };

  // Add short fade animation to main image container
  const animatePreviewImageChange = () => {
    setIsPreviewAnimOngoing(true);

    setTimeout(() => {
      setIsPreviewAnimOngoing(false);
    }, 200);
  };

  // Add short fade animation to enlarged image modal
  const animateFullSizeImageChange = () => {
    setIsFullSizeAnimOngoing(true);

    setTimeout(() => {
      setIsFullSizeAnimOngoing(false);
    }, 200);
  };

  // Open full sized image in new tab if user viewport width is small
  const showFullSizeImage = () => {
    if (isScreenSmall) {
      window.open(previewImgSrcList[currentImageIndex], "_blank");
    } else {
      setShowFullImage(true);
      setIsEnlargeModalOpen(true);
    }
  };

  // Close the enlarged image modal
  const hideFullSizeImage = () => {
    setShowFullImage(false);
    setIsEnlargeModalOpen(false);
  };

  return (
    <div className="flex justify-center">
      {showFullImage && (
        // Shows the enlarged image modal if true
        <div className="fixed top-0 left-0 bottom-0 right-0 z-20 bg-black/60 animate-fade">
          <div className="flex items-center justify-center h-screen animate-modal">
            <div
              className={
                onlyOneImage
                  ? "relative rounded-lg p-2 pt-1.5 main-image-container"
                  : "relative rounded-2xl pt-2 pb-3 px-2 main-image-container"
              }
              ref={fullImageRef}
            >
              <div
                className={
                  onlyOneImage
                    ? "absolute right-0 -top-11"
                    : "flex justify-end mb-[9px]"
                }
              >
                <button
                  className="rounded-lg py-1 pr-1.5 pl-2.5 bg-[#df4343] hover:bg-stone-700 border border-[#fc9d9d73] hover:border-[#464646cc]"
                  onClick={() => hideFullSizeImage()}
                >
                  <span className="inline-block align-middle font-bold text-xl text-stone-200">
                    Close
                  </span>
                  <span className="inline-block align-middle ml-1">
                    <CloseButton />
                  </span>
                </button>
              </div>
              <div className="flex flex-row justify-center items-stretch">
                {/* Displays arrow buttons to change image in slide if more than one preview image */}
                {!onlyOneImage && (
                  <button
                    className="image-arrow-button pr-2.5"
                    onClick={() => moveImageLeft("full-size")}
                  >
                    <div className="image-arrow-icon">
                      <LeftArrow />
                    </div>
                  </button>
                )}
                <div>
                  <div className="max-w-[850px] full-sized-image-container">
                    <Image
                      className={isFullSizeAnimOngoing ? "animate-fade" : ""}
                      src={previewImgSrcList[currentImageIndex]}
                      alt={`${name} Preview Image ${currentImageIndex + 1}`}
                      width={fullSizeImgMaxWidth}
                      height={fullSizeImgMaxHeight}
                      placeholder="blur"
                      blurDataURL={previewImgBase64DataList[currentImageIndex]}
                    />
                  </div>
                  {!onlyOneImage && (
                    // Display dots representing the preview images if more than one preview image
                    <div className="flex flex-col items-center mt-3">
                      <div className="flex flex-row">
                        {Array.from({ length: numImages }).map(
                          (item, index) => (
                            <div
                              className={
                                currentImageIndex === index
                                  ? "full-size-image-slider-dot bg-stone-800"
                                  : "full-size-image-slider-dot bg-white"
                              }
                              key={`full-size-image-slider-dot-${index}`}
                              onClick={() =>
                                changeCurrentImageIndex(index, "full-size")
                              }
                            ></div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
                {!onlyOneImage && (
                  <button
                    className="image-arrow-button pl-2.5"
                    onClick={() => moveImageRight("full-size")}
                  >
                    <div className="image-arrow-icon">
                      <RightArrow />
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center">
        <noscript>
          {/* Display error message if user has JavaScript disable */}
          <span className="rounded-xl font-semibold text-neutral-50 bg-red-500 px-2.5 py-1.5">
            Enable JavaScript to view images
          </span>
          <br />
          <br />
        </noscript>
        <p className="text-neutral-400 italic text-sm mb-0.5">
          {isScreenSmall
            ? "Tap image to open in new tab"
            : "Click to view larger image"}
        </p>
        <div
          className={`relative flex flex-col p-1.5 justify-center rounded-md main-image-container max-[490px]:max-w-[284px] max-sm:max-w-[325px] max-md:max-w-[366px]`}
          // Change the width and height of the main image based on the user's viewport width
          style={{
            width:
              windowResizeStage === 0
                ? `${imageResizeList[0][0]}px`
                : windowResizeStage === 1
                ? `${imageResizeList[1][0]}px`
                : windowResizeStage === 2
                ? `${imageResizeList[2][0]}px`
                : `${imageResizeList[3][0]}px`,
            height:
              windowResizeStage === 0
                ? `${imageResizeList[0][1]}px`
                : windowResizeStage === 1
                ? `${imageResizeList[1][1]}px`
                : windowResizeStage === 2
                ? `${imageResizeList[2][1]}px`
                : `${imageResizeList[3][1]}px`,
          }}
        >
          <Image
            className={
              isPreviewAnimOngoing
                ? "rounded cursor-zoom-in animate-fade"
                : "rounded cursor-zoom-in"
            }
            src={previewImgSrcList[currentImageIndex]}
            alt={`${name} Preview Image ${currentImageIndex + 1}`}
            width={
              windowResizeStage === 0
                ? imageResizeList[0][0]
                : windowResizeStage === 1
                ? imageResizeList[1][0]
                : windowResizeStage === 2
                ? imageResizeList[2][0]
                : imageResizeList[3][0]
            }
            height={previewImgMainHeight}
            placeholder="blur"
            blurDataURL={previewImgBase64DataList[currentImageIndex]}
            onClick={() => showFullSizeImage()}
          />
          <div className="absolute flex left-0 -translate-y-1/2 top-1/2 h-full">
            {!onlyOneImage && (
              <button
                className="image-arrow-button"
                onClick={() => moveImageLeft("preview")}
              >
                <div className="image-arrow-icon">
                  <LeftArrow />
                </div>
              </button>
            )}
          </div>
          <div className="absolute flex right-0 -translate-y-1/2 top-1/2 h-full">
            {!onlyOneImage && (
              <button
                className="image-arrow-button"
                onClick={() => moveImageRight("preview")}
              >
                <div className="image-arrow-icon">
                  <RightArrow />
                </div>
              </button>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-2">
          {previewImgSrcList?.map((imageSrc: string, index: number) => (
            // Show menu with thumbnails of all preview images in project
            <div
              className={
                currentImageIndex === index
                  ? "mx-[1px] p-0.5 bg-lime-300 hover:bg-lime-300 rounded-sm"
                  : "mx-[1px] p-0.5 bg-stone-700 hover:bg-lime-300 rounded-sm"
              }
              key={`thumbnail-div-${index + 1}`}
            >
              <Image
                className="max-w-none max-sm:max-w-[50px] h-full cursor-pointer hover:opacity-70"
                key={`thumbnail-image-${index + 1}`}
                src={imageSrc}
                alt={`${name} Preview Image ${index + 1}`}
                width={previewImgMenuWidthList[index]}
                height={previewImgMenuHeightList[index]}
                placeholder="blur"
                blurDataURL={previewImgBase64DataList[index]}
                onClick={() => changeCurrentImageIndex(index, "preview")}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
