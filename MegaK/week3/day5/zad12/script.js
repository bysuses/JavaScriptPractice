const goodButton = document.querySelector(".good-button");
const badButton = document.querySelector(".bad-button");
const goodParagraph = document.querySelector('#good-paragraph');
const badParagraph = document.querySelector('#bad-paragraph');

/*
const clicks = {
    good: 0,
    bad: 0,
};
*/

function saveClicks(clicks, name) {
    const toSave = JSON.stringify(clicks);
    localStorage.setItem(name, toSave);
}

function loadClicks(name) {
    const toDecode = localStorage.getItem(name);
    if (toDecode === null) return null;
    return JSON.parse(toDecode);
}

let clicks;
if (loadClicks('clicks') === null) {
    clicks = { good: 0, bad: 0 };
} else {
    clicks = loadClicks('clicks');
}

//let clickedGood = Number(localStorage.getItem('goodClick'));
goodParagraph.innerText = String(`Kliknąłeś dobrze ${clicks.good} razy`);

//let clickedBad = Number(localStorage.getItem('badClick'));
badParagraph.innerText = String(`Kliknąłeś źle ${clicks.bad} razy`);

goodButton.addEventListener("click", () => {
    clicks.good++;
    saveClicks(clicks, 'clicks');
    //localStorage.setItem('goodClick', String(clickedGood));
    goodParagraph.innerText = String(`Kliknąłeś dobrze ${clicks.good} razy`);
});

badButton.addEventListener("click", () => {
    clicks.bad++;
    saveClicks(clicks, 'clicks');
    //localStorage.setItem('badClick', String(clickedBad));
    badParagraph.innerText = String(`Kliknąłeś źle ${clicks.bad} razy`);
});

