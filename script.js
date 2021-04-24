getReuslt();
function removeElem(elem) {
    const parentElem = elem.parentElement;
    parentElem.remove();
    getReuslt();
}

function getReuslt (){
    const allPrices = document.getElementsByTagName("span");
    const arrOfPrices = []
    for (let i of allPrices) {
        if (i == NaN) {continue
        } else {
        let s = i.innerHTML
        s = parseInt(s)
        arrOfPrices.push(s);}
    }
    
    const summary = arrOfPrices.reduce( function (sum, current) {
        return sum + current;
    });
    
    const summaryExit = document.getElementById('summary');
    summaryExit.innerHTML = "<b>В корзине товаров на сумму </b>" + summary + " UAH" ;
    
    const sumOfProducts = document.getElementById('count');
    sumOfProducts.innerHTML = "<b>В корзине </b>" + arrOfPrices.length + " товаров" ;
}

const newElementBtn = document.querySelector('.new__product');
      newElementBtn.addEventListener('click', pasteNewProduct);

function pasteNewProduct(params) {
    let randomPrice = randomInteger(10, 200);
    const ul = document.querySelector('ul');
    ul.insertAdjacentHTML(
        'beforeend', 
        `<li>
            <div class="product-name">product5</div>
            <div class="price"><span>` + randomPrice + `</span> UAH</div>
            <div class="delete" onclick="removeElem(this)">Delete product</div>
        </li>`
    )
    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return result = Math.round(rand);
        console.log(result);
      };
    getReuslt()
}      











