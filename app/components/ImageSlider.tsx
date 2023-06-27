"use client";
import { ImageSliderProps } from "@/typings";
import Image from "next/image";
import { useState } from "react";

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

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div
          className={`flex flex-col p-1.5 justify-center bg-neutral-800 rounded-md border border-1 border-neutral-500`}
          style={{
            width: `${previewImgMainWidth}px`,
            height: `${previewImgMainHeight}px`,
          }}
        >
          <Image
            className="rounded m-auto"
            src={previewImgSrcList[currentImageIndex]}
            alt={`${name} Preview Image ${currentImageIndex + 1}`}
            width={previewImgMainWidth}
            height={previewImgMainHeight}
          />
        </div>
        <div className="flex justify-center mt-1">
          {previewImgSrcList?.map((imageSrc: string, index: number) => (
            <Image
              className="max-w-[50px] md:max-w-none border border-neutral-700 mx-[1px]"
              key={index + 1}
              src={imageSrc}
              alt={`${name} Preview Image ${index + 1}`}
              width={previewImgMenuWidthList[index]}
              height={previewImgMenuHeightList[index]}
              placeholder="blur"
              blurDataURL={previewImgBase64DataList[index]}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
