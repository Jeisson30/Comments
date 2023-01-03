import React from "react";
import "../../estilos/botonClear.css";

export function BotonClear(props) {
    return (
        <div onClick={props.manejarClear} className="boton-clear">
            {props.children}
        </div>
    );
}
export default BotonClear;
