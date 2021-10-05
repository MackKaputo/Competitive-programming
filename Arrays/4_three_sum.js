function threeSum(nums) {

    nums.sort((a,b) => {
        return a - b
    })

    const result = []

    for (let indexA = 0; indexA < nums.length - 2; indexA++){
        
        let indexB = indexA + 1;
        let indexC = nums.length - 1;

        if (indexA > 0 && nums[indexA] === nums[indexA - 1]){
            continue;
        }

        while ( indexB < indexC ){

            let sum = nums[indexA] + nums[indexB] + nums[indexC]

            if (sum < 0){

                indexB++

            } else if (sum > 0) {

                indexC--
            } else {
                
                result.push([nums[indexA], nums[indexB], nums[indexC]])

                while(nums[indexB] === nums[indexB + 1]){
                    indexB++
                }
                while(nums[indexC] === nums[indexC - 1]){
                    indexC--
                }

                indexB++;
                indexC--;
            }
        }
    }

    return result
}



console.log(threeSum([-1,0,1,2,-1,-4]))

//*optimal 2 pointer solution
function threeSum2(nums){
    
    nums.sort((a, b) => a - b)

    const result = []

    for (let indexA = 0; indexA < nums.length - 2; indexA++){
        const a = nums[indexA]

        if (a > 0) {
            return result
        }
        if (a === nums[indexA - 1]){
            continue;
        }

        let indexB = indexA + 1
        let indexC = nums.length - 1

        //now check if sum is zero. and if not, then run the next set of 2 if
        // loop to update indexB and indexC

        while (indexB < indexC) {
            const b = nums[indexB]
            const c = nums[indexC]

            if ((a + b + c) === 0) {
                result.push([a, b, c])
            }

            //Now with the below 2 ifs, we're implementing how the indexB and indexC
            // will be incremented and decremented with each iteration and gets feeded
            // back to the above while function ( while (indexB < indexC))

            if ((a + b + c) >= 0) {
                while (nums[indexC - 1] === c){
                    //equivalent to continue at previous implementation
                    indexC--
                }

                indexC--
            }

            if((a + b + c ) <= 0) {
                while (nums[indexB + 1] === b){
                    //equivalent to continue at previous implementation
                    indexB++
                }

                indexB++
            }
        }
    }

    return result
}


console.log(threeSum2([-1,0,1,2,-1,-4]))