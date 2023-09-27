const characters = ["A","B","C","D","E","F",
                    "G","H","I","J","K","L",
                    "M","N","O","P","Q","R",
                    "S","T","U","V","W","X",
                    "Y","Z","a","b","c","d",
                    "e","f","g","h","i","j",
                    "k","l","m","n","o","p",
                    "q","r","s","t","u","v",
                    "w","x","y","z", "0", "1",
                    "2", "3", "4", "5", "6",
                    "7", "8", "9","~","`",
                    "!","@","#","$","%",
                    "^","&","*","(",")","_",
                    "-","+","=","{","[","}",
                    "]",",","|",":",";","<",
                    ">",".","?",
"/"]

let pwlength = 8
let output1 = document.getElementById("output-el-1")
let output2 = document.getElementById("output-el-2")


function getRandomCharacter() {
    let randomCharacter = characters[Math.floor( Math.random() * characters.length)]
    return randomCharacter
}


function generatePasswords() {
    let password1 = "";
    let password2 = "";
    for (let i = 0; i < pwlength; i++ ) {
        password1 += getRandomCharacter()
        password2 += getRandomCharacter()
    }
    output1.textContent = password1
    output2.textContent = password2
}

