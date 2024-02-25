import React,{useState} from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import { events } from '../../constants/data';
const Home = () => {
    const [text,setText]=useState('');
    //get user logic ; 


    return (
        <SafeAreaView style={{flex:1,backgroundColor:"white",paddingHorizontal:5}}>

            {/* input field and add button container  */}
            <View style={styles.container} >
                <View style={styles.header}>
                    <TextInput
                        onChangeText={(text)=>setText(text)}
                        value={text}
                        style={styles.TextInput}
                        placeholder="Search all events"
                     />
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={styles.button} onPress={()=>{}}>
                                <Ionicons name='add-outline' color="pink" size={30} />
                    </TouchableOpacity> 
                </View>
                </View>
                <Text style={styles.headerText}>
                        Discover
                </Text>
            </View>

            {/* Events container  */}
            <ScrollView style={{flex:1,marginHorizontal:10}} showsVerticalScrollIndicator={false}>

                {events.map((event,index)=>(
                <View  key={index} style={{width:"100%",flex:1,marginTop:20}}>
                            <View style={styles.eventHeader}>
                                <View style={{flexDirection:"row",gap:5,alignItems:"center"}}>
                                    <Image source={{uri:event.userImage}}
                                    resizeMode="cover" 
                                    alt='user Image' 
                                    style={{width:40,height:40,borderRadius:100}}
                                     />
                                    <View style={{}}>
                                        <Text>{event.userName}</Text>
                                        <Text style={{marginLeft:8,marginBottom:8,fontSize:12,fontFamily:"Roboto",fontWeight:"200",color:"gray"}} >{event.category} </Text>
                                    </View>
                                </View>
                                <View style={{justifyItems:"center",alignItems:"center"}} >
                                    <Text>{event.date}</Text>
                                    <Text>{event.region}</Text>
                                </View>
                            </View>
                            <View style={{flex:1,height:250,marginTop:10}}>
                                <Image source={{uri:event.eventImage}}
                                style={{width:"100%",height:"100%"}}  
                                resizeMode="stretch"   />
                            </View>
                 </View>
                ))}

            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const styles=StyleSheet.create({
    container:{
        marginTop:50,
        marginHorizontal:"5%",
    },
    TextInput:{
        width:'100%',
        flex:1,
        borderColor:"pink",
        borderWidth:2,
        padding:8,
        position:"relative"
    },
    header:{
        flexDirection:'row',
        justifyContent:"space-between",
        gap:10
    },
    headerText:{
        // fontFamily:"Roboto",
        fontSize:30,
        fontWeight:"700",
        marginTop:10,
        marginLeft:10,

    },
    eventHeader:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",

    },
    button:{
        borderColor:"pink",
        borderWidth:2,
    }

})