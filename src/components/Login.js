import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/home")
        } catch {
            setError('Failed to log in')
        }
        setLoading(false)
    }
    return (
        <div className='signup'>

            <h2>Log In</h2>
            <form onSubmit={handleSubmit} >
                <label>Email</label>
                <input type="email" ref={emailRef} required />
                <label>Password</label>
                <input type="password" ref={passwordRef} required />
                {error && <p>{error}</p>}
                <input type="submit" disabled={loading} value="Login" />
            </form>
            <div className="forgotpassword">
                <Link to="forgot-password" style={{textDecoration:'none', color : 'yellow'}}>Forgot Password?</Link>
            </div>
            <div className="LoginContainer">
                <p>
                    Don't have an account yet? <Link to="/signup"
                        style={{ textDecoration: 'none', color: 'yellow' }}>
                        Signup</Link>
                </p>
            </div>


        </div >

    )
}
