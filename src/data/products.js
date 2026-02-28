import headphones from "../assets/products/headphones.jpg";
import smartwatch from "../assets/products/smartwatch.jpg";
import speaker from "../assets/products/speaker.jpg";
import laptop from "../assets/products/laptop.jpg";

import keyboard from "../assets/products/keyboard.jpg";
import mouse from "../assets/products/mouse.jpg";
import headset from "../assets/products/headset.jpg";
import controller from "../assets/products/controller.jpg";

import jacket from "../assets/products/jacket.png";
import hoodie from "../assets/products/hoodie.jpg";
import sneakers from "../assets/products/sneakers.jpg";
import backpack from "../assets/products/backpack.jpg";

const products = [

  // ⚡ ELECTRONICS
  {
    id: 1,
    name: "NeonX Headphones",
    category: "Electronics",
    price: 4999,
    rating: 4,
    image: headphones
  },
  {
    id: 2,
    name: "Pulse Smartwatch Pro",
    category: "Electronics",
    price: 7999,
    rating: 5,
    image: smartwatch
  },
  {
    id: 3,
    name: "Aura AI Speaker",
    category: "Electronics",
    price: 5999,
    rating: 5,
    image: speaker
  },
  {
    id: 4,
    name: "Phantom RGB Laptop",
    category: "Electronics",
    price: 89999,
    rating: 5,
    image: laptop
  },

  // 🎮 GAMING
  {
    id: 5,
    name: "Phantom RGB Keyboard",
    category: "Gaming",
    price: 6999,
    rating: 4,
    image: keyboard
  },
  {
    id: 6,
    name: "HyperStrike Gaming Mouse",
    category: "Gaming",
    price: 2999,
    rating: 3,
    image: mouse
  },
  {
    id: 7,
    name: "Titan Gaming Headset",
    category: "Gaming",
    price: 4999,
    rating: 5,
    image: headset
  },
  {
    id: 8,
    name: "NeonBlade Controller",
    category: "Gaming",
    price: 3999,
    rating: 4,
    image: controller
  },

  // 👕 FASHION
  {
    id: 9,
    name: "CyberEdge Jacket",
    category: "Fashion",
    price: 3999,
    rating: 4,
    image: jacket
  },
  {
    id: 10,
    name: "NeoPulse Hoodie",
    category: "Fashion",
    price: 2499,
    rating: 4,
    image: hoodie
  },
  {
    id: 11,
    name: "Flux Sneakers",
    category: "Fashion",
    price: 5499,
    rating: 5,
    image: sneakers
  },
  {
    id: 12,
    name: "Quantum Street Pack",
    category: "Fashion",
    price: 1999,
    rating: 4,
    image: backpack
  }

];

export default products;