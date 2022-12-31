import React from "react";
import "../../estilos/testimonios/testimonio.css";

export function Testimonio(props) {
    return (
        <div className="contenedor-testimonio">
            <img
                className="imagen-testimonio"
                src={require(`../../imagenes/${props.imagen}-foto.jpg`)}
                alt={`Foto ${props.name}`}
            />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">
                    {props.nombre} de <b> {props.pais}</b>
                </p>
                <p className="cargo-testimonio">
                    {" "}
                    <strong> {props.cargo}</strong>{" "}
                </p>
                <p className="texto-testimonio">{props.testimonio}</p>
            </div>
        </div>
    );
}

export default Testimonio;
