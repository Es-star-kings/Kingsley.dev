// payment.js

window.pay = function(){

    let handler = PaystackPop.setup({
      key: "https://paystack.shop/pay/learnjava",
      email: document.getElementById("email").value,
      amount: 100000,
  
      callback: function(response){
        alert("Payment successful");
  
        // TEMP unlock (later move to backend)
        localStorage.setItem("premium", true);
      }
    });
  
    handler.openIframe();
  }
