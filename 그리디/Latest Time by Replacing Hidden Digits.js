var maximumTime = function (time) {
  let hourStr = time.slice(0, 2).split("");
  let timeStr = time.slice(3).split("");

  if (hourStr[0] === "?" && hourStr[1] === "?") {
    hourStr = ["2", "3"];
  } else if (hourStr[0] === "?") {
    if (hourStr[1] <= 3) {
      hourStr[0] = "2";
    } else {
      hourStr[0] = "1";
    }
  } else if (hourStr[1] === "?") {
    if (hourStr[0] === "1" || hourStr[0] === "0") {
      hourStr[1] = "9";
    } else {
      hourStr[1] = "3";
    }
  }

  if (timeStr[0] === "?" && timeStr[1] === "?") {
    timeStr = ["5", "9"];
  } else if (timeStr[0] === "?") {
    timeStr[0] = "5";
  } else if (timeStr[1] === "?") {
    timeStr[1] = "9";
  }

  return `${hourStr.join("")}:${timeStr.join("")}`;
};

console.log(maximumTime("0?:??"));
