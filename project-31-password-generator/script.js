const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("uppercase");
const lowerEl = document.getElementById("lowercase");
const clipboardEl = document.getElementById("clipboard");
const numEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");

clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;
  if (!password) {
    return;
  }
  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert("Password copied to clipboard")
});

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const getRandomLower = () => String.fromCharCode(getRandomInt(97, 122));

const getRandomUpper = () => String.fromCharCode(getRandomInt(65, 90));

const getRandomNum = () => String.fromCharCode(getRandomInt(48, 57));

const getRandomSymbol = () => {
  const symbols = "!@#$%^&*(),.<>[]{}=";
  return symbols.charAt(Math.floor(Math.random() * symbols.length));
};
const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNum,
  symbol: getRandomSymbol,
};
const generatePassword = (lower, upper, number, symbol, length) => {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  if (typesCount === 0) {
    return "";
  }
  for (let index = 0; index < length; index += typesCount) {
    typesArray.forEach((type) => {
      console.log(type);
      const funcName = Object.keys(type);
      const password = randomFunc[funcName]();
      generatedPassword += password;
    });
  }
  return generatedPassword.slice(0, length);
};

generateBtn.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowerEl.checked;
  const hasUpper = upperEl.checked;
  const hasSymbol = symbolsEl.checked;
  const hasNumber = numEl.checked;
  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});
