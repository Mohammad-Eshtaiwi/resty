module.exports = arr => {
  let set = new Set();
  arr.forEach(item => {
    console.log(typeof JSON.stringify(item));
    set.add(JSON.stringify(item));
  });
  let newArr = [];
  set.forEach(item => newArr.push(JSON.parse(item)));
  console.log(newArr);
  return newArr;
};
