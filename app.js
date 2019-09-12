//date logical problems !!!

window.onload = function () {
/*
function calcDate(currentDate) {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    countUpFromTime(currentDate); // ****** Change this line!
    //"Sep 5, 2019 12:00:00"
  };*/
  function countUpFromTime(countFrom) {
    countFrom = new Date(countFrom).getTime();  //countfrom parametresinin içinden time'ı çekiyor ve yeni bir değişkene atıyor
    var now = new Date(),                       //şu anki zaman
        countFrom = new Date(countFrom),        //yukarıda oluşturulan değişkeni tarih biçimine çeviriyor
        timeDifference = (now - countFrom);
      
    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;
      
    days = Math.floor(timeDifference / (secondsInADay) * 1);
    years = Math.floor(days / 365);
    if (years > 1){ days = days - (years * 365) }
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
    months = Math.floor(days/30);
    
    if (months>0){
      resdays= days%30;
    }
    else{
      resdays = days;
    }

    if(months>12){
      months = Math.floor(months/12);
    }
    console.log(months)
    

    if(months!=0 && years!=0){
    result = years + " years " +  months + " months " + resdays + " days";
    }
    else if(months!=0 && years==0){
    result = months + " months " + resdays + " days";
    }
    else if(months==0 && years!=0){
    result = years + " years " + resdays + " days";
    }
    else{
      result = resdays + " days";
    }

    return result;
    
 
}
hotelReactCount = countUpFromTime("Sep 11, 2019");
document.getElementById("hotel-react").innerHTML =  hotelReactCount + " ago";

carCount = countUpFromTime("Sep 8, 2019");
document.getElementById("carGallery").innerHTML = carCount + " ago";

projectCount = countUpFromTime("Sep 7, 2019");
document.getElementById("projects").innerHTML = projectCount + " ago";

cloudCount = countUpFromTime("Sep 5, 2019");
document.getElementById("cloud").innerHTML = cloudCount + " ago";

hotelCount = countUpFromTime("Sep 1, 2019");
document.getElementById("hotel").innerHTML =  hotelCount + " ago";

personalCount = countUpFromTime("Aug 24, 2019");  //Aug 24 2019
document.getElementById("personal").innerHTML =  personalCount + " ago";

rocketCount = countUpFromTime("Aug 23, 2019");
document.getElementById("rocket").innerHTML =  rocketCount + " ago";

}