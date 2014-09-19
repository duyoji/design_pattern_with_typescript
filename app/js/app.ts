/**
 * Created by Tsuyoshi on 2014/09/18.
 */
/// <reference path="Iterator/Main.ts"/>
/// <reference path="Adapter/Main.ts"/>
/// <reference path="TemplateMethod/Main.ts"/>


/**
 * 起動スクリプト
 */
window.addEventListener("load", function onload() {
    window.removeEventListener("load", onload);

    //Iterator.Main.run();
    //Adapter.Main.run();
    TemplateMethod.Main.run();
});