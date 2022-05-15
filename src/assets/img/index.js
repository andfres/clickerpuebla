import imagenesZapatos from "./zapatos"; 
import imagenesEdificios from "./edificios"; 
import imagenesManagers from "./managers"; 


export default function todasImagenes() {
    return [...imagenesEdificios(), ...imagenesManagers(), ...imagenesZapatos()];
}