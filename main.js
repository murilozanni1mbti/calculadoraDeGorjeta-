let bill = 0
 let tipPercentage = 0
 let numberOfPeople = 0
 let currentPercentage = 0
 let buttonSelected = nul
 
 let billInput = document.querySelector("#bill")
 billInput.addEventListener("input", receiveBillValue)
 
 function receiveBillValue () {
     bill = billInput.valueAsNumber
     console.log(bill)
 }
 
 let numberOfPeopleInput = document.querySelector("#people")
 numberOfPeopleInput.addEventListener("input", receiveNumberOfPeople)
 
 function receiveNumberOfPeople() {
     numberOfPeople = numberOfPeopleInput.valueAsNumber
     calculate()
 }
 
 function receiveTipPercentage (value) {
     let buttonSelected = document.querySelector("button")

     if (buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
    }

    let buttonSelected = document.querySelector(´#button-${value}´)
    buttonSelected.classList.add("button-selected")
    tipPercentage = value / 100

    if (buttonSelected !== null) {
    let customTipInput = document.querySelector("#custom-tip")
    customTipInput.value = ""
}
    calculate()
    function receiveCustomTipPercentage() {
        let CustomTipInput = document.querySelector("#custom-tip")
        tipPercentage = customTipInput.valueAsNumber / 100
    
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    
        calculate()
    }
    
 }
 function calculate() {
     if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
         console.log ("calcular")
         let tipAmountStrong = document.querySelector(".amount strong")
 
         let tipAmountPerson = (bill * tipPercentage) / numberOfPeople
 
         tipAmountStrong.innerText = ´$ ${tipAmountPerson.toFixed(2)}´
         
         let totalStrong = document.querySelector(".total strong")
 
         let total = (bill / numberOfPeople) + tipAmountPerson
         
         totalStrong.innerText = ´$ ${total.toFixed(2)}´
     } else {
         console.log ("ainda não é possível calcular")
     }
 }