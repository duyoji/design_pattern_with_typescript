/**
 * Created by Tsuyoshi on 2014/09/19.
 */

/// <reference path="NewTaro.ts"/>
/// <reference path="Interface/IChairperson.ts"/>

/**
 * Adapterパターン練習用モジュール。<br/>
 * 参考URL : http://www.techscore.com/tech/DesignPattern/Adapter/Adapter1.html/
 * @preferred
 */
module Adapter {
    export class Main {

        /**
         * Adapterパターンのエントリポイント
         */
        static run() {
            new Main().start();
        }

        constructor() {}

        public start() : void {
            var chairperson : Interface.IChairperson = new NewTaro();
            chairperson.organizeClass();
        }
    }
}