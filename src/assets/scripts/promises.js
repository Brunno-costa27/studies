let pizzaOrder = new Promise((resolve, reject) => {
    let pizzaReady = false;  // Simulando se a pizza está pronta ou não

    if (pizzaReady) {
        resolve("Pizza está pronta!");
    } else {
        reject("Desculpe, tivemos um problema com seu pedido.");
    }
});

pizzaOrder
    .then((message) => {
        console.log(message);  // Isso vai imprimir "Pizza está pronta!" se a promise for cumprida
    })
    .catch((error) => {
        console.error(error);  // Isso vai imprimir "Desculpe, tivemos um problema com seu pedido." se a promise for rejeitada
    });
