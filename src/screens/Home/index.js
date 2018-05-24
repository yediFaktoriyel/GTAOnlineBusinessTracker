import React, { Component } from "react";
import {
  ActivityIndicator,
  Alert,
  AppState,
  AsyncStorage,
  Button,
  Container,
  Dimensions,
  Header,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  Vibration,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import CountDown from 'react-native-countdown-component';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import styles from "./style";
import Appjs from '../../../App'

const x = Dimensions.get("window").width;
const y = Dimensions.get("window").height;

const airFreightCover = require("../../../assets/Air-Freight.jpg");
const bikerCover = require("../../../assets/Biker.jpg");
const gunrunningCover = require("../../../assets/Gunrunning.jpg");
const vehicleWarehouseCover = require("../../../assets/Vehicle-Warehouse.jpg");
const warehouseCover = require("../../../assets/Warehouse.jpg");

/* #TODO

  HEPSİ İÇİN HAFTALIK BONUSLARI GÖZ ÖNÜNDE BULUNDUR

  YESIL: rgba(35, 74, 10, 1)
  SARI: 'rgba(255, 171, 0, 1)'

*/

class AirFreight extends Component {

  constructor() {
    super();

    this.state = {

      loadingAnimation: true,
      isFirstEnterance: true,

      narcoticsSupply: 0,
      chemicalSupply: 0,
      medicalSupply: 0,

      animalSupply: 0,
      artSupply: 0,
      jewelrySupply: 0,

      counterfeitSupply: 0,
      tobaccoSupply: 0,

      narcoticsPrice: 0,
      chemicalPrice: 0,
      medicalPrice: 0,

      animalPrice: 0,
      artPrice: 0,
      jewelryPrice: 0,

      counterfeitPrice: 0,
      tobaccoPrice: 0,
    };

  }

  calculatePrice(supplyType) {

    switch (supplyType) {

      case 'narcoticsSupply': {
        this.setState({
          narcoticsPrice:
            (this.state.narcoticsSupply * 10000
              + (this.state.narcoticsSupply * 10000
                * (Math.floor(this.state.narcoticsSupply / 25) * 35 / 100)
              ))
        })
        break;
      }
      case 'chemicalSupply':
        this.setState({
          chemicalPrice:
            (this.state.chemicalSupply * 10000
              + (this.state.chemicalSupply * 10000
                * (Math.floor(this.state.chemicalSupply / 25) * 35 / 100)
              ))
        })
        break;

      case 'medicalSupply':
        this.setState({
          medicalPrice:
            (this.state.medicalSupply * 10000
              + (this.state.medicalSupply * 10000
                * (Math.floor(this.state.medicalSupply / 25) * 35 / 100)
              ))
        })
        break;

      case 'animalSupply':
        this.setState({
          animalPrice:
            (this.state.animalSupply * 10000
              + (this.state.animalSupply * 10000
                * (Math.floor(this.state.animalSupply / 10) * 12 / 100)
              ))
        })
        break;

      case 'artSupply':
        this.setState({
          artPrice:
            (this.state.artSupply * 10000
              + (this.state.artSupply * 10000
                * (Math.floor(this.state.artSupply / 10) * 12 / 100)
              ))
        })
        break;

      case 'jewelrySupply':
        this.setState({
          jewelryPrice:
            (this.state.jewelrySupply * 10000
              + (this.state.jewelrySupply * 10000
                * (Math.floor(this.state.jewelrySupply / 10) * 12 / 100)
              ))
        })
        break;

      case 'counterfeitSupply':
        this.setState({
          counterfeitPrice:
            (this.state.counterfeitSupply * 10000
              + (this.state.counterfeitSupply * 10000
                * (Math.floor(this.state.counterfeitSupply / 5) * 5 / 100)
              ))
        })
        break;

      case 'tobaccoSupply':
        this.setState({
          tobaccoPrice:
            (this.state.tobaccoSupply * 10000
              + (this.state.tobaccoSupply * 10000
                * (Math.floor(this.state.tobaccoSupply / 5) * 5 / 100)
              ))
        })
        break;
    }

  }

  async setNewAirFreightData(supplyType) {

    try {
      switch (supplyType) {
        case 'narcoticsSupply':
          await AsyncStorage.setItem('narcoticsSupply', this.state.narcoticsSupply.toString());
          await AsyncStorage.setItem('narcoticsPrice', this.state.narcoticsPrice.toString());
          break;
        case 'chemicalSupply':
          await AsyncStorage.setItem('chemicalSupply', this.state.chemicalSupply.toString());
          await AsyncStorage.setItem('chemicalPrice', this.state.chemicalPrice.toString());
          break;
        case 'medicalSupply':
          await AsyncStorage.setItem('medicalSupply', this.state.medicalSupply.toString());
          await AsyncStorage.setItem('medicalPrice', this.state.medicalPrice.toString());
          break;

        case 'animalSupply':
          await AsyncStorage.setItem('animalSupply', this.state.animalSupply.toString());
          await AsyncStorage.setItem('animalPrice', this.state.animalPrice.toString());
          break;
        case 'artSupply':
          await AsyncStorage.setItem('artSupply', this.state.artSupply.toString());
          await AsyncStorage.setItem('artPrice', this.state.artPrice.toString());
          break;
        case 'jewelrySupply':
          await AsyncStorage.setItem('jewelrySupply', this.state.jewelrySupply.toString());
          await AsyncStorage.setItem('jewelryPrice', this.state.jewelryPrice.toString());
          break;

        case 'counterfeitSupply':
          await AsyncStorage.setItem('counterfeitSupply', this.state.counterfeitSupply.toString());
          await AsyncStorage.setItem('counterfeitPrice', this.state.counterfeitPrice.toString());
          break;
        case 'tobaccoSupply':
          await AsyncStorage.setItem('tobaccoSupply', this.state.tobaccoSupply.toString());
          await AsyncStorage.setItem('tobaccoPrice', this.state.tobaccoPrice.toString());
          break;

      }
    } catch (error) {
      Alert.alert('An error has occured while saving user data.')
    }
  }

  async getAirFreightData() {

    try {

      const narcotics = await AsyncStorage.getItem('narcoticsSupply');
      const narcoticsP = await AsyncStorage.getItem('narcoticsPrice');

      const chemical = await AsyncStorage.getItem('chemicalSupply');
      const chemicalP = await AsyncStorage.getItem('chemicalPrice');

      const medical = await AsyncStorage.getItem('medicalSupply');
      const medicalP = await AsyncStorage.getItem('medicalPrice');

      const animal = await AsyncStorage.getItem('animalSupply');
      const animalP = await AsyncStorage.getItem('animalPrice');

      const art = await AsyncStorage.getItem('artSupply');
      const artP = await AsyncStorage.getItem('artPrice');

      const jewelry = await AsyncStorage.getItem('jewelrySupply');
      const jewelryP = await AsyncStorage.getItem('jewelryPrice');

      const counterfeit = await AsyncStorage.getItem('counterfeitSupply');
      const counterfeitP = await AsyncStorage.getItem('counterfeitPrice');

      const tobacco = await AsyncStorage.getItem('tobaccoSupply');
      const tobaccoP = await AsyncStorage.getItem('tobaccoPrice');

      this.setState({ narcoticsSupply: parseFloat(narcotics) })
      this.setState({ narcoticsPrice: parseFloat(narcoticsP) })

      this.setState({ chemicalSupply: parseFloat(chemical) })
      this.setState({ chemicalPrice: parseFloat(chemicalP) })

      this.setState({ medicalSupply: parseFloat(medical) })
      this.setState({ medicalPrice: parseFloat(medicalP) })

      this.setState({ animalSupply: parseFloat(animal) })
      this.setState({ animalPrice: parseFloat(animalP) })

      this.setState({ artSupply: parseFloat(art) })
      this.setState({ artPrice: parseFloat(artP) })

      this.setState({ jewelrySupply: parseFloat(jewelry) })
      this.setState({ jewelryPrice: parseFloat(jewelryP) })

      this.setState({ counterfeitSupply: parseFloat(counterfeit) })
      this.setState({ counterfeitPrice: parseFloat(counterfeitP) })

      this.setState({ tobaccoSupply: parseFloat(tobacco) })
      this.setState({ tobaccoPrice: parseFloat(tobaccoP) },

        this.setState({ loadingAnimation: false }))

    } catch (error) {
      Alert.alert('An error has occured while retireving user data.')
    }
  }

  async componentWillMount() {

    const isFirst = await AsyncStorage.getItem('isFirstEnterance');

    isFirst == null ? (

      this.setState({ isFirstEnterance: false }),
      await AsyncStorage.setItem('isFirstEnterance', 'false'),

      this.setNewAirFreightData('narcoticsSupply'),
      this.setNewAirFreightData('chemicalSupply'),
      this.setNewAirFreightData('medicalSupply'),
      this.setNewAirFreightData('animalSupply'),
      this.setNewAirFreightData('artSupply'),
      this.setNewAirFreightData('jewelrySupply'),
      this.setNewAirFreightData('counterfeitSupply'),
      this.setNewAirFreightData('tobaccoSupply'),
      this.setState({ loadingAnimation: false })

    ) :
      (
        this.getAirFreightData()
      )
  }

  render() {

    return (

      <View style={{
        width: x,
        height: y / 2.3,
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        <View style={{
          flexDirection: 'row',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: y / 18,
          width: x,
        }}>

          <View style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <ActivityIndicator
              animating={this.state.loadingAnimation}
              color='green'
              size="large"
              style={styles.activityIndicator} />
          </View>

          <View style={{

            backgroundColor: 'rgba(61,88,117, 0.3)',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 50,
            width: x / 4.1,
            height: y / 2.8,
            padding: 5

          }}>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: y / 20
            }}>

              <Text style={styles.smallerText}>
                NARCOTICS {'\n'}
                ($ {this.state.narcoticsPrice})
             </Text>

              <TouchableHighlight
                onPress={() => this.state.narcoticsSupply == 50 ? ''
                  : (
                    this.setState(function (prevState, props) {
                      return {
                        narcoticsSupply: prevState.narcoticsSupply + 1
                      }
                    }),
                    Vibration.vibrate(50)
                  )
                }
                onLongPress={() => (
                  this.setState({ narcoticsSupply: 0 }),
                  Vibration.vibrate(100)
                )}
                onHideUnderlay={() => (
                  this.setNewAirFreightData('narcoticsSupply'),
                  this.calculatePrice('narcoticsSupply')
                )}
                underlayColor='rgba(61,88,117, 0)'>
                <View>
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    fill={this.state.narcoticsSupply * 2}
                    tintColor='#ffab00'
                    backgroundColor='#E6E6E6'
                    rotation={0} />

                  <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{ fontSize: 10, color: '#E6E6E6' }}>
                      {this.state.narcoticsSupply} / 50 </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center'
            }}>

              <Text style={styles.smallerText}>
                ART & ANTIQUES {'\n'}
                ($ {this.state.artPrice})
            </Text>

              <TouchableHighlight
                onPress={() => this.state.artSupply == 50 ? ''
                  : (
                    this.setState(function (prevState, props) {
                      return {
                        artSupply: prevState.artSupply + 1
                      }
                    }),
                    Vibration.vibrate(50)
                  )
                }
                onLongPress={() => (
                  this.setState({ artSupply: 0 }),
                  Vibration.vibrate(100)
                )}
                onHideUnderlay={() => (
                  this.setNewAirFreightData('artSupply'),
                  this.calculatePrice('artSupply')
                )}
                underlayColor='rgba(61,88,117, 0)'>
                <View>
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    fill={this.state.artSupply * 2}
                    tintColor='orange'
                    backgroundColor='#E6E6E6'
                    rotation={0} />

                  <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{ fontSize: 10, color: '#E6E6E6' }}>
                      {this.state.artSupply} / 50 </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>

          </View>


          <View style={{

            backgroundColor: 'rgba(61,88,117, 0.3)',
            alignItems: 'center',
            justifyContent: 'center',
            width: x / 4.1,
            height: y / 2.8,
            padding: 5,

          }}>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: y / 20
            }}>

              <Text style={styles.smallerText}>
                CHEMICALS {'\n'}
                ($ {this.state.chemicalPrice})
            </Text>

              <TouchableHighlight
                onPress={() => this.state.chemicalSupply == 50 ? ''
                  : (
                    this.setState(function (prevState, props) {
                      return {
                        chemicalSupply: prevState.chemicalSupply + 1
                      }
                    }),
                    Vibration.vibrate(50)
                  )
                }
                onLongPress={() => (
                  this.setState({ chemicalSupply: 0 }),
                  Vibration.vibrate(100)
                )}
                onHideUnderlay={() => (
                  this.setNewAirFreightData('chemicalSupply'),
                  this.calculatePrice('chemicalSupply')
                )}
                underlayColor='rgba(61,88,117, 0)'>
                <View>
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    fill={this.state.chemicalSupply * 2}
                    tintColor='orange'
                    backgroundColor='#E6E6E6'
                    rotation={0} />

                  <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{ fontSize: 10, color: '#E6E6E6' }}>
                      {this.state.chemicalSupply} / 50 </Text>
                  </View>
                </View>
              </TouchableHighlight>

            </View>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>

              <Text style={styles.smallerText}>
                JEWELRY {'\n'}
                ($ {this.state.jewelryPrice})
            </Text>

              <TouchableHighlight
                onPress={() => this.state.jewelrySupply == 50 ? ''
                  : (
                    this.setState(function (prevState, props) {
                      return {
                        jewelrySupply: prevState.jewelrySupply + 1
                      }
                    }),
                    Vibration.vibrate(50)
                  )
                }
                onLongPress={() => (
                  this.setState({ jewelrySupply: 0 }),
                  Vibration.vibrate(100)
                )}
                onHideUnderlay={() => (
                  this.setNewAirFreightData('jewelrySupply'),
                  this.calculatePrice('jewelrySupply')
                )}
                underlayColor='rgba(61,88,117, 0)'>
                <View>
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    fill={this.state.jewelrySupply * 2}
                    tintColor='orange'
                    backgroundColor='#E6E6E6'
                    rotation={0} />

                  <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{ fontSize: 10, color: '#E6E6E6' }}>
                      {this.state.jewelrySupply} / 50 </Text>
                  </View>
                </View>
              </TouchableHighlight>

            </View>

          </View>


          <View style={{

            backgroundColor: 'rgba(61,88,117, 0.3)',
            alignItems: 'center',
            justifyContent: 'center',
            width: x / 4.1,
            height: y / 2.8,
            padding: 5

          }}>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: y / 20
            }}>

              <Text style={styles.smallerText}>
                MEDICAL {'\n'}
                ($ {this.state.medicalPrice})
            </Text>

              <TouchableHighlight
                onPress={() => this.state.medicalSupply == 50 ? ''
                  : (
                    this.setState(function (prevState, props) {
                      return {
                        medicalSupply: prevState.medicalSupply + 1
                      }
                    }),
                    Vibration.vibrate(50)
                  )
                }
                onLongPress={() => (
                  this.setState({ medicalSupply: 0 }),
                  Vibration.vibrate(100)
                )}
                onHideUnderlay={() => (
                  this.setNewAirFreightData('medicalSupply'),
                  this.calculatePrice('medicalSupply')
                )}
                underlayColor='rgba(61,88,117, 0)'>
                <View>
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    fill={this.state.medicalSupply * 2}
                    tintColor='orange'
                    backgroundColor='#E6E6E6'
                    rotation={0} />

                  <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{ fontSize: 10, color: '#E6E6E6' }}>
                      {this.state.medicalSupply} / 50 </Text>
                  </View>
                </View>
              </TouchableHighlight>

            </View>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>

              <Text style={styles.smallerText}>
                TOBACCO {'\n'}
                ($ {this.state.tobaccoPrice})
            </Text>

              <TouchableHighlight
                onPress={() => this.state.tobaccoSupply == 50 ? ''
                  : (
                    this.setState(function (prevState, props) {
                      return {
                        tobaccoSupply: prevState.tobaccoSupply + 1
                      }
                    }),
                    Vibration.vibrate(50)
                  )
                }
                onLongPress={() => (
                  this.setState({ tobaccoSupply: 0 }),
                  Vibration.vibrate(100)
                )}
                onHideUnderlay={() => (
                  this.setNewAirFreightData('tobaccoSupply'),
                  this.calculatePrice('tobaccoSupply')
                )}
                underlayColor='rgba(61,88,117, 0)'>
                <View>
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    fill={this.state.tobaccoSupply * 2}
                    tintColor='orange'
                    backgroundColor='#E6E6E6'
                    rotation={0} />

                  <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{ fontSize: 10, color: '#E6E6E6' }}>
                      {this.state.tobaccoSupply} / 50 </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          </View>

          <View style={{

            backgroundColor: 'rgba(61,88,117, 0.3)',
            alignItems: 'center',
            justifyContent: 'center',
            width: x / 4.1,
            height: y / 2.8,
            padding: 5

          }}>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: y / 20
            }}>

              <Text style={styles.smallerText}>
                ANIMAL {'\n'}
                ($ {this.state.animalPrice})
            </Text>

              <TouchableHighlight
                onPress={() => this.state.animalSupply == 50 ? ''
                  : (
                    this.setState(function (prevState, props) {
                      return {
                        animalSupply: prevState.animalSupply + 1
                      }
                    }),
                    Vibration.vibrate(50)
                  )
                }
                onLongPress={() => (
                  this.setState({ animalSupply: 0 }),
                  Vibration.vibrate(100)
                )}
                onHideUnderlay={() => (
                  this.setNewAirFreightData('animalSupply'),
                  this.calculatePrice('animalSupply')
                )}
                underlayColor='rgba(61,88,117, 0)'>
                <View>
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    fill={this.state.animalSupply * 2}
                    tintColor='#ffab00'
                    backgroundColor='#E6E6E6'
                    rotation={0} />

                  <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{ fontSize: 10, color: '#E6E6E6' }}>
                      {this.state.animalSupply} / 50 </Text>
                  </View>
                </View>
              </TouchableHighlight>

            </View>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>

              <Text style={styles.smallerText}>
                COUNTERFEIT {'\n'}
                ($ {this.state.counterfeitPrice})
            </Text>

              <TouchableHighlight
                onPress={() => this.state.counterfeitSupply == 50 ? ''
                  : (
                    this.setState(function (prevState, props) {
                      return {
                        counterfeitSupply: prevState.counterfeitSupply + 1
                      }
                    }),
                    Vibration.vibrate(50)
                  )
                }
                onLongPress={() => (
                  this.setState({ counterfeitSupply: 0 }),
                  Vibration.vibrate(100)
                )}
                onHideUnderlay={() => (
                  this.setNewAirFreightData('counterfeitSupply'),
                  this.calculatePrice('counterfeitSupply')
                )}
                underlayColor='rgba(61,88,117, 0)'>
                <View>
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    fill={this.state.counterfeitSupply * 2}
                    tintColor='#ffab00'
                    backgroundColor='#E6E6E6'
                    rotation={0} />

                  <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{ fontSize: 10, color: '#E6E6E6' }}>
                      {this.state.counterfeitSupply} / 50 </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>

    )
  }
}

