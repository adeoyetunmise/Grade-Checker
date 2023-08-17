var song = new Audio('audio/Tums.mp3')


function calc() {
 var score = document.getElementById('score').value


 if(score == '') {
    console.log('invalid');
    display.innerHTML = 'invalid'
    

 }else if (score >=0 && score < 40) {
    console.log('Fail');
    display.innerHTML = 'Fail'
    song.play()

 }else if (score >= 40 && score < 45) {
    console.log('Pass');
    display.innerHTML = 'Pass'
    
 }else if (score >= 45 && score < 50) {
    console.log('Average');
    display.innerHTML = 'Average'
    
 }else if (score >= 50 && score < 60) {
    console.log('Credit');
    display.innerHTML = 'Credit'

 }else if (score >= 60 && score < 70 ) {
    console.log('Good');
    display.innerHTML = 'Good'
    
 }else if (score >=70 && score < 100) {
    console.log('Excellent');
    display.innerHTML = 'Excellent'

}else{
    console.log('Not Recognised');
    display.innerHTML = 'Not Recognised'
 }
 

}


