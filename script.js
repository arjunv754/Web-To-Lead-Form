function handlesubmit(){
    let outputdata = document.querySelector(".outputdata");
    let inputdate = document.querySelector(".inputdata");
    let formatteddate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdata.value =formatteddate ;
}