first=function(x,y,z){
	return (x+y+z)*(x-y-z);
}
wrong=function(){
	return false;
}
noReturn=function(x,y){
	a=x+y;
}
fullName=function(a,b){
	return a+" "+b;
}
compare=function(x,y,z){
	if(x.length>y.length && x.length>z.length){
		return x;
	}
	else if(y.length>x.length && y.length>z.length){
		return y;
	}
	else if(z.length>y.length && z.length>x.length){
		return z;
	}
	else{
		console.log("What have you done?")
	}
}
compareNum=function(x,z){
	if(x==z){
		return 0;
	}
	else if(x>z){
		return 1;
	}
	else if(x<z){
		return -1;
	}
}
truethy=function(a,b,c){	
	if(a){
		return a;
	}
	else if(b){
		return b;
	}
	else if(c){
		return c;
	}
}