function MixedMessages(arr){
    const random_message_index = Math.floor((Math.random() * (arr.length)));
    return random_message_index;
}
const arr=["You will fall into into a puddle of mud","You will out perform others","Not that good for you","Take decissions independently","Create new bonds","Promote happiness","You have a golden heart"];
console.log(`Yor todays detailed prediction is : ${arr[MixedMessages(arr)]}`);