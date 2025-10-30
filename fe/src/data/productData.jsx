// src/data/productData.js

export const allProducts = [
  // ========== 1. VỢT CẦU LÔNG (category: "rackets") ==========

  {
    id: "p1",
    name: "Vợt Cầu Lông Yonex Astrox 100ZZ VA",
    category: "rackets",
    brand: "yonex",
    price: 10000000,
    originalPrice: 12000000,
    status: "Còn hàng",
    imageUrl: "/racketImage/yonex_100zz.jpg",
    images: [
      "/racketImage/yonex_100zz.jpg",
      "/racketImage/yonex_100zz(1).jpg",
      "/racketImage/yonex_100zz(2).jpg",
      "/racketImage/yonex_100zz(3).jpg"

    ],
    sizes: ["3u5", "3u6", "4u5", "4u6"]
  },

  {
    id: "p2",
    name: "Vợt Cầu Lông Yonex Nanoflare 800",
    category: "rackets",
    brand: "yonex",
    price: 4769000,
    originalPrice: 5722800,
    imageUrl: "/racketImage/yonex_800pro.jpg",
    images: [
      "/racketImage/yonex_800pro(1).jpg",
      "/racketImage/yonex_800pro(2).jpg"
    ],
    sizes: ["3u5", "3u6", "4u5", "4u6"]
  },

  {
    id: "p3",
    name: "Vợt cầu lông Victor Auraspeed 100X Ultra New 2025",
    category: "rackets",
    brand: "victor",
    price: 3800000,
    imageUrl: "/racketImage/victor_racket.jpg",
    images: [
      "/racketImage/victor_racket.jpg",
      "/racketImage/victor_racket(1).jpg",
    ],
    sizes: ["3u5", "3u6", "4u5", "4u6"]
  },
  {
    id: "p4",
    name: "Vợt cầu lông Victor Brave Sword 12 Pro",
    category: "rackets",
    brand: "victor",
    price: 3950000,
    imageUrl: "/racketImage/victor_racket(2).jpg",
    images: [
      "/racketImage/victor_racket(2).jpg",
      "/racketImage/victor_racket(3).jpg",
      "/racketImage/victor_racket(4).jpg"
    ],
    sizes: ["3u5", "3u6", "4u5", "4u6"]
  },
  {
    id: "p5",
    name: "Vợt Cầu Lông Lining Axforce 90",
    category: "rackets",
    brand: "lining",
    price: 4100000,
    imageUrl: "/racketImage/lining_racket.jpg",
    images: [
      "/racketImage/lining_racket.jpg",
      "/racketImage/lining_racket(1).jpg",
    ],
    sizes: ["3u5", "3u6", "4u5", "4u6"]
  },
  {
    id: "p6",
    name: "Set vợt cầu lông Lining Halbertec 9000 Limited - Olympic Paris 2024",
    category: "rackets",
    brand: "lining",
    price: 10000000,
    imageUrl: "/racketImage/lining_racket(2).jpg",
    images: [
      "/racketImage/lining_racket(2).jpg",
      "/racketImage/lining_racket(3).jpg",
      "/racketImage/lining_racket(4).jpg"
    ],
    sizes: ["3u5", "3u6", "4u5", "4u6"]
  },

  // ========== 2. GIÀY CẦU LÔNG (category: "shoes") ==========

  {
    id: "p7",
    name: "Giày Cầu Lông Yonex SHB 65Z3",
    category: "shoes",
    brand: "yonex",
    price: 2800000,
    imageUrl: "/shoesImage/yonex_65z3.jpg",
    images: [
      "/shoesImage/yonex_65z3.jpg",
      "/shoesImage/yonex_65z3(1).jpg",
      "/shoesImage/yonex_65z3(2).jpg"
    ],
    colors: [
      {
        name: "Trắng", price: 699000, img: "/shoesImage/yonex_65z3.jpg",
        images: [
          "/shoesImage/yonex_65z3.jpg",
          "/shoesImage/yonex_65z3(1).jpg",
          "/shoesImage/yonex_65z3(2).jpg"
        ],
      },
      {
        name: "Trắng đỏ", price: 699000, img: "/shoesImage/yonex_shoes.jpg",
        images: [
          "/shoesImage/yonex_shoes(1).jpg",
        ],
      }
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44]
  },
  {
    id: "p8",
    name: "Giày Cầu Lông Yonex Eclipsion Z",
    category: "shoes",
    brand: "yonex",
    price: 2950000,
    imageUrl: "/shoesImage/yonex_eclipsion.jpg",
    images: [
      "/shoesImage/yonex_eclipsion(1).jpg",
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44]
  },

  {
    id: "p9",
    name: "Giày cầu lông Victor C90Nlite A",
    category: "shoes",
    brand: "victor",
    price: 2500000,
    imageUrl: "/shoesImage/victor_shoes.jpg",
    images: [
      "/shoesImage/victor_shoes.jpg",
      "/shoesImage/victor_shoes(1).jpg",
      "/shoesImage/victor_shoes(2).jpg"
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44]
  },
  {
    id: "p10",
    name: "Giày cầu lông Victor S82 III AF",
    category: "shoes",
    brand: "victor",
    price: 2700000,
    imageUrl: "/shoesImage/victor_shoes(3).jpg",
    images: [
      "/shoesImage/victor_shoes(3).jpg",
      "/shoesImage/victor_shoes(4).jpg",
      "/shoesImage/victor_shoes(5).jpg"
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44]
  },

  {
    id: "p11",
    name: "Giày cầu lông Lining AYAU003-2",
    category: "shoes",
    brand: "lining",
    price: 2600000,
    imageUrl: "/shoesImage/lining_shoes.jpg",
    images: [
      "/shoesImage/lining_shoes.jpg",
      "/shoesImage/lining_shoes(1).jpg",
      "/shoesImage/lining_shoes(2).jpg"
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44]
  },
  {
    id: "p12",
    name: "Giày Cầu Lông Lining AYZU019-1 Chính Hãng",
    category: "shoes",
    brand: "lining",
    price: 2300000,
    imageUrl: "/shoesImage/lining_shoes(3).jpg",
    images: [
      "/shoesImage/lining_shoes(3).jpg",
      "/shoesImage/lining_shoes(4).jpg"
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44]
  },

  // ========== 3. ÁO CẦU LÔNG (category: "shirts") ==========

  {
    id: "p13",
    name: "Áo cầu lông Yonex TRM3089 - Jet Black chính hãng",
    category: "shirts",
    brand: "yonex",
    price: 119000,
    imageUrl: "/shirtImage/yonex_shirt.jpg",
  },
  {
    id: "p14",
    name: "Áo cầu lông Yonex TRM3089 - White chính hãng",
    category: "shirts",
    brand: "yonex",
    price: 119000,
    imageUrl: "/shirtImage/yonex_shirt(1).jpg",
  },

  {
    id: "p15",
    name: "Áo cầu lông Victor 2118 Nam - Hồng xanh",
    category: "shirts",
    brand: "victor",
    price: 160000,
    imageUrl: "/shirtImage/victor_shirt.jpg",
  },
  {
    id: "p16",
    name: "Áo cầu lông Victor 2118 Nữ - Hồng xanh",
    category: "shirts",
    brand: "victor",
    price: 160000,
    imageUrl: "/shirtImage/victor_shirt.jpg",
  },

  {
    id: "p17",
    name: "Áo cầu lông Lining 25005 nam - Đen",
    category: "shirts",
    brand: "lining",
    price: 160000,
    imageUrl: "/shirtImage/lining_shirt.jpg",
  },
  {
    id: "p18",
    name: "Áo cầu lông Lining 25005 nữ - Đen",
    category: "shirts",
    brand: "lining",
    price: 160000,
    imageUrl: "/shirtImage/lining_shirt.jpg",
  },

  // ========== 4. TÚI VỢT (category: "bags") ==========

  {
    id: "p19",
    name: "Túi cầu lông Yonex BA02526VEX - Steel Gray chính hãng",
    category: "bags",
    brand: "yonex",
    price: 1100000,
    imageUrl: "/racketBag/yonex_racket_bag.jpg",
  },
  {
    id: "p20",
    name: "Balo Cầu Lông Yonex 92022",
    category: "bags",
    brand: "yonex",
    price: 650000,
    imageUrl: "/racketBag/yonex_racket_bag(1).jpg",
  },

  {
    id: "p21",
    name: "Túi cầu lông Victor BR5648 CO25 - Trắng",
    category: "bags",
    brand: "victor",
    price: 1900000,
    imageUrl: "/racketBag/victor_racket_bag.jpg",
  },
  {
    id: "p22",
    name: "Túi cầu lông Victor BR9615CPS I - Đỏ",
    category: "bags",
    brand: "victor",
    price: 1750000,
    imageUrl: "/racketBag/victor_racket_bag(1).jpg",
  },

  {
    id: "p23",
    name: "Túi cầu lông Lining P-ABLV029-3",
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
    name: "Túi Cầu Lông Lining ABLV033-1",
    category: "bags",
    brand: "lining",
    price: 1600000,
    imageUrl: "/racketBag/lining_racket_bag(2).jpg",
    images: [
      "/racketBag/lining_racket_bag(2).jpg",
      "/racketBag/lining_racket_bag(3).jpg",
      "/racketBag/lining_racket_bag(4).jpg"
    ],
  },

  // ========== 5. PHỤ KIỆN (category: "accessories") ==========

  {
    id: "p25",
    name: "Vớ cầu lông Yonex SKSL1086ZMP6 chính hãng",
    category: "accessories",
    brand: "socks",
    price: 120000,
    imageUrl: "/accessory/socks.jpg",
  },
  {
    id: "p26",
    name: "Vớ cầu lông Lining AWSU084-2 chính hãng",
    category: "accessories",
    brand: "socks",
    price: 100000,
    imageUrl: "/accessory/socks(1).jpg",
  },

  {
    id: "p27",
    name: "Cước Đan Vợt Yonex BG 66 Ultimax",
    category: "accessories",
    brand: "strings",
    price: 180000,
    imageUrl: "/accessory/nylon_string.jpg",
  },
  {
    id: "p28",
    name: "Cước Đan Vợt Yonex BG 80 Power",
    category: "accessories",
    brand: "strings",
    price: 170000,
    imageUrl: "/accessory/nylon_string(1).jpg",
  },

  {
    id: "p29",
    name: "Ống cầu lông Yonex AS50",
    category: "accessories",
    brand: "shuttlecock",
    price: 1019000,
    imageUrl: "/accessory/badminton_ball.jpg",
  },
  {
    id: "p30",
    name: "Quả Cầu Lông Victor Lark 5",
    category: "accessories",
    brand: "shuttlecock",
    price: 325000,
    imageUrl: "/accessory/badminton_ball(1).jpg",
  },
];
