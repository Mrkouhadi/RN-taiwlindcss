import React from 'react'
import { FlatList } from 'react-native'
import products from '../dummy-data'
import Card from './Card'
import {Dimensions} from 'react-native';

const ProductsList = () => {
  const DeviceWidth = Dimensions.get('window').width
  const FilterNumCols = ()=>{
    if(DeviceWidth >= 1200  ) return 3
    if(DeviceWidth >= 800  ) return 2
    if(DeviceWidth < 800) return 1
  }

 return (
    <FlatList
        numColumns={FilterNumCols()}
        data={products}
        keyExtractor={prod => prod.id}
        renderItem={({item}) => <Card {...item}/>}
        className="px-2 w-full"
    />
  )
}
export default ProductsList