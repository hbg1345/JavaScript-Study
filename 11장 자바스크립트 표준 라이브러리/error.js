a = new Error("oh!");
console.log(a.name, a.message); // Error oh!

class CriticalError extends Error {
    constructor(level) {
        super("심각한 에러가 발생했습니다!");
        this.level = level;
    }
    get name() {
        return "CriticalError";
    }
}

b = new CriticalError(5);
throw b;

// CriticalError: 심각한 에러가 발생했습니다!
//     at Object.<anonymous> (path_to_github\JavaScript-Study\11장 자바스크립트 표준 라이브러리\error.js:14:5)
//     at Module._compile (node:internal/modules/cjs/loader:1730:14)
//     at Object..js (node:internal/modules/cjs/loader:1895:10)
//     at Module.load (node:internal/modules/cjs/loader:1465:32)
//     at Function._load (node:internal/modules/cjs/loader:1282:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49 {
//   level: 5
// }