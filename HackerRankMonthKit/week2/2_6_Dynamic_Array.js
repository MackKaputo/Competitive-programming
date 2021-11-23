
function dynamicArray(n, queries) {
    // Write your code here
    let arrays = [];
    let answers = [];
    let lastAnswer = 0;
    queries.forEach((query) =>{
      const tempIdx = (query[1]^lastAnswer)%n;
      if(arrays[tempIdx]==undefined)arrays[tempIdx] = [];
      if(query[0]==1){
        arrays[tempIdx].push(query[2]);
      }else{
        lastAnswer = arrays[tempIdx][query[2]%arrays[tempIdx].length];
        answers.push(lastAnswer);
      }
    });

    return answers;


}