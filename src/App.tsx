import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import {Todo, useTodos} from "./store";

function App() {
    // const [todos, todosSet] = React.useState<Todo[]>([]);
    const [todos, todosSet] = useTodos([]) // = React.useState<Todo[]>([]);

  return (
    <div className="App">
      <ChakraProvider theme={theme}>
     <Box maxWidth="8xl" margin="auto" p={5}>
      <TopBar todosSet={todosSet} />
      <TodoList todos={todos} todosSet={todosSet} />
      <TodoAdd todos={todos} todosSet={todosSet} />
      </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
