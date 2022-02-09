import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import {
  Edit,
  Add,
  List,
  FindById,
  AllComics,
  ListComicById,
} from "../Category/index";
import { Login } from "../User/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand" to={"/user"}>
          Menu
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={Login() ? "/category" : "#"} className="nav-link">
              Categoria de livros
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/comicId"} className="nav-link">
              por ID da Categoria de Livros
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Adicionar categoria de Livros
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/comics/all"} className="nav-link">
              Listar todos os Livros
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/comics/id"} className="nav-link">
              Todos os Livros por ID
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/user"]} component={Login} />
          <Route exact path={"/category"} component={List} />
          <Route exact path="/comicId" component={FindById} />
          <Route exact path="/add" component={Add} />
          <Route path="/category/:id" component={Edit} />
          <Route path="/comics/id" component={ListComicById} />
          <Route path="/comics/all" component={AllComics} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
