import { Button } from 'react-bootstrap';
import Navbar from '../componentes/navbar';
import Footers from '../componentes/footer';
import Card from '../componentes/card';



const tarjetas = [
    {
      id: "0",
      ruta: "/cursos",
      titulo: "Tutoriales extra",
      descripcion:
        "Aquí encontrarás una sección variada de utilidades, cursos y tutoriales de cosas que he aprendido y que quiero compartir con las personas :)",
      fecha: "",
      imagen: "https://i.postimg.cc/dttVG3ng/1.png",
    },
    {
      id: "1",
      ruta: "/universidad",
      titulo: "Universidad",
      descripcion:
        "Cursos que dicto como profesor y ayudante en la Universidad de Santiago de Chile",
      fecha: "",
      imagen: "https://i.postimg.cc/s1dF6n7n/2.png",
    },
  ];
export default function Root() {
    return (
        <>
                <div className='container-fluid'> 
                  <h1 className="text-center">El Blog de René Torres</h1>  
                </div>
                <Navbar/>
                    <div className="row mb-5 d-flex justify-content-center text-center ">
                        <h1 className="mb-5">Listado de cursos</h1>

                        {/* <div className="col-md-6 d-flex justify-content-center mb-2">

                            <Card item={tarjetas[0]} />
                        </div> */}
                        <div className="col-md-12 d-flex justify-content-center mb-2 container-fluid">
                            <Card item={tarjetas[1]} />
                        </div>
                    </div>
                <Footers />
        
        </>
    );
}