import { useState } from "react";

export const useCounter = ( stock, counter, setCounter ) => {
    
    const [alert, setAlert] = useState(false);

    const increment = () => {
        if (counter < stock) {
            setCounter(counter + 1);
            setAlert(false);
            return;
        }
        setAlert(true);
    };

    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
            setAlert(false);
        }
    };


    return {
        alert,
        counter,
        increment,
        decrement,
    }
}