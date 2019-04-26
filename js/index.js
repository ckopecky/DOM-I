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

const mainContentPTag = document.querySelectorAll('.main-content p');
mainContentPTag.forEach((p, index) => {
  p.textContent = mainPTags[index];
  console.log(p);
});

//contact

const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent.contact["contact-h4"];
console.log(contactH4);

const contactPTags = [siteContent.contact.address, siteContent.contact.phone, siteContent.contact.email];

const contactBlock = document.querySelectorAll(".contact p");

contactBlock.forEach((p, index) => {
  p.textContent = contactPTags[index];
  console.log(p);
})

let footer = document.getElementsByTagName('footer');

footer = Array.from(footer);

const copyright = footer[0].textContent = siteContent.footer.copyright;

console.log(copyright);

//new navs

//change each nav to green

navAnchors.forEach(nav => {
  nav.style.color = "green";
})

//create text node to append to "a" element that will then append to
//"nav" element.

//append and prepend

const newAnchor = document.createElement('a');

const newNewAnchor = document.createElement('a');

newNewAnchor.textContent = "First";
newAnchor.textContent = "Last";
newNewAnchor.style.color = "green";
newAnchor.style.color = "green";
newAnchor.style.cursor = "pointer";
newNewAnchor.style.cursor = "pointer";

const navigation = document.querySelector('nav');

navigation.prepend(newNewAnchor);
navigation.append(newAnchor);

