//easy
function avgArray(array){
    let num=0;
    for (i=0;i<array.length;i++){
        num+=array[i];
    }
    return console.log(`Exercise: Easy
Input: ${array}
Output: ${num/array.length}`);
}
const arrayTest = [5,10,21,25];
avgArray(arrayTest);
//medium
const nums = [4,5,6,7,0,1,2];
const tarVal=0,tarVal2=3;
function searchArray (sArray,target){
   return console.log(`Exercise: Medium
Input: ${sArray}, target = ${target}
Output: ${sArray.indexOf(target)}`);
}
searchArray(nums,tarVal);
searchArray(nums,tarVal2);
//hard
//veryhard
function coinSolver(coins,amount){
    function downSort(a,b){return a>b? -1 : a<b ?  1 : 0;}
    const coinsSort=coins.sort(downSort);
    let holdNum=0,count=0; 
    
    if((coinsSort[coins.length-1]>amount && coinsSort[0]>amount) || (coinsSort.length<=1 && amount/coinsSort[0]!=1)){
        return console.log(`Output: ${-1}`);
    }else if(coinsSort.length<=1 &&amount/coinsSort[0]===1){
        return console.log(`Input: ${coins}
Output:${count=amount/coinsSort[0]}`);
    }

    for (i=0;i<coins.length;i++){
        if(amount!=0 || amount/coinsSort[i]>=1){
            while(amount!=0){
               if(amount-coinsSort[i]<0){break;} 
               amount-=coinsSort[i];
               count++;
            }
        }
    }

    return console.log(`something: ${count}`);
}
const coinArray1=[1,2,5],coinArray2=[2], amt1=11,amt2=3,coinArray3=[1,2,5,10,25],amt3=308;
console.log(`
Exercise: Very hard`);
coinSolver(coinArray1,amt1);
coinSolver(coinArray2,amt2);

coinSolver(coinArray3,amt3);