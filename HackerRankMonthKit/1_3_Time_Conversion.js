function timeConversion(s) {
    // Write your code here
    if(s.endsWith('AM')){
        //Get rid of the PM, split at : 
        let pm_full = s.split('AM')[0]
        //Get first part to be modified
        let pm_full_split = pm_full.split(":")
        let pm_hours = pm_full_split[0]

        //Convert hours
        if(pm_hours == '12'){
            //substitute
            pm_full_split[0] = '00'
        }
        
        return pm_full_split.join(':')
    }

    //Get rid of the PM, split at : 
    let pm_full = s.split('PM')[0]
    //Get first part to be modified
    let pm_full_split = pm_full.split(":")
    let pm_hours = pm_full_split[0]

    //Convert hours
    if(pm_hours == '12'){
        return s.split('PM')[0]
    }
    let hours = Number(pm_hours) + 12
    //substitute
    pm_full_split[0] = String(hours)
    
    return pm_full_split.join(':')

}

console.log(timeConversion('12:34:56AM'))