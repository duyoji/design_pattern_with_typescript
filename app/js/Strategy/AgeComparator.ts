/**
 * Created by Tsuyoshi on 2014/09/22.
 */

/// <reference path="Interface/IComparator.ts"/>
/// <reference path="Human.ts"/>

module Strategy {

    import IComparator = Interface.IComparator;

    /**
     * Humanインスタンスの年齢を比較する。
     */
    export class AgeComparator implements IComparator{
        compare(h1:Human, h2:Human):number {

            if (h1.age > h2.age) {
                return 1;
            } else if (h1.age === h2.age) {
                return 0;
            }

            return -1;
        }
    }
}