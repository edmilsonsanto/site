const convertButton = document.querySelector(".conver-tbutton")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convertcurrency-value-to-convert") // Valor em Real
    const CurrencyValueConverted = document.querySelector(".currency-value") // Outra moeda
    
    const dolarToday = 5.2

    const convertedValue = inputCurrencyValue / dolarToday
    
    CurrencyValueToConvert.innerHTML = inputCurrencyValue
    CurrencyValueConverted.innerHTML = convertedValue

    console.log(convertedValue)

}

convertButton.addEventListener("click", convertValues)