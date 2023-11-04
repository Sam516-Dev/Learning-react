import React, { useState } from "react";
import { useMyContext } from "./Context";
import { MdCancel } from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Modal = () => {
  const { selectedItem, setIsModalOpen, isModalOpen } = useMyContext();

  const handleCancelModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {selectedItem && isModalOpen ? (

        <div className="fixed z-10 inset-0 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-70">
          <div className="bg-white rounded-lg p-4 w-full max-w-4xl max-h-screen overflow-hidden">
           
            <div className=" relative flex justify-between gap-10">
             
              <div className=" w-full h-80 flex border  bg-white rounded-md p-1 border-green-500">
                <img
                  src={selectedItem.image}
                //   alt={selectedItem.description}
                  className="w-full h-full object-cover"
                />
              </div>

              <MdCancel
                onClick={handleCancelModal}
                className=" right-0 absolute hover:cursor-pointer  text-green-500 h-8 w-8"
              />

              <div className="flex flex-col px-1 gap-3 mr-8 bg-blue-00 ">
                <p className="text-gray-700 font-bold text-2xl ">
                  {selectedItem.category}
                </p>
                <p className="text-green-500 p-2  rounded-md bg-green-200   mb-4">
                  {selectedItem.title}
                </p>
                <p className="text-gray-700  mr-4 mb-4">
                  {selectedItem.description}
                </p>

                <p className="bg-green-500 p-3 w-36 text-white font-bold text-lg rounded-md ">
                  Ksh. {selectedItem.price * 10}
                </p>

                <div className="flex gap-3 items-center">
                  <span className="text-gray-700 font-semibold">
                    {selectedItem.rating.rate}
                  </span>

                  {Array.from({ length: selectedItem.rating.rate }).map(
                    (_, index) => (
                      <AiFillStar
                        key={index}
                        className="text-orange-500 h-5 w-5"
                      />
                    )
                  )}
                  {/* <AiOutlineStar className="text-gray-500 h-5 w-5" /> */}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      ) : <p> modal not open ! </p>}
    </>
  );
};

export default Modal;
