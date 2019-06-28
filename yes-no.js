const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Any example question?\n\n", value => {
  const re = new RegExp(/y|ok|sure|fine/gi);
  if (re.test(value)) {
    // case for yes
    rl.close();
  } else {
    // case for no
    rl.close();
  }
});
