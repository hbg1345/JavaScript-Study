let f = (function() {
    c = 0;
    function _f() {
        c++;
        console.log(`${c}: f is called.`);
    }
    return _f;
}());

setTimeout(f, 10);
const stop = setInterval(f, 1000);
// 1: f is called.
// 2: f is called.
// 3: f is called.
// 4: f is called.