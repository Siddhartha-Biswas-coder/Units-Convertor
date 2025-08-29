/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const inputBtn =document.getElementById("input-btn")
const lengthEl =document.getElementById("length-el")
const volumeEl =document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const inputShow = document.getElementById("input-show")

inputBtn.addEventListener("click",function(){
    const inputValue = Number(inputEl.value) 
    inputEl.value = ""
    inputShow.textContent = `Your Input is ${inputValue}`
    render(inputValue)
})

function render(inputValue){
    renderlength(inputValue)
    renderVolume(inputValue)
    renderMass(inputValue)
}

function renderlength(inputValue){
    const meterTofeet = (inputValue * 3.2811).toFixed(3)
    const feetTometer = (inputValue / 3.281).toFixed(3)
    lengthEl.textContent = `${inputValue} meters = ${meterTofeet} feet | ${inputValue} feet = ${feetTometer} meter`
}

function renderVolume(inputValue){
    const litersTogallons = (inputValue * 0.264).toFixed(3)
    const gallonsToliters = (inputValue / 0.264).toFixed(3)
    volumeEl.textContent = `${inputValue} liters = ${litersTogallons} gallons | ${inputValue} gallons = ${gallonsToliters} liters`
}

function renderMass(inputValue){
    const kilosTopounds = (inputValue * 2.204).toFixed(3)
    const poundsTokilos = (inputValue / 2.204).toFixed(3)
    massEl.textContent = `${inputValue} kilos = ${kilosTopounds} pounds | ${inputValue} pounds = ${poundsTokilos} kilos`
}