function func(i){
    document.getElementById("result").textContent+=i
    console.log(i)
}

function funcvide(){
    document.getElementById("result").textContent=""
    document.getElementById("calcul").textContent=""
}

function result(a){
    console.log(a)
    b=eval(a)
    document.getElementById("calcul").textContent=a
    document.getElementById("calcul").textContent+="="
    document.getElementById("result").textContent=b
    console.log(b)

}

function supp(a){
    console.log(a)
    a = a.substring(0, a.length - 1);
    console.log(a)
    document.getElementById("result").textContent=a
}
