export function Year() {
  var date = new Date();
  return date.getFullYear();
}

export function Slugify(text) {
  const a = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  const b = "aaaaaeeeeeiiiiooooouuuunc------";
  const newText = text
    .split("")
    .map((letter, i) => letter.replace(new RegExp(a.charAt(i), "g"), b.charAt(i)));
  return newText
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-y-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export const getPagesArr = (x, last) => {
  var pages = [1, last];
  if (x === 1 || x === 2 || x === 3 || x === 4) {
    [2, 3, 4].forEach((e) => {
      if (e < last) {
        pages.push(e);
      }
    });
  } else if (x === last || x === last - 1) {
    [last - 3, last - 2, last - 1].forEach((e) => {
      if (e > 1) {
        pages.push(e);
      }
    });
  } else {
    [x - 1, x, x + 1].forEach((e) => {
      pages.push(e);
    });
  }
  pages.sort((a, b) => a - b);
  return pages;
};
