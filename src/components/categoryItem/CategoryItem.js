import { Text, TouchableOpacity, FlatList, View, Animated, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { ArrowUpIcone } from '../../assets/icones/ArrowUpIcone'
import { styles } from './Style'
import { COLOR } from '../../assets/colors/Colors'
import { ArrowRightIcone } from '../../assets/icones/ArrowRightIcone'

export const CategoryItem = ({ categoryItem, item, navigate }) => {


    const [showItem, setShowItem] = useState(false)
    const [fillArrow, setFillArrow] = useState(COLOR.black)
    const animatioControler = useRef(new Animated.Value(0)).current

    const click = () => {
        setShowItem(!showItem)
        const config = {
            duration: 300,
            toValue: showItem ? 0 : 1,
            useNativeDriver: true
        }
        Animated.timing(animatioControler, config).start()
        showItem ? setFillArrow(COLOR.arrowBlack) : setFillArrow(COLOR.arrowBlue)
    }

    const arrowTransform = animatioControler.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', "-180deg"]
    })

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={click}>
                <View style={styles.category}>
                    <Image
                        style={styles.categoryImg}
                        source={categoryItem.image}
                    />
                    <Text style={styles.categoryText}>{categoryItem.title}</Text>
                    <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
                        <ArrowUpIcone fill={fillArrow} />
                    </Animated.View>
                </View>
            </TouchableOpacity>

            {
                showItem && <View >
                    <FlatList
                        data={item}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.categoryItem} onPress={() => navigate(item.itemName)}>
                                <Image
                                    style={styles.itemImg}
                                    source={item.image}
                                />
                                <Text style={styles.itemText}>{item.itemName}</Text>
                                <ArrowRightIcone />
                            </TouchableOpacity>
                        )}
                    />
                </View>
            }
        </View >
    )
}
