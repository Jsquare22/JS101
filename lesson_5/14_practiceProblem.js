let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let objKeys = Object.keys(obj);
let colorSize = [];
for (let keys in objKeys) {
  if (obj[objKeys[keys]].type === "fruit") {
    let fruitColor = obj[objKeys[keys]].colors.map( color => {
      let capitalColor = color.replace(color[0],color[0].toUpperCase());
      return capitalColor;
    });
    colorSize.push(fruitColor);
  } else if (obj[objKeys[keys]].type === "vegetable") {
    console.log(obj[objKeys[keys]].size);
    let vegSize = obj[objKeys[keys]].size.toUpperCase();
    colorSize.push(vegSize);
  }
}

console.log(colorSize);