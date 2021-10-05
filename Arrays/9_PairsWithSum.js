// Given two unsorted arrays of distinct elements, find all pairs
// from both arrays whose sum is equal to X
//* The naive would be looping through both arrays => O(n^2)


//* Efficient solution:

function PairsWithSum(arr1, arr2, target){

    let temporary = new Array(arr1.length)
    //* sort arr2 to be used for binary search
    arr2.sort()
    let pairs = []
    
    for(let i = 0; i < arr1.length; i++){
        temporary[i] = target - arr1[i]

        //Check if value exists in arr2
        //! find has time complexity O(n)
        // let check = arr2.find((value) => {
        //     return value === temporary[i]
        // })
        //*Binary search has O( log n )
        let check = BinarySearch(arr2, temporary[i])

        if(check !== undefined){ 
            pairs.push([check, arr1[i]])
        }
    }

    return pairs

}

console.log(PairsWithSum([-1,-2,4,-6,5,7], [6,3,4,0], 8))
//console.log(PairsWithSum([1,2,4,5,7], [5,6,3,4,8], 9)) 


function BinarySearch(arr, item){
    let low = 0
    let high = arr.length - 1

    while (low <= high ){
        let mid = Math.floor(( low + high ) / 2)
        let guess = arr[mid]
        //console.log("guess",guess)
        if(guess === item){
            //! Retuning the item instead of index to fit context
            //! Of PairsWithSum 
            return arr[mid]
        }

        else if(guess > item ){
            high = mid - 1
        }

        else {
            low = mid + 1
        }
    }

    return undefined
}

//console.log(BinarySearch([2,4,6,7,9], 4))