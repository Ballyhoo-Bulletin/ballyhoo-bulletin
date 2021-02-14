import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./styles/signup.css";


// can check current user by {currentUser && CurrentUser.email or .whatever}

export default function Signup() {
    const passwordConfirmRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const nameRef = useRef()
    const zipCodeRef = useRef()

    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match!')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Sign up failed!")
        }

        setLoading(false)
    }

    return (
        <>
           <Card border="secondary" style={{ width: '25rem' }}>
               <Card.Body>
                   <h2 className="text-center mb-4">Sign Up</h2>
                   {/* {currentUser.email} */}
                   {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                <Form.Group id="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" ref={nameRef} required />
                    </Form.Group>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>
                     {/* <Form.Group controlId="formBasicCheckbox">
                         <Form.Check type="checkbox" label="I am over 18" />
                     </Form.Group>  */}
                     <Form.Group id="zipCode">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type="zipCode" ref={zipCodeRef} required />
                    </Form.Group> 
                    
                    <Form.Group controlId="selectSkills">
                    <Form.Label id="selectSkills">Select Skills</Form.Label>
                        <Form.Control as="select" multiple>
                         <option>Cooking</option>
                        <option>Cleaning</option>
                        <option>Education</option>
                        <option>Mechanics</option>
                        <option>Landscaping</option>
                        <option>Childcare</option>
                        <option>Pet Care</option>
                        <option>Other</option>
                        <option>Fill Out Later</option>
                        </Form.Control>
                     </Form.Group>
                    
                    <Button disabled={loading} className="w-100"type="submit">Sign Up</Button>
                </Form>
               </Card.Body>
           </Card>
           <div className="w-100 text-center-mt-2">
               Already have an account? <Link to="/login">Login</Link>
           </div>
        </>
    )
}
