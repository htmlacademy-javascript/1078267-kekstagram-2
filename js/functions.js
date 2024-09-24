const сheckRandomString = (string, maxLength) => string.length <= maxLength;
сheckRandomString('266af55', 5);

const palindromeString = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString;
};

palindromeString('ствооооооооооооооол');
