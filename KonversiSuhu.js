const celciusToFahrenheit = require('./RumusSuhu');
const chalk = require('chalk');

// Menentukan suhu dalam Celsius
let celcius = 30;

// Memanggil fungsi dari modul rumusSuhu.js
let fahrenheit = celciusToFahrenheit(celcius);

// Menampilkan hasil konversi di terminal
console.log(chalk.green('=========================='));
console.log(chalk.green('     PROGRAM KONVERSI SUHU'));
console.log(chalk.green('=========================='));
console.log(chalk.blue('Suhu Celsius    : ' + celcius + '°C'));
console.log(chalk.yellow('Suhu Fahrenheit : ' + fahrenheit + '°F'));
console.log(chalk.green('=========================='));
console.log(chalk.white('Konversi suhu berhasil dilakukan!'));
