/**
 * Created by Tsuyoshi on 2014/09/13.
 */
module Iterator {
    export class Student {
        private name: string;
        private sex: number;

        constructor(name: string, sex: number) {
            this.name = name;
            this.sex  = sex;
        }

        public getName() : string {
            return this.name;
        }

        public getSex() : number {
            return this.sex;
        }
    }
}