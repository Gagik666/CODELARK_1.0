import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectTaskList } from '../../redux/reducers/taskReducer/TaskReducer';
import { styles } from './Style';
import { ArrowRightIcone } from '../../assets/icones/ArrowRightIcone';

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
			{
				taskList.length === 0 ?
					<View style={{ height: "100%", width: "100%", justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
						<ActivityIndicator size={60} />
					</View> : null
			}


			<FlatList
				style={styles.flatList}
				data={taskList}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.touchItem} onPress={() => onNav(item.title, item.id, route.params.name)}>
						{/* <CompletedIcone fill={item.isCompleted === "false" ? COLOR.arrowBlue : COLOR.green} /> */}
						<Text style={styles.toucText}>{item.title}</Text>
						<ArrowRightIcone />
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}
