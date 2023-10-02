import { StyleSheet,Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
const Productdetail1 = (navigation) => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View>
      <Image
      source={{width:370, height:300, uri:"https://www.gadgetzone.ro/wp-content/uploads/2020/11/7.jpg"}}
        />      
    </View>

    <View>
       <Text style={styles. textstyle}>Lenovo Ideapad </Text>
        <Text style={styles. Details}> Intel Core i5 13420H 14"(35.5cm) WUXGA IPS Laptop (16GB/512GB SSD/Win 11/Office 2021/Backlit KB/FHD Camera/Alexa/3 Month Game Pass/Cloud Grey/1.46Kg), 82XD003NIN</Text>
    </View>
    <View style={styles.stars}>
      {[1,2,3,4,5].map((index)=>(<Ionicons key={index} name='star' size={24} color="gold"/>))}
      <Text style={styles.rating}>(4.9)</Text>
    </View>
    <View>
      <Text style={styles.specs}>About this item</Text>
    </View>
    
    <View>
      <Text style={styles.specDetails}> • Processor: Intel Core i5-13420H | Speed: 2.1Hz (Base) - 4.6 GHz (Max) | 8 Cores | 12 Threads | 12MB Cache</Text>
      <Text style={styles.specDetails}> • Operating System: Pre-Loaded Windows 11 Home with Lifetime Validity | MS Office Home and Student 2021 |Flip to Start | Xbox GamePass Ultimate 3-month subscription*</Text>
      <Text style={styles.specDetails}> • Memory and Storage: 16GB RAM LPDDR5-5200 | 512 GB SSD (Expandable upto 1TB) || Graphics: Integrated Intel UHD Graphics</Text>
      <Text style={styles.specDetails}> • Display: 14" WUXGA (1920x1200) IPS Display | Brightness: 300 nits | Anti-Glare | Intelligent Sens-Super Resolution & TUV Low Blue Light Protection</Text>
      <Text style={styles.specDetails}> • Design: 1.69 cm Thin and 1.49 Kg Light | All Metal Body | Backlit Keyboard</Text>
      <Text style={styles.specDetails}> • Battery Life: 56.6Wh Battery | 11 Hours | Adaptive Performance with Smart Power| Rapid Charge (2 hours of runtime with a 15-minute charge) | Intelligent Power and Cooling with Smart Power |Enhanced Thermal Performance</Text>
      <Text style={styles.specDetails}> • Camera: FHD 1080p with IR Privacy Shutter |Smart Login with Facial Recognition |Fixed Focus |ToF Sensor | Audio: Front Facing 2x 2W HD Stereo Speakers | Dolby Audio</Text>
      <Text style={styles.specDetails}> • Ports: 2x USB-C 3.2 Gen 1 (Data transfer, Power Delivery 3.0 & DisplayPort 1.2) | 2x USB-A 3.2 Gen 1 (1 Always On) | 1x Headphone/microphone combo jack (3.5mm) | 1x HDMI 1.4b | 1x micro SD card Reader</Text>
      <Text style={styles.specDetails}> • Military Grade : MIL-STD-810H Qualified Design| Qualified for various Military Specification Tests like Low & High Temp (-25 to 63°C for 4 hrs)| Temp Shock (-25 to 63°C one way temp Shock)| Shock (122cm+ Drop Test)| Vibration (4-32Hz over 2 hrs)</Text>
      <Text style={styles.specDetails}> • Warranty: This genuine Lenovo laptop comes with 1 Year onsite manufacturer warranty + 1 Year Premium Care</Text>

    </View>
    <View style={styles.items}>
      <TouchableOpacity onPress={()=>{}} style={styles.buystyle}>
          <Text style={styles.textitems}>Buy now</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
      <Ionicons name="cart-outline" size={23} color="white"/>
      </TouchableOpacity>
    </View>

    </ScrollView>
    </SafeAreaView>
  )
}

export default Productdetail1

const styles = StyleSheet.create({

  textstyle:{
  fontSize:25,
  marginLeft:10,
  },

  Details:{
    fontSize:15,
    margin:10,
  },
  stars:{
    flexDirection:'row',
    marginLeft:10,
  },
  rating:{

    color:'grey',
    marginTop:3,
    marginLeft:3,
  } ,
  specs:{
    marginTop:5,
    marginLeft:10,
    fontSize:20,
  },
  specDetails:{
    margin:10,
  },
  items:{
    marginTop:20,
    paddingBottom:50,
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  buystyle:{
    backgroundColor:'black',
    width:250,
    padding:10,
    borderRadius:10

  },
  textitems:{
    color:'white',
  },
  addCart:{
    backgroundColor:'black',
    width:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,


  },
})