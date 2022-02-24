const techProducts = [
    {
        id: 1,
        name: 'computer',
        price: 2100,
    },
    {
        id: 2,
        name: 'mouse',
        price: 56,
    },
    {
        id: 3,
        name: 'monitor',
        price: 589,
    }
];

//Trazer botão e o input (usar getElement)
let buttonGetProduct = document.querySelector('.search-button');
let inputGetProduct = document.querySelector('#product-id');
// console.log(buttonGetProduct, inputGetProduct);
//Colocar um addEventListner no botão
buttonGetProduct.addEventListener('click',getProduct);
//Criar uma função que percorre o array com um FOR
//Verificar se o produto existe no array techProducts
//Se ele exister informar o nome do produto em um alart, 
    //se não informar que não produto não existe
function getProduct(event){
    event.preventDefault();
    let inpuIdValue = inputGetProduct.value;
    for(let index = 0; index < techProducts.length; index += 1){
        if(techProducts[index].id === Number(inpuIdValue)){
            // alert(techProducts[index].name);
            listProducts(techProducts[index])
        };
    };
};
// Ao digitar o ID de um produto existente na lista de produtos
// Queremos exibir esse produto em uma lista, no formato nome - R$preço
// E também queros ser capazes de ao clickar no produto, tira-lo da lista

// Capturar uma tag UL no HTML e adicionar um escutador de eventos
let list = document.querySelector('#product-table');
list.addEventListener('click', removeProduct);

// Criar uma função que crie intens de uma lista dinâmicamente
function listProducts(product){
    let li = document.createElement('li');
    li.innerText = product.name + ' - R$' + product.price;
    list.appendChild(li);
}
// Garantir que cada intem ao ser clicado será excluido da lista
function removeProduct(event){
    // console.log(event.target);
    event.target.remove();
}

