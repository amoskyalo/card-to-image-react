import React from "react";
import MyComponent from "./MyComponent";
import pic from "./assets/pic.jpg";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import bluebg from "./assets/bluebg.jpeg";
const App = () => {
  const posters = [
    {
      title: "Poster 1",
      description: "This is poster 1",
      img: "https://picsum.photos/200/300",
    },
    {
      title: "Poster 2",
      description: "This is poster 2",
      img: "https://picsum.photos/200/300",
    },
    {
      title: "Poster 3",
      description: "This is poster 3",
      img: "https://picsum.photos/200/300",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-around items-center gap-4 w-full h-full bg-gray-100">
        {posters.map((poster, index) => (
          <MyComponent
            key={index}
            title={poster.title}
            description={poster.description}
            img={poster.img}
          />
        ))}
      </div>

      <div
        className="w-[32%] "
        style={{
          backgroundImage: `url(${bluebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1>MY AWARDS SHOW KENYA 2023</h1>
        <p>MEME LORD OF THE YEAR</p>
        <div className="flex justify-between items-center">
          <img
            src={pic}
            alt="img"
            className="w-[250px] h-[250px] rounded-lg bg-cover h-[250px]"
          />
          <div className="flex flex-col gap-1">
            <p>1 . Dial * 544 * 32 #</p>
            <p>2. Select The Voting Category</p>
            <p>3 .Search MY AWARDS SHOW KENYA 2023</p>
            <p>4 . Enter My Code ("23")</p>

            <p>5 . Confirm Amount and Votes</p>
            <p>6 . Confirm Payment</p>
          </div>
        </div>
        <p>Vote for me</p>
        <p>Arapmemes</p>
        <p>Contestant Code #445</p>
        <p className="w-[200px] h-[2px] bg-red-500" />
        <div className="bg-white p-4 flex justify-around items-center">
          <img src={logo1} alt="img" className="w-[50px] h-[50px]" />
          <img src={logo2} alt="img" className="w-[50px] h-[50px]" />
          <img src={logo3} alt="img" className="w-[50px] h-[30px]" />
        </div>
        <p className="bg-red-500 w-[100%]  ">gbhjknlm</p>
      </div>
    </>
  );
};

export default App;
