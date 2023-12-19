function renderWidget(props) {
  var jq = document.createElement("script");
  jq.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
  document.getElementsByTagName("head")[0].appendChild(jq);

  jq.onload = function () {
    var paymentScript = document.createElement("script");
    paymentScript.src = "https://unpkg.com/payment@2.4.6/dist/payment.js";
    document.getElementsByTagName("head")[0].appendChild(paymentScript);

    // Now you can use jQuery Payment functions
    paymentScript.onload = function () {
      // Your code using jQuery Payment functions here
      // For example:
      console.log(
        Payment.formatCardNumber(document.querySelector("input.cc-num")),
        Payment.formatCardExpiry(document.querySelector("input.cc-exp"))
      );
    };
  };

  const darkHtml = `  <div class="widget-container">
<div style="
background: #FFFFFF;
position: absolute;
z-index: 99;
border-radius: 10px;
padding: 20px;
display: inline-block;
margin: auto;
left: 50%;
transform: translate(-50%);
top: 50px;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
  sans-serif;
">
<p style="font-weight: 600; font-size: 18px;margin: 0; padding: 0; margin-bottom: 30px; display: flex;justify-content: space-between; ">Credit Card Details 
<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;"  class='delete' viewBox="0 0 30 30" width="20px" height="20px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>
</p>
<div style="padding: 16px 12px; border: 2px dashed #c3c3c3 ; border-radius: 5px; margin-bottom: 24px;">
<p style="font-weight: 500; font-size: 14px; margin: 0; padding: 0;">
Payment Amount : 1,000,000 Uzs
</p>
</div>
<form style="width: 340px;">

<div style="display: flex;flex-direction: column; color: black; margin-bottom: 12px;">
<label for="input2" style="font-size: 14px; color: black; font-weight: 500; margin-bottom: 8px;">Name on card</label>
<input style="height: 42px;  border: 1.5px solid #c3c3c3; border-radius: 5px; font-size: 16px; padding: 0px 10px;" type="text" id="input1" name="input1" placeholder="John Doe">
</div>

<div style="display: flex;flex-direction: column; color: black; margin-bottom: 12px;">
<label for="input2" style="font-size: 14px; color: black; font-weight: 500; margin-bottom: 8px;">Card number</label>
<input class='cc-num' pattern="^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$" style="height: 42px;  border: 1.5px solid #c3c3c3; border-radius: 5px; font-size: 16px; padding: 0px 10px;" id="input2"  name="input2" placeholder="0000 0000 0000 0000">
</div>

<div >
<label for="input2" style="font-size: 14px; color: black; font-weight: 500; margin-bottom: 8px;">Card expirstion</label>
<div style="display: flex; color: #B8B8B8; margin-bottom: 12px; margin-top: 8px; gap: 10px;">
<input class='cc-exp' style="height: 42px; width: 100%;   border: 1.5px solid #c3c3c3; border-radius: 5px; font-size: 16px; padding: 0px 10px;" id="input2"  name="input2"  placeholder="Month">
</div>
   <button style="display: flex; padding: 14px 0px; width: 100%; justify-content: center; border-radius: 5px; border: none; color: white; background: black; font-size: 16px; font-weight: 500;cursor: pointer;">Continue</button>
</div>
</form>
</div>
</div>

<div style="position: absolute; background:rgba(0, 0, 0, 0.4); width: 100vw; height: 100vh;z-index: 0;
top: 0;">
</div>
</div>`;

  const {
    lang = "uz",
    id,
    description,
    currency = "UZS",
    autoClose,
    autoCloseTime,
    onSuccess,
    onFail,
    onComplete,
    isOpen,
    mode = "light",
  } = props;

  if (isOpen) {
    const widgetContainer = document.createElement("div");
    widgetContainer.innerHTML = darkHtml;
    document.body.appendChild(widgetContainer);
    const closeButton = widgetContainer.querySelector(".delete");
    closeButton.addEventListener("click", () => {
      widgetContainer.remove();
    });
  }
}
