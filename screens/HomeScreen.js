import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { data, heroItem } from '../components/API'
import Colors from '../assets/Constants/Colors'
import BasicButton from '../components/BasicButton'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/action/cart.action'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  let cart = useSelector(state => state.cart.cart)

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }

  const handleGetProductDetail = (item) => {
    navigation.navigate('Product', item)
  }

  const ProductItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card} onPress={() => handleGetProductDetail(item)} >
        <Text style={styles.text} >{item.name}</Text>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.text} >Price: ${item.price}</Text>
        <Text style={styles.description} >{item.detail}</Text>
        <BasicButton text={'Add to Cart'} cardStyles={{ width: 128, height: 32, marginVertical: 8, }} onTap={() => handleAddToCart(item)} />
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
      <View>
        <TouchableOpacity style={styles.heroItemCard} onPress={() => handleGetProductDetail(heroItem)} >
          <Text style={styles.text} >{heroItem.name}</Text>
          <Image style={styles.heroItemImage} source={{ uri: heroItem.image }} />
          <Text style={styles.text} >Price: ${heroItem.price}</Text>
          <Text style={styles.description} >{heroItem.detail}</Text>
          <BasicButton text={'Add to Cart'} cardStyles={{ width: 196, height: 32 }} onTap={() => handleAddToCart(heroItem)} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={ProductItem}
        keyExtractor={item => item.name}
        numColumns={2}
      />
      <BasicButton text={
        cart.length >= 1
          ? 'Go to Cart - ' + cart.length + ' items'
          : 'Go to Cart'
      }
        onTap={() => navigation.navigate('Cart')}
        cardStyles={styles.extraCardStyles}
        textStyles={styles.extraTextStyles} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128
  },
  card: {
    backgroundColor: Colors.Black,
    width: 176,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.White,
    alignSelf: 'flex-start',
    marginLeft: 8,
  },
  heroItemCard: {
    backgroundColor: Colors.Black,
    width: '90%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  heroItemImage: {
    width: 360,
    height: 128
  },
  description: {
    color: Colors.White,
    alignSelf: 'flex-start',
    marginLeft: 12,
    marginVertical: 2,
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