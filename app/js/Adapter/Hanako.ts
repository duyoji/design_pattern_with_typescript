/**
 * Created by Tsuyoshi on 2014/09/19.
 */

/// <reference path="Taro.ts"/>
/// <reference path="Interface/IChairperson.ts"/>

module Adapter {
    /**
     * 代表者になりたくないTaroの能力を別の代表者HanakoがTaroの能力を呼び覚ます
     */
    export class Hanako implements Interface.IChairperson {

        private taro: Taro;

        constructor(){
            this.taro = new Taro();
        }

        public organizeClass():void {
            console.log("花子が太郎のみんなで楽しむ能力を呼び覚ます");
            this.taro.enjoyWithAllClassmate();
        }
    }
}