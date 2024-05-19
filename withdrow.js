document.getElementById('withdrow-btn').addEventListener('click', function(){
    const withdrowField = document.getElementById('withdrow-field');
    const newWithdrowString = withdrowField.value;
    const newWithdrow = parseFloat(newWithdrowString);

    const withdrowFildTotalElement = document.getElementById('total-withdrow');
    const prevWithdrowString = withdrowFildTotalElement.innerText;
    const prevWithdrow = parseFloat(prevWithdrowString);

    const currentWithdrowTotal = newWithdrow + prevWithdrow;
    withdrowFildTotalElement.innerText = currentWithdrowTotal;

    withdrowField.value = '';

    const balanceTotalElement = document.getElementById('balance-field');
    const prevBalanceTotalSrting = balanceTotalElement.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalSrting);
    
    const currentBalanceTotal = prevBalanceTotal - newWithdrow;

    balanceTotalElement.innerText = currentBalanceTotal;
    
})