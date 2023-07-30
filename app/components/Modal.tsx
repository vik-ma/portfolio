"use client";

import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import CloseButton from "../icons/CloseButton";
import { useModalContext } from "../context/ModalContext";

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { isEnlargeModalOpen } = useModalContext();

  const onDismiss = useCallback(() => {
    setTimeout(() => {
      router.back();
    }, 100);
  }, [router]);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isEnlargeModalOpen) onDismiss();
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onDismiss, isEnlargeModalOpen]);

  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/70 animate-fade"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="relative rounded-xl project-page-container animate-modal"
      >
        <div className="absolute align-middle -top-11 right-0">
          <button
            className="rounded-lg py-1 pr-1.5 pl-2.5 bg-[#202020] hover:bg-stone-700 border border-[#464646cc]"
            onClick={() => onDismiss()}
          >
            <span className="inline-block align-middle font-bold text-xl text-stone-200">
              Close
            </span>
            <span className="inline-block align-middle ml-1">
              <CloseButton />
            </span>
          </button>
        </div>
        <div className="px-4 py-3 md:py-4">{children}</div>
      </div>
    </div>
  );
}
