// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react'
// import {Text,View,ActivityIndicator,Image,ImageBackground,ScrollView,TextInput,StyleSheet} from 'react-native'

 
//  class app extends React.Component{
//   state={
//     role:true
// }
//   render(){
//     setTimeout(() => {this.setState({role:false})},2000)
  
//   if(this.state.role){
//     return(
//       <View style={{ flex:1,
//         justifyContent:'center', 
//         alignItems:'center'}}>
//           <Image source={require('./gambar/book.png')} style={{height:110,width:110}}/>
//           <ActivityIndicator size='large'/>
//          <View style={{alignItems:'center'}}>
//            <Text>
//              hai
//            </Text>
//          </View> 
//       </View>
//     )
//       }
// return(
// <View style={{flex:1}}>
    
//     <ImageBackground source={require('./gambar/7af6d870-056b-4bbe-8b81-958a5f87f0f5.png')} style={{height:'100%',width:'100%'}}>
//   <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#fff',height:67,width:'100%',flexDirection:'row'}}>
    
//     <View style={{alignItems:'center',justifyContent:'center',paddingRight:30}}>
//     <Text style={{textAlign:'center',lineHeight:50}}>hello</Text>
//     </View>
//     <View>
//     <Image source={require('./gambar/book.png')} style={{height:50,width:50,justifyContent:'center',marginLeft:200}}/>
//     </View>
//   </View>


//   <View style={{paddingTop:30,flexDirection:'row'}}>
//     <Image source={require('./gambar/plant.png')} style={{height:160,width:170,marginHorizontal:10}}/>

  
//     <View style={{paddingTop:30,height:80,width:160}}>
//       <TextInput style={Styles.kata} placeholder='litlle note' />
//     </View>

//   </View>

//     <View style={{paddingTop:20}}>
//     <ScrollView >
//     <View style={{paddingTop:30}}>
//       <Text style={{color:'black'}}>
//       A flower’s appeal is in its contradictions – so delicate in form yet strong in fragrance, so small in size yet big in beauty, so short in life yet long on effect
//       </Text>
//     </View>
    
//     <View style={{paddingTop:30}}>
//       <Text>
//       If dandelions were hard to grow, they would be most welcome on any lawn
//       </Text>
//     </View>

//     <View style={{paddingTop:30}}>
//       <Text>
//       Flowers don’t worry about how they’re going to bloom. They just open up and turn toward the light and that makes them beautiful
//       </Text>
//     </View>

//     <View style={{paddingTop:30}}>
//       <Text>
//       Little things seem nothing, but they give peace, like those meadow flowers which individually seem odorless but all together perfume the air.
//       </Text>
//     </View>

//     <View style={{paddingTop:30}}>
//       <Text>
//       Flowers always make people better, happier and more helpful; they are sunshine, food and medicine to the soul
//       </Text>
//     </View>

//     <View style={{paddingTop:30}}>
//       <Text>
//       Flowers are restful to look at. They have neither emotions nor conflicts.
//       </Text>
//     </View>

//     <View style={{paddingTop:30}}>
//       <Text>
//       It is prickly not to hurt but to protect himself. Do not be afraid to look firm, scary or brave. It's not to be feared, but to keep yourself safe.
//       </Text>
//     </View>

//     <View style={{paddingTop:30}}>
//       <Text>
//       Love is like a beautiful flower, which may not be held, but the fragrance makes the garden a happy place.
//       </Text>
//     </View>
  
//   </ScrollView>
//   </View>

//   </ImageBackground>
  
// </View>
// )
// }
// }

// const Styles=StyleSheet.create({
//   kata:{
    
//     color:'#00008b',
//     borderWidth:1
//   }
// })
// export default app


import React from 'react'
import {View,Text,TextInput,TouchableNativeFeedback,Image,ScrollView,StyleSheet} from 'react-native'
import Header from './code/header'


export default class extends React.Component{
  state={
    teks:'',
    hasilnya:[]
  }
 
  add=()=>{
    if(this.state.teks !== ''){
      this.state.hasilnya.push(this.state.teks)
      this.setState({hasilnya:this.state.hasilnya,teks:''})
    }

    
      
  }
  render(){
    let lis = this.state.hasilnya.map((value,key) => {
      
      return(
        <View  key = {key} >
        <Text style={{width:'85%'}}>{value}</Text>
        
        <TouchableNativeFeedback >
          <Image source={require('./gambar/photo6319100334118643980.jpg')} style={Styles.bag2} />
        </TouchableNativeFeedback>
        </View>
      )
    })
    return(
      <View style={{flex:1}}>
      
      <View style={Styles.bag3}>
        <Header initeks='todo list' />
          
      </View>

      <View style={Styles.bag5}>
        <ScrollView>
        {lis}
        </ScrollView>
      </View>

      <View style={Styles.bag6}>


      <TextInput style={Styles.bag7} placeholder='tulis kegiatan' value={this.state.teks} onChangeText={t=>this.setState({teks:t})}/>

      <TouchableNativeFeedback onPress={() => this.add()}>
        <Image style={Styles.bag8}
          source={require('./gambar/photo6316692124480940383.jpg')}
        />
      </TouchableNativeFeedback>
      </View>
        
      </View>
    )
  }
}

const Styles= StyleSheet.create({
  
  bag2:{height:45,
    width:45
  },
  bag1:{fontSize:18,
    fontWeight:'bold',
    color:'#fff'},

  bag5:{flex:1,
    backgroundColor:'#b8860b'
  },
  bag6:{height:50,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10
  },
  bag7:{height:50,
    width:'80%',
    justifyContent:'center',
    alignItems:'flex-start'
  },
  bag8:{height:45,
    width:45},
    bag3:{height:50,
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#7fffd4',
      elevation:20
    },
})
  



