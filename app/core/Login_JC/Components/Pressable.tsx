import React, { useState } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export const CustomPressable = ({ title , onPress }) => {
    const [pressed, setPressed] = useState(false);

    return (
        <Pressable
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            onPress={onPress}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#4f4f4f' : 'black'
                },
                styles.button
            ]}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        paddingHorizontal: 20,
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    }
});
