import React, { useState } from "react";
import { Text, Box, useInput } from "ink";

const messageArray = ["one", "two", "three"]
const [input, setInput] = useState("")

const handleMessage = () => {
	messageArray.map((x) => {
		setInput(x)
	})
}

export function App() {
	useInput(() => {});
  return (
    <Box flexDirection="column" padding={1}>
      <Text bold color="cyan">
				{input}
      </Text>
      <Text dimColor>Press any key to continue...</Text>
    </Box>
  );
}
