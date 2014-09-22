/**
 * Created by Tsuyoshi on 2014/09/22.
 */

/// <reference path="Interface/IComparator.ts"/>
/// <reference path="AgeComparator.ts"/>
/// <reference path="HeightComparator.ts"/>
/// <reference path="Human.ts"/>

/**
 * Strategyパターン練習用モジュール。<br/>
 * 参考URL : http://www.techscore.com/tech/DesignPattern/Strategy.html/
 * @preferred
 */
module Strategy {

    import IComparator = Interface.IComparator;

    export class Main {

        /**
         * Strategyパターンのエントリポイント
         */
        static run() {
            new Main().start();
        }

        constructor() {}

        public start() : void {
            console.log("Strategy::Main#start");
            var h1 = new Human('taro', 175, 60, 24);
            var h2 = new Human('jiro', 180, 62, 19);

            // 年齢比較
            var mc1 = new MyClass( new AgeComparator() );
            var ageResult : number = mc1.compare(h1, h2);
            console.log("ageResult : " + ageResult);

            // 身長比較
            var mc2 = new MyClass( new HeightComparator() );
            var heightResult = mc2.compare(h1, h2);
            console.log("heightResult : " + heightResult);
        }
    }

    export class MyClass {
        private comparator : IComparator;

        constructor(comparator: IComparator) {
            this.comparator = comparator;
        }

        public compare(h1: Human, h2: Human) : number {
            return this.comparator.compare(h1, h2);
        }
    }
}