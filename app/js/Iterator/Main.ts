/**
 * Created by Tsuyoshi on 2014/09/17.
 */
module Iterator {
    export class Main {

        private teacher : Teacher;

        static run() {
            console.log('Main::run 1');
            new Main().start();
        }

        constructor() {
            this.teacher = new Teacher();
        }

        public start(): void {
            this.teacher.createStudentList();
            this.teacher.callStudents();
        }
    }
}

window.addEventListener("load", function onload() {
    window.removeEventListener("load", onload);
    Iterator.Main.run();
});