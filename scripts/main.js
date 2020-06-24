import doctorBilling from './doctor.js'


const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const billingArticle = document.querySelector(".article__doctor")

const doctorBill = (billing) => {
    billingArticle.innerHTML = `<h1>All Billing Properties</h1>`

    billing.forEach(bill => {

        billingArticle.innerHTML += `<div>Dynamic Sq Bracket notation Date Visited: ${bill[dateVisited]}</div>`
        billingArticle.innerHTML += `<div>Dynamic Sq Bracket notation Amt Billed: ${bill[owed]}</div>`
        billingArticle.innerHTML += `<div>Dynamic Sq Bracket notation Patient: ${bill[patient]}</div>`
        //Iterate all of the values of the current bill
        for (const billingProperty of Object.values(bill)) {
            billingArticle.innerHTML += `<div>${billingProperty}</div>`
        }
        billingArticle.innerHTML += `<br>`
    });

}

doctorBill(doctorBilling)
