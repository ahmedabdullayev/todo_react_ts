import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import {addTodo, SetTodosType, TodosType} from "../store";

function TodoAdd({ todos, todosSet }: { todos: TodosType; todosSet: SetTodosType}) {
    const [newTodo, newTodoSet] = React.useState(""); // localState for the form
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
          placeholder="New todo"
          value={newTodo}
          onChange={(evt) => newTodoSet(evt.target.value)} />
      <Button onClick={() => todosSet(addTodo(todos, newTodo))}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
