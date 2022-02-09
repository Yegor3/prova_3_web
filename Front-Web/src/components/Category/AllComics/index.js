import React, { useState, useEffect } from "react";
import CategoryDataService from "../../../services/Category/index";
import { Link } from "react-router-dom";
import "./style.css";

const AllComics = () => {
  const [categorys, setComics] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrieveCategorys();
  }, []);

  const retrieveCategorys = () => {
    CategoryDataService.getAll()
      .then((response) => {
        setComics(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const setActiveCategory = (category, index) => {
    setCurrentCategory(category);
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Lista de Jogos</h4>

        <ul className="list-group">
          {categorys &&
            categorys.map((category, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                style={{ cursor: "pointer" }}
                onClick={() => setActiveCategory(category, index)}
                key={index}
              >
                {category.name}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentCategory ? (
          <div>
            <h4>Descrição do gibi</h4>
            <div>
              <label>
                <strong>Nome:</strong>
              </label>
              {currentCategory.name}
            </div>
            <div>
              <label>
                <strong>Quantidade:</strong>
              </label>
              {currentCategory.quantityInPackage}
            </div>
            <div>
              <label>
                <strong>Categoria:</strong>
              </label>
              {currentCategory.unitOfComic}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default AllComics;
