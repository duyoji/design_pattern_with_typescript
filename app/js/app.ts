/**
 * Created by Tsuyoshi on 2014/09/18.
 */
/// <reference path="Iterator/Main.ts"/>


/**
 * 起動スクリプト
 */
window.addEventListener("load", function onload() {
    window.removeEventListener("load", onload);
    Iterator.Main.run();
});