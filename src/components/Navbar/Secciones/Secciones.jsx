import Categorias from "../Categorias/Categorias";
const Secciones = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
        </li>
        <Categorias/>
    </ul>
    );
}

export default Secciones;
