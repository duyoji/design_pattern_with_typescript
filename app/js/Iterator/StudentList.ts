/**
 * Created by Tsuyoshi on 2014/09/13.
 */

module Iterator {
    export class StudentList {
        public  students : Student[];
        private last     : number;

        constructor(studentCount: number) {
            this.students = new Array(studentCount);
            this.last     = 0;
        }

        public add(student: Student) : void {
            this.students[this.last] = student;
            this.last++;
        }

        public getStudentAt(index: number) : Student {
            return this.students[index];
        }

        public getLastNum() : number {
            return this.last;
        }
    }
}