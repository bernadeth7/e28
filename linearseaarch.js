// creates array of unordered data
const data = [ 2, 4, 67, 8, 44,6, 12, 20, 100, 10];
// create a function that will search a number from the array of data
function searchNumber(data,num){
    var attempt=0;
    for (let index = 0; index < data.length; index++) {
        if(data[index]===num){//checks data element if equal to number being searched
            return `${num} is located at index of ${index} with ${attempt+1} attempts!`;
        }
        attempt++;
    }
    return `${num} number is not found with ${attempt} attempts...`;
}
console.log(searchNumber(data,8));
console.log(searchNumber(data,10));
// better version of searching
function searchNumberV2(data,num){
    let length = data.length;
    let left = 0;
    let right = length - 1;
    let index = -1;
    while(left<=right){
        if(data[left]===num){
            index=left;
            return `${num} is found at index of ${index} with ${left+1} attempts!`;
        }
        if(data[right]===num){
            index=right;
            return `${num} is found at index of ${index} with ${length-right} attempts!`;
        }
        left++;
        right--;
    }
    if (index == -1){
        return `${num} is not found with ${left} attempts...`
    }
}
console.log(searchNumberV2(data,1));
console.log(searchNumberV2(data,10));