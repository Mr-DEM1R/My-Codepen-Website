/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);



//test
var images;


images = ['https://cdn.dribbble.com/users/527354/screenshots/4465601/media/edcecd76e85eb76b4479953937e57213.gif', 'https://cdn.dribbble.com/users/527354/screenshots/4351290/bold_portfolio_concept_18.gif', 'https://cdn.dribbble.com/users/527354/screenshots/4205554/spaced_hero.gif'];

let element_pics = document.getElementById('pics');
images.push(images[0]);
element_pics.setAttribute("src", images.shift());


document.getElementById('previous').addEventListener('click', (event) => {
  let element_pics2 = document.getElementById('pics');
  images.unshift(images.slice(-1)[0]);
  element_pics2.setAttribute("src", images.pop());

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_pics3 = document.getElementById('pics');
  images.push(images[0]);
  element_pics3.setAttribute("src", images.shift());

});

//test 2
var food, item;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


var food, item;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


food = ['Web Development', 'Software Solutions', 'Business Development'];
let element_start = document.getElementById('start');
food.forEach((item) => {
  element_start.style.color = '#33ccff';
  let new_li = document.createElement('li');
  new_li.innerText = item;
  let new_span = document.createElement('span');
  let new_button = document.createElement('button');
  new_button.innerText = 'Add';
  new_button.setAttribute("id", item);

  new_span.appendChild(new_button);

  new_li.appendChild(new_span);

  element_start.appendChild(new_li);
});


document.getElementById('Web Development').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li2 = document.createElement('li');
  new_li2.style.color = '#33ffff';
  new_li2.innerText = 'Web Development';

  element_list.appendChild(new_li2);

});

document.getElementById('Software Solutions').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list');
  let new_li3 = document.createElement('li');
  new_li3.style.color = '#33ffff';
  new_li3.innerText = 'Software Solutions';

  element_list2.appendChild(new_li3);

});

document.getElementById('Business Development').addEventListener('click', (event) => {
  let element_list3 = document.getElementById('list');
  let new_li4 = document.createElement('li');
  new_li4.style.color = '#33ffff';
  new_li4.innerText = 'Business Development';

  element_list3.appendChild(new_li4);

});

document.getElementById('add').addEventListener('click', (event) => {
  let element_list4 = document.getElementById('list');
  let new_li5 = document.createElement('li');
  new_li5.style.color = '#33ffff';
  new_li5.innerText = getNumberOrString(document.getElementById('text').value);

  element_list4.appendChild(new_li5);

});
//hamburger