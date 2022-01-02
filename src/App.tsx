import React from 'react';
import Styled from 'styled-components';
import { Button, Input, ToDoList } from 'Components';
import { useState } from 'react';

const Container = Styled.div`
  min-height: 100vh;
  display: flexx;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Contents = Styled.div`
  display:flex;
  background-color: #fff;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
`;

const InputContainer = Styled.div`
  display: flex;
`;

function App() {
  const [toDo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState<string[]>([]);

  const addToDo = (): void => {
    if (toDo) {
      setToDoList([...toDoList, toDo]);
      setToDo('');
    }
  };
  const deleteToDo = (index: number): void => {
    let list = [...toDoList];
    list.splice(index, 1);
    setToDoList(list);
  };

  return (
    <Container>
      <Contents>
        <ToDoList data={toDoList} handleDelete={deleteToDo} />
        <InputContainer>
          <Input
            value={toDo}
            placeholder="Enter what to do..."
            onChange={(text) => setToDo(text)}
          />
          <Button
            label="Add"
            onClick={() => {
              addToDo();
            }}
          />
        </InputContainer>
      </Contents>
    </Container>
  );
}

export default App;