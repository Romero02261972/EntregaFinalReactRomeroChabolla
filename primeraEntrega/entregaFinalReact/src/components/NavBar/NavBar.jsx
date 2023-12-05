import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around p-4">
        <div>
<button className="btn btn-light mx-2">Nosotros</button>
<button className="btn btn-light mx-2">Plantas en macetas</button>
<button className="btn btn-light mx-2">Arreglos Florales</button>
<button className="btn btn-light mx-2">Cursos</button>
        </div>
        <div className="text-center">
            <CartWidget />
            <p className="mx-2">$2,587.00</p>
        </div>
    </nav>
  )
}
