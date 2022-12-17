const tabs = document.querySelectorAll("nav button");
let currTitle = tabs[1].dataset.title;

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

function clickHandler(elem) {
  return () => {
    unFocus(currTitle);
    currTitle = elem.dataset.title;
    focus(currTitle);
  };
}

for (const tab of tabs) {
  tab.onclick = clickHandler(tab);
}

focus(currTitle);
