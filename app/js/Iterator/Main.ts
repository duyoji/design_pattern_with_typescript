/**
 * Created by Tsuyoshi on 2014/09/17.
 */

/// <reference path="MyTeacher.ts"/>

/**
 * Iteratorパターン練習用モジュール。<br/>
 * 参考URL : http://www.techscore.com/tech/DesignPattern/Iterator/Iterator1.html/
 * @preferred
 */
module Iterator {

    export class Main {

        /**
         * 生徒の名簿作成, 呼び出しを行う先生
         */
        private teacher : MyTeacher;

        /**
         * Iteratorパターンの処理開始ポイント
         */
        static run() {
            new Main().start();
        }

        /**
         * コンストラクタ
         */
        constructor() {
            this.teacher = new MyTeacher();
        }

        /**
         * Main.runから呼び出される
         */
        public start(): void {
            this.teacher.createStudentList();
            this.teacher.callStudents();
        }
    }
}