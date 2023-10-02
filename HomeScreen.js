import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text,TextInput,Searchbar, View, } from 'react-native';
import Content from './Content';

export default function HomeScreen({ navigation }) {
    return (
    
        <SafeAreaView style={styles.container}>
          <View>
            <TextInput placeholder='Search E-commerce...' clearButtonMode='always' style={styles.Searchbar}/>
            </View>
            <Content />
      
          <StatusBar style="auto" />
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:9,
      },

      
      Searchbar:{
        marginLeft:20,
        marginRight:20,
        borderWidth:1,
        padding:10,
        borderRadius:10,
      },
    
    });