/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,

} from 'react-native';
import Brokenline from './src/Brokenline';
import Hangman from './src/Hangman';
import Definition from './src/Definition';
import Http from './src/libs/http';
import axios from 'axios';




const verbs='read'

const baseUrl='https://api.dictionaryapi.dev/api/v2/entries/en/'




const App = () => {
const [fails, setFails] = useState(0);
const [definition, setDefinition] = useState('');

const callbackFails=(fails)=>{
    setFails(fails)
  }

const getCasos = async () => {

    await axios.get(baseUrl+verbs).then((response) => {

      setDefinition(response.data[1].meanings[0].definitions[1].definition)
    }) .catch((err) => {
        console.log(err);
      });

  }
  getCasos()

  return (
    <SafeAreaView >
      <ScrollView>
        <Definition
          definition={definition}
        />
        <Hangman
          img={fails}
        />
        <Brokenline
          verb={verbs}
          fails={callbackFails}
        />

        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  });

export default App;
