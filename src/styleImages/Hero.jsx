import { useState, useEffect } from "react";
import  {useMyContext} from "../styleImages/Context";

const Hero = () => {

  const [data, setData] = useState([]);

  const { handleSelectedItem } = useMyContext();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=9")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-green-950 text-center my-4">
        Discovering the Yum for your Tum
      </h1>
      <div className="flex justify-between bg-green-200 border border-green-400 p-4 rounded-lg">

        <div className="w-1/2 flex flex-col gap-9">
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            reiciendis corrupti. Ab atque voluptates accusamus. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Fugit pariatur amet
            aliquam animi illo accusamus quos rem laudantium omnis, tenetur iste
            aperiam nihil quisquam minima tempore cupiditate alias molestias
            excepturi modi suscipit quidem! Reprehenderit dolorum, amet sed unde
            quidem vel voluptatem recusandae adipisci. Voluptates possimus ipsam
            incidunt aliquam asperiores quam.
          </p>
          <button className="bg-green-500 text-white font-semibold py-3 px-4 rounded-md w-48">
            Our Recipes
          </button>
        </div>

        <div className=" grid grid-cols-3 hover:shadow-lg gap-4">

          {data.map((item) => (

            <div
              key={item.id}
              className="w-32 relative h-32 border p-1 overflow-hidden border-green-500 bg-gray-100 rounded-md"
            >

              <button
                onClick={() => handleSelectedItem(item)}
                className="p-1 px-6 hover:bg-green-400 hover:text-white  hover:opacity-100 hover:font-bold absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 text-green-500 border border-green-500 rounded-md"
              >
                view
              </button>


              <img
                src={item.image}
                // alt={item.description}
                className="w-full h-full object-cover"
              />
              
            </div>
          ))}

        </div>




      </div>
    </>
  );
};

export default Hero;
