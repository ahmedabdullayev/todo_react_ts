import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import {Todo} from "./store";

function App() {
    const [todos, todosSet] = React.useState<Todo[]>([])
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
     <Box maxWidth="8xl" margin="auto" p={5}>
      <TopBar  />
      <TodoList />
      <TodoAdd  />
      </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
