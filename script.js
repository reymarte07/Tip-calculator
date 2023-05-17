function calc() {
    let billAmount = parseInt(document.getElementById('billAmount').value);
    let tiPer = parseInt(document.getElementById('tipPer').value);


//Tip amount
let tipAmount = (billAmount * tiPer)/100;
document.getElementById('tipAmount').innerHTML= ` Tip Amount :  ₹ ${tipAmount}`;

//Total amount
totalAmount.innerHTML= `Total Amount : ₹  ${tipAmount + billAmount} `;
}

function reset() {
    document.getElementById('billAmount').value = '';
    document.getElementById('tipPer').value = '';
    document.getElementById('tipAmount').innerHTML = ` Tip Amount : `;
    document.getElementById('totalAmount').innerHTML = `Total Amount :`;
}