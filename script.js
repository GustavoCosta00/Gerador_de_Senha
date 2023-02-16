let btn = document.getElementById("calculate")
let showResult = document.getElementById("resultPassword")

let copyPassword = document.getElementById("copy1")
copyPassword.addEventListener("click",function(){
    let textAreas = document.getElementById("resultPassword").innerHTML
    navigator.clipboard.writeText(textAreas)
    alert("A SENHA FOI COPIADO COM SUCESSO!")
})

btn.addEventListener("click",()=>{
    let createPassword = document.getElementById("valuePassword").value
    let startRepetition = 0
    let passwordLength = []
    let numeros = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,0,0,0,1,2,3,4,5,6,7,8,9];
    let letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let characters = ["!","@","#","&"]
    let allPasswords = numeros.concat(letras,characters)

    while(startRepetition < createPassword){
        startRepetition++
        passwordLength.push(startRepetition)
    }

    if(allPasswords.length < 5 ){
        alert("pequena")
    }else{
        passwordLength.forEach(()=>{
            let shuffle= Math.floor(Math.random() * allPasswords.length)
            let takeValues = allPasswords[shuffle]
            showResult.innerText += takeValues
            console.log(takeValues)
        })
    }
        
})
