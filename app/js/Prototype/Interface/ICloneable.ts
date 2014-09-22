/**
 * Created by Tsuyoshi on 2014/09/22.
 */
module Prototype.Interface {

    /**
     * 複製可能なインターフェース
     */
    export interface ICloneable {
        /**
         * 複製を行う
         */
        createClone() : ICloneable;
    }
}