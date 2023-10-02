import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text,TextInput,Searchbar,Image, View, ScrollView, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Content(){
    const navigation= useNavigation();
    return(
        <ScrollView>
        <SafeAreaView>
            <View >
                <Text style={styles.textAlign}>Recommanded Items</Text>
            </View>
            
            <View style={styles.cartDetail}>
            <TouchableOpacity onPress={() => navigation.navigate("Productdetail1")}>
            <View style={styles.image}>
                <View style={styles.cardContainer}>

                <Image 
                source={{
                    width:130,
                    height:130,
                    uri:"https://www.gadgetzone.ro/wp-content/uploads/2020/11/7.jpg"}}
                />
                <Text style={styles.priceTag}>
                    Price :₹ 59,990
                </Text>
                
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.image}>
            <View style={styles.cardContainer}>
                <Image 
                source={{
                    width:130,
                    height:130,
                    uri:"https://www.gadgetzone.ro/wp-content/uploads/2020/11/7.jpg"}}
                />
                <Text style={styles.priceTag}>
                    Price :₹ 59,990
                </Text>
                </View>
            </View>
            </TouchableOpacity>
            </View>


            <View style={styles.cartDetail}>
            
            <TouchableOpacity>
            <View style={styles.image}>
            <View style={styles.cardContainer}>
                <Image 
                source={{
                    width:130,
                    height:130,
                    uri:"https://www.gadgetzone.ro/wp-content/uploads/2020/11/7.jpg"}}
                />
                <Text style={styles.priceTag}>
                    Price :₹ 59,990
                </Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.image}>
            <View style={styles.cardContainer}>
                <Image 
                source={{
                    width:130,
                    height:130,
                    uri:"https://www.gadgetzone.ro/wp-content/uploads/2020/11/7.jpg"}}
                />
                <Text style={styles.priceTag}>
                    Price :₹ 59,990
                </Text>
                </View>
            </View>
            </TouchableOpacity>
            </View>


            <View style={styles.cartDetail}>

            <TouchableOpacity>
            <View style={styles.image}>
            <View style={styles.cardContainer}>
                <Image 
                source={{
                    width:130,
                    height:130,
                    uri:"https://www.gadgetzone.ro/wp-content/uploads/2020/11/7.jpg"}}
                />
                <Text style={styles.priceTag}>
                    Price :₹ 59,990
                </Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.image}>
            <View style={styles.cardContainer}>
                <Image 
                source={{
                    width:130,
                    height:130,
                    uri:"https://www.gadgetzone.ro/wp-content/uploads/2020/11/7.jpg"}}
                />
                <Text style={styles.priceTag}>
                    Price :₹ 59,990
                </Text>
                </View>
            </View>
            </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
        </ScrollView>
    )
}
const styles= StyleSheet.create({
    textAlign:{
        fontSize:20,
        marginTop:20,
        marginLeft:20,    
    },  


    cardContainer:{
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 1, height: 1 },
        margin: 10,
        padding: 10,

    },
    priceTag:{
        marginLeft:18,
        marginTop:10,
    },

    cartDetail:{
        flexDirection:'row',
        justifyContent: 'space-around'
    },

}); 