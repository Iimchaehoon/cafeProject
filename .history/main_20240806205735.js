new TypeIt(".header__title", {
  lifeLike: false,
  speed: 80,
})

  .move(-13)
  .type("HOON'S ")
  .pause(1000)
  .move(null, { to: "SHOP" })
  .delete()
  .type("HOON'S SHOP")
  .pause(1000)
  .go();
