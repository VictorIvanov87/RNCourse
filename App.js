import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [goals, setGoals] = useState([]);
	const [isModalVisible, setIsModalVisible] = useState(false);

	function addGoalHandler(inputText) {
		setGoals((prev) => [
			...prev,
			{ text: inputText, key: Math.random().toString() },
		]);
	}

	function handleDeleteGoalItem(goalId) {
		setGoals((prevGoals) => {
			return prevGoals.filter((goal) => goal.key !== goalId);
		});
	}

	function startAddGoalHandler() {
		setIsModalVisible(true);
	}

	return (
		<View style={styles.appContainer}>
			<Button
				title="Add new goal"
				color="#5e0acc"
				onPress={startAddGoalHandler}
			/>
			{isModalVisible && (
				<GoalInput
					addGoalHandler={addGoalHandler}
					isVisible={isModalVisible}
					setIsModalVisible={setIsModalVisible}
				/>
			)}
			<View style={styles.goalsContainer}>
				<FlatList
					data={goals}
					renderItem={(goal) => (
						<GoalItem
							goal={goal}
							handleDeleteGoalItem={handleDeleteGoalItem}
						/>
					)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingHorizontal: 16,
		paddingTop: 50,
	},
	goalsContainer: {
		flex: 5,
	},
});
