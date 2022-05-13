import imagenesZapatos from "../"; 
import imagenesEdificios from "../"; 
import imagenesManagers from "../"; 


export default todasImagenes = () => {
    return [...imagenesEdificios, ...imagenesManagers, ...imagenesZapatos];
}