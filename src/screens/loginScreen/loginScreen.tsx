import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Background from '../../component/background'
import Logo from '../../component/logo'
import Header from '../../component/header'
import TextInput from '../../component/textInput'
import { theme } from '../../themes/theme'
import Button from '../../component/button'
import { emailValidator } from '../../helpers/emailValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
// import { FIREBASE_AUTH } from '../../config/firebase'
import auth from '@react-native-firebase/auth';
import UserStack from '../../navigation/userStack'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../homeScreen'

const LoginScreen = ({navigation}) => {
    
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [loading,setLoading] = useState(false);
// const auth= FIREBASE.auth(); below is the same thing we are importing it from OUR CONFIG FILE
    // const auth = FIREBASE_AUTH;

    const onLoginPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
          setEmail({ ...email, error: emailError })
          setPassword({ ...password, error: passwordError })
          return
        }

        auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(() => {
            console.log('User account created & signed in!');
            console.log('email : ',email, '  password : ',password)
                navigation.navigate('HomeScreen')
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
              navigation.navigate('HomeScreen')
            }

            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }

            console.error(error);
          });
        
      }

  return (
    <Background>
        <Logo />
        <Header>Welcome back.</Header>
        <Text>LoginScreen</Text>
{/* creadential input */}
        <TextInput
              label="Email"
              returnKeyType="next"
              value={email.value}
              onChangeText={(text:string) => setEmail({ value: text, error: '' })}
              error={!!email.error}
              errorText={email.error}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address" 
              description={undefined}      />
        <TextInput 
              label="Password"
              returnKeyType="done"
              value={password.value}
              onChangeText={(text:string) => setPassword({ value: text, error: '' })}
              error={!!password.error}
              errorText={password.error}
              secureTextEntry description={undefined}      />

{/* Forgot password */}
        <View style={styles.forgotPassword}>
            <TouchableOpacity
            //   onPress={() => navigation.navigate('ResetPasswordScreen')}
            // onPress={()=>navigation.navigate('HomeScreen')}
            >
            <Text style={styles.forgot}>Forgot your password?</Text>
            </TouchableOpacity>
        </View>

        <Button mode="contained" onPress={onLoginPressed} style={undefined}>
        Login
        </Button>

{/* Text below login */}
<View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity 
        // onPress={()=>navigation.navigate('HomeScreen')}
        // onPress={() => navigation.replace('RegisterScreen')}
        >
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>

    </Background>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    forgot: {
      fontSize: 13,
      color: theme.colors.secondary,
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
  })