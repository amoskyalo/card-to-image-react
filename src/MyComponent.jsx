import "./App.css";

import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import React, { useRef, useState, createRef } from "react";

function MyComponent({ title, description, img }) {
  const [componentRef, setComponentRef] = useState(createRef());

  return (
    <>
      <section className="flex flex-col">
        <div ref={componentRef}>
          <div
            className="  bg-red-500"
            style={{
              width: "300px",
              height: "300px",
            }}
          >
            <img src={img} alt="img" className="w-[300px] h-[250px]" />

            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <button onClick={() => exportComponentAsJPEG(componentRef)}>
              Export As JPEG
            </button>
            <button onClick={() => exportComponentAsPDF(componentRef)}>
              Export As PDF
            </button>
            <button
              onClick={() =>
                exportComponentAsPNG(componentRef, {
                  fileName: "my-png-image",

                  imageType: "image/png",
                })
              }
            >
              Export As PNG
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyComponent;
