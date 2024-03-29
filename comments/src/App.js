//import logo from './logo.svg';
import "./App.css";
import logoPrincipal from "../src/imagenes/logo-1.jpg"; //importamos el logo para usarlo en la vista
import { Testimonio } from "./componentes/comentarios/Testimonio";
import { Clicks } from "./componentes/clicksProyecto/Clicks";
import { Calculadora } from "./componentes/calculadora/Calculadora";

function App() {
    return (
        <div className="App">
            <div className="logo-contenedor">
                <img
                    className="logo-principal"
                    src={logoPrincipal}
                    alt="logo principal page"
                />
                <h2>Contador de clicks</h2>
                <Clicks />
            </div>
            <div>
                <h2
                    style={{ color: "orange", marginBottom: 50, marginTop: 50 }}
                >
                    Calculadora
                </h2>
                <Calculadora />
            </div>
            <div className="contenedor-principal">
                <h1>Información entrenadores registrados</h1>
                <Testimonio
                    nombre="Ash Ketchup"
                    pais="Japon"
                    imagen="ash"
                    cargo="Entrenador"
                    testimonio="Entrenador de pueblo paleta con la misión de ganar la liga pokemón. Para
                      su objetivo necesita ganar las 8 medallas oficiales de los gimnasios pokemon y asi podra
                      acceder a la liga pokemón, también debe capturar y entrenar a su equipo que lo acompañara
                      en la aventura junto a sus amigos."
                />
                <Testimonio
                    nombre="Misty"
                    pais="Japon"
                    imagen="misty"
                    cargo="Lider de gimnasio"
                    testimonio="Lider de gimnasio oficial de la liga pokemón, es fuerte con pokemon tipo agua,
                      tiene un temperamento fuerte y se unira a la aventura de ash hacia la liga pokemón."
                />
                <Testimonio
                    nombre="Brock"
                    pais="Japon"
                    imagen="brock"
                    cargo="Lider de gimnasio"
                    testimonio="Lider de gimnasio oficial de la liga pokemón, es fuerte con pokemon tipo roca,
                      tiene un temperamento amigable, le gusta cuidar de sus amigos y pokemon, se unira a la aventura de ash hacia la liga pokemón."
                />
                <Testimonio
                    nombre="Gary Oak"
                    pais="Japon"
                    imagen="gary"
                    cargo="Entrenador"
                    testimonio="Entrenador de pueblo paleta y rival directo de Ash, su misión es hacerse con la liga pokemon, es nieto
                      del profesor Oak un importante investigador pokemon."
                />
            </div>
        </div>
    );
}

export default App;
