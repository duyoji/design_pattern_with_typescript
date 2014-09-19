/**
 * Created by Tsuyoshi on 2014/09/18.
 */

/// <reference path="IIterator.ts"/>

/**
 * Iteratorのinterfaceを格納する
 */
module Iterator.Interface {

    /**
     * イテレータのアグリゲータ
     */
    export interface IAggregate {
        /**
         * IIteratorオブジェクトを返す
         */
        iterator() : IIterator;
    }
}