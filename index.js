const alphabetWithNumbers = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`];
const passThroughSymbols = [` `, `,`, `.`, `!`, `?`, `"`, `'`, `(`, `)`, `-`, `+`, `=`, `$`];

const findTheOppositeDigit = (digit, alphabet) => alphabet[(alphabet.length - 1) - alphabet.indexOf(digit)];

const decode_encode = (prompt, alphabet) => {

  let output = [];

  for(let i in prompt) {
    
    if(passThroughSymbols.includes(prompt[i])) {
      output.splice(i, 0, passThroughSymbols.find((x) => prompt[i] === x));
      continue;
    }

    const oppositeDigit = findTheOppositeDigit(prompt[i], alphabet);
    output.splice(i, 0, oppositeDigit);
    // console.log(`output:`, output);
  }

  return output.join(``).toUpperCase();

}

let myInput = `Hi Tyler. Good Morning! It's me...`;

console.log(`myInput:`, myInput);

myInput = myInput.toLowerCase();

let myInput2 = decode_encode(myInput, alphabetWithNumbers);

console.log(`OUTPUT_1:`, myInput2);


myInput2 = myInput2.toLowerCase();
console.log(`OUTPUT_2:`, decode_encode(myInput2, alphabetWithNumbers));

