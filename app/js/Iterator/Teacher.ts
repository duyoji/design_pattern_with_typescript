/**
 * Created by Tsuyoshi on 2014/09/17.
 */
module Iterator {
    export class Teacher {
        // protected
        /**
         * 生徒リスト
         */
        public studentList : StudentList;
        /**
         * 先生の名前
         */
        public name : string;


        constructor(name : string) {
            this.name = name;
        }

        /******************************
         * @abstract
         ******************************/

        /**
         * 生徒リストの作成
         * @abstract
         */
        public createStudentList() : void {}

        /**
         * 生徒リストにいる生徒の名前を呼ぶ
         * @abstract
         */
        public callStudents() : void {}
    }
}