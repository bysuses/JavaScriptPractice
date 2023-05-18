let size = 8;
let line;
for (let i = 0; i < size; i++) {
    line = "";
    for (let j = 0; j < size; j++) {
        if (j % 2 == 0) line += "#";
        else line += " ";
    }
    console.log(line);
}