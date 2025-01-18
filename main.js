const hoursDiv = document.querySelector('#hoursDiv')
const minutesDiv = document.querySelector('#minutesDiv')
const secondsDiv = document.querySelector('#secondsDiv')

function clock() {
    let date = new Date()
    hoursDiv.innerHTML = date.getHours()
    minutesDiv.innerHTML = `${date.getMinutes()}`.padStart(2, 0)
    secondsDiv.innerHTML = `${date.getSeconds()}`.padStart(2, 0)
    console.log('as');
}

clock()
setInterval(clock, 1000)