import React from "react";
import "../../estilos/tareaFormulario.css";

export function TareaFormulario(props) {
    return (
        <form className="Tarea-formulario">
            <input
                className="tarea-input"
                type="text"
                placeholder="Escribe una tarea"
                name="texto"
            />
            <button className="tarea-boton">Agregar tarea</button>
        </form>
    );
}
export default TareaFormulario;
