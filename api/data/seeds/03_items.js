exports.seed = function (knex) {
  return knex("items").insert([
    {
      name: "African Tribal Mask",
      description:
        "This is a sample description of an african marketplace item",
      price: 64.99,
      img: "https://i.gyazo.com/317c7b933d5441006876bb84b401d0d4.png",
      user_id: 1,
    },
    {
      name: "African Blanket",
      description:
        "This is a sample description of an african marketplace item",
      price: 42.99,
      img: "https://i.gyazo.com/2a625777282afb386481fd8eb7fff309.jpg",
      user_id: 1,
    },
    {
      name: "African Statues",
      description:
        "This is a sample description of an african marketplace item",
      price: 12.99,
      img: "https://i.gyazo.com/30f3ad3158abd9ef74f0880b3f349661.png",
      user_id: 1,
    },
    {
      name: "Assorted African Ornaments",
      description:
        "This is a sample description of an african marketplace item",
      price: 1.99,
      img: "https://i.gyazo.com/f64ba24c7cb0d3a47df36a65096e5297.png",
      user_id: 2,
    },
    {
      name: "African Beads",
      description:
        "This is a sample description of an african marketplace item",
      price: 4.49,
      img: "https://i.gyazo.com/a120709abe531bba7f7459f050974c64.png",
      user_id: 2,
    },
    {
      name: "African Gifts",
      description:
        "This is a sample description of an african marketplace item",
      price: 22.25,
      img: "https://i.gyazo.com/b4d1bd532b3ad63f4e920e08019304e9.png",
      user_id: 3,
    },
    {
      name: "African Sweater",
      description:
        "This is a sample description of an african marketplace item",
      price: 45,
      img: "https://i.gyazo.com/03eb66c1f14678b49b052c9cda7269aa.jpg",
      user_id: 3,
    },
    {
      name: "African Wooden Map",
      description:
        "This is a sample description of an african marketplace item",
      price: 22.25,
      img: "https://i.gyazo.com/0750aa3bbb5edbbd4ef2982f9de3561a.png",
      user_id: 4,
    },
    {
      name: "African Oya Giftbox",
      description:
        "This is a sample description of an african marketplace item",
      price: 22.25,
      img: "https://i.gyazo.com/7d833a82a540110395f4cf78be477afa.png",
      user_id: 4,
    },
  ]);
};
