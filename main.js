// Description: JS tab navigation & dark mode
const tabs = document.querySelectorAll("nav button");
let currTitle = tabs[0].dataset.title;

function focus(title) {
  const page = document.querySelectorAll(`[data-title="${title}"]`);
  page.forEach((e) => {
    e.dataset.status = "active";
  });
}

function unFocus(title) {
  const page = document.querySelectorAll(`[data-title="${title}"]`);
  page.forEach((e) => {
    e.dataset.status = "inactive";
  });
}

function navClickHandler(elem) {
  return () => {
    unFocus(currTitle);
    currTitle = elem.dataset.title;
    focus(currTitle);
  };
}

for (const tab of tabs) {
  tab.onclick = navClickHandler(tab);
}

focus(currTitle);

// Dark Mode

const gButton = document.querySelector("#g");

gButton.onclick = () => {
  const darkStyles = document.querySelector("#dark-stylesheet");
  darkStyles.toggleAttribute("disabled");
};
