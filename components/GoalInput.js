import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = ({ addGoalHandler }) => {
	const [inputText, setInputText] = useState("");

	function goalInputHandler(input) {
		setInputText(input);
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				value={inputText}
				style={styles.textInput}
				placeholder="Your goal!"
				onChangeText={goalInputHandler}
			/>
			<Button
				title="Add Goal"
				onPress={() => {
					addGoalHandler(inputText);
					setInputText("");
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
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

export default GoalInput;