class Gunrunning extends React.Component {

  /* #TODO
    CREATE MANIPULATIBLE SUPPLY BAR
  */

  constructor(props) {
    super(props);

    var equipment = false;
    var staff = false;

    var supply = 0.0;
    var stockPrice = 0.0;
  }


}

class VehicleWarehouse extends Component {

  constructor(props) {

    super(props);

    this.state = {

      loadingAnimation: true,
      vehicleCountdownActive: false,
      isFirstEnterance: true,

      standartRange: 0,
      mediumRange: 0,
      topRange: 0,
    };

    //this.vehicleCountdown = 5;
    this.currentDate = null;
    this.dueDate = null;

  }

  async setNewVehicleWarehouseData(carType) {

    try {
      switch (carType) {
        case 'standartRange':
          await AsyncStorage.setItem('standartRange', this.state.standartRange.toString());
          break;
        case 'mediumRange':
          await AsyncStorage.setItem('mediumRange', this.state.mediumRange.toString());
          break;
        case 'topRange':
          await AsyncStorage.setItem('topRange', this.state.topRange.toString());
          break;
      }
    } catch (error) {
      Alert.alert('An error has occured while saving user data.')
    }
  }

  async getVehicleWarehouseData() {

    try {

      const standart = await AsyncStorage.getItem('standartRange');
      const medium = await AsyncStorage.getItem('mediumRange');
      const top = await AsyncStorage.getItem('topRange');

      this.setState({ standartRange: parseFloat(standart) })
      this.setState({ mediumRange: parseFloat(medium) })
      this.setState({ topRange: parseFloat(top) },

        this.setState({ loadingAnimation: false }))

    } catch (error) {
      Alert.alert('An error has occured while retireving user data.')
    }
  }

