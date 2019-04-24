const siteContent = { //this is an object with properties and values.
  'nav': {       
    'nav-item-1': 'Services', 
    'nav-item-2': 'Product', 
    'nav-item-3': 'Vision', 
    'nav-item-4': 'Features', 
    'nav-item-5': 'About', 
    'nav-item-6': 'Contact', 
    'img-src': 'img/logo.png'
  },
  'cta': { 
    'h1': 'DOM Is Awesome', 
    'button': 'Get Started',
    'img-src': 'img/header-img.png' 
  },
  'main-content': { 
    'features-h4':'Features',
    'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.', 
    'about-h4':'About', 
    'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg', 
    'services-h4':'Services',
    'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4':'Product', 
    'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4':'Vision',
    'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  'contact': {
    'contact-h4' : 'Contact',
    'address' : '123 Way 456 Street Somewhere, USA',
    'phone' : '1 (888) 888-8888',
    'email' : 'sales@greatidea.io',
  },
  'footer': { 
    'copyright' : 'Copyright Great Idea! 2018'
  },
};

//nav menu
const navAnchors = document.querySelectorAll('nav a');
// console.log(navAnchors);

const anchorContent = Object.values(siteContent.nav);
// console.log(anchorContent);

for( let i = 0; i < Array.from(navAnchors).length; i++){
  const newArray = Array.from(navAnchors)[i];
  newArray.textContent = anchorContent[i];
}
  //logo
const logoImg = document.getElementById('logo-img');
logoImg.src = siteContent.nav["img-src"];
console.log(logoImg);
//cta

let ctaText = document.querySelector('section div h1');

let h1Text = siteContent.cta.h1;
ctaText.textContent = h1Text;
console.log(ctaText);

//button

let ctaBtn = document.querySelector('button');

let buttonText = siteContent.cta.button;

ctaBtn.textContent = buttonText;
console.log(ctaBtn);

//circle img

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta["img-src"];
console.log(ctaImg);


//middle img

const midImg = document.querySelector('#middle-img');
midImg.src = siteContent["main-content"]["middle-img-src"];
console.log(midImg);
//main content

const HFours = [siteContent["main-content"]["features-h4"], siteContent["main-content"]["about-h4"], siteContent["main-content"]["services-h4"], siteContent["main-content"]["product-h4"], siteContent["main-content"]["vision-h4"] ];


const mainContentH4 = document.querySelectorAll('.main-content h4');
mainContentH4.forEach((h4, index) => {
  h4.textContent = HFours[index];
  console.log(h4);
});

console.log(mainContentH4);

//paragraphs

const mainPTags = [siteContent["main-content"]["features-content"], siteContent["main-content"]["about-content"], siteContent["main-content"]["services-content"], siteContent["main-content"]["product-content"], siteContent["main-content"]["vision-content"] ];


//middle img
let middleImg = document.querySelector('.middle-img'); 
  middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']) 

//new navs

//create text node to append to "a" element that will then append to
//"nav" element.

//append
let navigator = document.querySelector('nav');
let newNav = document.createElement('a');
newNav.style.color = 'green';           
let newNavText = document.createTextNode('Directions');
newNav.setAttribute('href', '#');
newNav.appendChild(newNavText);
navigator.appendChild(newNav);  

//prepend
let newNavTwo = document.createElement('a');
newNavTwo.style.color = 'green';
let newNavTextTwo = document.createTextNode('Examples');
newNavTwo.setAttribute('href', '#');
newNavTwo.appendChild(newNavTextTwo);
navigator.prepend(newNavTwo);
