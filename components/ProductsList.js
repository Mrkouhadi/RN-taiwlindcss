import React from 'react'
import { FlatList, Text } from 'react-native'
import products from '../dummy-data'
import Card from './Card'

const ProductsList = () => {

 return (
    <FlatList
        data={products}
        keyExtractor={prod => prod.id}
        renderItem={({item}) =><Card {...item}/>}
        className="px-2"
    />
  )
}
export default ProductsList