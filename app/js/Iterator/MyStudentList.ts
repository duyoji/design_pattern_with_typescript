/**
 * Created by Tsuyoshi on 2014/09/18.
 */


/// <reference path="Interface/IIterator.ts"/>
/// <reference path="Interface/IAggregate.ts"/>
/// <reference path="StudentList.ts"/>
/// <reference path="MyStudentListIterator.ts"/>

import IAggregate            = Iterator.Interface.IAggregate;
//import IIterator             = Iterator.Interface.IIterator;
import StudentList           = Iterator.StudentList;
import MyStudentListIterator = Iterator.MyStudentListIterator;

module Iterator {

    /**
     * 生徒リストのアグレゲータ
     */
    export class MyStudentList extends StudentList implements IAggregate {

        constructor(studentCount?: number) {
            super(studentCount);
        }

        /**
         * MyStudentListのイテレータクラスを返す(MyStudentListIterator)
         * @returns {Iterator.MyStudentListIterator}
         */
        public iterator() : Iterator.Interface.IIterator  {
            return new MyStudentListIterator(this);
        }
    }
}