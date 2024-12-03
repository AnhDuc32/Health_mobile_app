import { View, Text, TextInput, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";

const SignUp = () => {
  const router = useRouter();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  }

  const toggleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1'>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className='w-full h-full bg-white flex-1 px-7'>
            <Text className='font-bold text-center mt-12 text-3xl'>Let's Start!</Text>

            <View className='mt-14'>
              <Text className='mb-2 font-semibold'>Full name</Text>
              <TextInput
                placeholder='Enter your full name'
                className='bg-white py-5 px-3 rounded-lg border'
                keyboardType='default'
                autoCapitalize='words'
                autoCorrect={false}
              />

              <Text className='mb-2 font-semibold mt-5'>Email</Text>
              <TextInput
                placeholder='Enter your email'
                className='bg-white py-5 px-3 rounded-lg border'
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
              />
              
              <Text className='mb-2 mt-5 font-semibold'>Password</Text>
              <View className='relative bg-white rounded-lg border'>
                <TextInput
                  placeholder='Enter your password'
                  className='py-5 px-3'
                  secureTextEntry={secureTextEntry}
                  autoCapitalize='none'
                  autoCorrect={false}
                />
                <Pressable onPress={toggleSecureTextEntry} className='absolute right-3 top-1/3'>
                  <Icon name={secureTextEntry ? "eye-off" : "eye"} size={20} color="gray" />
                </Pressable>
              </View>

              <Text className='mb-2 mt-5 font-semibold'>Confirm Password</Text>
              <View className='relative bg-white rounded-lg border'>
                <TextInput
                  placeholder='Confirm your password'
                  className='py-5 px-3'
                  secureTextEntry={confirmPassword}
                  autoCapitalize='none'
                  autoCorrect={false}
                />
                <Pressable onPress={toggleConfirmPassword} className='absolute right-3 top-1/3'>
                  <Icon name={confirmPassword ? "eye-off" : "eye"} size={20} color="gray" />
                </Pressable>
              </View>
              
              <TouchableOpacity 
                onPress={() => router.push('/Home/home')} 
                className="bg-blue-500 py-3 rounded-lg mt-7"
                activeOpacity={0.7} 
              >
                <Text className="text-white font-bold text-xl text-center">Sign Up</Text>
              </TouchableOpacity>

              <Text className='mt-5 text-center'>or sign up with</Text>

              <View className='mt-5 flex-row justify-around'>
                <TouchableOpacity 
                  activeOpacity={0.7} 
                  className='bg-gray-100 flex-row justify-center items-center h-12 w-5/12 rounded-lg'
                >
                  <Icon name="logo-facebook" size={20} color="#2563eb" className='mr-3' />
                  <Text className='text-black font-semibold text-lg'>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity  
                  activeOpacity={0.7} 
                  className='bg-gray-100 flex-row justify-center items-center h-12 w-5/12 rounded-lg'
                >
                  <Icon name="logo-google" size={20} color="#2563eb" className='mr-3' />
                  <Text className='text-black font-semibold text-lg'>Google</Text>
                </TouchableOpacity>
              </View>
              
              <View className='flex-row mt-5 justify-center items-center'>
                <Text>Already have an account? </Text>
                <TouchableOpacity 
                  onPress={() => router.push('/Log In/log-in')} 
                  activeOpacity={0.7} 
                >
                  <Text className="text-blue-500">Log In</Text>
                </TouchableOpacity> 
              </View>
            </View>
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default SignUp;
