/**
 * Created by Tsuyoshi on 2014/09/19.
 */

/// <reference path="../TemplateMethod/ImagawasWoodCutPrint.ts"/>

/**
 * FactoryMethodパターン練習用モジュール。<br/>
 * 参考URL : http://www.techscore.com/tech/DesignPattern/FactoryMethod.html/
 * @preferred
 */
module FactoryMethod {

    import ImagawasWoodCutPrint = TemplateMethod.ImagawasWoodCutPrint;

    export class Main {

        /**
         * FactoryMethodパターンのエントリポイント
         */
        static run() {
            new Main().start();
        }

        constructor() {}

        public start() : void {
            var imagawaWCP : ImagawasWoodCutPrint = new ImagawasWoodCutPrint();
            imagawaWCP.createWoodCutPrint();
        }
    }
}