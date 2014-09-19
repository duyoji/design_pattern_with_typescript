/**
 * Created by Tsuyoshi on 2014/09/19.
 */

/// <reference path="Interface/ICuttable.ts"/>
/// <reference path="Wood.ts"/>

module TemplateMethod {

    import ICuttable = Interface.ICuttable;

    /**
     * 木版画のテンプレートクラス
     * @abstract
     */
    export class AbstractWoodCutPrint {
        constructor(){}

        /**
         *
         * @param hanzai 版材
         * @abstract
         */
        public draw(hanzai: ICuttable): void {}

        /**
         *
         * @param hanzai 版材
         * @abstract
         */
        public cut(hanzai: ICuttable): void {}

        /**
         *
         * @param hanzai 版材
         * @abstract
         */
        public print(hanzai: ICuttable): void {}

        /**
         * テンプレート処理を含む処理の流れを記述
         */
        public createWoodCutPrint() : void {
            var wood : ICuttable = new Wood();
            this.draw(wood);
            this.cut(wood);
            this.print(wood);
        }
    }
}