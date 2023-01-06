import React from "react";
import TareaFormulario from "./TareaFormulario";
import "../../estilos/ListaDeTareas.css";

export function ListaDeTareas() {
    return (
        <>
            <TareaFormulario />
            <div className="tareas-lista-contenedor">lista de tareas</div>
        </>
    );
}
export default ListaDeTareas;
