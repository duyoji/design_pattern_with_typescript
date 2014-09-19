/**
 * Created by Tsuyoshi on 2014/09/19.
 */

module Singleton {
    export class RegisterNote {

        private static instance : RegisterNote;

        static getInstance() : RegisterNote {
            if (!this.instance) {
                this.instance = new RegisterNote();
                console.log("new create instance");
            } else {
                console.log("created instance");
            }

            return this.instance;
        }

        constructor() {

        }
    }
}