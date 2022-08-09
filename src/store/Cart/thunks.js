import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";
import { getBuyId } from "./CartSlice";



export const buyingCartItems = (address, phoneNumber) => {

    return async ( dispatch, getState ) => {

        const {auth, cart} = getState();

        const order = {
            buyer:{
                name: auth.displayName,
                email: auth.email,
                uid: auth.uid,
                phoneNumber: auth.phoneNumber || phoneNumber,
                address,
                items: cart.items,
                date: new Date(),
                total: cart.total
            },
        }

        const newDoc = doc(collection(FirebaseDB, 'orders'));
        await setDoc(newDoc, order );

        cart.items.map(async (item) => {
            const UpdateRef = doc(FirebaseDB, `${item.category}/${item.id}` )
            await updateDoc(UpdateRef, {
                stock: item.stock - item.quantity
            })
        });

        dispatch(getBuyId(newDoc.id));

    }
}