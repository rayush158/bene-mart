import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Gaming PCs",
    image: "https://promotions.newegg.com/international/21-1780/pcs.png",
  },
  {
    _id: uuid(),
    categoryName: "Gaming Laptops",
    image: "https://promotions.newegg.com/international/21-1780/laptop2.png",
  },
  {
    _id: uuid(),
    categoryName: "Motherboards",
    image:
      "https://promotions.newegg.com/international/21-1780/motherboard1.png",
  },
  {
    _id: uuid(),
    categoryName: "Video Cards",
    image:
      "https://promotions.newegg.com/international/21-1780/graphiccard2.png",
  },
  {
    _id: uuid(),
    categoryName: "Storage",
    image: "https://promotions.newegg.com/international/21-1780/storage1.png",
  },
  {
    _id: uuid(),
    categoryName: "Memory",
    image: "https://promotions.newegg.com/international/21-1780/memory.png",
  },
  {
    _id: uuid(),
    categoryName: "Monitors",
    image: "https://promotions.newegg.com/international/21-1780/monitor.png",
  },
  {
    _id: uuid(),
    categoryName: "Cases",
    image: "https://promotions.newegg.com/international/21-1780/cases.png",
  },
];
