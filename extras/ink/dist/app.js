import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Text, Box, useInput } from "ink";
const messageArray = ["one", "two", "three"];
const [input, setInput] = useState("");
const handleMessage = () => {
    messageArray.map((x) => {
        setInput(x);
    });
};
export function App() {
    useInput(() => { });
    return (_jsxs(Box, { flexDirection: "column", padding: 1, children: [_jsx(Text, { bold: true, color: "cyan", children: input }), _jsx(Text, { dimColor: true, children: "Press any key to continue..." })] }));
}
//# sourceMappingURL=app.js.map