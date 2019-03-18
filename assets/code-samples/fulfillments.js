export const fulfillment = `const {
  dialogflow,
  Suggestions,
  BasicCard,
  Button,
  Image
} = require('actions-on-google');

const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({ debug: true });

// Import the util that sends the RITA request
const ritaUtil = require('./rita-util');

const netlifyURL = 'https://blah.netlify.com';

// Handle Dialogflow intent 'welcome'.
app.intent('welcome', (conv) => {
  conv.ask("Hi! Want to make a video?");
  conv.ask(new Suggestions("Sure", "Nah, I'm good"));
});

// Handle Dialogflow intent 'render input'.
app.intent('render input', (conv, { renderInput }) =>
  ritaUtil.createVideo(renderInput).then((returnedLog) => {
    const cacheBustedUrl = returnedLog[0].Ok;

    conv.close(
      'Here you go',
      new BasicCard({
        title: 'Fresh Rita Render',
        subtitle: 'Just for you',
        text: "RITA vid at: {cacheBustedUrl}",
        image: new Image({ 
          url: 'http://blah.gif'
        }),
        buttons: new Button({
          title: 'Watch now',
          url: netlifyURL+"/?"+cacheBustedUrl
        })
      })
    );
  })
);

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillmentRita = functions.https.onRequest(app);`;
