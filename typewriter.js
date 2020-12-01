const sentence = "hello from the other side";
let counter = 0;
for(const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, counter * 100)
  counter ++;
}
setTimeout(() => {
  process.stdout.write("\n")
}, counter * 100)