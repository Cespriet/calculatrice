class BaseCalculator {
    constructor(a) {
        
     
    }

    func(a){
        document.getElementById("result").textContent+=a
        console.log(a)
    }
    
    funcvide(){
        document.getElementById("result").textContent=""
        document.getElementById("calcul").textContent=""
    }
    
    result(a){
        console.log(a)
        let b=eval(a)
        document.getElementById("calcul").textContent=a
        document.getElementById("calcul").textContent+="="
        document.getElementById("result").textContent=b
        console.log(b)
    
    }
    
    supp(a){
        console.log(a)
        a = a.substring(0, a.length - 1);
        console.log(a)
        document.getElementById("result").textContent=a
    }
    
     
}
let baseCalculator = new BaseCalculator();

