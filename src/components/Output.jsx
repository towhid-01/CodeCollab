import React, { useState, useEffect } from "react";
import { Box, Button, Textarea, Text, useToast } from "@chakra-ui/react";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
    const toast = useToast();
    const [output, setOutput] = useState(null);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;

        try {
            setIsLoading(true);
            const { run: result } = await executeCode(language, sourceCode, input);
            setOutput(result.output ? result.output.split("\n") : []);
            result.stderr ? setIsError(true) : setIsError(false);
        } catch (error) {
            console.log(error);
            toast({
                title: "An error occurred.",
                description: error.message || "Unable to run code",
                status: "error",
                duration: 6000
            });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "F9") {
                runCode();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <Box display="flex" flexDirection="column" height="72vh" w="40%">
            <Box flex="1" mb={2}>
                <Text mb={2} fontSize="lg" fontWeight="bold">
                    Input
                </Text>
                <Textarea
                    placeholder="Enter input here"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    height="90%"
                    textAlign="start"
                    color="green.400"
                    w="100%"
                    sx={{
                        "::placeholder": {
                            position: "absolute",
                            top: "10px",
                            left: "10px",
                            fontSize: "16px",
                            color: "gray.500"
                        }
                    }}
                />
            </Box>
            <Box flex="1" mt={2}>
                <Text mb={2} fontSize="lg" fontWeight="bold">
                    Output
                </Text>
                <Button
                    variant="outline"
                    colorScheme="green"
                    isLoading={isLoading}
                    onClick={runCode}
                    mb={2}
                >
                    Run Code
                </Button>
                <Box
                    flex="1"
                    p={2}
                    color={isError ? "red.400" : output ? "green.400" : "gray.400"}
                    border="1px solid"
                    borderRadius={4}
                    borderColor={isError ? "red.500" : "#333"}
                    overflowY="auto"
                    height="90%"
                    w="100%"
                >
                    {output
                        ? output.map((line, i) => <Text color={isError ? "red.400" : "green.400"} key={i}>{line}</Text>)
                        : <Text color="gray.400">Click "Run Code" to see the output here</Text>}
                </Box>
            </Box>
        </Box>
    );
};

export default Output;
