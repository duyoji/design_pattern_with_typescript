/**
 * Created by Tsuyoshi on 2014/09/18.
 */
/// <reference path="Teacher.ts"/>
/// <reference path="Interface/IIterator.ts"/>
/// <reference path="MyStudentList.ts"/>
/// <reference path="Student.ts"/>


module Iterator {
    export class MyTeacher extends Teacher {

        /**
         * 生徒リスト
         */
        public studentList : MyStudentList;

        /**
         * 生徒リスト作成
         */
        public createStudentList() : void {
            this.studentList = new MyStudentList();
            this.studentList.add( new Student("太郎", 1) );
            this.studentList.add( new Student("花子", 2) );
            this.studentList.add( new Student("次郎", 1) );
        }

        /**
         * 生徒リストにいる生徒の名前を呼ぶ
         */
        public callStudents() : void {
            var itr : Interface.IIterator = this.studentList.iterator();
            while(itr.hasNext()){
                var student : Student = itr.next();
                console.log( "call students : " + student.getName() );
            }
        }
    }
}