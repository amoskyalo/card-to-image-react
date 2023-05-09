import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  const posters = [
    {
      title: "Poster 1",
      description: "This is poster 1",
      img: "https://picsum.photos/200/300",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center ">
        {posters.map((poster, index) => (
          <MyComponent
            key={index}
            title={poster.title}
            description={poster.description}
            img={poster.img}
          />
        ))}
      </div>
      
    </>
  );
};

export default App;
