/**
 * Created by Tsuyoshi on 2014/09/22.
 */

/// <reference path="../Human.ts"/>

/**
 * Strategyのinterfaceを格納する
 */
module Strategy.Interface {

    /**
     * イテレータのアグリゲータ
     */
    export interface IComparator {
        compare(h1: Human, h2: Human) : number;
    }
}