def hasSingleCycle(array):
    # Write your code here.
    jumps = 0
    position = 0

    while True:
        position = position + array[position]
        position %= len(array)
        jumps += 1

        if position == 0 or array[position] == 0 or jumps > len(array):
            break
    
    return jumps == len(array)


def hasSingleCycle2(array):
    numElementsVisisted = 0
    currentIdx = 0
    while numElementsVisisted < len(array):
        if numElementsVisisted > 0 and currentIdx == 0:
            return False
        numElementsVisisted += 1
        currentIdx = getNextIdx(currentIdx, array)
    return currentIdx == 0


def getNextIdx(currentIdx, array):
    jump = array[currentIdx]
    nextIdx = (currentIdx + jump ) % len(array)
    return nextIdx if nextIdx >= 0 else nextIdx + len(array)
