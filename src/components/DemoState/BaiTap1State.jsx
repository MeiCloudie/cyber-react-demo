// import React from "react"

import { useState } from "react"

const BaiTap1State = () => {
  const [selectCar, setSelectCar] = useState("black-car.jpg")

  const arrButton = [
    {
      icon: "./public/CarBasic/icons/icon-black.jpg",
      title: "Crystal Black",
      subTitle: "Pearl",
      selectCar: "black-car.jpg",
    },
    {
      icon: "./public/CarBasic/icons/icon-steel.jpg",
      title: "Modern Steel",
      subTitle: "Metallic",
      selectCar: "steel-car.jpg",
    },
    {
      icon: "./public/CarBasic/icons/icon-silver.jpg",
      title: "Lunar Silver",
      subTitle: "Metallic",
      selectCar: "silver-car.jpg",
    },
    {
      icon: "./public/CarBasic/icons/icon-red.jpg",
      title: "Rallye Red",
      subTitle: "Metallic",
      selectCar: "red-car.jpg",
    },
  ]

  return (
    <div>
      <h2>Bài tập hiển thị loại xe tương ứng bằng State</h2>
      <div className="flex">
        <div className="w-2/3">
          <img src={`./public/CarBasic/products/${selectCar}`} alt="" />
        </div>
        <div className="w-1/3 space-y-5">
          {arrButton.map((item, index) => {
            return (
              <button
                onClick={() => {
                  setSelectCar(item.selectCar)
                }}
                key={index}
                className="flex items-center py-2 px-5 rounded-lg border border-black w-full space-x-3"
              >
                <img width={40} src={item.icon} alt="" />
                <div className="text-left">
                  <b>{item.title}</b>
                  <p>{item.subTitle}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BaiTap1State
