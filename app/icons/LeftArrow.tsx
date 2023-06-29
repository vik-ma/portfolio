import { ArrowIconProps } from "@/typings";

export default function LeftArrow({ color = "#bef264" }: ArrowIconProps) {
  return (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      stroke={color}
      strokeWidth="102.4"
    >
      <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"></path>
    </svg>
  );
}
