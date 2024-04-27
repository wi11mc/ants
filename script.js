const facts = document.querySelectorAll('.fact');
let currentFactIndex = 0;

function showNextFact() {
    facts[currentFactIndex].classList.remove('visible');
    currentFactIndex = (currentFactIndex + 1) % facts.length;
    facts[currentFactIndex].classList.add('visible');
}

setInterval(showNextFact, 3000);