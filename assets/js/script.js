//header is wider with keep what is there and add date and time to it
document.getElementById("currentDay").innerText = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
//line of blocks under header and spaced on center
// top is date and then each block has a time associated with 
// times are from 9-5( 8 time blocks)
let dt = moment();
dt.format("HH:mm");
var line = document.getElementsByClassName("row")
for (let i = 0; i < line.length; i++) {
    if (line[i].getAttribute("id") === moment().hours()) {
        (line.childNodes[1].classList.add('bg-danger'))
    } else if (((line[i].getAttribute("id") < dt.hours()))) {
        ((line.childNodes[i].classList.add("bg-secondary")))

        }
        else {

            (line.childNodes[i].classList.add("bg-success"));
        }
    };
    // tabs on side
   // (line.childNodes[i].childNodes[0].classList.add())