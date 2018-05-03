// import React from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     Dimensions,
//     Image,
//     TouchableOpacity
// } from 'react-native';
// const {
//     height,
//     width
// } = Dimensions.get('window');
// const pt = width/750;
// import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
// import { connect } from 'react-redux';
// import * as actions from '../redux/actions';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import {BoxShadow} from 'react-native-shadow';
// import Icon from 'react-native-vector-icons/Ionicons';
// import request from '../ultils/request';
// import MapViewDirections from 'react-native-maps-directions';
// const DEFAULT_PADDING = { top: 200, right: 40, bottom: 40, left: 40 };

// const shadowOpt = {
//     height: 200*pt,
//     width: 710*pt,
//     color:"#000",
//     border:2,
//     radius:3,
//     opacity:0.2,
//     x:0,
//     y:3,
//     style: {
//         position: 'absolute',
//         backgroundColor:'#FFF',
//         height: 200*pt,
//         width: 710*pt,
//         zIndex:100,
//         top: 20,
//         left:20*pt,
//         borderRadius: 8*pt,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     }
// }
// const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
// const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

// class Main extends React.Component {
//     static navigatorStyle = {
//         navBarHidden: true
//     }
//     constructor(props){
//         super(props);
//         this.state = {
//             locationStart: null,
//             locationEnd: null,
//             showSearch: 0,
//         }
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//               this.setState({
//                 locationStart:{
//                     location: {
//                         latitude: position.coords.latitude,
//                         longitude: position.coords.longitude,
//                     },
//                     address: 'Vị trí của bạn'
//                 }
//               });
//             },
//             (error) => this.setState({ error: error.message }),
//             { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
//         );
//     }
//     logout(){
//         this.props.dispatch(actions.logout());
//     }
//     getTimeAndFar(){
//         request.get("https://maps.googleapis.com/maps/api/distancematrix/json")
//         .query({
//             origins:this.state.locationStart.location.latitude + "," +this.state.locationStart.location.longitude,
//             destinations:this.state.locationEnd.location.latitude + "," +this.state.locationEnd.location.longitude,
//             mode:"driving",
//             key:"AIzaSyCVQEHjYttu96vRABNxaUHdoIhPKorBZB4"
//         })
//         .finish((error, res)=>{
//             console.log('DAAAAA',res)
//         })
//     }
//     render(){
//         return(
//             <View style={{flex:1}}>
//                 {
//                     this.state.showSearch !== 0 ? 
//                     <View style={{zIndex:1000, position: 'absolute',backgroundColor:'#FFF',paddingTop:20,height,width}}>
//                         <TouchableOpacity 
//                             style={{position: 'absolute', zIndex:1000,backgroundColor:'#FFF',top:54*pt,left:10*pt}}
//                             onPress={()=>{this.setState({showSearch: 0})}}
//                         >
//                             <Icon name='ios-arrow-dropleft' size={60*pt} style={{color:'#999'}}/>
//                         </TouchableOpacity>
//                         <GooglePlacesAutocomplete
//                             placeholder='Search'
//                             minLength={3} // minimum length of text to search
//                             autoFocus={true}
//                             returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
//                             listViewDisplayed='auto'    // true/false/undefined
//                             fetchDetails={true}
//                             renderDescription={row => row.description} // custom description render
//                             onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
//                                 if(this.state.showSearch === 1){
//                                     this.setState({
//                                         locationStart: {
//                                             location: {
//                                                 latitude: details.geometry.location.lat,
//                                                 longitude:  details.geometry.location.lng
//                                             },
//                                             address: details.formatted_address
//                                         },
//                                         showSearch: 0
//                                     });
//                                     if(this.state.locationEnd && this.state.locationStart){
//                                         this.map.fitToCoordinates([this.state.locationEnd.location, this.state.locationStart.location], {
//                                             edgePadding: DEFAULT_PADDING,
//                                             animated: true,
//                                         });
//                                         // this.getWay()
//                                     }
//                                 }else{
//                                     this.setState({
//                                         locationEnd: {
//                                             location: {
//                                                 latitude: details.geometry.location.lat,
//                                                 longitude:  details.geometry.location.lng
//                                             },
//                                             address: details.formatted_address
//                                         },
//                                         showSearch: 0
//                                     });
//                                     if(this.state.locationEnd && this.state.locationStart){
//                                         this.map.fitToCoordinates([this.state.locationEnd.location, this.state.locationStart.location], {
//                                             edgePadding: DEFAULT_PADDING,
//                                             animated: true,
//                                         });
//                                         // this.getWay()
//                                     }
//                                 }
//                             }}
                            
//                             getDefaultValue={() => ''}
                            
