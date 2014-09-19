/**
 * Created by Tsuyoshi on 2014/09/19.
 */

/// <reference path="Interface/ICuttable.ts"/>

module TemplateMethod {

    import ICuttable = Interface.ICuttable;

    /**
     * 版画素材(ICuttableインターフェースの中身は空)
     * @abstract
     */
    export class Wood implements ICuttable {
    }
}