
var SKYNNY=ComplexionSkynny;
var FATTY=ComplexionFatty;
var ATHLETIC=ComplexionAthletic;
var MORBID=ComplexionMorbid;

function HumanMetabolism() {

	this.complexion;

	this.getDailyCalories = function() {
		return this.complexion.getDailyCalories();
	};

	this.setComplexion = function(aComplexion) {
		this.complexion = Complexion.obtain(aComplexion);
	};
	this.moreMagic = function() {};
	this.needsMoreFood = function() {};

};

function Complexion (typeComplexion) {
	this.typeComplexion=new typeComplexion();
	this.getDailyCalories = function() {
		return this.typeComplexion.calories;
	};
}

Complexion.pool={};
Complexion.obtain=function(typeComplexion){
	var aComplexion=this.pool[typeComplexion];
	if(!aComplexion){
		aComplexion=new Complexion(typeComplexion);
		this.pool[typeComplexion]=aComplexion;
	}
	return aComplexion;
}

function ComplexionSkynny(){
	this.calories = 3000;
}

function ComplexionFatty(){
	this.calories = 1000;
}

function ComplexionAthletic(){
	this.calories = 2000;
}

function ComplexionMorbid(){
	this.calories = 500;
}