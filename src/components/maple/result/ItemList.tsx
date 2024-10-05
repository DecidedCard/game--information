import React, { useState } from "react";

import type { Item } from "@/types/maple/item";
import Image from "next/image";

const ItemList = ({ item }: { item: Item }) => {
  const [isView, setIsView] = useState(false);

  const onClickToggle = () => {
    setIsView(!isView);
  };
  console.log(item);
  return (
    <section className="flex flex-col gap-3 w-full">
      <div
        className={`grid grid-cols-3 gap-4 p-4 w-full border border-solid border-black rounded-md overflow-hidden ease-in-out duration-150 ${
          isView ? "max-h-[1500px]" : "max-h-[500px]"
        }`}
      >
        {item.item_equipment.map((item) => (
          <ul
            key={item.item_name}
            className="flex flex-col justify-center w-full h-40 border border-solid border-black rounded-lg"
          >
            <div className="flex gap-3 p-3">
              <Image
                src={item.item_icon}
                alt="아이템"
                width={100}
                height={100}
                className="my-auto w-8 h-fit"
              />
              <div className="flex flex-col">
                <p>{item.item_equipment_part}</p>
                <p>{item.item_name}</p>
                {item.starforce !== "0" && <p>⭐{item.starforce}</p>}
              </div>
            </div>
          </ul>
        ))}
      </div>
      <button
        onClick={onClickToggle}
        className="w-full h-10 border border-solid border-black rounded-lg"
      >
        {isView ? "접기" : "더보기"}
      </button>
    </section>
  );
};

export default ItemList;
