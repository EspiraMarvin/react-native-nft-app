import { useState } from 'react'
import { Text, View, SafeAreaView, FlatList } from 'react-native'
import { COLORS , NFTData} from '../constants'
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components'

const Home = () => {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar background={COLORS.primary} />
        <View style={{ flex: 1}}>
            <View style={{ zIndex: 0 }}>
                <FlatList
                    data={NFTData} 
                    renderItem={ ({item}) => <NFTCard data={item} /> }
                    keyExtractor={ (item) => item.id }
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<HomeHeader />}
                 />
            </View>

            <View style={{
                 position: "absolute",
                 top: 0,
                 bottom: 0,
                 left: 0,
                 zIndex: -1
                 }}>
                     <View style={{ height: 300, background: COLORS.primary }}></View>
                     <View style={{ flex: 1, background: COLORS.white }}></View>
            </View>
        </View>
            
      </SafeAreaView>
  )
}

export default Home
