function calcularAmor(){
    /* Se toman los nombres*/ 
    const name1=document.getElementById("name1").value.trim();
    const name2=document.getElementById("name2").value.trim();
/* por si no hay algun nombre se da la excepción */ 
    if(name1===""||name2===""){
        alert("Por favor ingresa ambos nombres");
    }else{
        /* la operacion que determina un pircentaje simplemenet es un ramdon*/ 
        const lovePercentage= Math.floor(Math.random()*101);
        /* el resultado toma el valor que da el porcentaje ramdon*/ 
        const result= document.getElementById("result");
        /* se concatena el resultado con los nombres*/ 
        result.innerHTML= `${name1} y ${name2} porcentaje de amor: ${lovePercentage}`;
        
        if(lovePercentage<30){
        
            result.innerHTML+="<br> No son una buena pareja sigue buscando!"
        
        }else if(lovePercentage>=30 && lovePercentage<70){
        
            result.innerHTML+="<br> tienen potencial, trabajen juntos!"
       
        }else{
        
            result.innerHTML+="<br> Son el uno para el otro"
       
        }
    
    }
}