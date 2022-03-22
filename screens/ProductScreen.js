import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import BasicButton from '../components/BasicButton'
import Colors from '../assets/Constants/Colors'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/action/cart.action'

const ProductScreen = ({ route }) => {

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }

  const item = route.params;
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.subCard}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>Price: ${item.price}</Text>
        <Text style={styles.info} >{item.detail}</Text>
      </View>
      <BasicButton onTap={() => handleAddToCart(item)} text={'Add to Cart'} cardStyles={{ marginTop: 64, width: '90%', alignSelf: 'center' }} />
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
  subCard: {
    marginLeft: 48
  },
  text: {
    fontSize: 24,
    color: Colors.Black,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 16,
    color: Colors.Black,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    borderRadius: 12,
  }
})