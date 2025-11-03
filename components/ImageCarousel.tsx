// app/projects/[id]/ImageCarousel.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-300">No images available for this project</p>
      </div>
    );
  }

  return (
    <div className="image-carousel position-relative">
      {/* Main Image */}
      <div className="carousel-main mb-4">
        <Image
          src={images[currentIndex]}
          alt={`Project screenshot ${currentIndex + 1}`}
          width={800}
          height={500}
          quality={100}
          className="rounded-2 shadow-lg w-100"
          style={{
            height: "500px",
            objectFit: "contain",
            backgroundColor: "#f8f9fa",
          }}
        />
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="carousel-btn carousel-btn-prev position-absolute top-50 start-0 translate-middle-y bg-white border-0 rounded-circle shadow"
            style={{ width: "50px", height: "50px", left: "20px" }}
          >
            <i
              className="ri-arrow-left-s-line fs-4"
              style={{ color: "black" }}
            ></i>
          </button>
          <button
            onClick={nextSlide}
            className="carousel-btn carousel-btn-next position-absolute top-50 end-0 translate-middle-y bg-white border-0 rounded-circle shadow"
            style={{ width: "50px", height: "50px", right: "20px" }}
          >
            <i
              className="ri-arrow-right-s-line fs-4"
              style={{ color: "black" }}
            ></i>
          </button>
        </>
      )}

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="carousel-thumbnails d-flex justify-content-center gap-3 mt-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`thumbnail border-0 rounded-2 p-1 ${
                index === currentIndex
                  ? "active border-primary border-2"
                  : "border"
              }`}
              style={{
                width: "80px",
                height: "80px",
                background: "none",
                cursor: "pointer",
              }}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-100 h-100 rounded-1"
                style={{ objectFit: "cover" }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="carousel-counter text-center mt-3">
          <span className="badge bg-dark bg-opacity-75 text-white px-3 py-2">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
}
