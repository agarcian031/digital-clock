
function clock() {
    const currentDate = new Date(); 
    let hours = currentDate.getHours(); 
    let mins = currentDate.getMinutes(); 
    let secs = currentDate.getSeconds(); 
// add zeros to before the hour if hour is less than 10
    if( hours < 10) {
        hours = "0" + hours; 
    }

    if( mins < 10) {
        mins = "0" + mins; 
    }

    if( secs < 10) {
        secs = "0" + secs; 
    }
   //replace HTML docuement times to the time in the const  
    document.getElementById('hours').innerHTML = hours; 
    document.getElementById('minutes').innerHTML = ":" + mins; 
    document.getElementById('seconds').innerHTML = ":" + secs;  
    
}
// sets clock to keep refreshing 
setInterval(clock, 100); 