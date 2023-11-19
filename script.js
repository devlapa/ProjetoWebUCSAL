function placeOrder() {
    // Obter os valores selecionados
    var starter = document.getElementById("starter-select").value;
    var mainCourse = document.getElementById("main-course-select").value;
    var dessert = document.getElementById("dessert-select").value;

    // Gerar ID e data do pedido
    var orderId = generateID();
    var orderDate = getCurrentDate();

    // Exibir detalhes do pedido
    document.getElementById("order-id").innerText = "ID do Pedido: " + orderId;
    document.getElementById("order-date").innerText = "Data do Pedido: " + orderDate;
    document.getElementById("starter").innerText = "Entrada: " + starter;
    document.getElementById("main-course").innerText = "Prato Principal: " + mainCourse;
    document.getElementById("dessert").innerText = "Sobremesa: " + dessert;
}

function generateID() {
    // Gerar um ID único simples (pode ser melhorado)
    return Math.floor(Math.random() * 100000);
}

function getCurrentDate() {
    // Obter a data atual
    var currentDate = new Date();
    return currentDate.toDateString();
}