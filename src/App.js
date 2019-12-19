import React, { useState } from 'react';
import { Form, Header, Container, List, Segment } from 'semantic-ui-react'


const App = () => {
  const [todos, setTodos] = useState([])
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([name, ...todos])
    setName('') //clears out form input
  }

  return (
    <Container>
      <br />
      <Segment textAlign='center'>
        <Header as='h3'>
          Todo List
        </Header>
        <Form onSubmit={handleSubmit}>
          <Form.Input
          required
          value={name}
          onChange={(e) => setName(e.target.value)} 
          />
        </Form>
        <List>
          {/* adding index to avoid warning/error for argument count */}
          { todos.map( (todo, i) => 
            <List.Item key={i}> { todo } </List.Item>
          )}
        </List>
      </Segment>
    </Container>
  )
}

export default App;
