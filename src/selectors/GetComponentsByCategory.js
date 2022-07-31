import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FirebaseDB } from "../firebase/config";


export const GetComponentsByCategory = ( category ) => {

    const validComponent = ['Graphics_Card', 'Processors'];
    
    if( !validComponent.includes( category )){
        throw new Error(`${ category } is not a valid Component`);
    }

    const [state, setState] = useState(
        {
            data: [],
            isLoading: true,
            error: null
        }
    )

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        })

        const querySnapshot = await getDocs(collection(FirebaseDB, `${category}`));
        setState({
            data: querySnapshot.docs.map(doc => doc.data()),
            isLoading: false,
            error: null
        })

    }

    useEffect(() => {
        getFetch();
    }, [category]);
 
    const { data, isLoading } = state;

    if(isLoading) {
        return {
            isLoading
        }
    }

    const items = data.filter(item => item.category === category);

    return {
        isLoading,
        data: items
    }
}