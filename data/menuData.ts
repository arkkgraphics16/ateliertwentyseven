export type DietaryTag = "vegan" | "vegetarian" | "gluten-free" | "spicy" | "bestseller" | "new";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "starters" | "mains" | "pasta" | "pizza" | "desserts" | "drinks";
  tags?: DietaryTag[];
};

export const menuItems: MenuItem[] = [
  {
    id: "starter-01",
    name: "Charred Octopus",
    description: "Smoked paprika, preserved lemon aioli, fennel salad.",
    price: 19,
    image: "/images/dishes/charred-octopus.jpg",
    category: "starters",
    tags: ["gluten-free", "bestseller"]
  },
  {
    id: "starter-02",
    name: "Heirloom Tomato Burrata",
    description: "Stracciatella, basil oil, aged balsamic pearls.",
    price: 17,
    image: "/images/dishes/tomato-burrata.jpg",
    category: "starters",
    tags: ["vegetarian"]
  },
  {
    id: "starter-03",
    name: "Crispy Lotus Chips",
    description: "Yuzu kosho dip, toasted sesame, scallion.",
    price: 14,
    image: "/images/dishes/lotus-chips.jpg",
    category: "starters",
    tags: ["vegan", "gluten-free", "new"]
  },
  {
    id: "starter-04",
    name: "Miso Glazed Eggplant",
    description: "White miso caramel, puffed quinoa, shiso.",
    price: 15,
    image: "/images/dishes/miso-eggplant.jpg",
    category: "starters",
    tags: ["vegan"]
  },
  {
    id: "starter-05",
    name: "Citrus Ceviche",
    description: "Line-caught fish, coconut leche de tigre, plantain crisps.",
    price: 18,
    image: "/images/dishes/citrus-ceviche.jpg",
    category: "starters",
    tags: ["gluten-free", "bestseller"]
  },
  {
    id: "starter-06",
    name: "Truffle Arancini",
    description: "Wild mushroom ragù, truffle cream, parmigiano.",
    price: 16,
    image: "/images/dishes/truffle-arancini.jpg",
    category: "starters",
    tags: ["vegetarian"]
  },
  {
    id: "mains-01",
    name: "Chilean Sea Bass",
    description: "Sake beurre blanc, charred baby bok choy, kombu oil.",
    price: 34,
    image: "/images/dishes/chilean-sea-bass.jpg",
    category: "mains",
    tags: ["gluten-free", "bestseller"]
  },
  {
    id: "mains-02",
    name: "Harissa Lamb Rack",
    description: "Smoked carrot purée, pistachio dukkah, mint jus.",
    price: 36,
    image: "/images/dishes/harissa-lamb.jpg",
    category: "mains",
    tags: ["spicy"]
  },
  {
    id: "mains-03",
    name: "Cocoa Rubbed Short Rib",
    description: "Sweet potato pave, roasted beet, cacao demi.",
    price: 33,
    image: "/images/dishes/short-rib.jpg",
    category: "mains"
  },
  {
    id: "mains-04",
    name: "Ginger Soy Tofu Steak",
    description: "Charred greens, sesame crumb, black garlic glaze.",
    price: 25,
    image: "/images/dishes/tofu-steak.jpg",
    category: "mains",
    tags: ["vegan", "gluten-free"]
  },
  {
    id: "mains-05",
    name: "Cedar Plank Salmon",
    description: "Maple brush, citrus farro, dill crème fraîche.",
    price: 31,
    image: "/images/dishes/cedar-salmon.jpg",
    category: "mains",
    tags: ["bestseller"]
  },
  {
    id: "mains-06",
    name: "Porcini Risotto",
    description: "Aged parmesan, thyme brown butter, crispy leeks.",
    price: 27,
    image: "/images/dishes/porcini-risotto.jpg",
    category: "mains",
    tags: ["vegetarian"]
  },
  {
    id: "pasta-01",
    name: "Lobster Tagliatelle",
    description: "Bisque emulsion, cherry tomato confit, chive oil.",
    price: 29,
    image: "/images/dishes/lobster-tagliatelle.jpg",
    category: "pasta",
    tags: ["bestseller"]
  },
  {
    id: "pasta-02",
    name: "Black Truffle Mafaldine",
    description: "Forest mushrooms, black garlic crumble, pecorino.",
    price: 28,
    image: "/images/dishes/truffle-mafaldine.jpg",
    category: "pasta",
    tags: ["vegetarian"]
  },
  {
    id: "pasta-03",
    name: "Spicy Crab Bucatini",
    description: "Calabrian chili, preserved lemon, bottarga dust.",
    price: 27,
    image: "/images/dishes/spicy-crab-bucatini.jpg",
    category: "pasta",
    tags: ["spicy"]
  },
  {
    id: "pasta-04",
    name: "Garden Pesto Casarecce",
    description: "Basil pistou, sugar snap peas, confit cherry tomato.",
    price: 23,
    image: "/images/dishes/pesto-casarecce.jpg",
    category: "pasta",
    tags: ["vegetarian", "new"]
  },
  {
    id: "pizza-01",
    name: "Prosciutto & Fig",
    description: "Stracciatella, black mission fig, arugula, balsamic.",
    price: 22,
    image: "/images/dishes/prosciutto-fig-pizza.jpg",
    category: "pizza",
    tags: ["bestseller"]
  },
  {
    id: "pizza-02",
    name: "Wild Mushroom Bianca",
    description: "Fontina, thyme, truffle honey drizzle.",
    price: 21,
    image: "/images/dishes/mushroom-bianca.jpg",
    category: "pizza",
    tags: ["vegetarian"]
  },
  {
    id: "pizza-03",
    name: "Calabrese Heat",
    description: "Nduja, smoked scamorza, charred chili oil.",
    price: 20,
    image: "/images/dishes/calabrese-heat.jpg",
    category: "pizza",
    tags: ["spicy"]
  },
  {
    id: "dessert-01",
    name: "Miso Caramel Cheesecake",
    description: "Sesame brittle, black sesame tuile, yuzu gel.",
    price: 13,
    image: "/images/dishes/miso-caramel-cheesecake.jpg",
    category: "desserts"
  },
  {
    id: "dessert-02",
    name: "Chocolate Chai Torte",
    description: "Smoked cinnamon cream, cocoa nib crunch.",
    price: 12,
    image: "/images/dishes/chai-torte.jpg",
    category: "desserts",
    tags: ["vegetarian"]
  },
  {
    id: "dessert-03",
    name: "Coconut Lime Panna Cotta",
    description: "Pineapple compote, macadamia praline.",
    price: 11,
    image: "/images/dishes/coconut-panna-cotta.jpg",
    category: "desserts",
    tags: ["gluten-free"]
  },
  {
    id: "dessert-04",
    name: "Seasonal Fruit Mille-Feuille",
    description: "Crisp puff pastry, vanilla bean chantilly, berry coulis.",
    price: 12,
    image: "/images/dishes/fruit-mille-feuille.jpg",
    category: "desserts"
  },
  {
    id: "drink-01",
    name: "Saffron Gin Fizz",
    description: "Citrus cordial, saffron mist, elderflower foam.",
    price: 15,
    image: "/images/dishes/saffron-gin-fizz.jpg",
    category: "drinks",
    tags: ["bestseller"]
  },
  {
    id: "drink-02",
    name: "Matcha Yuzu Cooler",
    description: "Sparkling matcha, yuzu tonic, shiso leaf.",
    price: 9,
    image: "/images/dishes/matcha-yuzu-cooler.jpg",
    category: "drinks",
    tags: ["vegan"]
  },
  {
    id: "drink-03",
    name: "Smoked Plum Old Fashioned",
    description: "Plum bitters, smoked maple, orange peel.",
    price: 14,
    image: "/images/dishes/smoked-plum-old-fashioned.jpg",
    category: "drinks"
  },
  {
    id: "drink-04",
    name: "Rosemary Grapefruit Spritz",
    description: "Grapefruit shrub, rosemary cordial, prosecco.",
    price: 12,
    image: "/images/dishes/rosemary-grapefruit-spritz.jpg",
    category: "drinks",
    tags: ["vegetarian"]
  }
];
