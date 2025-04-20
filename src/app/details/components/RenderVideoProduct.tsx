import React from "react";

interface Props {
  video: string;
  poster?: string;
}

export const RenderVideoProduct: React.FC<Props> = ({ video, poster }) => {
  return (
    <div className="w-full aspect-video max-w-2xl rounded-2xl overflow-hidden">
      {video && video !== "" ? (
        <video
          className="w-full h-full object-cover"
          controls
          poster={poster}
          controlsList="nodownload nospeed"
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <div className="w-full h-full bg-neutral-800 animate-pulse" />
      )}
    </div>
  );
};
