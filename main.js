function calculateLove() {
    const yourName = document.getElementById("first").value;
    const partnerName = document.getElementById("second").value;

    // if (yourName === "" || partnerName === "") {
    //     alert("Please enter both names.");
    // }

    const lovePercentage = Math.round(Math.random() * 100) ;
    const resultElement = document.getElementById("result");
    resultElement.innerText = `${yourName} and ${partnerName}'s love percentage is ${lovePercentage}%`;

           if(lovePercentage < 40 ){
         resultElement.innerText = `${yourName} and ${partnerName}'s love percentage is ${lovePercentage}% 
        Love isn't meant for you both`;

    }
     else if(39 > lovePercentage < 50 ){
        resultElement.innerText = `${yourName} and ${partnerName}'s love percentage is ${lovePercentage}% 
        Try again  next valentines`;
    }
    else if(49 > lovePercentage < 60 ){
        resultElement.innerText = `${yourName} and ${partnerName}'s love percentage is ${lovePercentage}% 
        Your loves gonna probably work out`;
    }
    else if(59> lovePercentage < 70){
        resultElement.innerText = `${yourName} and ${partnerName}'s love percentage is ${lovePercentage}% 
        You have a chance of making a goo couple`;
    }
    else if(69> lovePercentage < 80){
        resultElement.innerText = `${yourName} and ${partnerName}'s love percentage is ${lovePercentage}% 
        Your love bond is strong`;
    }
    else if(79>lovePercentage < 90){
        resultElement.innerText = `${yourName} and ${partnerName}'s love percentage is ${lovePercentage}% 
        Your crush is meant for you`;
    }
    else if(lovePercentage = 100){
        resultElement.innerText = `${yourName} and ${partnerName}'s love percentage is ${lovePercentage}% 
        You're a match made in heaven`; 
    }
}