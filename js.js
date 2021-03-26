const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 4, 5];

const set = new Set(arr1);
let intersetion = [];

for (let i of arr2) {
  if (set.has(i)) {
    intersetion = [...intersetion, i];
  }
}
