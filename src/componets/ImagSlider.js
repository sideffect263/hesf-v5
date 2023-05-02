import { Linking, View, Text,Image,StyleSheet ,TouchableOpacity, Modal, Pressable,SafeAreaView,
  ScrollView,FlatList,Dimensions} from 'react-native'
import bamot_misparaim_memunaot from '../../assets/bamot_misparaim_memunaot-1.jpg'
import React,{useState} from 'react'


var itemIndex = 0;


//start of main
const ImagSlider = ({data}) => {

  const [itemModel, setItemModel] = useState();

  const Item = ({item}) => (
    
    <View style={styles.itemBox}>

  <TouchableOpacity 
  onPress={()=>imgPressed(item)}
  >


    <View style={
      {
        flex:1,
        backgroundColor: item.color, 
        marginVertical:'0.4%',    
        flexDirection:'row',
        justifyContent:'space-around',
  
      }
    }>
  
<View style={styles.itemImage}>
                <Image
                  style={styles.mainImage}
                  source={item.image}
                  />
                  <Text style={{
                    fontSize:Dimensions.get('window').width>815?20:10,
                    borderWidth:1,
                    backgroundColor: item.color,
                    textAlign:'center',
                    alignSelf:'stretch',
                    justifyContent:'center',
                    alignItems:'center',
                    textAlignVertical:'center',
                    borderRadius:7,
                    borderColor:'white',
                    margin:'1%',
                     

                  }}>{item.name}</Text>
    </View>


                  </View>


   
    </TouchableOpacity>
    </View>
  );
  
  
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [modalTitle, setModalTitle] =  useState('');
  const [modalImage, setModaImage] =  useState('');
  
const imgPressed=(item)=>{

  setModaImage(item.image)
  setModalTitle(item.name);
  setModalData(item);
  setModalVisible(true);
  console.log('name')
  console.log(modalImage);
  // console.log(data);
 // console.log(data[key.index].name);


}

  function logoPressed() {
    console.log('logo pressed');
    Linking.openURL('https://www.ofeklift.com/');
  }


  return (
  
    <View style={styles.dfual}>
      {
        //when an item pressed this shows up
      }
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={styles.itemView}>
            <View style={styles.itemDataCard}>
            <Text style={styles.modalTextTitle}>{modalData.name}</Text>
            <Text style={styles.modalText}>{modalData.vehicleType}</Text>
            <Text style={styles.modalText}>{modalData.engType}</Text>
            <Text style={styles.modalText}>{modalData.workLocation}</Text>
            <Text style={styles.modalText}>{modalData.workHeight}</Text>
            <Text style={styles.modalText}>{modalData.liftStrenght}</Text>
            <Text style={styles.modalText}>{modalData.accessibility}</Text>
            <Text style={styles.modalText}>{modalData.groundType}</Text>
            <Text style={styles.modalText}>{modalData.groundLevel}</Text>

            </View>

            <View style={styles.itemImageView}>
              <Pressable onPress={logoPressed} style={styles.imagePressed}>
            <Image
                style={styles.modalImageS}
                source={modalImage}
                
                />
                </Pressable>
                </View>
                </View>

                <View style={styles.companyLink}>
                <Text onPress={logoPressed} style={styles.modalText}>בשביל הצעת מחיר לחצו על התמונה</Text>
                </View>

            <Pressable
              style={[styles.buttonx, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>CLOSE</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
    
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={data}
        renderItem={({item}) =>
         <Item item={item}
          />}
          numColumns={Dimensions.get('window').width>815?4:1}
        keyExtractor={item => item.name}
      />
     </SafeAreaView>
      </View>
      </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({

  imagePressed:{
    flex:1,
    alignSelf:'stretch',
    justifyContent:'center',
    alignItems:'center',


  },

  scrollContainer:{
    flexDirection:'column',
    flex:1,
  },
  safeContainer:{
    flexDirection:'column',
    flex:1,
  },
  itemDataCard:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    alignSelf:'stretch',
  },
  itemImage:{
    ...Dimensions.get('window').width>815?{flex:2}:{flex:2},
    ...Dimensions.get('window').width>815?{height:Dimensions.get('window').height/3}:{height:Dimensions.get('window').height/6},

    backgroundColor:'white',
    justifyContent:'center',
  },
  itemText:{
    
  },
  itemImageView:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'white',
    alignSelf:'stretch',
  },
  


  itemView:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    alignSelf:'stretch',
  },

    dfual:{
      flex:1,
      display:'flex',
    },

    modalImageS:{
      flex:1,
      resizeMode:'contain',
      alignSelf:'stretch',
      borderWidth:1,
      
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
   
   modalView: {
    margin: 20,
    backgroundColor: '#ccd5ae',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    alignSelf:'center',
    height:'50%',   
    width:'40%',
    shadowOffset: {
      width: 0,
      height: 2,
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },  

    flexDirection:'column',
    },
      container: {
        backgroundColor:'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        }
    },
    mainImage: {
      flex:1,
      resizeMode:'contain',
    },

    itemBox:{
    //  margin:'0.5%',
     flex:1,
     borderWidth:2,
      borderColor:'black',
      borderRadius:10,

     margin:'0.15%',
     backgroundColor:'#607548',
    },

    item: {
      flex:1,
      backgroundColor: '#86bbd8', 
      marginVertical:'0.4%',    
      flexDirection:'row',
      justifyContent:'space-around',
      borderWidth:2,
      borderColor:'white',
    },
    modalTextTitle:{
      fontSize:20,
      fontWeight:'bold',
      color:'black',
      textDecorationLine:'underline',
    },
    modalText:{
      fontSize:15,
      color:'black',
    },
    buttonx: {
      borderRadius: 20,
      margin:'2%',
      padding: 10,
      backgroundColor:'#607548',
    },
    

    
  });

export default ImagSlider