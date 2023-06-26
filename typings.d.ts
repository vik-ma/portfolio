import { ReactNode } from "react";

export interface ProjectsInfoProps {
    [key: string]: {
        name: string;
        shortDescription: string;
        fullDescription: ReactNode;
        cssId: string;
        cssGradient: string;
        techStack: string[];
        thumbnailImgSrc: string;
        thumbnailBase64Data: string;
        previewImgSrcList: string[];
        previewImgBase64DataList: string[];
        previewImgWidthList: number[];
        previewImgHeightList: number[];
      };
  };

export interface ProjectProps {
    project: {
        name: string;
        shortDescription: string;
        fullDescription: ReactNode;
        cssId: string;
        cssGradient: string;
        techStack: string[];
        thumbnailImgSrc: string;
        thumbnailBase64Data: string;
        previewImgSrcList: string[];
        previewImgBase64DataList: string[];
        previewImgWidthList: number[];
        previewImgHeightList: number[];
        };
};

export interface ImageSliderProps {
    name: string;
    previewImgSrcList: string[];
    previewImgBase64DataList: string[];
    previewImgWidthList: number[];
    previewImgHeightList: number[];
}
