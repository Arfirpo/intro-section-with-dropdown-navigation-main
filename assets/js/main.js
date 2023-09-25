const hamburguerMenu = document.querySelector('#hamburguer-menu');
const navBar = document.querySelector('#navbar');
const closeBtn = document.querySelector('#close-btn');
const featureBtn = document.querySelector('#feature-btn');
const companyBtn = document.querySelector('#company-btn');
const featureSubMenu = document.querySelector('.features-ul');
const companySubMenu = document.querySelector('.company-ul');
const featureBtnArrow = document.querySelector('#features-btn-arrow');
const companyBtnArrow = document.querySelector('#company-btn-arrow');

//opening the navbar
hamburguerMenu.addEventListener('click', ()=>{
    hamburguerMenu.style.display = 'none';
    navBar.style.display = 'block';
});

// closing the navbar
closeBtn.addEventListener('click', ()=>{
    screenSize = window.innerWidth;
    if(screenSize >= 768){
        navBar.style.display = 'block';
        hamburguerMenu.style.display = 'none';  

    } else {
        hamburguerMenu.style.display = 'block';  
        navBar.style.display = 'none';
    }
    
});

//opening the feature sub-menu
featureBtn.addEventListener('click', ()=>{
    // if(featureSubMenu.style.display == 'block'){
    //     featureSubMenu.style.display = 'none';
    // } else{
    //     featureSubMenu.style.display = 'block';
    // };
    //usando operador ternario (otra forma de hacer lo de arriba) para hacer aparecer/ocultar el navbar cuando se haga click
    featureSubMenu.style.display = (featureSubMenu.style.display === 'block') ? 'none' : 'block';
    //modificar estilos del arrow icon
    featureBtnArrow.style.transform = (featureBtnArrow.style.transform === 'rotate(180deg)') ? '' : 'rotate(180deg)' ;
    //aplicando una transición suavizada a la transformación del arrow icon
    featureBtnArrow.style.transition = 'transform .3s ease';
});

//opening the company sub-menu
companyBtn.addEventListener('click', ()=>{
    companySubMenu.style.display = (companySubMenu.style.display === 'block') ? 'none' : 'block';
    companyBtnArrow.style.transform = (companyBtnArrow.style.transform === 'rotate(180deg)') ? '' : 'rotate(180deg)' ;
    companyBtnArrow.style.transition = 'transform .3s ease';
});