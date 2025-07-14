console.log("Hello");
const clickMouse = new Audio("clickOfmouse.mp3");
let string = "";
let opAllowed=false;
let nums = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".op-button");
function disableSwitch(disabled){
    operators.forEach(op =>{
        op.disabled = disabled;
    });
}
nums.forEach((num) => {
    num.addEventListener("click", (e) => {
        if (e.target.innerText == "AC") {
            string = "";
            document.querySelector("input").value = string;
            clickMouse.play();
        }
        else if (e.target.innerText == '=') {
            string = eval(string);
            document.querySelector("input").value = string;
            clickMouse.play();
        }else if(['+','-','*','/','.'].includes(e.target.innerText)){
            if(opAllowed){
                string += e.target.innerText;
                document.querySelector("input").value = string;
                opAllowed = false;
                disableSwitch(true);
            }
        } 
        else {
            string += e.target.innerText;
            console.log(string);
            document.querySelector("input").value = string;
            opAllowed = true;
            disableSwitch(false);
        }
    });
});
