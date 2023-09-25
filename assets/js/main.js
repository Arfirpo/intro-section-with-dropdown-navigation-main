const hamburguerMenu = document.querySelector('#hamburguer-menu');
const navBar = document.querySelector('#navbar');
const closeBtn = document.querySelector('#close-btn');
const featureBtn = document.querySelector('#feature-btn');
const companyBtn = document.querySelector('#company-btn');
const featureSubMenu = document.querySelector('.features-ul');
const companySubMenu = document.querySelector('.company-ul');

//opening the navbar
hamburguerMenu.addEventListener('click', ()=>{
    hamburguerMenu.style.display = 'none';
    navBar.style.display = 'block';
});

// closing the navbar
closeBtn.addEventListener('click', ()=>{
    hamburguerMenu.style.display = 'block';
    navBar.style.display = 'none';
});

//opening the feature sub-menu
featureBtn.addEventListener('click', ()=>{
    featureSubMenu.style.display = 'block';
});

//opening the company sub-menu
companyBtn.addEventListener('click', ()=>{
    companySubMenu.style.display = 'block';
})