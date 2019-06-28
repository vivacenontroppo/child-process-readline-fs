const { exec } = require("child_process");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Do you want to rhyme somehting?\n\n", value => {
  const re = new RegExp(/y|ok|sure|fine/gi)
  if (re.test(value)) {
      rl.question("\n\x1b[34mGreat! What word would you like to rhyme?\x1b[0m \n \n", value => {
        exec(
          `curl https://api.datamuse.com/words\?rel_rhy\=${value}`,
          (error, stdout, stderr) => {
            if (error) throw error;
            const date = new Date();
            const bestof = JSON.parse(stdout);

            fs.writeFile(
              `./results/${value}-rhyme-from-${date}.json`,
              stdout,
              err => {
                if (err) throw err;
                console.log(
                  `\x1b[36m \nYour rhymes are saved and rated in file:\x1b[0m ${value}-rhyme-from-${date}.json!`
                );
                console.log(
                  `\nThe best result was\x1b[35m ${bestof[0].word}. \x1b[0m`
                );
              }
            );
            rl.close();
            //console.log(stderr);
          }
        );
      });
  } else {
    console.log('Too bad...')
    rl.close();
  }
});
