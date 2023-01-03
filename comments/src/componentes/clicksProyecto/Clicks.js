import React from "react";
import { useState } from "react";
import "../../estilos/clicks.css";

export function Clicks() {
    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1);
    };
    const restar = () => {
        setContador(contador - 1);
    };
    const reset = () => {
        setContador(0);
    };
    /* if (contador === 0 && contador < 5) {
        let cont = document.getElementById("cont");
        cont.style.color = "black";
    }
    if (contador > 5) {
        let cont = document.getElementById("cont");
        cont.style.color = "blue";
    }
    if (contador < 0) {
        let cont = document.getElementById("cont");
        cont.style.color = "red";
    }
 */
    return (
        <div className="contenedor-clicks">
            <div className="contenedor-contador" id="cont">
                {contador}
            </div>
            <div>
                <button className="boton" onClick={sumar}>
                    SUMAR
                </button>
                <button className="boton" onClick={restar}>
                    RESTAR
                </button>
                <button className="boton" onClick={reset}>
                    RESET
                </button>
            </div>
        </div>
    );
}

export default Clicks;
