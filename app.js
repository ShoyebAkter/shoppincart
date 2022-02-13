function mathmatics(product,price,isIncrease){
    const inputNum=document.getElementById(product+"-number");
    let icreamentNum=inputNum.value;
if(isIncrease){
    icreamentNum=parseInt(icreamentNum)+1;
}else if(icreamentNum>0){
    icreamentNum=parseInt(icreamentNum)-1;
}

inputNum.value=icreamentNum;
const amount=document.getElementById(product+"-amount");
amount.innerText=icreamentNum*price;

calculateProduct();
}
function getValue(product){
    const productText=document.getElementById(product +"-number");
    const productNumber=parseInt(productText.value);
    return productNumber;
}


function calculateProduct(){
    const totalPhone=getValue('phone')*59;
    const totalCase=getValue('case')*1219;
    const subTotal=document.getElementById('sub-total');
    const tax=document.getElementById('tax');
    const total=document.getElementById('total');
    const subTotalAmount=totalPhone+totalCase;
    const taxAmount =subTotalAmount/10;
    const totalAmount=subTotalAmount+taxAmount;
    subTotal.innerText=subTotalAmount;
    tax.innerText=taxAmount;
    total.innerText=totalAmount;
}
document.getElementById("phone-plus").addEventListener("click",function(){
    mathmatics("phone",59,true);
})
document.getElementById("phone-minus").addEventListener("click",function(){
    mathmatics("phone",59,false);
})

document.getElementById("case-plus").addEventListener("click",function(){
    mathmatics("case",1219,true);
})
document.getElementById("case-minus").addEventListener("click",function(){
    mathmatics("case",1219,false);
})
