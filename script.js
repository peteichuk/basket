getReuslt()
function removeElem(elem) {
    const parentElem = elem.parentElement;
    parentElem.remove();
    getReuslt();
}

function getReuslt (){
const allPrices = document.getElementsByTagName("span");
const arrOfPrices = []
for (let i of allPrices) {
    let s = i.innerHTML
    s = parseInt(s)
    arrOfPrices.push(s);
}

const summary = arrOfPrices.reduce( function (sum, current) {
    return sum + current;
});

const summaryExit = document.getElementById('summary');
summaryExit.innerHTML = "<b>В корзине товаров на сумму </b>" + summary + " UAH" ;

const sumOfProducts = document.getElementById('count');
sumOfProducts.innerHTML = "<b>В корзине </b>" + arrOfPrices.length + " товаров" ;
}









