export const initialStore = {
    user: {
        id: "1", 
        name: "Fabian", 
        email: "kyoma@gmail.com", 
        password: "12345"
    },
    graphics: [
        {
            "id": "GIGABYTE_GTX1650",
            "name": "Gigabyte GeForce GTX 1650",
            "price": "$250.00 USD",
            "image": "https://m.media-amazon.com/images/I/71qxEY6PtiL._AC_SX355_.jpg",
            "stock": 10,
            "description": {
                "p1": "La Gigabyte GeForce GTX 1650 cuenta con un sistema de enfriamiento WINDFORCE 2X que cuenta con 2 ventiladores de hoja únicos de 80 mm, un ventilador giratorio alternativo y un ventilador activo 3D, que juntos brindan una disipación de calor efectiva.",
                "p2": "El “giro alternativo” de GIGABYTE es la única solución que puede resolver el flujo de aire turbulento de los ventiladores adyacentes. Dado que GIGABYTE gira los ventiladores adyacentes en la dirección opuesta, de modo que la dirección del flujo de aire entre los dos ventiladores sea la misma, reduciendo la turbulencia y mejorando la presión del flujo de aire. El flujo de aire se derrama por el borde triangular del ventilador y se guía suavemente a través de la curva de rayas 3D en la superficie del ventilador, mejorando efectivamente el flujo de aire."
            }
        }
    ]
}

export const StoreReducer = (state, action) => {

    switch (action.type) {
        default:
            return state;
    }

};