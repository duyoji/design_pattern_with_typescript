/**
 * Created by Tsuyoshi on 2014/09/18.
 */

/// <reference path="IIterator.ts"/>

module Iterator.Interface {
    export interface IAggregate {
        /**
         * IIteratorオブジェクトを返す
         */
        iterator() : IIterator;
    }
}