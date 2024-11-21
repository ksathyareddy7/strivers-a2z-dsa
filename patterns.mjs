import { ALPHABETS } from "./constants.mjs";
//?https://takeuforward.org/pattern/pattern-7-star-pyramid/
function pattern7(t) {
  let target = t || 5;

  for (let i = 0; i < target; i++) {
    let result = "";
    for (let j = 0; j < 2 * i + 1; j++) {
      result += "*";
    }
    for (let j = target; j > i + 1; j--) {
      result = " " + result;
    }
    console.log(result);
  }
}
//?https://takeuforward.org/pattern/pattern-8-inverted-star-pyramid/
function pattern8(t) {
  let target = t || 5;
  for (let i = target; i > 0; i--) {
    let result = "";
    for (let j = 2 * i - 1; j > 0; j--) {
      result += "*";
    }
    for (let j = target; j > i; j--) {
      result = " " + result;
    }

    console.log(result);
  }
}
//?https://takeuforward.org/pattern/pattern-9-diamond-star-pattern/
function pattern9(t) {
  let target = t || 5;
  for (let i = 0; i < target; i++) {
    let result = "";
    for (let j = 0; j < 2 * i + 1; j++) {
      result += "*";
    }
    for (let j = target; j > i + 1; j--) {
      result = " " + result;
    }
    console.log(result);
  }
  for (let i = target; i > 0; i--) {
    let result = "";
    for (let j = 2 * i - 1; j > 0; j--) {
      result += "*";
    }
    for (let j = target; j > i; j--) {
      result = " " + result;
    }

    console.log(result);
  }
}
//?https://takeuforward.org/pattern/pattern-10-half-diamond-star-pattern/
function pattern10(t) {
  let target = t || 5;
  for (let i = 0; i < target; i++) {
    let result = "";
    for (let j = 0; j <= i; j++) {
      result += "*";
    }
    console.log(result);
  }
  for (let i = target; i > 0; i--) {
    let result = "";
    for (let j = i - 1; j > 0; j--) {
      result += "*";
    }
    console.log(result);
  }
}
//?https://takeuforward.org/pattern/pattern-11-binary-number-triangle-pattern/
function pattern11(t) {
  let target = t || 5;
  for (let i = 1; i <= target; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += i % 2 === 0 ? +!(j % 2) : j % 2;
    }
    console.log(result);
  }
}
//?https://takeuforward.org/pattern/pattern-12-number-crown-pattern/
function pattern12(t) {
  let target = t || 4;

  for (let i = 1; i <= target; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    for (let j = 2 * target - 2 * i; j > 0; j--) {
      result += " ";
    }
    for (let j = i; j > 0; j--) {
      result += j;
    }
    console.log(result);
  }
}

//?https://takeuforward.org/pattern/pattern-13-increasing-number-triangle-pattern/
function pattern13(t) {
  let target = t || 5;
  let count = 0;
  for (let i = 0; i < target; i++) {
    let result = "";
    for (let j = 0; j <= i; j++) {
      count++;
      result = result + " " + count;
    }
    console.log(result);
  }
}

function pattern14(t) {
  let target = t || 5;
  for (let i = 0; i < target; i++) {
    let result = "";
    for (let j = 0; j <= i; j++) {
      result += ALPHABETS[j];
    }
    console.log(result);
  }
}

//?https://takeuforward.org/pattern/pattern-15-reverse-letter-triangle-pattern/

function pattern15(t) {
  let target = t || 5;
  for (let i = target; i > 0; i--) {
    let result = "";
    for (let j = 0; j < i; j++) {
      result += ALPHABETS[j];
    }
    console.log(result);
  }
}

//?https://takeuforward.org/pattern/pattern-16-alpha-ramp-pattern/
function pattern16(t) {
  let target = t || 5;
  for (let i = 0; i < target; i++) {
    let result = "";
    for (let j = 0; j <= i; j++) {
      result += ALPHABETS[i];
    }
    console.log(result);
  }
}

//?https://takeuforward.org/pattern/pattern-17-alpha-hill-pattern/

function pattern17(t) {
  let target = t || 4;
  for (let i = 1; i <= target; i++) {
    let result = "";
    //adding space
    for (let j = target - i; j > 0; j--) {
      result += " ";
    }
    for (let j = 0; j < i; j++) {
      result += ALPHABETS[j];
    }
    for (let j = i - 1; j > 0; j--) {
      result += ALPHABETS[j - 1];
    }
    console.log(result);
  }
}
//?https://takeuforward.org/pattern/pattern-18-alpha-triangle-pattern/
function pattern18(t) {
  let target = t || 5;
  for (let i = target; i > 0; i--) {
    let result = "";
    for (let j = target - i + 1; j > 0; j--) {
      result += ALPHABETS[target - j];
    }
    console.log(result);
  }
}
//?https://takeuforward.org/pattern/pattern-19-symmetric-void-pattern/
function pattern19() {
  let target = 5;
  for (let i = 0; i < target; i++) {
    let result = "";
    //starting stars
    for (let j = target - i; j > 0; j--) {
      result += "*";
    }
    //spaces
    for (let j = 0; j < 2 * i; j++) {
      result += " ";
    }
    for (let j = target - i; j > 0; j--) {
      result += "*";
    }
    console.log(result);
  }
  for (let i = 1; i <= target; i++) {
    let result = "";
    //starting stars
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    //spaces
    for (let j = 2 * target; j > 2 * i; j--) {
      result += " ";
    }
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    console.log(result);
  }
}
//?https://takeuforward.org/pattern/pattern-20-symmetric-butterfly-pattern/
function pattern20() {
  let target = 5;
  for (let i = 1; i <= target; i++) {
    let result = "";
    //starting stars
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    //spaces
    for (let j = 2 * target; j > 2 * i; j--) {
      result += " ";
    }
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    console.log(result);
  }
  for (let i = 1; i < target; i++) {
    let result = "";
    //starting stars
    for (let j = target - i; j > 0; j--) {
      result += "*";
    }
    //spaces
    for (let j = 0; j < 2 * i; j++) {
      result += " ";
    }
    for (let j = target - i; j > 0; j--) {
      result += "*";
    }
    console.log(result);
  }
}
//?https://takeuforward.org/pattern/pattern-21-hollow-rectangle-pattern/
function pattern21() {
  let target = 5;
  for (let i = 0; i < target; i++) {
    let result = "";
    if (i === 0 || i === target - 1) {
      for (let j = 0; j < target; j++) {
        result += "*";
      }
    } else {
      result += "*";
      for (let j = 1; j < target - 1; j++) {
        result += " ";
      }
      result += "*";
    }
    console.log(result);
  }
}
//?
function pattern22(t) {
  let target = t || 4;
  for (let i = target - 1; i >= 0; i--) {}
}
