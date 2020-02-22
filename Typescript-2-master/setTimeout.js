function doSetTimeout(x) {
    setTimeout(function() {
        console.log(x);
    }, x * 1000);
}


for (let x = 0; x <= 5; ++x) {
    doSetTimeout(x);
}
