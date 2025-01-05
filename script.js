function handlesubmit(){
    let outputdata = document.querySelector(".outputdata");
    let inputdate = document.querySelector(".inputdata");
    let formatteddate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdata.value =formatteddate ;
}
function timestamp()
 { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") 
    {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } 
        setInterval(timestamp, 500); 