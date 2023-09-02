import "./globals.css";
import { ModalContextProvider } from "./context/ModalContext";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Viktor Magnusson",
  description: "Viktor Magnusson's Developer Portfolio",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalContextProvider>
          {props.modal}
          {props.children}
        </ModalContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
