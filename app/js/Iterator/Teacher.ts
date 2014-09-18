/**
 * Created by Tsuyoshi on 2014/09/17.
 */
module Iterator {
    export class Teacher {
        // protected
        public studentList : StudentList;

        // abstract
        public createStudentList() : void {}
        public callStudents() : void {}
    }
}