/**
 * Created by Tsuyoshi on 2014/09/13.
 */

/// <reference path="Student.ts"/>

import Student = Iterator.Student;

module Iterator {
    /**
     * 生徒リストの基底クラス
     */
    export class StudentList {
        public  students : Student[];
        private last     : number;

        constructor(studentCount?: number) {
            if (studentCount === 0 || studentCount) {
                this.students = new Array(studentCount);
                this.last     = studentCount;
            } else {
                this.students = [];
                this.last = 0;
            }

        }

        /**
         * 生徒を追加
         * @param student {Student}
         */
        public add(student: Student) : void {
            this.students[this.last] = student;
            this.last++;
        }

        /**
         * 指定されたインデックス番号の生徒情報を取得する
         * @param index
         * @returns {Student}
         */
        public getStudentAt(index: number) : Student {
            return this.students[index];
        }

        /**
         * 生徒数を取得(最後の番号)
         * @returns {number}
         */
        public getLastNum() : number {
            return this.last;
        }
    }
}