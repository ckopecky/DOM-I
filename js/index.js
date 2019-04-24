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

let headline = document.getElementsByTagName('h4');
let servicesHeadline = headline[0];
  servicesHeadline.innerHTML = siteContent['main-content']['services-h4'];
let productHeadline = headline[1];
  productHeadline.innerHTML = siteContent['main-content']['product-h4'];
let visionHeadline = headline[2];
  visionHeadline.innerHTML = siteContent['main-content']['vision-h4'];
let featuresHeadline = headline[3];
  featuresHeadline.innerHTML = siteContent['main-content']['features-h4'];
let aboutHeadline = headline[4];
  aboutHeadline.innerHTML = siteContent['main-content']['about-h4'];
let contactHeadline = headline[5];
  contactHeadline.innerHTML = siteContent['contact']['contact-h4'];

//paragraphs

let pTag = document.getElementsByTagName('p');
let servicesPTag = pTag[0];
  servicesPTag.innerHTML = siteContent['main-content']['services-content'];
let productPTag = pTag[1];
  productPTag.innerHTML = siteContent['main-content']['product-content'];
let visionPTag = pTag[2];
  visionPTag.innerHTML = siteContent['main-content']['vision-content'];
let featuresPTag = pTag[3];
  featuresPTag.innerHTML = siteContent['main-content']['features-content'];
let aboutPTag = pTag[4];
  aboutPTag.innerHTML = siteContent['main-content']['about-content'];
let addressPTag = pTag[5];
  addressPTag.innerHTML = siteContent['contact']['address'];
let phonePTag = pTag[6];
  phonePTag.innerHTML = siteContent['contact']['phone'];
let emailPTag = pTag[7];
  emailPTag.innerHTML = siteContent['contact']['email'];
let footerPTag = pTag[8];
  footerPTag.innerHTML = siteContent['footer']['copyright'];

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
