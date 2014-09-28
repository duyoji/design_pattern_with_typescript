/**
 * Created by Tsuyoshi on 2014/09/18.
 */
/// <reference path="Iterator/Main.ts"/>
/// <reference path="Adapter/Main.ts"/>
/// <reference path="TemplateMethod/Main.ts"/>
/// <reference path="FactoryMethod/Main.ts"/>
/// <reference path="Singleton/Main.ts"/>
/// <reference path="Prototype/Main.ts"/>
/// <reference path="Builder/Main.ts"/>
/// <reference path="Strategy/Main.ts"/>


/// <reference path="../../typings/tsd.d.ts"/>



/**
 * 起動スクリプト
 */
window.addEventListener("load", function onload() {
    window.removeEventListener("load", onload);

    //Iterator.Main.run();
    //Adapter.Main.run();
    //TemplateMethod.Main.run();
    //FactoryMethod.Main.run();
    //Singleton.Main.run();
    //Prototype.Main.run();
    //Builder.Main.run();
    Strategy.Main.run();

    Promise.all([Promise.resolve(111), Promise.resolve(222)]).then((results)=> {
        console.log(results);
    })
});