let number = 0

const feet = 3.281
const gallon = 0.264
const pound = 2.204

const btnConvert = document.getElementById("btn-convert")
const txtConvert = document.getElementById("txt-convert")

const pLength = document.getElementById("p-length")
const pVolume = document.getElementById("p-volume")
const pMass = document.getElementById("p-mass")


btnConvert.addEventListener("click", function() {
    let number = txtConvert.value
    txtConvert.value = ""
    
    let length = `${number} meters = ${(feet * number).toFixed(3)} feet | ${number} feet = ${(number / feet).toFixed(3)} meters`
    let volume = `${number} meters = ${(gallon * number).toFixed(3)} gallons | ${number} gallons = ${(number / gallon).toFixed(3)} meters`
    let mass = `${number} meters = ${(pound * number).toFixed(3)} pounds | ${number} pounds = ${(number / pound).toFixed(3)} meters`

    pLength.innerHTML = length
    pVolume.innerHTML = volume
    pMass.innerHTML = mass
})