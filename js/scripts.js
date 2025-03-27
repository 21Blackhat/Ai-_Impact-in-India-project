
const facts = [
    "AI is used in India to fight locusts using drone tech 🚁",
    "AI chatbots are being used for mental health support 🧠",
    "AI in India is transforming how farmers access markets 🚜"
];

let index = 0;

function showFact() {
    const factBox = document.getElementById("facts");
    factBox.innerHTML = `<p>${facts[index]}</p>`;
    index = (index + 1) % facts.length;
}

setInterval(showFact, 5000);
showFact();

function toggleTheme() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
    }
}
