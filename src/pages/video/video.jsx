import React from "react";

const src =
  "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

const Video = () => {
  return (
    <div className="video">
      <iframe
        className="iframe"
        width="760"
        height="580"
        src={src}
        title="Youtube Player"
        frameborder="10"
        allowFullScreen
      />
    </div>
  );
};

export default Video;
