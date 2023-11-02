import auris1 from "../assets/images/auris-1.png";
import auris2 from "../assets/images/auris-2.webp";
import ipad1 from "../assets/images/ipad-1.png";
import laptop1 from "../assets/images/auris-1.png";
import laptop2 from "../assets/images/laptop-1.png";
import laptop3 from "../assets/images/laptop-2.jpg";
import laptop4 from "../assets/images/laptop-3.webp";
import tablet1 from "../assets/images/laptop-4.jpg";
import telefono1 from "../assets/images/tablet-1.webp";
import telefono2 from "../assets/images/telefono-1.png";
import telefono3 from "../assets/images/telefono-2.jpg";
import telefono5 from "../assets/images/telefono-5.webp";

export const products = [
  {
    tipo: "telefonos",
    productos: [
      // { tipo: "All" },
      {
        id: 1,
        nombre: "Teléfono iPhone 13 Pro",
        imagen: telefono1,
        precio: 1200,
        descripcion:
          "Un teléfono inteligente avanzado para estar siempre conectado.",
        stock: 15,
      },
      {
        id: 2,
        nombre: "Samsung Galaxy S21 Ultra",
        imagen: telefono2,
        precio: 1100,
        descripcion: "Un potente teléfono Android con una increíble cámara.",
        stock: 3,
      },
      // Puedes agregar más productos de telefonos aquí
    ],
  },
  {
    tipo: "laptops",
    productos: [
      {
        id: 3,
        nombre: "Laptop Dell XPS 15",
        imagen: laptop3,
        precio: 1800,
        descripcion: "Una potente laptop para tus necesidades diarias.",
        stock: 10,
      },
      {
        id: 4,
        nombre: "MacBook Pro 16 pulgadas",
        imagen: laptop2,
        precio: 2000,
        descripcion: "La laptop perfecta para profesionales creativos.",
        stock: 8,
      },
      // Puedes agregar más productos de laptops aquí
    ],
  },
  {
    tipo: "auriculares",
    productos: [
      {
        id: 5,
        nombre: "Auriculares Sony WH-1000XM4",
        imagen: auris1,
        precio: 350,
        descripcion:
          "Auriculares con cancelación de ruido y excelente calidad de sonido.",
        stock: 20,
      },
      {
        id: 6,
        nombre: "AirPods Pro",
        imagen: auris2,
        precio: 250,
        descripcion: "Auriculares inalámbricos con cancelación de ruido.",
        stock: 15,
      },
    ],
  },
  {
    tipo: "tabletas",
    productos: [
      {
        id: 7,
        nombre: "Tableta Samsung Galaxy Tab S7+",
        imagen: tablet1,
        precio: 700,
        descripcion:
          "Una tableta ligera y versátil para tu trabajo y entretenimiento.",
        stock: 8,
      },
      {
        id: 8,
        nombre: "iPad Pro 11 pulgadas",
        imagen: ipad1,
        precio: 800,
        descripcion:
          "Potente tableta con pantalla Liquid Retina y compatibilidad con Apple Pencil.",
        stock: 12,
      },
    ],
  },
];