//                             query={{
//                                 // available options: https://developers.google.com/places/web-service/autocomplete
//                                 key: 'AIzaSyBQifhJaTTytaRordzYWQHKX-grHgY0KG8',
//                                 language: 'vi', // language of the results
//                                 types: 'address' // default: 'geocode'
//                             }}
                            
//                             styles={{
//                                 textInputContainer: {
//                                     width,
//                                     backgroundColor:'#FFF',
//                                     paddingLeft: 50*pt,
//                                 },
//                                 description: {
//                                     fontWeight: 'bold'
//                                 },
//                                 predefinedPlacesDescription: {
//                                     color: '#1faadb'
//                                 }
//                             }}
                            
//                             currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
//                             currentLocationLabel="Vị trí hiện tại của bạn"
//                             nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
//                             GoogleReverseGeocodingQuery={{
//                                 // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
//                             }}
//                             GooglePlacesSearchQuery={{
//                                 // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
//                                 rankby: 'distance',
//                                 types: 'food'
//                             }}

//                             filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
//                             // predefinedPlaces={[homePlace, workPlace]}

//                             debounce={200} 
//                         />
//                     </View> 
//                     :
//                     null
//                 }
//                 <View
//                     style={style.searchView}
//                 >
//                     <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
//                         <Image
//                             style={{height: 130*pt, width: 36*pt, marginTop: 36*pt, marginLeft:30*pt}}
//                             source={require('../assets/images/iconLocation.jpg')}
//                         />
//                         <View style={{flex:1}}>
//                             <TouchableOpacity 
//                                 style={{flex:1, justifyContent:'center',paddingLeft:30*pt,alignItems:'flex-start'}}
//                                 onPress={()=>{this.setState({showSearch: 1})}}
//                             >
//                                 {
//                                     this.state.locationStart ?
//                                     <Text style={{fontSize:30*pt, fontWeight: '500'}}>
//                                         {this.state.locationStart.address}
//                                     </Text>
//                                     :
//                                     <Text style={{fontSize: 30*pt, fontWeight: '500',color:'#999'}}>
//                                         Chọn điểm đi
//                                     </Text>
//                                 }
//                             </TouchableOpacity>
//                             <TouchableOpacity 
//                                 style={{flex:1, justifyContent:'center',paddingLeft:30*pt,alignItems:'flex-start'}}
//                                 onPress={()=>{this.setState({showSearch: 2})}}
//                             >
//                                 {
//                                     this.state.locationEnd ?
//                                     <Text style={{fontSize:30*pt, fontWeight: '500'}}>
//                                         {this.state.locationEnd.address}
//                                     </Text>
//                                     :
//                                     <Text style={{fontSize: 30*pt, fontWeight: '500',color:'#999'}}>
//                                         Chọn điểm đến
//                                     </Text>
//                                 }
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </View>
//                 <MapView
//                     ref={ref => { this.map = ref }}
//                     provider={PROVIDER_GOOGLE}
//                     initialRegion={this.state.locationStart ? 
//                     {
//                         ...this.state.locationStart.location,
//                         latitudeDelta: 0.021,
//                         longitudeDelta: 0.021
//                     } 
//                     : 
//                     {
//                         latitude: 20.993776,
//                         longitude: 105.811417,
//                         latitudeDelta: 0.021,
//                         longitudeDelta: 0.021
//                     }}
//                     style={StyleSheet.absoluteFillObject}
//                 >
//                     {
//                         this.state.locationEnd && this.state.locationStart ?
//                         <MapViewDirections
//                             origin={this.state.locationStart.location}
//                             destination={this.state.locationEnd.location}
//                             language={'vi'}
//                             strokeColor="#6D84E1"
//                             strokeWidth={3}
//                             apikey={'AIzaSyCVQEHjYttu96vRABNxaUHdoIhPKorBZB4'}
//                         />
//                         :
//                         null
//                     }
//                     {
//                         this.state.locationStart ?
//                         <MapView.Marker 
//                             key={1}
//                             coordinate={this.state.locationStart.location}
//                             ref={(e)=>{this.marker1 = e}}
//                         />
//                         :
//                         null
//                     }
//                     {
//                         this.state.locationEnd ?
//                         <MapView.Marker 
//                             key={2}
//                             coordinate={this.state.locationEnd.location}
//                             ref={(e)=>{this.marker2 = e}}
//                         />
//                         :
//                         null
//                     }
//                 </MapView>
//                 {/* <Text onPress={()=>{this.logout()}}>logout</Text> */}
//             </View>
//         )
//     }
// }
// const mapStateToProps = (state) => ({
//     state: state
// });
// const style= {
//     searchView:{
//         position: 'absolute',
//         backgroundColor:'#FFF',
//         height: 200*pt,
//         width: 710*pt,
//         zIndex:100,
//         top: 20,
//         left:20*pt,
//         borderRadius: 8*pt,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     }
// }
// export default connect(mapStateToProps)(Main);