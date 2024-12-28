// components/VideoComponent.tsx
import React from "react";

interface VideoComponentProps {
  src: string;
  type?: string;
  width?: string;
  height?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  src,
  type = "video/mp4",
  width = "100%",
  height = "100%",
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
}) => {
  return (
    <video
      width={width}
      height={height}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      controlsList="nodownload"
      preload="none"
      playsInline
      poster="https://www.bulletproof.co.uk/assets/header-backgrounds/blogs/how-hackers-hide-hero-52b3e92ac080797e72b8407403fcd6d898fe2314fda5d8924650a07567828835.png"
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
