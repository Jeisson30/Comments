import React from "react";
import "../../estilos/tareas.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ListaDeTareas from "./ListaDeTareas";

export function Tareas({
    id,
    texto,
    completada,
    completarTarea,
    eliminarTarea,
}) {
    return (
        <div className="aplicacionTareas">
            <div className="tareas-lista-principal">
                <h2 className="t">Mis tareas</h2>
                <ListaDeTareas />
                <div
                    className={
                        completada
                            ? "tarea-contenedor completada"
                            : "tarea-contenedor"
                    }
                >
                    <div
                        className="tarea-texto"
                        onClick={() => completarTarea(id)}
                    >
                        {texto}
                    </div>
                    <div
                        className="tarea-icono"
                        onClick={() => eliminarTarea(id)}
                    >
                        <AiOutlineCloseCircle className="tarea-icono" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Tareas;
