export interface ProjectsInfoProps {
    [key: string]: {
        name: string;
        shortDescription: string;
        fullDescription: string;
        cssId: string;
        cssGradient: string;
        techStack: string[];
        previewImgSrc: string;
      };
  };

export interface ProjectProps {
    project: {
        name: string;
        shortDescription: string;
        fullDescription: string;
        cssId: string;
        cssGradient: string;
        techStack: string[];
        previewImgSrc: string;
        };
};