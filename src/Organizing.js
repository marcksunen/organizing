function Probe() {

	this.doMaintenance = function() {
		this.doComplicatedThings();
		this.moreMagic();
		this.fix()
	};

	this.doComplicatedThings = function() {};
	this.moreMagic = function() {};
	this.needsMaintenance = function() {
		return !this.isFixed();
	};
	this.isFixed = function() {
		return this.state instanceof StateFixed;
	};
	this.fix = function() {
		this.state=this.state.fix();
	};
	this.broken = function() {
		this.state=this.state.broken();
	};

	this.state=new StateBroken();
};

function StateFixed(){
	this.isFixed = function() {
		return true;
	};
	this.broken = function() {
		return new StateBroken();
	};
}

function StateBroken(){
	this.isFixed = function() {
		return false;
	};
	this.fix = function() {
		return new StateFixed();
	};
}

function Letter(letter) {
	this.letter = letter;

	this.toCaps = function() {
		return this.letter.toUpperCase();
	};

	this.toLower = function() {
		return this.letter.toLowerCase();
	};


};

Letter.pool={};
Letter.obtain = function(letter) {
	theLetter = this.pool[letter];
	if(!theLetter) {
		aLetter = new Letter(letter);
		this.pool[letter]=aLetter;
	}
	return new Letter(letter);
};

function Alphabet() {

	this.giveMeAn = function(letter) {
		return Letter.obtain(letter);
	};

	this.length = function() {
		return 24;
	};

	this.getVocals = function() {};
	this.getConsonants = function() {};
};