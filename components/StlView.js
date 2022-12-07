import Dropzone from "react-dropzone";
import { StlViewer } from "react-stl-file-viewer";
import { useState } from "react";

function StlView({ file }) {
  return (
    <div className="App">
      <StlViewer
        width={500}
        height={500}
        url="file"
        // url={file}
        groundColor="rgb(255, 255, 255)"
        objectColor="rgb(137, 137, 137)"
        skyboxColor="rgb(255, 255, 255)"
        gridLineColor="rgb(0, 0, 0)"
        lightColor="rgb(255, 255, 255)"
        volume={setvolume}
      />
    </div>
  );
}

export default StlView;
