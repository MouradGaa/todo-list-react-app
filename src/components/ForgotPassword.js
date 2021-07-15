import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef()
    const {ResetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message,setMessage]= useState('') ; 
    

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setMessage('')
            setError('')
            setLoading(true)
            await ResetPassword(emailRef.current.value)
            setMessage('Check your inbox to reset your password')
        } catch {
            setError('Failed to rest password')
        }
        setLoading(false)
    }
    return (
        <div className='signup'>

            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit} >
                <label>Email</label>
                <input type="email" ref={emailRef} required />
                {error && <p>{error}</p>}
                {message && <p>{message}</p>}
                <input type="submit" disabled={loading} value="Reset Password" />
            </form>
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
