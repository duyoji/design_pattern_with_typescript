/**
 * Created by Tsuyoshi on 2014/09/19.
 */

/// <reference path="Taro.ts"/>
/// <reference path="Interface/IChairperson.ts"/>

module Adapter {

    /**
     * 代表者になれる素質があると自覚したタロー
     */
    export class NewTaro extends Taro implements Interface.IChairperson {

        constructor() {
            super();
        }

        public organizeClass():void {
            this.enjoyWithAllClassmate();
        }
    }
}