/**
 * Created by Tsuyoshi on 2014/09/13.
 */
module Iterator {
    export class Student {
        /**
         * 名前
         */
        private name: string;
        /**
         * 性別(男:1, 女:2)
         */
        private sex: number;

        constructor(name: string, sex: number) {
            this.name = name;
            this.sex  = sex;
        }

        /**
         * 生徒の名前取得
         * @returns {string}
         */
        public getName() : string {
            return this.name;
        }

        /**
         * 生徒の性別取得(数値)
         * @returns {number}
         */
        public getSex() : number {
            return this.sex;
        }
    }
}