const names = ["Youtube", "facebook", "Instagram", "Metflix", "Amazon"];
const symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "facebook",
  lco: "LearnCodeOnline"
};

//forOf: Majorly used with Array
for (const n of names) {
  //Here the memory address of the variable n remains same, just the value stored in the memory changes
  console.log(n);
}

//forIn: Majorly used with Object
for (const n in symbols) {
  console.log(`${n} : ${symbols[n]}`);
}
