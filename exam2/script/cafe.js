$(document).ready(function() {
    $("#img1").hover(function(){
        $(this).attr("src","images/espresso_info.jpg");
    });
    $("#img1").mouseleave(function() {
        $(this).attr("src","images/espresso.jpg");
    });
    $("#img2").hover(function(){
        $(this).attr("src","images/latte_info.jpg");
    });
    $("#img2").mouseleave(function() {
        $(this).attr("src","images/latte.jpg");
    });
    $("#img3").hover(function(){
        $(this).attr("src","images/cappuccino_info.jpg");
    });
    $("#img3").mouseleave(function() {
        $(this).attr("src","images/cappuccino.jpg");
    });
    $("#img4").hover(function(){
        $(this).attr("src","images/coffee_info.jpg");
    });
    $("#img4").mouseleave(function() {
        $(this).attr("src","images/coffee.jpg");
    });
    $("#img5").hover(function(){
        $(this).attr("src","images/biscotti_info.jpg");
    });
    $("#img5").mouseleave(function() {
        $(this).attr("src","images/biscotti.jpg");
    });
    $("#img6").hover(function(){
        $(this).attr("src","images/scone_info.jpg");
    });
    $("#img6").mouseleave(function() {
        $(this).attr("src","images/scone.jpg");
    });

    // set values to items
    var espresso= 1.95, latte= 2.95, cappuccino= 3.45, coffee= 1.75, biscotti= 1.95,scone= 2.95;
    var total = 0;
    function updateTotal() {
        $("#total").text("Total: $"+total);
    }

    $("#img1").click(function(){
        $("#cart").append("$"+espresso+" - Espresso\n");
        total += espresso;
        updateTotal();
    });
    $("#img2").click(function(){
        $("#cart").append("$"+latte+" - Latte\n");
        total += latte;
        updateTotal();
    });
    $("#img3").click(function(){
        $("#cart").append("$"+cappuccino+" - Cappuccino\n");
        total += cappuccino;
        updateTotal();
    });
    $("#img4").click(function(){
        $("#cart").append("$"+coffee+" - Coffee\n");
        total += coffee;
        updateTotal();
    });
    $("#img5").click(function(){
        $("#cart").append("$"+biscotti+" - Biscotti\n");
        total += biscotti;
        updateTotal();
    });
    $("#img6").click(function(){
        $("#cart").append("$"+scone+" - Scone\n");
        total += scone;
        updateTotal();
    });

    $("#submit").click(function(){
        if(total == 0 || !total)
            alert("Cart is Empty. Please order at least one of our delicious items.");
        else {
            localStorage.setItem("cartTotal",total);
            localStorage.setItem("cartData",$("#cart").val());
            window.location.href = "checkout.html"; // go to checkout page
        }
        
    });

    $("#reset").click(function(){
        if(confirm("Are you sure you want to clear your cart?")) {
            total = 0;
            $("#cart").text("");
            updateTotal();
        }
    });

    // Once order is submitted, redirected page to checkout.html 
    if(location.pathname.split('/').slice(-1)[0] == "checkout.html") {
            var items = localStorage.getItem("cartData").split("$");
            items.shift(); //remove the first empty element of array formed by split 
            
            //group similar items into one and count occurence
            items.sort();
            for(var i=0;i<items.length;i++) 
                items[i] += "1";
            var temp = items[0];
            for(var i=1;i<items.length;i++) {
                if(items[i] != temp) {
                    temp = items[i];                   
                } else {  
                    items.splice(i, 1);
                    var count = parseInt(items[i-1].slice(-1));
                    count++;
                    items[i-1] = items[i-1].substring(0,items[i-1].length - 1);
                    items[i-1] += count;
                    i--;
                }

            }
            for(var i=0;i<items.length;i++) {
                $("#checkout ul").append("<li><img src='images/"+ items[i].slice(7,-2) + ".jpg'><span class='amount'>"+items[i].slice(-1)+" X</span><h4>$"+items[i].substring(0,items[i].length - 1)+"</h4></li>");
            }
            $("#total-checkout").text("Total: $"+localStorage.getItem("cartTotal").substring(0,4));
        
    }
});