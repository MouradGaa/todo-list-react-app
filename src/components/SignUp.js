import React, { useRef, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords does not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/home")
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }
    return (
        <div className='signup'>

            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} >
                <label>Email</label>
                <input type="email" ref={emailRef} required/>
                <label>Password</label>
                <input type="password" ref={passwordRef} required/>
                <label>Password Confirmation</label>
                <input type="password" ref={passwordConfirmRef} required/>
                <input type="submit" disabled={loading} value="Sign Up"/>
            </form>
            
            <div className="LoginContainer">
                <p>
                    Already have an account? <Link to="/login" 
                    style={{textDecoration:'none',color:'yellow'}}>
                    Login</Link>
                </p>
            </div>
        </div >

    )
}
