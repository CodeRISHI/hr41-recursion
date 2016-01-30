// Recursion Problems
// Assigned by Laura Weaver
// HR41

// classicFibonacci takes the end number as a parameter.
// 
// NOTE: to pass the "must use recursion" check in the test environment, 
// you must use recursion on the classicFibonacci function itself. Thus, inner function recursion won't trigger it. 
var classicFibonacci = function(endNumber) {
	//Your code here
	if (endNumber < 1) {
		return 0;
	} else {
		return (endNumber < 2) ? 1 : classicFibonacci(endNumber - 2) + classicFibonacci(endNumber - 1);
	}
};

// Takes a starting number and multiplies it by one less than itself until 0. 
// Thus, 1×2×3×4 = 24; factorial(4) === 24;
//
// NOTE: to pass the "must use recursion" check in the test environment, 
// you must use recursion on the factorial function itself. Thus, inner function recursion won't trigger it. 
var factorial = function(num){
	//Your code here
	if (num === 0) {
		return 1; 
	} else {
		return (num * factorial(num - 1));
	} 
};

// Takes a multidimensional array and converts it to a one-dimensional array.
// The new array should contain all elements of the multidimensional array.
//
// Hint: Use Array.isArray to check if something is an array
var flatten = function(array){
	//Your code here
	var result = [];
    var _flatten = (arr) => {
        _.each(arr, (el) => {
            if (Array.isArray(el)) {
                _flatten(el);
            } else {
                result.push(el);
            }            
        });          
    };
	_flatten(array);
	return result;
};

// Takes DOM to be checked and the tag you are looking to count as parameters. 
// Thus, tagCount(document.body, 'SPAN');
//
// BONUS if it defaults to document.body if there is only one argument. 
var tagCount = function(givenDOM, tagName) {
	//Your code here	
    var count = 0;         

  	function checkTag (list) {        
    	if (list !== undefined) {
        	if (list.tagName === tagName) {
                count++;
            }
        	_.each(list.childNodes, function (el, node) {
            	checkTag(list.childNodes[node]);            	
        	});                
    	}   
  	};
    checkTag(givenDOM);      	
  	return count;
};

// Takes a ordered list of integers as its argument. 
// Should start from the middle and move outwards. 
// For inspiration: http://interactivepython.org/runestone/static/pythonds/SortSearch/TheBinarySearch.html
<<<<<<< HEAD
var searchBinary = function(orderedList, target){
=======
var searchBinary = function(orderedList, item){
>>>>>>> bddc63911c2963c0a33bb9127354880bd4f30fec
	//Your code here
	var result = null;
    var lo = 0;
    var hi = orderedList.length - 1;

    //sort (if needed)
    orderedList.sort((a,b) => a - b);

    var _binarySearch = (modArray, hi, lo, target) => {                
        //median
        var median = lo + Math.round((hi - lo) / 2);

        if (!(_.contains(modArray, target))) {
            result = false;
        } else if ((modArray[median] - target) === 0) {                                        
            result = median;                                    
            console.log('result ' , result);
        } else {                    
            if (modArray[median] < target) {                        
                lo = median;                        
                result = _binarySearch(modArray, hi, lo, target);                                                
            } else if (modArray[median] > target) {
                hi = median;
                result = _binarySearch(modArray, hi, lo, target);
            }
        }
        return result;                
    };
    _binarySearch(orderedList, hi, lo, target);
    return result; 
};

// Additional problems for consideration

// Same as factorial, but instead of returning the n!,
// it returns the array of factorial numbers up to (and including) n! 
// NOTE: One may remove the result argument, and write in a private closure function instead.
var factorialArray = function(n) {
	//Your code here
    var factArr = [];
    var result = null;
    var i = 0;

    function _factorialArray (num) {
        if (num < 0 || isNaN(num)) {
            result = undefined;
        } else if (num === 0) {
            result = 1;
        } else {
            result = num * _factorialArray(num - 1);
        }
        return result;
    };

    if (n >= 0) {
        while (i <= n) {        
            _factorialArray(i);
            factArr.push(result);
            i++;
        }
    } else {
        factArr = undefined;
    }
    

    return factArr;
};
