"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

type ProjectImageSliderProps = {
  images: string[];
  title: string;
};

export default function ProjectImageSlider({
  images,
  title,
}: ProjectImageSliderProps) {
  const [activeImage, setActiveImage] = useState(0);

  const currentImage = images[activeImage];

  function nextImage() {
    if (images.length <= 1) return;
    setActiveImage((current) => (current + 1) % images.length);
  }

  function prevImage() {
    if (images.length <= 1) return;
    setActiveImage((current) => (current - 1 + images.length) % images.length);
  }

  useEffect(() => {
    setActiveImage(0);
  }, [images]);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div className="grid aspect-video place-items-center rounded-3xl border border-white/10 bg-white/5 text-slate-400">
        No preview image
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_0_45px_rgba(168,85,247,0.25)]">
      <div className="relative aspect-video">
        <Image
          key={currentImage}
          src={currentImage}
          alt={`${title} preview ${activeImage + 1}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1000px"
          className="object-cover transition-opacity duration-500"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#070419]/70 via-transparent to-transparent" />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition hover:bg-purple-500"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition hover:bg-purple-500"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                aria-label={`Show preview ${index + 1}`}
                onClick={() => setActiveImage(index)}
                className={`h-2 rounded-full transition-all ${
                  activeImage === index
                    ? "w-8 bg-purple-300 shadow-[0_0_12px_rgba(216,180,254,0.9)]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <div className="absolute left-4 top-4 z-10 rounded-full border border-white/15 bg-black/50 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-md">
            {activeImage + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}