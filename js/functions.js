const CheckRandomString = (string, maxLength) => {
  const check = string.length <= maxLength;
  return check;
};

CheckRandomString('266af55', 5);

function PalindromeString(string) {
  string = string.toLowerCase().replaceAll(' ', '');
  const lastIndex = string.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    if (string.at(i) === string.at(lastIndex - i)) {
      return true;
    }
  }
  return false;
}

PalindromeString('Лёша на полке клопа нашёл ');