  async componentWillMount() {

    const isFirst = await AsyncStorage.getItem('isFirstEnterance');

    isFirst == null ? (

      this.setState({ isFirstEnterance: false }),
      await AsyncStorage.setItem('isFirstEnterance', 'false'),

      this.setNewVehicleWarehouseData('standartRange'),
      this.setNewVehicleWarehouseData('mediumRange'),
      this.setNewVehicleWarehouseData('topRange'),
      this.getVehicleWarehouseData(),
      this.setState({ loadingAnimation: false })

    ) :
      (
        this.getVehicleWarehouseData()
      )
  }


  render() {

    AppState.addEventListener('change', state => {

      if (state === 'active') {

        this.state.vehicleCountdownActive ?
          (
            this.setState({ vehicleCountdownActive: false }),
            this.currentDate = new Date(),
            this.vehicleCountdown = ((this.dueDate - this.currentDate) / 1000),
            this.vehicleCountdown > 0
            ?
            this.setState({ vehicleCountdownActive: true })
            : 
            Alert.alert('Vehicle Warehouse is ready for another sell.')
          )
          :
          this.vehicleCountdown = 1200
      } else if (state === 'background') {
      } else if (state === 'inactive') {
      }
    });

    return (

      <View style={{ flexDirection: 'row' }}>

        <View style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ActivityIndicator
            animating={this.state.loadingAnimation}
            color='green'
            size="large"
            style={styles.activityIndicator} />
        </View>

        <View style={{

          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginRight: 5,
          height: y / 6.3,

        }}>

          <TouchableHighlight style={{
            height: y / 19.3,
            width: 25,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 171, 0, 0.7)'
          }}
            onPress={() => this.state.topRange == 0 ? '' :
              (
                this.setState({ topRange: this.state.topRange - 1 })
              )}
            onHideUnderlay={() => (
              this.setNewVehicleWarehouseData('topRange'),
              Vibration.vibrate(50)
            )}
            underlayColor='rgba(255, 171, 0, 0.3)'
          >

            <Text style={{ color: 'black' }}> - </Text>

          </TouchableHighlight>

          <TouchableHighlight style={{
            height: y / 19.3,
            width: 25,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 171, 0, 0.7)'
          }}
            onPress={() => this.state.mediumRange == 0 ? '' :
              (
                this.setState({ mediumRange: this.state.mediumRange - 1 })
              )}
            onHideUnderlay={() => (
              this.setNewVehicleWarehouseData('mediumRange'),
              Vibration.vibrate(50)
            )}
            underlayColor='rgba(255, 171, 0, 0.3)'
          >

