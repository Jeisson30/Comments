import React from "react";

export function Boton(props) {
    const esOperador = (valor) => {
        return isNaN(valor) && valor !== "." && valor !== "=";
    };
    return (
        <div
            onClick={() => props.manejarClick(props.children)}
            className={`boton-contenedor ${
                esOperador(props.children) ? "operador" : null
            }`}
        >
            {props.children}
        </div>
    );
}
export default Boton;
