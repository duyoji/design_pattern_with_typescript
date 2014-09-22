/**
 * Created by Tsuyoshi on 2014/09/22.
 */

/// <reference path="Interface/ICloneable.ts"/>

module Prototype {

    /**
     * 紙
     */
    export class Paper implements Interface.ICloneable {

        private name: string;

        constructor(name?: string) {
            if (name) {
                this.name = name;
            }
        }

        /**
         * 名前を取得
         * @returns {string}
         */
        public getName(): string {
            return this.name;
        }

        /**
         * インスタンスの複製を行う
         * @returns {Paper}
         */
        createClone():Prototype.Interface.ICloneable {
            var newPaper: Paper = new Paper();
            newPaper.name = this.name;

            return newPaper;
        }
    }
}