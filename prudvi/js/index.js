data = () => {
    console.log("äbc");
    return {
        qtns: [
           {
               qtn: "this is first question to be answered ?",
               type: "image",
               selection:2,
               options: [{a:"./images/op1.jpg"}, {b:"./images/op2.jpg"},{c:"./images/op3.jpg"}, {d:"./images/op4.jpg"}]
           },
           {
               qtn:"The second question is illogical checkbox to you?",
               type: "image",
               selection:1,
               options: [{a:"./images/op3.jpg"}, {b:"./images/op4.jpg"}]
           },
           {
               qtn:"The third question is different for you?",
               type: "checkbox",
               selection:1,
               options: [{a:"apple"}, {b:"boy"}, {c:"cat"}]
           },
           {
               qtn:"The fourth question is back to you?",
               type: "image",
               selection:1,
               options: [{a:"./images/op5.jpg"}, {b:"./images/op6.jpg"}]
           }
        ],
        q_pos: 0,
        len:0,
        answers: [],
        temp_answer:[],
        init() {
            this.len = this.qtns.length;
            this.answers = new Array(this.len);
        },   
        incr() {
            this.answer_storage(this.q_pos);
            this.load_progress(this.q_pos,this.len);
            if(this.q_pos < this.len-1)
                this.q_pos++;
        },
        decr() {
            let init_pos = 0;
            if(this.q_pos > init_pos)
                this.q_pos--;
            this.load_progress(this.q_pos,this.len);
        },
        load_progress(pos) {
            let prog_obj = document.getElementById("progress-bar");
            prog_obj.style.removeProperty("animation");
            prog_obj.style.maxWidth  = this.progress_cal(pos,this.len)+"%";
            setTimeout(function(){
                prog_obj.style.animation  = "progress 1.5s ease-in-out forwards";
            },5);
        },
        progress_cal(val,size) {
            return (val/size)*100;
        },
        capture_answer(ans_key) {

            // let ans_key = ans[0];
            let selection = this.qtns[this.q_pos].selection;

            if(this.temp_answer.length && this.temp_answer.includes(ans_key))
                return;


            switch (selection) {
                // let ans_key = ans[0];
                case 1: //single
                    this.temp_answer = ans_key;
                    break;
                case 2: //multiple
                    this.temp_answer.push(ans_key);
                    break;
                default:
                    break;
            }
            
        },
        answer_storage(pos) {
            this.answers[pos] = this.temp_answer;
            this.temp_answer = [];
        }
    }
}