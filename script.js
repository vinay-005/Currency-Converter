// Select necessary DOM elements for currency conversion
const dropList = document.querySelectorAll("form select"),
    fromCurrency = document.querySelector(".from select"),
    toCurrency = document.querySelector(".to select"),
    getButton = document.querySelector("form button"),
    exchangeIcon = document.querySelector("form .icon"),
    amount = document.querySelector("form input"),
    exchangeRateTxt = document.querySelector("form .exchange-rate");

// Ensure country_list is properly loaded
if (typeof country_list === "undefined") {
    console.error("Error: country_list is not defined. Check 'country-list.js'.");
}

// Populate currency dropdown lists
for (let i = 0; i < dropList.length; i++) {
    for (let currency_code in country_list) {
        let selected = (i === 0 && currency_code === "USD") ? "selected" :
            (i === 1 && currency_code === "INR") ? "selected" : "";
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }

    // Add event listener to update flag when currency changes
    dropList[i].addEventListener("change", (e) => {
        loadFlag(e.target);
    });
}

// Function to load the country flag based on selected currency
function loadFlag(element) {
    let currencyCode = element.value;
    let imgTag = element.parentElement.querySelector("img");
    if (country_list[currencyCode]) {
        imgTag.src = `https://flagcdn.com/48x36/${country_list[currencyCode].toLowerCase()}.png`;
    }
}

// Fetch exchange rate when the page loads
window.addEventListener("load", () => {
    getExchangeRate();
});

// Event listener for 'Get Exchange Rate' button
getButton.addEventListener("click", (e) => {
    e.preventDefault();
    getExchangeRate();
});

// Currency swap function
exchangeIcon.addEventListener("click", () => {
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;

    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate(); // Update exchange rate after swapping
});

// Function to fetch exchange rate from API
function getExchangeRate() {
    let amountVal = amount.value.trim();

    if (amountVal === "" || isNaN(amountVal) || amountVal <= 0) {
        amount.value = "1";
        amountVal = 1;
    }

    exchangeRateTxt.innerText = "Getting exchange rate...";

    // API 
    let url = `https://v6.exchangerate-api.com/v6/135643032f2542ae85bdbec0/latest/${fromCurrency.value}`;

    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            if (result.result === "error") {
                throw new Error("Invalid API Key or Currency Code");
            }
            let exchangeRate = result.conversion_rates[toCurrency.value];
            let totalExRate = (amountVal * exchangeRate).toFixed(2);
            exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
        })
        .catch(() => {
            exchangeRateTxt.innerText = "Something went wrong. Please try again.";
        });
}

// Restrict input to only numbers
amount.addEventListener("input", () => {
    amount.value = amount.value.replace(/[^0-9.]/g, ""); // Allow numbers and decimal point
});
