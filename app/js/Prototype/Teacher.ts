/**
 * Created by Tsuyoshi on 2014/09/22.
 */

/// <reference path="Paper.ts"/>

module Prototype {

    /**
     * 紙をいい感じに切り取る先生
     */
    export class Teacher{
        public createManyCrystals() : Paper[] {
            var prototype : Paper = new Paper("雪の結晶");
            this.drawCrystal(prototype);
            this.cutAccordanceWithLine(prototype);

            var papers : Paper[] = new Array(100);
            for(var i = 0; i < papers.length; i++) {
                papers[i] = <Paper>prototype.createClone();
            }

            return papers;
        }

        private drawCrystal(paper: Paper) : void{
            // 描いたり消したりしながら、きれいに描くため時間がかかる
        }

        private cutAccordanceWithLine(paper : Paper) : void{
            // 描かれた線に沿ってきれいに切るには時間がかかる
        }
    }
}