const sentence = "hello there from lighthouse labs \n";
let timePerLetter = 0

for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write(char);
}, timePerLetter);
timePerLetter += 100;
};
setTimeout(() => {
  process.stdout.write('\n');
}, timePerLetter += 1)

