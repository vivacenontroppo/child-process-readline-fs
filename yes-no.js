const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Any example question?\n\n', (value) => {
  switch (value.toLowerCase()) {
    case 'yes':
    case 'y':
    // case for yes
      break;
  
    default:
    // case for anything else you want
      break;
  }

    rl.close();
});
