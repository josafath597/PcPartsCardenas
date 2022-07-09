import { useFetch } from "../hooks/useFetch";
import { URL } from "../PcParts/Url";


export const GetGraphicsById = ( id = '' ) => {
    const {data , isLoading} = useFetch(URL);
    if(isLoading) {
        return {
            isLoading
        }
    }
    const graphics = data.filter(item => item.id === id);
    return {
        isLoading,
        data: graphics[0]
    };
}