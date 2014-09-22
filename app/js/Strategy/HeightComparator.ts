/**
 * Created by Tsuyoshi on 2014/09/22.
 */

/// <reference path="Interface/IComparator.ts"/>
/// <reference path="Human.ts"/>


module Strategy {

    import IComparator = Interface.IComparator;

    /**
     * Humanインスタンスの身長を比較する。
     */
    export class HeightComparator implements IComparator{
        compare(h1:Human, h2:Human):number {

            if (h1.height > h2.height) {
                return 1;
            } else if (h1.height === h2.height) {
                return 0;
            }

            return -1;
        }
    }
}