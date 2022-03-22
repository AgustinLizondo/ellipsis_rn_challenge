import { StyleSheet, Text, View, FlatList, Alert, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Colors from '../assets/Constants/Colors'
import BasicButton from '../components/BasicButton'
import { removeFromCart } from '../store/action/cart.action'

const CartScreen = () => {

  let cart = useSelector(state => state.cart.cart)
  const dispatch = useDispatch();

  const handleDeleteItem = (item) => {
    dispatch(removeFromCart(item))
  }

  const handleSubmitPurchase = () => {
    Alert.alert(
      'Purchase successful.',
      'An email was sent with more info.',
      ['OK']
    )
  }

  const ItemList = ({ item }) => {
    return (
      <TouchableOpacity style={styles.subCard} onPress={() => handleDeleteItem(item)}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.infoCard}>
          <Text style={styles.titleText}>{item.name}</Text>
          <Text style={styles.dscriptionText}>{item.detail}</Text>
        </View>
        <Text style={styles.priceText}>${item.price}</Text>
      </TouchableOpacity>
    )
  }

  return (  
    <View style={styles.card}>
      {cart.length >= 1
        ? <>
          <Text style={[styles.titleText, { color: Colors.Black, alignSelf: 'center' }]}>Touch your item to delete it.</Text>
          <FlatList
            data={cart}
            renderItem={ItemList}
            keyExtractor={item => item.name}
          />
          <BasicButton onTap={handleSubmitPurchase} text={'Submit'} cardStyles={styles.extraCardStyles} textStyles={styles.extraTextStyles} />
        </>
        : <View style={styles.background}>
          <Text style={[styles.titleText, styles.extraCartText]}>Your Cart is Empty</Text>
        </View>
      }


    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  extraCartText: {
    color: Colors.Black,
    fontWeight: 'bold',
    fontSize: 24
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    flex: 1
  },
  subCard: {
    width: '90%',
    height: 80,
    backgroundColor: Colors.Black,
    justifyContent: 'space-between',
    marginLeft: 16,
    padding: 8,
    marginVertical: 8,
    borderRadius: 16,
    flexDirection: 'row',
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  infoCard: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  priceText: {
    color: Colors.LightViolet,
    alignSelf: 'center',
    fontSize: 20,
  },
  titleText: {
    color: Colors.White,
    fontSize: 16
  },
  dscriptionText: {
    color: Colors.White,
    fontSize: 12
  },
  extraCardStyles: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    backgroundColor: Colors.Black,
    width: 196
  },
  extraTextStyles: {
    color: Colors.White
  }
})