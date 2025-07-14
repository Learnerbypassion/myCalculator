console.log("Hello");
const clickMouse = new Audio("clickOfmouse.mp3");
let string = "";
let nums = document.querySelectorAll(".num");
nums.forEach((num) => {
    num.addEventListener("click", (e) => {
        if (e.target.innerText == "AC") {
            string = "";
            document.querySelector("input").value = string
            clickMouse.play();
        }
        else if (e.target.innerText == '=') {
            string = eval(string);
            document.querySelector("input").value = string;
            clickMouse.play();
        } else {
            string += e.target.innerText;
            console.log(string);
            document.querySelector("input").value = string;
        }
    });
});

console.log(`hello${string}`);