const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('1-5: ', input => {

  console.log("                      __________________");
  console.log("                      \\                 \\");
  console.log("                       \\                 \\");
  console.log("                        \\                 \\");
  console.log("                         \\                 \\");
  console.log("                          \\                 \\");
  console.log("                           \\                 \\");
  console.log("           /---------------//---------------------");
  console.log("          /---------------//                   / |");
  console.log("         /               //                   /__|");
  console.log("        /               //                   /   |");
  console.log("       /_______________//   o o             /    |");
  console.log("      /------------------------------------/     |");
  console.log("      |                                    |     |");
  console.log("      |                                    |     |");
  console.log("      |                                    |     |");
  console.log("      |------------------------------------|     |");




  console.log(`For you, recycle bin is ${input} out of 5!`);
  readline.close();
});