            <Text style={{ color: 'black' }}> - </Text>

          </TouchableHighlight>

          <TouchableHighlight style={{
            height: y / 19.3,
            width: 25,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 171, 0, 0.7)'
          }}
            onPress={() => this.state.standartRange == 0 ? '' :
              (
                this.setState({ standartRange: this.state.standartRange - 1 })
              )}
            onHideUnderlay={() => (
              this.setNewVehicleWarehouseData('standartRange'),
              Vibration.vibrate(50)
            )}
            underlayColor='rgba(255, 171, 0, 0.3)'
          >

            <Text style={{ color: 'black' }}> - </Text>

          </TouchableHighlight>

        </View>

        <View style={{

          backgroundColor: 'rgba(61,88,117, 0.3)',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          height: y / 6.3,
          width: x / 3.6

        }}>

          <Text style={styles.text}> Top range: </Text>
          <Text style={styles.text}> Medium range: </Text>
          <Text style={styles.text}> Standart range: </Text>

        </View>

        <View style={{

          backgroundColor: 'rgba(61,88,117, 0.3)',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          height: y / 6.3,
          marginRight: 5

        }}>

          <Text style={styles.text}> {this.state.topRange} </Text>
          <Text style={styles.text}> {this.state.mediumRange} </Text>
          <Text style={styles.text}> {this.state.standartRange} </Text>

        </View>

        <View style={{

          alignItems: 'center',
          marginRight: x / 20,
          justifyContent: 'space-between',

        }}>

          <TouchableHighlight style={{
            height: y / 19.3,
            width: 25,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 171, 0, 0.7)'
          }}
            onPress={() => (
              this.setState({ topRange: this.state.topRange + 1 })
            )}
            onHideUnderlay={() => (
              this.setNewVehicleWarehouseData('topRange'),
              Vibration.vibrate(50)
            )}
            underlayColor='rgba(255, 171, 0, 0.3)'
          >

            <Text style={{ color: 'black' }}> + </Text>

          </TouchableHighlight>

          <TouchableHighlight style={{
            height: y / 19.3,
            width: 25,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 171, 0, 0.7)'
          }}
            onPress={() => (
              this.setState({ mediumRange: this.state.mediumRange + 1 })
            )}
            onHideUnderlay={() => (
              this.setNewVehicleWarehouseData('mediumRange'),
              Vibration.vibrate(50)
            )}
            underlayColor='rgba(255, 171, 0, 0.3)'
          >

            <Text style={{ color: 'black' }}> + </Text>

          </TouchableHighlight>

          <TouchableHighlight style={{
            height: y / 19.3,
            width: 25,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 171, 0, 0.7)'
          }}
            onPress={() => (
              this.setState({ standartRange: this.state.standartRange + 1 })
            )}
            onHideUnderlay={() => (
              this.setNewVehicleWarehouseData('standartRange'),
              Vibration.vibrate(50)
            )}
            underlayColor='rgba(255, 171, 0, 0.3)'
          >

            <Text style={{ color: 'black' }}> + </Text>

          </TouchableHighlight>

        </View>

        <View style={{

          alignItems: 'center',
          justifyContent: 'center',
          height: y / 6.3,
          width: x / 2.5

        }}>

          {this.state.vehicleCountdownActive

            ?

            <CountDown
              until={this.vehicleCountdown}
              onFinish={() => Alert.alert(
                'Vehicle Warehouse',
                'Vehicle Warehouse is ready for another sell.',
                [
                  { text: 'OK', onPress: () => { this.vehicleCountdown = 1200 } },
                ],
                { cancelable: false }
              )}
              onPress={() => {
                Alert.alert(
                  'Vehicle Warehouse',
                  'Are you sure you want to stop the countdown?',
                  [
                    { text: 'No', onPress: () => { }, style: 'cancel' },
                    {
                      text: 'Yes', onPress: () => (
                        this.setState({ vehicleCountdownActive: false }),
                        this.vehicleCountdown = 1200
                      )
                    },
                  ],
                  { onDismiss: () => { } }
                );
              }}
              size={30}
              timeToShow={["M", "S"]}
              timeTxtColor="#D8D8D8"
              digitBgColor='#ffab00'
            />

            :

            < Button style={{ bottom: y / 15 }}
              onPress={() => (
                this.vehicleCountdown = 1200,
                this.setState({ vehicleCountdownActive: true }),
                this.currentDate = new Date(),
                this.dueDate = new Date(),
                this.dueDate.setMinutes(this.dueDate.getMinutes() + 20)
              )}
              title="Start countdown"
              color='rgba(255, 171, 0, 0.7)'
            />
          }
        </View>
      </View>
    )
  }
}

