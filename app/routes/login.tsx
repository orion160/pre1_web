import { useState } from 'react'
import { Container, Card, Form, Button, InputGroup } from 'react-bootstrap'
import swimmingBackground from '~/assets/swimming.jpg'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  // Background styles for the Container
  const backgroundStyle = {
    backgroundImage: `url(${swimmingBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  }

  return (
    <Container
      fluid
      style={backgroundStyle}
      className="d-flex justify-content-center align-items-center"
    >
      <Card style={{ maxWidth: '400px', width: '100%', padding: '1rem' }}>
        <h2 className="text-center mb-4">Log in</h2>
        <Form>
          {/* Email Field */}
          <Form.Group controlId="loginFormEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          {/* Password Field with Show/Hide Icon */}
          <Form.Group controlId="loginFormPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
              />
              <Button
                variant="outline-secondary"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </Button>
            </InputGroup>
          </Form.Group>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="w-100">
            Log in
          </Button>
        </Form>
      </Card>
    </Container>
  )
}
