/**
 * Created by Tsuyoshi on 2014/09/18.
 */
module Iterator.Interface {
    export interface IIterator {
        /**
         * 次のオブジェクトがあるか確認
         */
        hasNext() : boolean;

        /**
         * 次のオブジェクトを返す
         */
        next()    : any;
    }
}