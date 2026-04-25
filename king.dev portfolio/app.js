let intro = document.getElementById('intro');
let experience = document.getElementById('experience');
let skill = document.getElementById('skill');
let project = document.getElementById('project');
let contact = document.getElementById('contact');

let aHref = document.querySelectorAll('a');

let active = 'intro';
let zIndex = 2;

aHref.forEach(a => {
    a.addEventListener('click', function(event){
        let tab = a.dataset.tab;
        if(tab !== null && tab !== active){

            let activeOld = document.querySelector('.tab.active');
            if(activeOld) activeOld.classList.remove('active');
            active = tab;

            let tabActive = document.getElementById(active);
            zIndex++;
            tabActive.style.zIndex = zIndex;
            tabActive.style.setProperty('--x', event.clientX + 'px');
            tabActive.style.setProperty('--y', event.clientY + 'px');
            tabActive.classList.add('active');
        }
    })
})

const contacts = [
    {
        label: "Call Me",
        icon: "fa-solid fa-phone",
        value: "08109250297",
        link: "tel:08109250297",
        color: "#4CAF50"
    },
    {
        label: "Send Email",
        icon: "fa-regular fa-envelope",
        value: "kingsleyadesina1@gmail.com",
        link: "mailto:kingsleyadesina1@gmail.com",
        color: "#FF5722"
    },
    {
        label: "WhatsApp Me",
        icon: "fa-brands fa-whatsapp",
        value: "+2349126507106",
        link: "https://wa.me/2349126507106?text=Hello%20Kingsley,%20I%E2%80%99m%20interested%20in%20working%20with%20you.",
        color: "#25D366"
    }
];

const contactList = document.getElementById("contactList");

contacts.forEach(contact => {
    const card = document.createElement("a");
    card.href = contact.link;
    card.target = "_blank";
    card.classList.add("contact-card");

    card.innerHTML = `
        <div class="icon" style="background:${contact.color}">
            <i class="${contact.icon}"></i>
        </div>
        <div class="info">
            <div class="label">${contact.label}</div>
            <div class="value">${contact.value}</div>
        </div>
        <div class="arrow">
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    `;

    contactList.appendChild(card);
});