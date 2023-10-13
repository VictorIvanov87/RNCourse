import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	FlatList,
} from "react-native";

export default function App() {
	const [inputText, setInputText] = useState("");
	const [goals, setGoals] = useState([]);

	function goalInputHandler(input) {
		setInputText(input);
	}

	function addGoalHandler() {
		setGoals((prev) => [
			...prev,
			{ text: inputText, key: Math.random().toString() },
		]);
		setInputText("");
	}

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your goal!"
					onChangeText={goalInputHandler}
				/>
				<Button title="Add Goal" onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<FlatList
					data={goals}
					renderItem={(goal) => (
						<View style={styles.goalItem}>
							<Text style={styles.goalText}>
								{goal.item.text}
							</Text>
						</View>
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
	goalItem: {
		backgroundColor: "#5e0acc",
		borderRadius: 6,
		margin: 8,
		padding: 8,
	},
	goalText: {
		color: "white",
	},
	goalsContainer: {
		flex: 5,
	},
	inputContainer: {
		alignItems: "center",
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 24,
	},
	textInput: {
		borderColor: "#ccc",
		borderWidth: 1,
		marginRight: 8,
		padding: 8,
		width: "70%",
	},
});
