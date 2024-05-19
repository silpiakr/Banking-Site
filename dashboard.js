document.getElementById('btn-dps').addEventListener('click', function(){
    const dipositField = document.getElementById('dps-field');
    const newDipositString = dipositField.value;
    const newDiposit = parseFloat(newDipositString);

    const dipositTotalElement = document.getElementById('dps-total');
    const pervDipositString = dipositTotalElement.innerText;
    const pervDiposit = parseFloat(pervDipositString);

    const currentDipositTotal = pervDiposit + newDiposit;
    dipositTotalElement.innerText = currentDipositTotal;

    dipositField.value = '';

    const balanceTotalElement = document.getElementById('balance-field');
    const prevBalanceTotalSrting = balanceTotalElement.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalSrting);
    
    const currentBalanceTotal = prevBalanceTotal + newDiposit;

    balanceTotalElement.innerText = currentBalanceTotal;

})