import { View, Text } from 'react-native'
import React from 'react'
import Background from '../../component/background'
import Logo from '../../component/logo'
import Header from '../../component/header'
import Paragraph from '../../component/paragraph'
import Button from '../../component/button'

const HomeScreen = () => {
  return (
    <Background>
    <Logo />
    <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you favorite code editor and start
      editing this project.
    </Paragraph>
    <Button
      mode="outlined"
      onPress={() =>{}
        // navigation.reset({
        //   index: 0,
        //   routes: [{ name: 'StartScreen' }],
        // })
      }
    >
      Logout
    </Button>
  </Background>
  )
}

export default HomeScreen