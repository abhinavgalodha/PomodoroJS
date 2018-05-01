// Possible 3 Values - Start/Stop/Reset
// Possible 2 states - Enable/Disable
// Possible Combination - One enable, others disable

class TriState{

    constructor(){
        this.result = {
            start : true,
            stop : true,
            reset : true,
        }
    }

    static get state(){
        return this.result;
    }

    static set state(valToUpdate){
        var keys = Object.keys(this.result);
        keys.forEach(key => {
            if(key === valToUpdate){
                this.result[key] = false;         
            }else{
                this.result[key] = true;         
            }
        });
    }
}

export default TriState;


