// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Hey I'm Mario!How can I help you?`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }
  
function ChooseFlight(agent) {
    let rand1 = (len)=>{
      let r1=Math.floor(Math.random() * len);
      return r1;
  };
    
   let arrcity = agent.parameters['arrival-city'];
   let depcity = agent.parameters['depature-city'];
   let Class = agent.parameters.Class ;
   let response =[ `Your flight has been successfully booked from ${depcity} to ${arrcity} with ${Class}`, 
                   `Great, your ticket is booked between ${depcity} and ${arrcity} in ${Class}`,
                   `okay, I will reserve you a flight ticket from ${depcity} to ${arrcity} with ${Class}`];

  let ran1=rand1(response.length);
  agent.add(response[ran1]);
    
  }
  	
  
function RentalCar(agent) {
   
      let rand2 = (len)=>{
      let r2=Math.floor(Math.random() * len);
      return r2;
  };
    
   let num = agent.parameters.number;
   let type = agent.parameters.CabType;
   let city = agent.parameters['geo-city'];
 
   let response=[`Sure, your car is booked for ${num} days in ${city} with model of ${type} car`,
                 `Great, your car model of ${type} is booked successfully for ${num} days in ${city}`];

  let ran2=rand2(response.length);
  agent.add(response[ran2]);
       
  }

function UpgradeFlight(agent) {
    
      let rand3 = (len)=>{
      let r3=Math.floor(Math.random() * len);
      return r3;
  };
    
   let city = agent.parameters['geo-city'];
   let Class = agent.parameters.Class;
   let date = agent.parameters.date;
 
 	let response=[`Sure, your seat has been upgraded to  ${Class} on your trip to ${city} on ${date}`,
                  `Done, I have Upgraded your seat to ${Class} for ${city} on ${date}`];
 
  let ran3=rand3(response.length);
  agent.add(response[ran3]);
   
  }

 function SpecialAssistance(agent) {
    
      let rand4 = (len)=>{
      let r4=Math.floor(Math.random() * len);
      return r4;
  };
    
   let arrivalcity = agent.parameters['arrival-city'];
   let depcity = agent.parameters['departure-city'];
   let assist = agent.parameters.AsstType;
 
 	let response=[`Sure, I had arranged you ${assist} assisstance on flight for your trip from ${depcity} to ${arrivalcity}`,
                  `Great, your flight from ${depcity} to ${arrivalcity} has been arranged with ${assist} assistance`,
                  `Sure, ${assist} assistance is arranged to your flight from ${depcity} to ${arrivalcity}`];
 
  let ran4=rand4(response.length);
  agent.add(response[ran4]);
   
  }
  
 function CheckInFlight(agent) {
    
      let rand5 = (len)=>{
      let r5=Math.floor(Math.random() * len);
      return r5;
  };
    
   let city = agent.parameters['geo-city'];
   let type = agent.parameters.TypeOfCheckIn;
   let date = agent.parameters.date;
 
 	let response=[`Sure, I had completed the ${type} check-in for your trip to ${city} on ${date}`,
                  `Great, ${type} check-in is done for your journey to ${city} on ${date}`,];                  
 
  let ran5=rand5(response.length);
  agent.add(response[ran5]);
   
  }
  
 function FlightStatus(agent) {
    
   let deptcity = agent.parameters['departure-city'];
   let arrivalcity = agent.parameters['arrival-city'];
   let status = agent.parameters.StatusType;
   if(status == "delayed"){
      agent.add(`No the flight from ${deptcity} to ${arrivalcity} has not been ${status}`,
               `Your flight from ${deptcity} to ${arrivalcity} has been ${status}`);
   }
   else if(status == "cancelled"){
      agent.add(`No the flight from ${deptcity} to ${arrivalcity} has not been ${status}`,
                `Your flight from ${deptcity} to ${arrivalcity} is ${status}`);
   }
   else if(status == "on-time"){
      agent.add(`Your flight from ${deptcity} to ${arrivalcity} is not ${status}`,
        `Yes the flight from ${deptcity} to ${arrivalcity} is ${status}`);
             
  }
 }

  // // Uncomment and edit to make your own intent handler
  // // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function yourFunctionHandler(agent) {
  //   agent.add(`This message is from Dialogflow's Cloud Functions for Firebase editor!`);
  //   agent.add(new Card({
  //       title: `Title: this is a card title`,
  //       imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
  //       text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
  //       buttonText: 'This is a button',
  //       buttonUrl: 'https://assistant.google.com/'
  //     })
  //   );
  //   agent.add(new Suggestion(`Quick Reply`));
  //   agent.add(new Suggestion(`Suggestion`));
  //   agent.setContext({ name: 'weather', lifespan: 2, parameters: { city: 'Rome' }});
  // }

  // // Uncomment and edit to make your own Google Assistant intent handler
  // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function googleAssistantHandler(agent) {
  //   let conv = agent.conv(); // Get Actions on Google library conv instance
  //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
  //   agent.add(conv); // Add Actions on Google library responses to your agent's response
  // }
  // // See https://github.com/dialogflow/fulfillment-actions-library-nodejs
  // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Choose Flight Intent', ChooseFlight);
  intentMap.set('Rental Car Intent', RentalCar);
  intentMap.set('Upgrade Flight Intent', UpgradeFlight);
  intentMap.set('Special Assistance Intent', SpecialAssistance);
  intentMap.set('CheckIn Flight Intent', CheckInFlight);
  intentMap.set('Flight Status Intent', FlightStatus);
  // intentMap.set('your intent name here', yourFunctionHandler);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});
