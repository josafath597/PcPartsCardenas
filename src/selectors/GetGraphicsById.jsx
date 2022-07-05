import { graphics } from "../data/graphics";



export const GetGraphicsById = ( id = '' ) => {
    return graphics.find( item => item.id === id );
}