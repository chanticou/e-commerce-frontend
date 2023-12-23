import React from "react";
import { useDispatch } from "react-redux";
import { GetCategoryProduct } from "../../redux/actions/index";
import "./index.css";

export const FiltersCarrousel = ({ categories }) => {
  const dispatch = useDispatch();

  const categoryNames = {
    kit_pc_gamer: "Kit Gamers",
    kit_pc_hogar_u_oficina: "Kit Hogar u Oficina",
    combos_actualizacion: "Combos actualización",
    teclado_mouse: "Teclado/Mouse",
    conectividad_redes: "Conectividad/Redes",
    pen_drives: "Pendrives",
    note_books: "Notebooks",
    auriculares_microfonos: "Auriculares/Microfonos",
    memorias_ram: "Memorias ram",
  };

  return (
    <>
      <div className="scroll-container">
        {categories.length > 0 &&
          categories.map((category) => (
            <div
              className="scroll-item"
              key={category.id_Category}
              onClick={() => dispatch(GetCategoryProduct(category.id_Category))}
            >
              <div className="banner-icon">
                <img src={category.thumbnail} alt={category.type} />
              </div>
              <div className="banner-text">
                <p>{categoryNames[category.type] || category.type}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
