function celciusToFahrenheit(c) {
    // Mengubah suhu Celsius menjadi Fahrenheit
    let fahrenheit = (c * 9 / 5) + 32;
    return fahrenheit;
}

// Mengekspor fungsi agar bisa digunakan file lain
module.exports = celciusToFahrenheit;
