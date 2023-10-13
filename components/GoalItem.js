const GoalItem = () => {
	return (
		<View style={styles.goalItem}>
			<Text style={styles.goalText}>{goal.item.text}</Text>
		</View>
	);
};

export default GoalItem;