class Warehouse extends Component {

  /* #TODO
    CHECK BONUSES
  */

  constructor() {
    super();

    var capacity = 16; //42 or 111
    var crates = 0;
    var stockPrice;
  }
}

class Biker extends Component {

  /* #TODO
    CREATE MANIPULATIBLE SUPPLY BAR
  */

  constructor() {
    super();

    var cocaineEquipment = false;
    var cocaineStaff = false;
    var cocaineSupply = 0.0;
    var cocaineStockPrice = 0.0;

    var methEquipment = false;
    var methStaff = false;
    var methSupply = 0.0;
    var methStockPrice = 0.0;

    var weedEquipment = false;
    var weedStaff = false;
    var weedSupply = 0.0;
    var weedStockPrice = 0.0;

    var counterfeitEquipment = false;
    var counterfeitStaff = false;
    var counterfeitSupply = 0.0;
    var counterfeitStockPrice = 0.0;

    var documentEquipment = false;
    var documentStaff = false;
    var documentSupply = 0.0;
    var documentStockPrice = 0.0;
  }
}

class Home extends React.Component {

  static navigationOptions = ({ navigation }) => {

    return {
      headerTitle: "GTA Online Business Tracker",

      headerTitleStyle: {
        fontWeight: "100"
      },
      headerStyle: {
        backgroundColor: '#234a0a'
      },
      headerTintColor: '#E6E6E6',
      headerRight:
        <Button
          onPress={() => navigation.navigate('settings')}
          title="OPTIONS"
          color='#ffab00'
        />
    };
  }

  render() {

    return (

      <ScrollView>
        <View style={{

          width: x,
          height: y / 2.3,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center'

        }}>

          <Image style={styles.Images} source={airFreightCover} />

          <AirFreight />

        </View>

        <View style={{

          width: x,
          height: y / 2.3,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center'

        }}>

          <Image style={styles.Images} source={gunrunningCover} />

        </View>

        <View style={{

          width: x,
          height: y / 2.3,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center'

        }}>

          <Image style={styles.Images} source={vehicleWarehouseCover} />

          <VehicleWarehouse />

        </View>

        <View style={{

          width: x,
          height: y / 2.3,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center'

        }}>

          <Image style={styles.Images} source={warehouseCover} />

        </View>

        <View style={{

          width: x,
          height: y / 2.3,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center'

        }}>

          <Image style={styles.Images} source={bikerCover} />

        </View>
      </ScrollView>

    );
  }
}

export default Home;