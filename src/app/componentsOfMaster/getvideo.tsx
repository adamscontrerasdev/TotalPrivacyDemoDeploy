import React from "react";
import VideoComponent from "./logicOFVideo";

const GetVideo = () => {
  return (
    <div className={` w-3/4 lg:w-1/2 py-5`}>
      <div
        className={`rounded-lg shadow-lg overflow-hidden`}
        style={{ boxShadow: "0px 0px 3px #fff, 0px 0px 30px #203adf" }}
      >
        <VideoComponent
          src="https://firebasestorage.googleapis.com/v0/b/tokin-privacy-storage.appspot.com/o/anuncioTokinPrivacy-2.0.mp4?alt=media&token=b1e9b436-7687-41d0-acbf-884a12389319"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default GetVideo;
