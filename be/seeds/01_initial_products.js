const allProducts = [
  // ========== 1. BADMINTON RACKETS (category: "rackets") ==========

  {
    id: "p1",
    name: "Yonex Astrox 100ZZ VA Badminton Racket",
    category: "rackets",
    brand: "yonex",
    price: 10000000,
    originalPrice: 12000000,
    status: "In stock",
    imageUrl: "/racketImage/yonex_100zz.jpg",
    images: [
      "/racketImage/yonex_100zz.jpg",
      "/racketImage/yonex_100zz(1).jpg",
      "/racketImage/yonex_100zz(2).jpg",
      "/racketImage/yonex_100zz(3).jpg",
    ],
    sizes: ["3u5", "3u6", "4u5", "4u6"],
  },

  {
    id: "p2",
    name: "Yonex Nanoflare 800 Badminton Racket",
    category: "rackets",
    brand: "yonex",
    price: 4769000,
    originalPrice: 5722800,
    imageUrl: "/racketImage/yonex_800pro.jpg",
    images: [
      "/racketImage/yonex_800pro(1).jpg",
      "/racketImage/yonex_800pro(2).jpg",
    ],
    sizes: ["3u5", "3u6", "4u5", "4u6"],
  },

  {
    id: "p3",
    name: "Victor Auraspeed 100X Ultra New 2025 Badminton Racket",
    category: "rackets",
    brand: "victor",
    price: 3800000,
    imageUrl: "/racketImage/victor_racket.jpg",
    images: [
      "/racketImage/victor_racket.jpg",
      "/racketImage/victor_racket(1).jpg",
    ],
    sizes: ["3u5", "3u6", "4u5", "4u6"],
  },
  {
    id: "p4",
    name: "Victor Brave Sword 12 Pro Badminton Racket",
    category: "rackets",
    brand: "victor",
    price: 3950000,
    imageUrl: "/racketImage/victor_racket(2).jpg",
    images: [
      "/racketImage/victor_racket(2).jpg",
      "/racketImage/victor_racket(3).jpg",
      "/racketImage/victor_racket(4).jpg",
    ],
    sizes: ["3u5", "3u6", "4u5", "4u6"],
  },
  {
    id: "p5",
    name: "Lining Axforce 90 Badminton Racket",
    category: "rackets",
    brand: "lining",
    price: 4100000,
    imageUrl: "/racketImage/lining_racket.jpg",
    images: [
      "/racketImage/lining_racket.jpg",
      "/racketImage/lining_racket(1).jpg",
    ],
    sizes: ["3u5", "3u6", "4u5", "4u6"],
  },
  {
    id: "p6",
    name: "Lining Halbertec 9000 Limited Edition Set - Olympic Paris 2024",
    category: "rackets",
    brand: "lining",
    price: 10000000,
    imageUrl: "/racketImage/lining_racket(2).jpg",
    images: [
      "/racketImage/lining_racket(2).jpg",
      "/racketImage/lining_racket(3).jpg",
      "/racketImage/lining_racket(4).jpg",
    ],
    sizes: ["3u5", "3u6", "4u5", "4u6"],
  },

  // ========== 2. BADMINTON SHOES (category: "shoes") ==========

  {
    id: "p7",
    name: "Yonex SHB 65Z3 Badminton Shoes",
    category: "shoes",
    brand: "yonex",
    price: 2800000,
    imageUrl: "/shoesImage/yonex_65z3.jpg",
    images: [
      "/shoesImage/yonex_65z3.jpg",
      "/shoesImage/yonex_65z3(1).jpg",
      "/shoesImage/yonex_65z3(2).jpg",
    ],
    colors: [
      {
        name: "White",
        price: 699000,
        img: "/shoesImage/yonex_65z3.jpg",
        images: [
          "/shoesImage/yonex_65z3.jpg",
          "/shoesImage/yonex_65z3(1).jpg",
          "/shoesImage/yonex_65z3(2).jpg",
        ],
      },
      {
        name: "White Red",
        price: 699000,
        img: "/shoesImage/yonex_shoes.jpg",
        images: ["/shoesImage/yonex_shoes(1).jpg"],
      },
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
  },
  {
    id: "p8",
    name: "Yonex Eclipsion Z Badminton Shoes",
    category: "shoes",
    brand: "yonex",
    price: 2950000,
    imageUrl: "/shoesImage/yonex_eclipsion.jpg",
    images: ["/shoesImage/yonex_eclipsion(1).jpg"],
    sizes: [38, 39, 40, 41, 42, 43, 44],
  },

  {
    id: "p9",
    name: "Victor C90Nlite A Badminton Shoes",
    category: "shoes",
    brand: "victor",
    price: 2500000,
    imageUrl: "/shoesImage/victor_shoes.jpg",
    images: [
      "/shoesImage/victor_shoes.jpg",
      "/shoesImage/victor_shoes(1).jpg",
      "/shoesImage/victor_shoes(2).jpg",
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
  },
  {
    id: "p10",
    name: "Victor S82 III AF Badminton Shoes",
    category: "shoes",
    brand: "victor",
    price: 2700000,
    imageUrl: "/shoesImage/victor_shoes(3).jpg",
    images: [
      "/shoesImage/victor_shoes(3).jpg",
      "/shoesImage/victor_shoes(4).jpg",
      "/shoesImage/victor_shoes(5).jpg",
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
  },

  {
    id: "p11",
    name: "Lining AYAU003-2 Badminton Shoes",
    category: "shoes",
    brand: "lining",
    price: 2600000,
    imageUrl: "/shoesImage/lining_shoes.jpg",
    images: [
      "/shoesImage/lining_shoes.jpg",
      "/shoesImage/lining_shoes(1).jpg",
      "/shoesImage/lining_shoes(2).jpg",
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
  },
  {
    id: "p12",
    name: "Lining AYZU019-1 Official Badminton Shoes",
    category: "shoes",
    brand: "lining",
    price: 2300000,
    imageUrl: "/shoesImage/lining_shoes(3).jpg",
    images: [
      "/shoesImage/lining_shoes(3).jpg",
      "/shoesImage/lining_shoes(4).jpg",
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
  },

  // ========== 3. BADMINTON SHIRTS (category: "shirts") ==========

  {
    id: "p13",
    name: "Yonex TRM3089 Jet Black Official Shirt",
    category: "shirts",
    brand: "yonex",
    price: 119000,
    imageUrl: "/shirtImage/yonex_shirt.jpg",
  },
  {
    id: "p14",
    name: "Yonex TRM3089 White Official Shirt",
    category: "shirts",
    brand: "yonex",
    price: 119000,
    imageUrl: "/shirtImage/yonex_shirt(1).jpg",
  },

  {
    id: "p15",
    name: "Victor 2118 Men's Shirt - Blue Pink",
    category: "shirts",
    brand: "victor",
    price: 160000,
    imageUrl: "/shirtImage/victor_shirt.jpg",
  },
  {
    id: "p16",
    name: "Victor 2118 Women's Shirt - Blue Pink",
    category: "shirts",
    brand: "victor",
    price: 160000,
    imageUrl: "/shirtImage/victor_shirt.jpg",
  },

  {
    id: "p17",
    name: "Lining 25005 Men's Shirt - Black",
    category: "shirts",
    brand: "lining",
    price: 160000,
    imageUrl: "/shirtImage/lining_shirt.jpg",
  },
  {
    id: "p18",
    name: "Lining 25005 Women's Shirt - Black",
    category: "shirts",
    brand: "lining",
    price: 160000,
    imageUrl: "/shirtImage/lining_shirt.jpg",
  },

  // ========== 4. RACKET BAGS (category: "bags") ==========

  {
    id: "p19",
    name: "Yonex BA02526VEX Racket Bag - Steel Gray Official",
    category: "bags",
    brand: "yonex",
    price: 1100000,
    imageUrl: "/racketBag/yonex_racket_bag.jpg",
  },
  {
    id: "p20",
    name: "Yonex 92022 Badminton Backpack",
    category: "bags",
    brand: "yonex",
    price: 650000,
    imageUrl: "/racketBag/yonex_racket_bag(1).jpg",
  },

  {
    id: "p21",
    name: "Victor BR5648 CO25 Racket Bag - White",
    category: "bags",
    brand: "victor",
    price: 1900000,
    imageUrl: "/racketBag/victor_racket_bag.jpg",
  },
  {
    id: "p22",
    name: "Victor BR9615CPS I Racket Bag - Red",
    category: "bags",
    brand: "victor",
    price: 1750000,
    imageUrl: "/racketBag/victor_racket_bag(1).jpg",
  },

  {
    id: "p23",
    name: "Lining P-ABLV029-3 Racket Bag",
    category: "bags",
    brand: "lining",
    price: 1850000,
    imageUrl: "/racketBag/lining_racket_bag.jpg",
    images: [
      "/racketBag/lining_racket_bag.jpg",
      "/racketBag/lining_racket_bag(1).jpg",
    ],
  },
  {
    id: "p24",
    name: "Lining ABLV033-1 Racket Bag",
    category: "bags",
    brand: "lining",
    price: 1600000,
    imageUrl: "/racketBag/lining_racket_bag(2).jpg",
    images: [
      "/racketBag/lining_racket_bag(2).jpg",
      "/racketBag/lining_racket_bag(3).jpg",
      "/racketBag/lining_racket_bag(4).jpg",
    ],
  },

  // ========== 5. ACCESSORIES (category: "accessories") ==========

  {
    id: "p25",
    name: "Yonex SKSL1086ZMP6 Official Socks",
    category: "accessories",
    brand: "socks",
    price: 120000,
    imageUrl: "/accessory/socks.jpg",
  },
  {
    id: "p26",
    name: "Lining AWSU084-2 Official Socks",
    category: "accessories",
    brand: "socks",
    price: 100000,
    imageUrl: "/accessory/socks(1).jpg",
  },

  {
    id: "p27",
    name: "Yonex BG 66 Ultimax String",
    category: "accessories",
    brand: "strings",
    price: 180000,
    imageUrl: "/accessory/nylon_string.jpg",
  },
  {
    id: "p28",
    name: "Yonex BG 80 Power String",
    category: "accessories",
    brand: "strings",
    price: 170000,
    imageUrl: "/accessory/nylon_string(1).jpg",
  },

  {
    id: "p29",
    name: "Yonex AS50 Shuttlecock Tube",
    category: "accessories",
    brand: "shuttlecock",
    price: 1019000,
    imageUrl: "/accessory/badminton_ball.jpg",
  },
  {
    id: "p30",
    name: "Victor Lark 5 Shuttlecock Tube",
    category: "accessories",
    brand: "shuttlecock",
    price: 325000,
    imageUrl: "/accessory/badminton_ball(1).jpg",
  },
];

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("products").del();

  const productsToInsert = allProducts.map((product) => {
    const {
      id,
      name,
      category,
      brand,
      price,
      originalPrice,
      status,
      imageUrl,
      images,
      sizes,
      colors,
    } = product;
    return {
      id,
      name,
      category,
      brand,
      price,
      originalPrice: originalPrice || null,
      status: status || "In stock",
      imageUrl: imageUrl || null,
      images: JSON.stringify(images || []),
      sizes: JSON.stringify(sizes || []),
      colors: JSON.stringify(colors || []),
    };
  });

  await knex("products").insert(productsToInsert);
}
