"use client";
import { ImageSliderProps } from "@/typings";
import Image from "next/image";
import { useState, useEffect } from "react";
import RightArrow from "../icons/RightArrow";
import LeftArrow from "../icons/LeftArrow";

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

  const moveImageLeft = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const moveImageRight = () => {
    if (currentImageIndex < previewImgSrcList.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className="flex justify-center mt-0.5">
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
            className="rounded"
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
          />
          <div className="absolute flex left-0 -translate-y-1/2 top-1/2 h-full">
            <button className="" onClick={() => moveImageLeft()}>
              <LeftArrow />
            </button>
          </div>
          <div className="absolute flex right-0 -translate-y-1/2 top-1/2 h-full">
            <button className="" onClick={() => moveImageRight()}>
              <RightArrow />
            </button>
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
                onClick={() => setCurrentImageIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
