const listMembers = document.getElementById("lista-membri");

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

//stampo in console per ogni oggetto i valori delle relative proprietà
for (let i = 0; i < teamMembers.length; i++) {
    let member = teamMembers[i];
    console.log(member.nameMember, member.role, member.photo);
}

listMembers.innerHTML = "";
//stampo nel dom ogni oggetto con le relative proprietà
for (let i = 0; i < teamMembers.length; i++) {
    let objMember = teamMembers[i];
    listMembers.innerHTML += `<li>${objMember.nameMember} -- ${objMember.role} -- ${objMember.photo}</li>`;
}