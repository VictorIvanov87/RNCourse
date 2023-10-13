import { useState } from "react";
import {
	StyleSheet,
	View,
	TextInput,
	Button,
	Modal,
	Image,
} from "react-native";

const GoalInput = ({ addGoalHandler, isVisible, setIsModalVisible }) => {
	const [inputText, setInputText] = useState("");

	function goalInputHandler(input) {
		setInputText(input);
	}

	return (
		<Modal visible={isVisible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					source={require("../assets/goal.png")}
					style={styles.image}
				/>
				<TextInput
					value={inputText}
					style={styles.textInput}
					placeholder="Your goal!"
					onChangeText={goalInputHandler}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							color="#f31282"
							title="Cancel"
							onPress={() => setIsModalVisible(false)}
						/>
					</View>
					<View style={styles.button}>
						<Button
							color="#5e0acc"
							title="Add Goal"
							onPress={() => {
								addGoalHandler(inputText);
								setInputText("");
								setIsModalVisible(false);
							}}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	button: {
		marginHorizontal: 8,
		width: 120,
	},
	buttonContainer: {
		flexDirection: "row",
		marginTop: 16,
	},
	image: {
		height: 100,
		margin: 20,
		width: 100,
	},
	inputContainer: {
		alignItems: "center",
		backgroundColor: "#311b6b",
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		padding: 16,
	},
	textInput: {
		backgroundColor: "#e4d0ff",
		borderColor: "#e4d0ff",
		borderRadius: 6,
		borderWidth: 1,
		color: "#120438",
		padding: 16,
		width: "100%",
	},
});

export default GoalInput;
