import React from 'react';
import { Text,Button,ScrollView } from 'react-native';

import Header from '../components/header.jsx';
import Question from '../components/Question.jsx';
import BottomMenu from '../components/BottomMenu.jsx';

const QuestionPage = (props) => {
  return <>  
    <ScrollView>
    <Header></Header>
    <Question></Question>
    <BottomMenu></BottomMenu>

    <Button
        title="Go to Home"
        onPress={() => props.navigation.popToTop()}
    />
    </ScrollView>
  </>
}

export default QuestionPage;