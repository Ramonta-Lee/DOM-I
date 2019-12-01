const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navContainer = document.querySelector('nav');

const navAnchor = document.querySelectorAll('a');
const navAnchorOne = navAnchor[0];
navAnchorOne.textContent = 'Services';

const navAnchorTwo = navAnchor[1];
navAnchorTwo.textContent = 'Product';

const navAnchorThree = navAnchor[2];
navAnchorThree.textContent = 'Vision';

const navAnchorFour = navAnchor[3];
navAnchorFour.textContent = 'Features';

const navAnchorFive = navAnchor[4];
navAnchorFive.textContent = 'About';

const navAnchorSix = navAnchor[5];
navAnchorSix.textContent = 'Content';
//End of nav 

//Headline
//Need to fix headline breaks
const headLine = document.querySelector('h1');
headLine.textContent = 'Dom is Awesome';

//button
const getButton = document.querySelector('button');
getButton.textContent = 'Get Started';

//Code img
let codeImg = document.getElementById('cta-img');
codeImg.setAttribute('src', 'img/header-img.png');

//Main Content
const desc = document.querySelectorAll('h4');
const descT = document.querySelectorAll('p');

const titleOne = desc[0];
const textOne = descT[0];

titleOne.textContent = 'Features';
textOne.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const titleTwo = desc[1];
const textTwo = descT[1];

titleTwo.textContent = 'About';
textTwo.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const titleThree = desc[2];
const textThree = descT[2];

titleThree.textContent = 'Services';
textThree.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const titleFour = desc[3];
const textFour = descT[3];

titleFour.textContent = 'Product';
textFour.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const titleFive = desc[4];
const textFive = descT[4];

titleFive.textContent = 'Vision';
textFive.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//Middle img
const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', 'img/mid-page-accent.jpg');

// Contact
const bottomDesc = document.querySelector('.contact h4');
bottomDesc.textContent = 'Contact';

const bottomDescT = document.querySelectorAll('.contact p');
const contactText = bottomDescT[0];

//need to add <break>
contactText.textContent = '123 Way 456 Street Somewhere, USA';

const phoneText = bottomDescT[1];
phoneText.textContent = '1 (888) 888-8888';

const emailText = bottomDescT[2];
emailText.textContent = 'sales@greatidea.io';

const feet = document.querySelector('footer p');
feet.textContent = 'Copyright Great Idea! 2018';