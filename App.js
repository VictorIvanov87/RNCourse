import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [goals, setGoals] = useState([]);

	function addGoalHandler(inputText) {
		setGoals((prev) => [
			...prev,
			{ text: inputText, key: Math.random().toString() },
		]);
	}

	return (
		<View style={styles.appContainer}>
			<GoalInput addGoalHandler={addGoalHandler} />
			<View style={styles.goalsContainer}>
				<FlatList
					data={goals}
					renderItem={(goal) => <GoalItem goal={goal} />}
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
