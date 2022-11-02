import React from "react";

export default function GifGallery({ gifs }) {
  return (
    <div className="h-full w-full gap-3 items-center flex flex-row justify-center flex-wrap">
      {gifs.map((gif) => (
        <img
          key={gif.id}
          src={gif.images.downsized.url}
          alt=""
          height={"auto"}
        />
      ))}
    </div>
  );
}
