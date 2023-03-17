function intervalo() {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;
   
    var resultado = (parseInt(num1) + parseInt(num2)) * (parseInt(num2)/2);
    document.querySelector(".resultado").innerHTML = resultado;
}