// Find the single different char between two strings. E.g.
// None input -> TypeError
// 'ab', 'aab' -> 'a'
// 'aab', 'ab' -> 'a'
// 'abcd', 'abcde' -> 'e'
// 'aaabbcdd', 'abdbacade' -> 'e'

function diffChar(str1,str2){
    let count1,count2 = 0;
    let resStr1 = [];
    let resStr2=[];
    if(str1==='' || str2=='')
        console.log("No input found");
    for(let i=0;i<str1.length;i++){
        if(str1[i]===str1[i+1]){
            count1++;
            resStr1.push(str1[i]);
            
        }
    }
    for(let i=0;i<str2.length;i++){
        if(str2[i]===str2[i+1]){
            count2++;
            resStr2.push(str2[i]);
        }

    }
    if(count1>count2){
        console.log(resStr1);

    }
    else {
        console.log(resStr2);
    }
    // console.log(resStr1);
    // console.log(resStr2);

}
const ar1= 'ab';
const ar2 = 'aab';

const result = diffChar(ar1,ar2);

