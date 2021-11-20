//Total Price
function getTotalPrice() {
    const extraMemoryPrice = parseFloat(document.getElementById('extraMemoryCost').innerText);
    const extraStoragePrice = parseFloat(document.getElementById('extraStorageCost').innerText);
    const extraDeliveryCharge = parseFloat(document.getElementById('extraDeliveryCost').innerText);
    const bestPrice = parseFloat(document.getElementById('bestPrice').innerText);
    const Total = extraMemoryPrice + extraStoragePrice + extraDeliveryCharge + bestPrice;
    document.getElementById('totalPrice').innerText = Total;
    document.getElementById('totalPriceFooter').innerText = Total;
}

// making button enabled
function buttonDisabled() {
    const btn = document.getElementById('btnapply');
    btn.disabled = true;
}
function buttonEnabled() {
    const btn = document.getElementById('btnapply');
   btn.disabled = false ;
}
function discountRow() {
    document.getElementById('discountRow').style.display = 'none';
}
function getDiscountPrice() {
    discountRow();
    const inputField = document.getElementById('promoInput');
    const input = inputField.value;
    const promoCode = "stevekaku"
    if (input.toLowerCase() == promoCode.toLowerCase()) {
        let discountedPrice = parseFloat(document.getElementById('totalPrice').innerText);
        const Discount = (discountedPrice * .20).toFixed(2);
        discountedPrice -= discountedPrice * .20;
         document.getElementById('totalPrice').innerText = discountedPrice;
    document.getElementById('totalPriceFooter').innerText = discountedPrice;
    document.getElementById('discountValue').innerText = Discount;
        inputField.value = '';
        document.getElementById('discountRow').style.display = '';
        buttonDisabled();
    } else {
        inputField.value = '';
        getTotalPrice();
        discountRow();
    }
}
// Memory price update via function
function updateMemoryPrice(yes) {
    if (yes) {
        console.log('updating');
        document.getElementById('extraMemoryCost').innerText = '180';
    }
    else {
        console.log('updating');
        document.getElementById('extraMemoryCost').innerText = '0';
    }
    getTotalPrice();
    buttonEnabled();
    discountRow();
}
document.getElementById('memory1').addEventListener('click', function (event) {
    updateMemoryPrice(false);
});
document.getElementById('memory2').addEventListener('click', function (event) {
    updateMemoryPrice(true);
});
// extra storage  price update via function 
function updateExtraStoragePrice(yes , size) {
    if (!yes) {
        document.getElementById('extraStorageCost').innerText = '0';
    }
    else {
        if (size == '512GB') {
            document.getElementById('extraStorageCost').innerText = '100';
        } else {
            document.getElementById('extraStorageCost').innerText = '180';
        }
    }
    getTotalPrice();
    buttonEnabled();
    discountRow();
}
document.getElementById('ssd256').addEventListener('click', function (event) {
    updateExtraStoragePrice(false,0);
});
document.getElementById('ssd512').addEventListener('click', function (event) {
 updateExtraStoragePrice(true,"512GB");
});
document.getElementById('ssd1tb').addEventListener('click', function (event) {
 updateExtraStoragePrice(true,"1TB");
});

//handling extra delivery cost via function
function updateExtraDeliveryCost(yes) {
    if (yes) {
        document.getElementById('extraDeliveryCost').innerText = '20';
    } else {
         document.getElementById('extraDeliveryCost').innerText = '0';
    }
    getTotalPrice();
    buttonEnabled();
    discountRow();
}
document.getElementById('deliveryOption1').addEventListener('click', function () {
    updateExtraDeliveryCost(false);
});
document.getElementById('deliveryOption2').addEventListener('click', function () {
    updateExtraDeliveryCost(true);
});