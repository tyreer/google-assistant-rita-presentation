import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import preloader from 'spectacle/lib/utils/preloader';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  CodePane,
  Link,
  Appear,
  S
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import goodWork from '../assets/good-work.gif';

import Prism from 'prismjs';
import '../assets/themes/prism-tomorrow.css';

import { fulfillment } from '../assets/code-samples/fulfillments';
import {
  ritaRequest1,
  ritaRequest2,
  ritaRequest3
} from '../assets/code-samples/rita-request';
import { reactApp } from '../assets/code-samples/react-app';
import { hooks } from '../assets/code-samples/hooks';
Prism.highlightAll();

// const images = {
//   formidagon: require('../assets/formidable-logo.svg'),
//   goodWork: require('../assets/good-work.gif')
// };

preloader({
  goodWork
});

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#4f4f4f'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            RITA via Google Assistant
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            PROTOTYPE
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="quaternary">
          <Heading
            textAlign="left"
            margin="30px 0"
            size={1}
            lineHeight={1}
            textColor="primary"
          >
            ⓵ VUI to RITA
          </Heading>
          <Heading
            size={1}
            textAlign="left"
            lineHeight={1}
            textColor="tertiary"
          >
            ⓶ React Hooks
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={5} textColor="primary" caps>
            VUI to RITA
          </Heading>
          <List>
            <Appear>
              <ListItem textColor="primary">"Action" on Google Assistant</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">Google Dialogflow (set intents)</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">Google Cloud Functions (intent fulfillment)</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">RITA</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Link
            href="https://console.actions.google.com/u/0/project/assistant-rita-proto/simulator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Heading size={1} caps lineHeight={1} textColor="secondary">
              Demo
            </Heading>
          </Link>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={5} textColor="primary" caps>
        VUI to RITA
        </Heading>
        <List>
          <ListItem><S type="strikethrough">"Action" on Google Assistant</S></ListItem>
          <ListItem><S type="strikethrough">Google Dialogflow (set intents)</S></ListItem>
          <ListItem textColor="primary">
            Google Cloud Function (intent fulfillment)
          </ListItem>
          <ListItem textColor="primary">RITA</ListItem>
        </List>
      </Slide>
        <CodeSlide
          bgColor="quaternary"
          transition={['fade']}
          lang="js"
          code={fulfillment}
          ranges={[
            { loc: [0, 54],
title: 'GOOGLE CLOUD FUNCTION' },
            { loc: [0, 7] },
            { loc: [8, 9] },
            { loc: [10, 12] },
            { loc: [18, 23] },
            { loc: [24, 27] },
            { loc: [27, 28] },
            { loc: [29, 32] },
            { loc: [31, 38] },
            { loc: [38, 42] },
            { loc: [38, 42],
image: goodWork }
          ]}
        />
        <Slide>
          <CodePane
            theme="external"
            textSize={30}
            lang="js"
            source={'firebase deploy --project assistant-rita-proto'}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={5} textColor="primary" caps>
          VUI to RITA
          </Heading>
          <List>
            <ListItem> <S type="strikethrough">"Action" on Google Assistant</S></ListItem>
            <ListItem> <S type="strikethrough">Google Dialogflow (set intents)</S></ListItem>
            <ListItem> <S type="strikethrough">
              Google Cloud Function (intent fulfillment)
              </S>
            </ListItem>
            <ListItem textColor="primary">RITA</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} caps lineHeight={2} textColor="secondary">
            rita-util.js
          </Heading>
          <CodePane
            theme="external"
            textSize={25}
            lang="js"
            source={ritaRequest1}
          />
        </Slide>
        <Slide>
          <CodePane
            theme="external"
            textSize={25}
            lang="js"
            source={ritaRequest2}
          />
        </Slide>
        <Slide>
          <CodePane
            theme="external"
            textSize={25}
            lang="js"
            source={ritaRequest3}
          />
        </Slide>
        <CodeSlide
          bgColor="quaternary"
          transition={['fade']}
          lang="js"
          code={fulfillment}
          ranges={[
            { loc: [13, 15] },
            { loc: [25, 28] },
            { loc: [38, 42],
title: 'FRONT END HAND OFF' }
          ]}
        />
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={5} textColor="primary" caps>
            REACT APP FUN
          </Heading>
          <List>
            <Appear>
              <ListItem textColor="primary">React Hooks</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">React Spring</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Quote textColor="secondary">
            "...we’d like Hooks to become the primary way to define React
            components in the future."
          </Quote>
          <Link
            href="https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Cite>Dan Abramov: Making Sense of React Hooks</Cite>
          </Link>
        </Slide>
        <CodeSlide
          bgColor="quaternary"
          transition={['fade']}
          lang="js"
          code={reactApp}
          ranges={[
            { loc: [0, 5],
title: 'REACT APP' },
            { loc: [6, 7] },
            { loc: [7, 8] },
            { loc: [48, 54] },
            { loc: [8, 9] },
            { loc: [15, 25] },
            { loc: [3, 4] }
          ]}
        />
        <CodeSlide
          bgColor="quaternary"
          transition={['fade']}
          lang="js"
          code={hooks}
          ranges={[
            { loc: [0, 1],
title: './RobsStolenHooks.js' },
            { loc: [16, 17] }
          ]}
        />
        <Slide>
          <Quote textColor="secondary">
            "Disclaimer: this post focuses on a pathological case."
          </Quote>
          <Link
            href="https://overreacted.io/making-setinterval-declarative-with-react-hooks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Cite>Making setInterval Declarative with React Hooks</Cite>
          </Link>
        </Slide>
        <CodeSlide
          bgColor="quaternary"
          transition={['fade']}
          lang="js"
          code={reactApp}
          ranges={[{ loc: [15, 25] }, { loc: [32, 34] }, { loc: [42, 47] }]}
        />
        <CodeSlide
          bgColor="quaternary"
          transition={['fade']}
          lang="js"
          code={hooks}
          ranges={[
            { loc: [2, 15] },
            { loc: [5, 6] },
            { loc: [3, 4] },
            { loc: [6, 7] },
            { loc: [7, 8] },
            { loc: [5, 6] },
            { loc: [8, 12] },
            { loc: [2, 15] }
          ]}
        />
        <CodeSlide
          bgColor="quaternary"
          transition={['fade']}
          lang="js"
          code={reactApp}
          ranges={[{ loc: [3, 4] }, { loc: [32, 34] }]}
        />
        <Slide>
          <Quote textColor="secondary">
            "<S type="italic bold">You can npm install an even greater percentage of your application
            code than before</S>... is, I think, going to be a significant selling
            point for Hooks."
          </Quote>
          <Link
            href="https://twitter.com/seldo/status/1057030727512911874"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Cite>Laurie Voss</Cite>
          </Link>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={5} textColor="primary" caps>
            REACT APP FUN
          </Heading>
          <List>
            <ListItem><S type="strikethrough">React Hooks</S></ListItem>
            <Link
              href="https://www.react-spring.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItem textColor="primary">React Spring</ListItem>
            </Link>
          </List>
        </Slide>
        <CodeSlide
          bgColor="quaternary"
          transition={['fade']}
          lang="js"
          code={reactApp}
          ranges={[{ loc: [1, 2] }, { loc: [26, 31] }, { loc: [38, 48] }]}
        />
        <Slide transition={['zoom']}>
        <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
        RITA via Google Assistant
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" bold>
      PROTOTYPE
    </Text>
          <Heading
            textAlign="left"
            margin="30px 0"
            size={1}
            lineHeight={1}
            textColor="quaternary"
          >
            ⓵ VUI to RITA
          </Heading>
          <Heading
            size={1}
            textAlign="left"
            lineHeight={1}
            textColor="quaternary"
          >
            ⓶ React Hooks
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
