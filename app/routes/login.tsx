import { useState } from 'react'
import swimmingBackground from '~/assets/swimming.jpg'

interface UserCredentials {
  email: string
  password: string
}

export default function Login() {
  const [formData, setFormData] = useState<UserCredentials>({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const backgroundStyle = {
    backgroundImage: `url(${swimmingBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={backgroundStyle}
    >
      <div className="card p-5 shadow" style={{ width: '400px' }}>
        <h3 className="text-start">Log in</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 position-relative">
            <label className="form-label">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="Password"
                required
                minLength={8}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <span
                className="input-group-text"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: 'pointer' }}
              >
                <i
                  className={showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'}
                ></i>
              </span>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}
