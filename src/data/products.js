// Mock product data. Images use picsum.photos with a fixed seed so each
// product always shows the same picture.
const img = (seed) => `https://picsum.photos/seed/${seed}/400/400`;

export const products = [
  { id: 1, title: "Wireless Noise-Cancelling Headphones", category: "Electronics", price: 129.99, image: img("headphones") },
  { id: 2, title: "Smart Fitness Watch", category: "Electronics", price: 89.5, image: img("smartwatch") },
  { id: 3, title: "Portable Bluetooth Speaker", category: "Electronics", price: 45.0, image: img("speaker") },
  { id: 4, title: "Mechanical Keyboard", category: "Electronics", price: 74.99, image: img("keyboard") },
  { id: 5, title: "Classic Denim Jacket", category: "Fashion", price: 59.9, image: img("denim") },
  { id: 6, title: "Running Sneakers", category: "Fashion", price: 79.0, image: img("sneakers") },
  { id: 7, title: "Leather Crossbody Bag", category: "Fashion", price: 64.25, image: img("bag") },
  { id: 8, title: "Ceramic Coffee Mug Set", category: "Home", price: 24.99, image: img("mugs") },
  { id: 9, title: "Cotton Throw Blanket", category: "Home", price: 34.5, image: img("blanket") },
  { id: 10, title: "Minimalist Desk Lamp", category: "Home", price: 39.99, image: img("lamp") },
  { id: 11, title: "Learn React: A Practical Guide", category: "Books", price: 29.0, image: img("reactbook") },
  { id: 12, title: "The Art of Clean Code", category: "Books", price: 32.75, image: img("cleancode") },
];

export const categories = ["All", ...new Set(products.map((p) => p.category))];
