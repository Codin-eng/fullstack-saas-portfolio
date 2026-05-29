"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { projectImages } from "./projectImages";

export default function ProjectGallery() {
  return (
    <PhotoProvider>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectImages.map((img, i) => {
          if (!img) return null; 

          return (
            <PhotoView key={i} src={img}>
              <img
                src={img}
                alt={`screenshot-${i}`}
                className="rounded-xl border border-gray-800 cursor-pointer hover:scale-[1.02] transition"
              />
            </PhotoView>
          );
        })}
      </div>
    </PhotoProvider>
  );
}