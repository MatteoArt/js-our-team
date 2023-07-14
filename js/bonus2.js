const containerEl = document.querySelector(".container");

//creo l'array di oggetti
let teamMembers = [
    {
        nameMember : "Wayne Barnett",
        role : "Founder & CEO",
        photo : "wayne-barnett-founder-ceo.jpg"
    },
    {
        nameMember : "Angela Caroll",
        role : "Chief Editor",
        photo : "angela-caroll-chief-editor.jpg"
    },
    {
        nameMember : "Walter Gordon",
        role : "Office Manager",
        photo : "walter-gordon-office-manager.jpg"
    },
    {
        nameMember : "Angela Lopez",
        role : "Social Media Manager",
        photo : "angela-lopez-social-media-manager.jpg"
    },
    {
        nameMember : "Scott Estrada",
        role : "Developer",
        photo : "scott-estrada-developer.jpg"
    },
    {
        nameMember : "Barbara Ramos",
        role : "Graphic Designer",
        photo : "barbara-ramos-graphic-designer.jpg"
    }
];

for (let i = 0; i < teamMembers.length; i++) {
    let cardEl = document.createElement("div"); //creo la card
    cardEl.classList.add("item");
    let memberObj = teamMembers[i]; //oggetto
    containerEl.append(cardEl); //aggiungo la card

    //creo dinamicamente immagine
    let divImg = document.createElement("img");
    divImg.src = "images/" + memberObj.photo;
    cardEl.append(divImg); //aggiungo img dentro card

    //creo dinamicamente div contenente nome e ruolo
    let divCap = document.createElement("div");
    divCap.classList.add("cap-div");
    //ci scrivo dentro nome e ruolo
    divCap.innerHTML = `<h3>${memberObj.nameMember}</h3> <div class="descr">${memberObj.role}</div>`;
    cardEl.append(divCap); //lo appendo a card
}