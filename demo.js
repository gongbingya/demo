/*var num = 123456789;

var num_str = num.toString();

var num_length = num_str.length;

var mod = num_length % 3;

var arr = [];

if(mod != 0){
	arr.push(num_str.slice(0, mod))
}

for(var i = mod ; i<num_length;i+=3){
	arr.push(num_str.slice(i, i+3))
}
console.log(arr);

var result = arr.join(",");

console.log(result);
*/
//正则
/*var a = 1516161651615646;

a = a.toString().replace(/\B(?=(\d{3})+$)/g,",")
console.log(a)*/

/*//数组排序 sort
var arr = [1,212,223,12,4,12,78,5454,99,66];

// arr.sort((a,b)=>a-b);//升序

arr.sort((a,b)=>b-a);//降序

console.log(arr);*/


/*//冒泡
var arr = [3,45,666,154,25,77,880,99,121,33222,14];

for(var i = 0 ; i< arr.length-1;i++){
	for(var j=0 ; j < arr.length - i ; j++){
		if(arr[j] > arr[j+1]){
			var temp = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = temp;
		}
	}
}
console.log(arr);*/


/*//快排 迭代
var arr = [3,45,666,154,25,77,880,99,121,33222,14];

function quick(arr){
	if(arr.length == 0){
		return [];
	}
	var  pilot = arr[0];
	var big = [];
	var small = [];
	for(let i = 1 ; i < arr.length ; i++){
		if(arr[i] >= pilot){
			big.push(arr[i]);
		}else{
			small.push(arr[i]);
		}
	}

	return quick(small).concat(pilot , quick(big));
}

console.log(quick(arr));*/


/*//字符串反转
function revString(str){
	var arr = str.split("");
	arr.reverse();
	return arr.join("");
}
console.log(revString("你是年少的欢喜"));*/


/*
//如何准确判断一个JavaScript对象是数组？
function checkIsArray(o){
	//鸭式变形
	return Object.prototype.toString.call(o) == "[object Array]" && o instanceof Array && "push" in o;
}

console.log(checkIsArray([1,2,3]))*/


/*
//数组去重

function quchong(arr){
	return [...new Set(arr)];
}
console.log(quchong([1,1,1,2,2,2]))*/

/*
// 写出一个函数，功能是删除数组的指定下标元素。

function removeIdx(arr,idx){
	arr = arr.splice(idx,1);
	return arr;
}
console.log(removeIdx([1,2,3,4],2))*/


(function test( ){
  	var a=b=5;
  	console.log(typeof a);   //number
  	console.log(typeof b);   //number
})()
console.log(typeof a);  //undefined
console.log(typeof b)   //number