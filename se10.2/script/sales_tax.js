var $ = function (id) {
    return document.getElementById(id); 
};

function processEntries() {
    var subtotal = parseFloat($("subtotal").value);
    var rate = parseFloat($("taxrate").value);
    if(subtotal>0 && subtotal < 10000) {
        if(rate>0 && rate<12) {
            var salestax = Math.round(subtotal * rate)/100;
            var total = subtotal + salestax;
            $("salestax").value = salestax;
            $("total").value = total;
        } else
            alert("Tax Rate must be > 0 and < 12")
    } else
        alert("Subtotal must be > 0 and < 10000");

}

function clearEntries() {
    $("subtotal").value = "";
    $("taxrate").value = "";
    $("salestax").value = "";
    $("total").value = "";
    $("subtotal").focus();
}
function clearbox(id) {
    $(id).value = "";
}

window.onload = function() {
    $("subtotal").focus();
}