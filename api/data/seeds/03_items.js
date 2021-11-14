exports.seed = function (knex) {
  return knex("items").insert([
    {
      name: "African Tribal Mask",
      description:
        "This is a sample description of an african marketplace item",
      price: 64.99,
      img: "https://i.gyazo.com/317c7b933d5441006876bb84b401d0d4.png",
    },
    {
      name: "African Blanket",
      description:
        "This is a sample description of an african marketplace item",
      price: 42.99,
      img: "https://i.gyazo.com/2a625777282afb386481fd8eb7fff309.jpg",
    },
    {
      name: "african statues",
      description:
        "This is a sample description of an african marketplace item",
      price: 12.99,
      img: "https://i.gyazo.com/30f3ad3158abd9ef74f0880b3f349661.png",
    },
    {
      name: "assorted african ornaments",
      description:
        "This is a sample description of an african marketplace item",
      price: 1.99,
      img: "https://i.gyazo.com/f64ba24c7cb0d3a47df36a65096e5297.png",
    },
    {
      name: "african beads",
      description:
        "This is a sample description of an african marketplace item",
      price: 4.49,
      img: "https://i.gyazo.com/a120709abe531bba7f7459f050974c64.png",
    },
    {
      name: "African gifts",
      description:
        "This is a sample description of an african marketplace item",
      price: 22.25,
      img: "https://i.gyazo.com/b4d1bd532b3ad63f4e920e08019304e9.png",
    },
  ]);
};
