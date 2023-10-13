import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ goal, handleDeleteGoalItem }) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				onPress={() => handleDeleteGoalItem(goal.item.key)}
				android_ripple={{ color: "#210644" }}
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.goalText}>{goal.item.text}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	goalItem: {
		backgroundColor: "#5e0acc",
		borderRadius: 6,
		margin: 8,
	},
	goalText: {
		color: "white",
		padding: 8,
	},
	pressedItem: { opacity: 0.5 },
});

export default GoalItem;
