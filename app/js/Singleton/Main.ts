/**
 * Created by Tsuyoshi on 2014/09/19.
 */

/// <reference path="RegisterNote.ts"/>

/**
 * Singletonパターン練習用モジュール。<br/>
 * 参考URL : http://www.techscore.com/tech/DesignPattern/Singleton.html/
 * @preferred
 */
module Singleton {
    export class Main {

        /**
         * TemplateMethodパターンのエントリポイント
         */
        static run() {
            new Main().start();
        }

        constructor() {}

        public start() : void {
            console.log("Singleton::Main#start");
            var r1 : RegisterNote = RegisterNote.getInstance();
            var r2 : RegisterNote = RegisterNote.getInstance();
            var r3 : RegisterNote = RegisterNote.getInstance();
        }
    }
}