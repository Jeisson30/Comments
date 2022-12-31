//import logo from './logo.svg';
import "./App.css";
import { Testimonio } from "./componentes/comentarios/Testimonio";

function App() {
    return (
        <div className="App">
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
            </div>
        </div>
    );
}

export default App;
