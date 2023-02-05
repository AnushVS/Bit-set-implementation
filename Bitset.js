class Bit_set {

	constructor(size){
	this.unit = 32;
	this.bit_set_size = Math.ceil(size/this.unit);
	this.bit_set = new Array(this.bit_set_size).fill(0);
	
	}
	
	Set_bit (position) {
	
		if(position === undefined || position < 0 || position > this.unit * this.bit_set_size)
	{
    		console.log("Error: wrong number for set");
	}
	
		else{
    	
			this.bit_set[this.bit_set_size - Math.floor(position/this.unit) - 1] |= 1 << position % this.unit;
	}
	
	}

	Reset_bit (position) {

    	if(position === undefined || position < 0 || position > this.unit * this.bit_set_size)
	{
    	
		console.log("Error: wrong number for reset");
	}
		else {
			this.bit_set[this.bit_set_size - Math.floor(position/this.unit) - 1] &= ~(1 << position % this.unit);
	}

		return this.bit_set;

	}


}

