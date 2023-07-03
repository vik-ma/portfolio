"use client";
import { ImageSliderProps } from "@/typings";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import RightArrow from "../icons/RightArrow";
import LeftArrow from "../icons/LeftArrow";
import CloseButton from "../icons/CloseButton";

export default function ImageSlider({
  name,
  previewImgSrcList,
  previewImgMainWidth,
  previewImgMainHeight,
  previewImgBase64DataList,
  previewImgMenuWidthList,
  previewImgMenuHeightList,
}: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(900);
  const [showFullImage, setShowFullImage] = useState<boolean>(false);
  const [isPreviewAnimOngoing, setIsPreviewAnimOngoing] =
    useState<boolean>(false);
  const [isFullSizeAnimOngoing, setIsFullSizeAnimOngoing] =
    useState<boolean>(false);

  const numImages: number = previewImgSrcList.length;

  const maxSlideIndex: number = numImages - 1;

  const fullImageRef = useRef<HTMLDivElement>(null);

  const onlyOneImage: boolean = maxSlideIndex === 0 ? true : false;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    return () =>
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        fullImageRef.current &&
        !fullImageRef.current.contains(event.target as Node)
      ) {
        setTimeout(() => {
          setShowFullImage(false);
        }, 100);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
    setShowFullImage(true);
  };

  return (
    <div className="flex justify-center mt-0.5">
      {showFullImage && (
        <div className="fixed top-0 left-0 bottom-0 right-0 z-20 bg-red-500/60 animate-fade">
          <div className="flex items-center justify-center h-screen">
            <div
              className={
                onlyOneImage
                  ? "relative rounded-lg p-4 main-image-container"
                  : "relative rounded-lg pt-2 pb-4 px-1.5 main-image-container"
              }
              ref={fullImageRef}
            >
              <div className="flex justify-end mb-2 mr-0.5">
                <button
                  className="rounded-lg py-1 pr-1.5 pl-2.5 bg-[#202020] hover:bg-stone-700 border border-[#464646cc]"
                  onClick={() => setShowFullImage(false)}
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
                    className="image-arrow-button pr-2"
                    onClick={() => moveImageLeft("full-size")}
                  >
                    <LeftArrow />
                  </button>
                )}
                <div>
                  <div className="max-w-[850px] full-sized-image-container">
                    <Image
                      className={isFullSizeAnimOngoing ? "animate-fade" : ""}
                      src={previewImgSrcList[currentImageIndex]}
                      alt={`${name} Preview Image ${currentImageIndex + 1}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="flex flex-col items-center mt-4">
                    <div className="flex flex-row">
                      {Array.from({ length: numImages }).map((item, index) => (
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
                      ))}
                    </div>
                  </div>
                </div>
                {!onlyOneImage && (
                  <button
                    className="image-arrow-button pl-2"
                    onClick={() => moveImageRight("full-size")}
                  >
                    <RightArrow />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center">
        <div
          className={`relative flex flex-col p-1.5 justify-center rounded-md main-image-container`}
          style={{
            width:
              windowWidth > 870
                ? `${previewImgMainWidth}px`
                : `${Math.floor(previewImgMainWidth * 0.7)}px`,
            height:
              windowWidth > 870
                ? `${previewImgMainHeight}px`
                : `${Math.floor(previewImgMainHeight * 0.7)}px`,
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
              windowWidth > 870
                ? previewImgMainWidth
                : Math.floor(previewImgMainWidth * 0.7)
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
                <LeftArrow />
              </button>
            )}
          </div>
          <div className="absolute flex right-0 -translate-y-1/2 top-1/2 h-full">
            {!onlyOneImage && (
              <button
                className="image-arrow-button"
                onClick={() => moveImageRight("preview")}
              >
                <RightArrow />
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
