let browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

// for in just key
for (let browser in browsers) {
    console.log(browser);
}

// for in + index
for (let index in browsers) {
    console.log(browsers[index]);
}

// for of
for (let browser of browsers) {
    console.log(browser);
}
console.log(browsers);
