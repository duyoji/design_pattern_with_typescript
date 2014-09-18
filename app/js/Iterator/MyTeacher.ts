/**
 * Created by Tsuyoshi on 2014/09/18.
 */
/// <reference path="Teacher.ts"/>

module Iterator {
    export class MyTeacher extends Teacher {
        public createStudentList() : void {
            super.createStudentList();

            console.log("MyTeacher#createStudentList");
        }


        public callStudents() : void {
            super.callStudents();

            console.log("MyTeacher#callStudents");
        }
    }
}