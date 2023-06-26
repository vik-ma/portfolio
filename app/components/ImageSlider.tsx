"use client";
import { ImageSliderProps } from "@/typings";
import Image from "next/image";

export default function ImageSlider({
  name,
  previewImgSrcList,
  previewImgBase64DataList,
  previewImgWidthList,
  previewImgHeightList
}: ImageSliderProps) {
  return (
    <div className="flex">
      {previewImgSrcList?.map((imageSrc: string, index: number) => (
        <Image
          className="max-w-[50px] md:max-w-none"
          key={index + 1}
          src={imageSrc}
          alt={`${name} Preview Image ${index + 1}`}
          width={previewImgWidthList[index]}
          height={previewImgHeightList[index]}
          placeholder="blur"
          blurDataURL={previewImgBase64DataList[index]}
        />
      ))}
    </div>
  );
}
