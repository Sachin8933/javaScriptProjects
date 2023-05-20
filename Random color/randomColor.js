const getColor =()=>{
    //Hex code

    const randomNumber = Math.floor(Math.random() *16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode; //used to change background color of the body
    document.getElementById("color-code").innerText=randomCode;
    navigator.clipboard.writeText(randomCode) //used to copy Hex code into clipboard  
}

document.getElementById("btn").addEventListener("click",getColor)
getColor();
