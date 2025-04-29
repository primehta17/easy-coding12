//waf to calculate the time when two people moving at different speeds will meet

function calculateMeetingTime(distance, speed1, speed2) {
    //timr = 2*distance/(speed1+speed2)
    return 2*distance/(speed1+speed2);
}

console.log(calculateMeetingTime(50,20,30))

