import f from "./loop.js";
try {
    z += f(4);
} catch(e) {
    console.log(`exception "${e}" occurred.`);
} finally {
    console.log("이 바디는 항상 실행됩니다.")
}
