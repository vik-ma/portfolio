import { ArrowIconProps } from "@/typings";

export default function RightArrow({ color = "#bef264" }: ArrowIconProps) {
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
      <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
    </svg>
  );
}
