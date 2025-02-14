document.addEventListener('DOMContentLoaded', () => {
    // Function to create hearts
    function createHearts() {
        const heartsContainer = document.querySelector('.hearts');
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '💓';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            heart.style.fontSize = Math.random() * 2 + 1 + 'rem';
            heartsContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }
    }

    // Create hearts every second
    setInterval(createHearts, 1000);

    const loveButton = document.getElementById("loveButton");
    const loveInput = document.getElementById("loveInput");
    const result = document.getElementById("result");
    const heartButton = document.getElementById("heartButton");
    const imageContainer = document.getElementById("imageContainer");
    const quoteButton = document.getElementById("quoteButton");
    const quoteElement = document.getElementById("quote");

    loveButton.addEventListener("click", function () {
        const loveValue = loveInput.value;
        if (loveValue.trim() === "" || isNaN(loveValue) || loveValue < 0) {
            result.textContent = "Unesi validan broj!";
        } else {
            result.textContent = `Volim te još više od ${loveValue}/100%, Emina! 😘💓`;
        }
    });

    heartButton.addEventListener("click", function () {
        imageContainer.style.display = "block";
        setTimeout(() => {
            alert("Emina, ti si najlepša i najbolja devojka na svetu!");
        }, 500);
    });

    const quotes = [
        "Ljubav nikad ne prestaje. - 1. Korinćanima 13:8",
        "Veća ljubav nema niko od ove, da ko položi život za prijatelje svoje. - Jovan 15:13",
        "Jer gde je tvoje blago, onde će biti i tvoje srce. - Matej 6:21",
        "Bog je ljubav, i ko ostaje u ljubavi, ostaje u Bogu. - 1. Jovanova 4:16",
        "Ako znam šta je ljubav, to je zbog tebe. - Hermann Hesse",
        "Postoji samo jedna sreća u životu: voleti i biti voljen. - George Sand",
        "Ljubav se ne sastoji u gledanju jedno u drugo, već u zajedničkom gledanju u istom pravcu. - Antoine de Saint-Exupéry",
        "Prava ljubav priča bez reči, razume bez objašnjenja i voli bez razloga. - Anonimno",
        "Ljubav je kao vetar, ne možeš je videti, ali je možeš osetiti. - Nicholas Sparks",
        "Ljubav je strpljiva, ljubav je dobrostiva. - 1. Korinćanima 13:4",
        "Sve što činite, činite iz ljubavi. - 1. Korinćanima 16:14",
        "Savršena ljubav izgoni strah. - 1. Jovanova 4:18",
        "Voli, i čini što hoćeš. - Sveti Avgustin",
        "Biti voljen znači biti bogat. - Victor Hugo",
        "Prava ljubav nema srećan kraj, jer prava ljubav nikad ne prestaje. - Richard Bach",
        "Najveća sreća u životu je uverenje da smo voljeni. - Victor Hugo",
        "Voli kao da nikada nisi bio povređen. - Mark Twain",
        "Ti si moje srce, moj život, moja jedina misao. - Arthur Conan Doyle",
        "Voleo sam te juče, volim te još više danas i voleo ću te sutra. - Neznan autor",
        "Ljubav je umetnost. Moraš učiti, razvijati je i ulagati u nju. - Erich Fromm",
        "Dve duše sa jednom mišlju, dva srca koja kucaju kao jedno. - Friedrich Halm",
        "Voli me kada to najmanje zaslužujem, jer tada mi je ljubav najpotrebnija. - Kineska poslovica",
        "Ljubav je najveća osvežavajuća snaga u životu. - Pablo Picasso",
        "Postoje mnoge stvari na ovom svetu koje su čudesne, ali nijedna nije čudesnija od ljubavi. - Sofokle",
        "Ti si moj raj na zemlji, moje svetlo u tami. - Neznan autor",
        "Ljubav je pesma duše, a ti si moja najlepša melodija. - William Blake",
        "U ljubavi je sve moguće, jer ona stvara čuda. - Neznan autor",
        "Samo srce vidi ispravno; ono što je suštinski važno, očima je nevidljivo. - Antoine de Saint-Exupéry"
    ];

    quoteButton.addEventListener("click", function () {
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.style.opacity = "1";
        quoteElement.textContent = randomQuote;
        quoteElement.classList.add('show-quote');
    });
});