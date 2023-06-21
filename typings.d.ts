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
        previewImgSrcList: string[];
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
        previewImgSrcList: string[];
        };
};