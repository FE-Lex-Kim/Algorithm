var lemonadeChange = function (bills) {
  let $5 = 0;
  let $10 = 0;
  for (const bill of bills) {
    if (bill === 5) {
      $5++;
    } else if (bill === 10) {
      if ($5 === 0) return false;
      $10++;
      $5--;
    } else {
      if (0 < $10 && 0 < $5) {
        $10--;
        $5--;
      } else if (3 <= $5) {
        $5 -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
