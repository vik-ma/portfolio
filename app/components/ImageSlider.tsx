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
        <div className="flex flex-col h-80 justify-center">
          <Image
            className="mb-1"
            src={previewImgSrcList[currentImageIndex]}
            alt={`${name} Preview Image ${currentImageIndex + 1}`}
            width={300}
            height={200}
          />
        </div>
        <div className="flex justify-center">
          {previewImgSrcList?.map((imageSrc: string, index: number) => (
            <Image
              className="max-w-[50px] md:max-w-none border border-neutral-700 mr-0.5"
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
