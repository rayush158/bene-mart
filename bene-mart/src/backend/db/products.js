import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  // Category: 1 "Gaming PCs"
  {
    _id: uuid(),
    title: "ABS Challenger Gaming PC",
    discription:
      "Windows 11 Home - Intel i5 11400F - GeForce RTX 3050 - 16GB DDR4 3200MHz - 512GB M.2 NVMe SSD",
    price: "₹ 100,752",
    image:
      "https://c1.neweggimages.com/ProductImageCompressAll300/83-360-290-14.jpg?ex=2",
    categoryName: "Gaming PCs",
    deliveryType: "Free Shipping",
    rating: "3",
  },
  {
    _id: uuid(),
    title: "ABS Master Gaming PC",
    discription:
      "Windows 10 Home - Intel i5 11400F - GeForce RTX 3060 - 16GB DDR4 3000MHz - 512GB M.2 NVMe SSD",
    price: "₹ 110,390",
    image: "https://c1.neweggimages.com/ProductImage/83-360-205-07.jpg",
    categoryName: "Gaming PCs",
    deliveryType: "Shipping charges applied",
    rating: "4",
  },
  {
    _id: uuid(),
    title: "ABS Master Gaming PC",
    discription:
      "Windows 10 Home - Intel i7 11700F - GeForce RTX 3060 Ti - 16GB DDR4 3000MHz - 1TB M.2 NVMe SSD",
    price: "₹ 146,420",
    image:
      "https://c1.neweggimages.com/ProductImageCompressAll300/83-360-190-01.jpg?ex=2",
    categoryName: "Gaming PCs",
    deliveryType: "Free Shipping",
    rating: "4",
  },
  {
    _id: uuid(),
    title: "ABS Legend Gaming PC",
    discription:
      "Intel i9 12900K - EVGA RTX 3090 FTW3 Ultra - Corsair Vengeance RGB Pro 32GB (2x16GB) DDR4 3200MHz - 2TB Intel M.2 NVMe SSD - Corsair iCue 5000x Gaming Case",
    price: "₹ 432,293",
    image: "https://c1.neweggimages.com/ProductImage/83-360-231-15.jpg",
    categoryName: "Gaming PCs",
    deliveryType: "Free Shipping",
    rating: "5",
  },
  {
    _id: uuid(),
    title: "ABS Gladiator Gaming PC ",
    discription:
      " Windows 11 Home - Intel i7 10700F - GeForce RTX 3070 8GB - 16GB RGB DDR4 3200MHz - 1TB M.2 NVMe SSD",
    price: "₹ 166,515",
    image:
      "https://c1.neweggimages.com/ProductImageCompressAll300/83-360-280-20.jpg?ex=2",
    categoryName: "Gaming PCs",
    deliveryType: "Shipping charges applied",
    rating: "4",
  },
  {
    _id: uuid(),
    title: "Cyberpower Gaming PC",
    discription:
      "Master GM61000 Ryzen 5 5000 Series 5600G (3.90GHz) 8GB DDR4 500 GB M.2 NVMe SSD NVIDIA GeForce RTX 2060 Windows 11 Home 64-bit",
    price: "₹ 119,712",
    image: "https://c1.neweggimages.com/ProductImage/83-230-668-V01.jpg",
    categoryName: "Gaming PCs",
    deliveryType: "Free Shipping",
    rating: "5",
  },
];
