"use-strict";
new TypeIt(".header__title", {
  speed: 80,
}) //Web Developer

  .move(-13)
  .type("HOON'S ")
  .pause(1000)
  .move(null, { to: "SHOP" })
  .delete()
  .type("Front-end Enginneer")
  .pause(1000)
  .go();
