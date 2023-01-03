import React from "react";
import "../../estilos/calculadora.css";
import "../../estilos/boton.css";
import { useState } from "react";
import { evaluate } from "mathjs"; //libreria que evalua operaciones matematicas desde cadenas de texto
import { Boton } from "../../componentes/calculadora/Boton";
import { Pantalla } from "../calculadora/Pantalla";
import { BotonClear } from "../calculadora/BotonClear";

export function Calculadora() {
    const [input, setInput] = useState("");

    const agregarInput = (val) => {
        setInput(input + val);
    };

    const calcularResultado = () => {
        if (input) {
            setInput(evaluate(input));
        } else {
            alert("ingrese un valor");
        }
    };

    return (
        <div className="contenedor-calculadora">
            <Pantalla input={input} />
            <div className="fila">
                <Boton manejarClick={agregarInput}>1</Boton>
                <Boton manejarClick={agregarInput}>2</Boton>
                <Boton manejarClick={agregarInput}>3</Boton>
                <Boton manejarClick={agregarInput}>+</Boton>
            </div>
            <div className="fila">
                <Boton manejarClick={agregarInput}>4</Boton>
                <Boton manejarClick={agregarInput}>5</Boton>
                <Boton manejarClick={agregarInput}>6</Boton>
                <Boton manejarClick={agregarInput}>-</Boton>
            </div>
            <div className="fila">
                <Boton manejarClick={agregarInput}>7</Boton>
                <Boton manejarClick={agregarInput}>8</Boton>
                <Boton manejarClick={agregarInput}>9</Boton>
                <Boton manejarClick={agregarInput}>*</Boton>
            </div>
            <div className="fila">
                <Boton manejarClick={calcularResultado}>=</Boton>
                <Boton manejarClick={agregarInput}>0</Boton>
                <Boton manejarClick={agregarInput}>.</Boton>
                <Boton manejarClick={agregarInput}>/</Boton>
            </div>
            <div className="fila">
                <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
            </div>
        </div>
    );
}
export default Calculadora;
