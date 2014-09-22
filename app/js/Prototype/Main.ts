/**
 * Created by Tsuyoshi on 2014/09/19.
 */

/// <reference path="Teacher.ts"/>
/// <reference path="Paper.ts"/>

/**
 * Prototypeパターン練習用モジュール。<br/>
 * 参考URL : http://www.techscore.com/tech/DesignPattern/Prototype.html/
 * @preferred
 */
module Prototype {
    export class Main {

        /**
         * Prototypeパターンのエントリポイント
         */
        static run() {
            new Main().start();
        }

        constructor() {}

        public start() : void {
            console.log("Prototype::Main#start");
            var teacher : Teacher = new Teacher();
            var papers : Paper[] = teacher.createManyCrystals();

            console.log("papers.length : " + papers.length);
            papers.forEach((paper)=> {
                console.log("paper name : " + paper.getName());
            });
        }
    }
}