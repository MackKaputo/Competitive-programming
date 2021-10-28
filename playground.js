
function findMissingRanges(nums, lower, upper) {
    const result = []
    const count = (lo, hi) => hi - lo - 1
    const set = (lo, hi) => {
        if (count(lo, hi) === 1) {
        result.push(`${lo + 1}`)
        } else if (count(lo, hi) > 1) {
        result.push(`${lo + 1}->${hi - 1}`)
        }
    }

    for (let i = 0; i <= nums.length; i++) {
        set(
            i === 0 ? lower - 1 : nums[i - 1],
            i === nums.length ? upper + 1 : nums[i],
        )
    }
    return result
}

console.log(findMissingRanges([1,3,10], 1, 15))