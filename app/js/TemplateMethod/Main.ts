/**
 * Created by Tsuyoshi on 2014/09/19.
 */

/// <reference path="TanakasWoodCutPrint.ts"/>

/**
 * TemplateMethodパターン練習用モジュール。<br/>
 * 参考URL : http://www.techscore.com/tech/DesignPattern/TemplateMethod.html/
 * @preferred
 */
module TemplateMethod {
    export class Main {

        /**
         * TemplateMethodパターンのエントリポイント
         */
        static run() {
            new Main().start();
        }

        constructor() {}

        public start() : void {
            var tanakaWCP : TanakasWoodCutPrint = new TanakasWoodCutPrint();
            tanakaWCP.createWoodCutPrint();
        }
    }
}