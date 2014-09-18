/**
 * Created by Tsuyoshi on 2014/09/18.
 */

/// <reference path="Interface/IIterator.ts"/>
/// <reference path="MyStudentList.ts"/>

import IIterator     = Iterator.Interface.IIterator;
import MyStudentList = Iterator.MyStudentList;


module Iterator {
    /**
     * 生徒リストのイテレータクラス
     */
    export class MyStudentListIterator implements IIterator {

        /**
         * イテレートする生徒リスト
         */
        private myStudentList : MyStudentList;

        /**
         * 現在のイテレート回数を保持
         */
        private index : number;

        /**
         * イテレート対象の生徒リストを渡す
         * @param list MyStudentList
         */
        constructor(list : MyStudentList) {
            this.myStudentList = list;
            this.index         = 0;
        }

        /**
         * 次の生徒情報があればtrue, なければfalseを返す
         * @returns {boolean}
         */
        public hasNext():boolean {
            if(this.myStudentList.getLastNum() > this.index){
                return true;
            }else{
                return false;
            }
        }

        /**
         * 次の生徒情報を返す
         * @returns {Student}
         */
        public next():any {
            var s : Student = this.myStudentList.getStudentAt(this.index);
            this.index++;
            return s;
        }
    }
}