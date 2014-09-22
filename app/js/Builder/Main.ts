/**
 * Created by Tsuyoshi on 2014/09/22.
 */


/**
 * Builderパターン練習用モジュール。<br/>
 * 参考URL : http://www.techscore.com/tech/DesignPattern/Prototype.html/
 * @preferred
 */
module Builder {
    export class Main {

        /**
         * Prototypeパターンのエントリポイント
         */
        static run() {
            new Main().start();
        }

        constructor() {}

        public start() : void {
            console.log("Builder::Main#start");
        }
    }
}