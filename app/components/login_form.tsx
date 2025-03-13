import { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'

export function LoginForm() {
  const [user, changeUser] = useState('')
  const [password, changePassword] = useState('')
  return (
    <Card style={{ maxWidth: '400px', width: '100%' }}>
      <Form>
        <span className="h1">Log in</span>
        <Form.Group controlId="loginFormEmail">
          <Form.Label className="h2">Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group controlId="loginFormPassword">
          <Form.Label className="h2">Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          <span className="h2">Log in</span>
        </Button>
      </Form>
    </Card>
  )
}
