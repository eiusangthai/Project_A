const productMenuData = [
  {
    id: 1,
    name: "Vợt Cầu Lông",
    path: "/product/rackets",
    subcategories: [
      { id: 101, name: "Vợt Yonex", path: "/product/rackets/yonex" },
      { id: 102, name: "Vợt Victor", path: "/product/rackets/victor" },
      { id: 103, name: "Vợt Lining", path: "/product/rackets/lining" },
    ],
  },
  {
    id: 2,
    name: "Giày Cầu Lông",
    path: "/product/shoes",
    subcategories: [
      { id: 201, name: "Giày Yonex", path: "/product/shoes/yonex" },
      { id: 202, name: "Giày Victor", path: "/product/shoes/victor" },
      { id: 203, name: "Giày Lining", path: "/product/shoes/lining" },
    ],
  },
  {
    id: 3,
    name: "Áo Cầu Lông",
    path: "/product/shirts",
    subcategories: [
      { id: 301, name: "Áo Yonex", path: "/product/shirts/yonex" },
      { id: 302, name: "Áo Victor", path: "/product/shirts/victor" },
      { id: 303, name: "Áo Lining", path: "/product/shirts/lining" },
    ],
  },
  {
    id: 4,
    name: "Túi Vợt",
    path: "/product/bags",
    subcategories: [
      { id: 401, name: "Túi Yonex", path: "/product/bags/yonex" },
      { id: 402, name: "Túi Victor", path: "/product/bags/victor" },
      { id: 403, name: "Túi Lining", path: "/product/bags/lining" },
    ],
  },
  {
    id: 5,
    name: "Phụ Kiện",
    path: "/product/accessories",
    subcategories: [
      { id: 501, name: "Vớ Cầu Lông", path: "/product/accessories/socks" },
      { id: 502, name: "Cước Đan Vợt", path: "/product/accessories/strings" },
      {
        id: 503,
        name: "Quả Cầu Lông",
        path: "/product/accessories/shuttlecock",
      },
    ],
  },
];

export async function seed(knex) {
  await knex("subcategories").del();
  await knex("categories").del();

  await Promise.all(
    productMenuData.map(async (category) => {
      await knex("categories").insert({
        id: category.id,
        name: category.name,
        path: category.path,
      });

      const subcategoriesToInsert = category.subcategories.map((sub) => ({
        id: sub.id,
        name: sub.name,
        path: sub.path,
        category_id: category.id,
      }));

      await knex("subcategories").insert(subcategoriesToInsert);
    })
  );
}
