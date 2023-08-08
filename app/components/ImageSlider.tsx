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
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showFullImage, setShowFullImage] = useState<boolean>(false);
  const [isPreviewAnimOngoing, setIsPreviewAnimOngoing] =
    useState<boolean>(false);
  const [isFullSizeAnimOngoing, setIsFullSizeAnimOngoing] =
    useState<boolean>(false);
  const [windowResizeStage, setWindowResizeStage] = useState<number>(0);
  const [isScreenSmall, setIsScreenSmall] = useState<boolean>(false);

  const windowWidthRef = useRef<number>(0);

  const numImages: number = previewImgSrcList.length;

  const maxSlideIndex: number = numImages - 1;

  const fullImageRef = useRef<HTMLDivElement>(null);

  const onlyOneImage: boolean = maxSlideIndex === 0 ? true : false;

  const { setIsEnlargeModalOpen } = useModalContext();

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

  console.log(isScreenSmall, windowResizeStage);

  const resizeBp0: number = 870;
  const resizeBp1: number = 767;
  const resizeBp2: number = 639;
  const resizeBp3: number = 490;

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

  useEffect(() => {
    const handleResize = () => {
      const currWidth = window.innerWidth;

      if (currWidth > resizeBp1) {
        if (windowWidthRef.current <= resizeBp1) setWindowResizeStage(0);
      } else if (currWidth <= resizeBp1 && currWidth > resizeBp2) {
        if (
          windowWidthRef.current > resizeBp1 ||
          windowWidthRef.current <= resizeBp2
        )
          setWindowResizeStage(1);
      } else if (currWidth <= resizeBp2 && currWidth > resizeBp3) {
        if (
          windowWidthRef.current > resizeBp2 ||
          windowWidthRef.current <= resizeBp3
        )
          setWindowResizeStage(2);
      } else if (currWidth <= resizeBp3) {
        if (windowWidthRef.current > resizeBp3) setWindowResizeStage(3);
      }

      if (currWidth <= resizeBp0 && windowWidthRef.current > resizeBp0) {
        setIsScreenSmall(true);
      } else if (currWidth > resizeBp0 && windowWidthRef.current <= resizeBp0) {
        setIsScreenSmall(false);
      }

      windowWidthRef.current = currWidth;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const changeCurrentImageIndex = (index: number, imageId: string) => {
    setCurrentImageIndex(index);
    if (imageId === "preview") animatePreviewImageChange();
    if (imageId === "full-size") animateFullSizeImageChange();
  };

  const animatePreviewImageChange = () => {
    setIsPreviewAnimOngoing(true);

    setTimeout(() => {
      setIsPreviewAnimOngoing(false);
    }, 200);
  };

  const animateFullSizeImageChange = () => {
    setIsFullSizeAnimOngoing(true);

    setTimeout(() => {
      setIsFullSizeAnimOngoing(false);
    }, 200);
  };

  const showFullSizeImage = () => {
    if (isScreenSmall) {
      window.open(previewImgSrcList[currentImageIndex], "_blank");
    } else {
      setShowFullImage(true);
      setIsEnlargeModalOpen(true);
    }
  };

  const hideFullSizeImage = () => {
    setShowFullImage(false);
    setIsEnlargeModalOpen(false);
  };

  return (
    <div className="flex justify-center">
      {showFullImage && (
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
                    : "flex justify-end mb-2.5"
                }
              >
                <button
                  className="rounded-lg py-1 pr-1.5 pl-2.5 bg-red-500 hover:bg-stone-700 border border-neutral-300/40"
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
                      height={0}
                      // sizes="100vw"
                      // style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  {!onlyOneImage && (
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
            <div
              className={
                currentImageIndex === index
                  ? "mx-[1px] p-0.5 bg-lime-300 hover:bg-lime-300 rounded-sm"
                  : "mx-[1px] p-0.5 bg-stone-700 hover:bg-lime-300 rounded-sm"
              }
              key={`thumbnail-div-${index + 1}`}
            >
              <Image
                className="max-w-none max-[870px]:max-w-[50px] h-full cursor-pointer hover:opacity-70"
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
