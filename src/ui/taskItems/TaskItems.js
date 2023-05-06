import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectTaskList } from '../../redux/reducers/taskReducer/TaskReducer';
import { styles } from './Style';
import { ArrowRightIcone } from '../../assets/icones/ArrowRightIcone';
import { CompletedIcone } from '../../assets/icones/CompletedIcone';
import { COLOR } from '../../assets/colors/Colors';
export const TaskItems = ({ navigation, route }) => {

	useEffect(() => {
		navigation.setOptions({ title: route.params.title });
	})


	const taskList = useSelector(selectTaskList)


	const onNav = (title, id, name) => {
		navigation.navigate("Task", {
			title,
			id,
			name
		})
	 
	}

	return (
		<View style={styles.container}>
			<FlatList
				style={styles.flatList}
				data={taskList}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.touchItem} onPress={() => onNav(item.title, item.id,route.params.name)}>
						{/* <CompletedIcone fill={item.isCompleted === "false" ? COLOR.arrowBlue : COLOR.green} /> */}
						<Text style={styles.toucText}>{item.title}</Text>
						<ArrowRightIcone />
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}
