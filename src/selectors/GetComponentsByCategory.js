import { useFetch } from "../hooks/useFetch";
import { URL } from "../PcParts/Url";


export const GetComponentsByCategory = ( category ) => {

    const {data , isLoading} = useFetch(URL);

    if(isLoading) {
        return {
            isLoading
        }
    }

    const validComponent = ['Graphics_Card', 'Processors'];
    
    if( !validComponent.includes( category )){
        throw new Error(`${ category } is not a valid Component`);
    }

    const items = data.filter(item => item.category === category);

    return {
        isLoading,
        data: items
    }
}