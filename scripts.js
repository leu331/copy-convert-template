const input = document.querySelector("input") 
const form = document.querySelector("form") 
const footer = document.querySelector("main footer")
const amount = document.querySelector("#amount")
const result = document.querySelector("#result")

const USD = 5.67
const GBP = 7.34
const EUR = 6.14


amount.addEventListener("input", () => { //to  follow the event list of amount

    const hasCharactersRegex = /\D+/g //rejecting numbers 
    amount.value = amount.value.replace(hasCharactersRegex, "") //replacing numbers for nothing
})


form.onsubmit = (event) => {
    event.preventDefault()//for no reloading the page

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
   
    }
}


// //manipulating amount for to receive only numbers 




// const currency = document.querySelector("#currency")

function convertCurrency (amount, price, symbol) {
    
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        //calcula o total
        let total = String(amount * price).replace(".", ",")
         //exibe o resultado total
        result.textContent = `${total} Reais`

        footer.classList.add("show-result")
    }

    catch (error) {
        console.log(error)
        alert("Não foi possível converter. Tente novamente!")
        footer.classList.remove("show-result")
    }
}

//formata a moeda para real brasileiro
function formatCurrencyBRL(value){
    //converte para número para utilizar o tolocale para formatar no padrão brl (R$ 00.00)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}