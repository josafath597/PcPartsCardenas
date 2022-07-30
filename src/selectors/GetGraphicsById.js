import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const GetGraphicsById = ( id = '' , category = '' ) => {
    // const {data , isLoading} = useFetch();

    const [state, setState] = useState({
        data: {},
        isLoading: true,
    })

    const getComponentByID = async () => {
        setState({
            ...state,
            isLoading: true
        })

        const docRef = doc(db, `${ category }`, `${ id }`);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
            setState({
                data: docSnapshot.data(),
                isLoading: false,
            });
          } else {
              setState({
                  isLoading: false,
            });
            
        }
    }

    useEffect(() => {
        getComponentByID();
    }, [id]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        error: state.error
    };
}