

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {
        fetch('https://api.monobank.ua/bank/currency')
            .then(response => response.json())
            .then(data => {
                const currency = document.querySelector('#currency').value.toUpperCase();
                const rate = data.rates[currency];
                if (rate !== undefined) {
                    document.querySelector('#result').innerHTML = `1 долар дорівнює ${rate.toFixed(3)} ${currency}.`;
                }
                else {
                    document.querySelector('#result').innerHTML = 'Недійсна валюта.';
                }
            })
            .catch(error => {
                console.log('Помилка:', error);
            });
        return false;
    };
});