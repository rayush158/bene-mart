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
    logoImage:
      "https://c1.neweggimages.com/ProductImageCompressAll300/83-360-290-14.jpg?ex=2",
    categoryName: "Gaming PCs",
    deliveryType: "Free Shipping",
    rating: "3",
    stock: "10",
    discount: "20",
  },
  {
    _id: uuid(),
    title: "ABS Master Gaming PC",
    discription:
      "Windows 10 Home - Intel i5 11400F - GeForce RTX 3060 - 16GB DDR4 3000MHz - 512GB M.2 NVMe SSD",
    price: "₹ 110,390",
    logoImage: "https://c1.neweggimages.com/ProductImage/83-360-205-07.jpg",
    categoryName: "Gaming PCs",
    deliveryType: "Shipping charges applied",
    rating: "4",
    stock: "10",
    discount: "10",
  },
  {
    _id: uuid(),
    title: "ABS Master Gaming PC",
    discription:
      "Windows 10 Home - Intel i7 11700F - GeForce RTX 3060 Ti - 16GB DDR4 3000MHz - 1TB M.2 NVMe SSD",
    price: "₹ 146,420",
    logoImage:
      "https://c1.neweggimages.com/ProductImageCompressAll300/83-360-190-01.jpg?ex=2",
    categoryName: "Gaming PCs",
    deliveryType: "Free Shipping",
    rating: "4",
    stock: "10",
    discount: "20",
  },
  {
    _id: uuid(),
    title: "ABS Legend Gaming PC",
    discription:
      "Intel i9 12900K - EVGA RTX 3090 FTW3 Ultra - Corsair Vengeance RGB Pro 32GB (2x16GB) DDR4 3200MHz - 2TB Intel M.2 NVMe SSD - Corsair iCue 5000x Gaming Case",
    price: "₹ 432,293",
    logoImage: "https://c1.neweggimages.com/ProductImage/83-360-231-15.jpg",
    categoryName: "Gaming PCs",
    deliveryType: "Free Shipping",
    rating: "5",
    stock: "10",
    discount: "20",
  },
  {
    _id: uuid(),
    title: "ABS Gladiator Gaming PC ",
    discription:
      " Windows 11 Home - Intel i7 10700F - GeForce RTX 3070 8GB - 16GB RGB DDR4 3200MHz - 1TB M.2 NVMe SSD",
    price: "₹ 166,515",
    logoImage:
      "https://c1.neweggimages.com/ProductImageCompressAll300/83-360-280-20.jpg?ex=2",
    categoryName: "Gaming PCs",
    deliveryType: "Shipping charges applied",
    rating: "4",
    stock: "10",
    discount: "20",
  },
  {
    _id: uuid(),
    title: "Cyberpower Gaming PC",
    discription:
      "Master GM61000 Ryzen 5 5000 Series 5600G (3.90GHz) 8GB DDR4 500 GB M.2 NVMe SSD NVIDIA GeForce RTX 2060 Windows 11 Home 64-bit",
    price: "₹ 119,712",
    logoImage: "https://c1.neweggimages.com/ProductImage/83-230-668-V01.jpg",
    categoryName: "Gaming PCs",
    deliveryType: "Free Shipping",
    rating: "5",
    stock: "10",
    discount: "20",
  },

  // Category: 2 "Gaming Laptop"
  {
    _id: uuid(),
    title: "Lenovo 82JM0024US Gaming Laptop",
    discription:
      "Lenovo Legion 5 17ITH6H - 17.3 inches 144 Hz IPS - Intel Core i7 11th Gen 11800H (2.30GHz) - NVIDIA GeForce RTX 3060 Laptop GPU - 16 GB DDR4 - 512 GB PCIe SSD - Windows 11 Home - Gaming Laptop (82JM0024US )",
    specification: [
      "11th Gen i7-11800H Octa-core 2.40GHz- 4.60GHz",
      " 16GB DDR4 3200MHz RAM",
      " 512GB PCIe M.2 TLC SSD",

      "NVIDIA GeForce RTX 3060 6GB GDDR6 Dedicated",
      "1920 x 1080 144 Hz Full HD IPS 16:9 Display",
      " Up to 5 hr battery life",
      "4-cell Lithium Polymer 80Wh Battery Windows 11 OS",
    ],
    price: "₹ 66,442",
    logoImage:
      "https://c1.neweggimages.com/ProductImageCompressAll300/34-645-861-V01.jpg?ex=2",
    categoryName: "Gaming Laptop",
    deliveryType: "Free Shipping",
    rating: "5",
    stock: "10",
    discount: "20",
  },
  {
    _id: uuid(),
    title: "HP 16-e0020nr Gaming Laptop AMD Ryzen 5",
    discription:
      " HP Victus - 16.1 inches 60 Hz IPS - AMD Ryzen 5 5000 Series 5600H (3.30GHz) - AMD Radeon RX 5500M - 8 GB DDR4 - 512 GB PCIe SSD - Windows 11 Home 64-bit - Gaming Laptop (16-e0020nr) ",
    specification: [
      "AMD Radeon RX 5500M 4 GB GDDR6",
      "AMD Ryzen 5 5000 Series 5600H (3.30GHz)",
      "8GB Memory 512 GB PCIe SSD",

      "16.1 inches 1920 x 1080 IPS, micro-edge, anti-glare, 300 nits, 100% sRGB",
      "1 x HDMI 2.1",
      "1 x SuperSpeed USB Type-C 5Gbps signaling rate (DisplayPort 1.4, HP Sleep and Charge)",
      "3 x SuperSpeed USB Type-A 5Gbps signaling rate (1 with HP Sleep and Charge)",
    ],

    price: "₹ 144,307",
    logoImage:
      "https://c1.neweggimages.com/ProductImageCompressAll300/34-273-199-V02.jpg?ex=2",
    categoryName: "Gaming Laptop",
    deliveryType: "Shipping charges applied",
    rating: "4",
    stock: "6",
    discount: "20",
  },
  {
    _id: uuid(),
    title: "ASUS TUF Gaming F17 Gaming Laptop",
    discription:
      "ASUS TUF Gaming F17 Gaming Laptop, 17.3 inches 144Hz Full HD IPS-Type, Intel Core i7-11800H Processor, GeForce RTX 3050 Ti, 16GB DDR4, 512GB PCIe SSD, Gigabit Wi-Fi 6, Windows 10 Home, TUF706HEB-DB74",
    specification: [
      "NVIDIA GeForce RTX 3050 Ti 4GB GDDR6 Graphics up to 1585MHz at 60W (75W with Dynamic Boost 2.0)",
      "11th Gen Intel Core i7-11800H Processor (24M Cache, up to 4.6 GHz, 8 Cores)",
      "17.3 inches 144Hz FHD (1920 x 1080) IPS-Type display",

      "512GB PCIe NVMe M.2 SSD, 16GB DDR4 3200MHz RAM, Windows 10 Home",
      "Self-cleaning dual fans with anti-dust technology to extend system longevity",
      "Easy Upgrade Doors: Easily add or replace memory and storage, Wi-Fi 6 (802.11ax)",
      "RGB backlit keyboard rated for 20-million keystroke durability",
    ],

    price: "₹ 129,250",
    logoImage:
      "https://c1.neweggimages.com/ProductImageCompressAll300/34-235-964-V21.jpg?ex=2",
    categoryName: "Gaming Laptop",
    deliveryType: "Free Shipping",
    rating: "5",
    stock: "10",
    discount: "20",
  },
  {
    _id: uuid(),
    title: "Lenovo 82N600DUUS Gaming Laptop AMD Ryzen 9",
    discription:
      "Lenovo Lenovo Legion 7 16ACHg6 - 16.0 inches 165 Hz IPS - AMD Ryzen 9 5000 Series 5900HX (3.30GHz) - NVIDIA GeForce RTX 3080 Laptop GPU - 32 GB DDR4 - 2 TB PCIe SSD - Windows 11 Home 64-bit - Gaming Laptop (82N600DUUS )",
    specification: [
      "NVIDIA GeForce RTX 3080 Laptop GPU",
      "Boost Clock 1545 / 1710MHz, TGP 165W 16 GB GDDR6",
      "AMD Ryzen 9 5000 Series 5900HX (3.30GHz)",
      "16.0 inches 2560 x 1600 IPS 500nits Anti-glare, 165Hz, 100% sRGB, Dolby Vision, HDR 400, Free-Sync, G-Sync, DC dimmer, Factory Color Calibration",
      "1 x HDMI 2.1",
      "2 x USB 3.2 Gen 1",
      "1 x USB-C 3.2 Gen 2 (support data transfer and DisplayPort 1.4)",
    ],

    price: "₹ 217,794",
    logoImage:
      "https://c1.neweggimages.com/ProductImageCompressAll300/34-646-366-S01.jpg?ex=2",
    categoryName: "Gaming Laptop",
    deliveryType: "Free Shipping",
    rating: "5",
    stock: "10",
    discount: "20",
  },
  {
    _id: uuid(),
    title: "Lenovo thinkPad P15v Laptop",
    discription:
      "Lenovo Lenovo Legion 7 16ACHg6 - 16.0 inches 165 Hz IPS - AMD Ryzen 9 5000 Series 5900HX (3.30GHz) - NVIDIA GeForce RTX 3080 Laptop GPU - 32 GB DDR4 - 2 TB PCIe SSD - Windows 11 Home 64-bit - Gaming Laptop (82N600DUUS )",
    specification: [
      "Customized Lenovo thinkPad P15v Laptop",
      "15.6 inches IPS FHD Display",
      "Intel Core i7-11800H 2.3 - 4.6GHz",
      "32GB DDR4 RAM",
      "Upgraded 4TB NVMe SSD",
      "NVIDIA T600",
      "HDMI, Thunderbolt",
      "LAN, Wi-Fi, BT",
      "Windows 10 Pro",
    ],

    price: "₹ 210,077",
    logoImage: "https://c1.neweggimages.com/ProductImage/AA0SS211118dNjec.jpg",
    categoryName: "Gaming Laptop",
    deliveryType: "Free Shipping",
    rating: "5",
    stock: "10",
    discount: "20",
  },
];
