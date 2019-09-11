import React, { useState } from "react";
import { useActions } from "easy-peasy";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const add = useActions(actions => actions.add);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          add({
            titel,
            completed: false
          });
        }}
      >
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Add Todo"
        />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
};

export default AddTodo;
