/**
 * Created by Tsuyoshi on 2014/09/19.
 */

/// <reference path="AbstractWoodCutPrint.ts"/>
/// <reference path="Potato.ts"/>
/// <reference path="Interface/ICuttable.ts"/>


module TemplateMethod {

    import ICuttable = Interface.ICuttable;

    /**
     * 田中の版画作成の処理内容記述
     * @abstract
     */
    export class ImagawasWoodCutPrint extends AbstractWoodCutPrint{

        /**
         *
         * @param hanzai 版材
         */
        public draw(hanzai: ICuttable): void {
            console.log("hanzai にマジックを使って大好きな女の子の絵を描く");
        }

        /**
         *
         * @param hanzai 版材
         */
        public cut(hanzai: ICuttable): void {
            console.log("彫刻刀を使って細部まで丁寧に hanzai を彫る");
        }

        /**
         * ICuttableインターフェースを実装したクラスのインスタンスを返す
         * @returns {TemplateMethod.Wood}
         */
        public createCuttable() : ICuttable {
            console.log("材料は芋");
            return new Potato();
        }


        /**
         *
         * @param hanzai 版材
         */
        public print(hanzai: ICuttable): void {
            console.log("版画インクと馬簾を使って豪快にプリントする");
        }

    }
}