import React, { useRef, useEffect} from 'react'
import  {useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
export default function AddBudget(props) {
    useEffect(() => {
        if(localStorage.getItem('budget')!== undefined){
        let budget = localStorage.getItem('budget');
        dispatch({ type: 'BUDGET', payload: Number(budget) })    
        }    
    }, [])
    const dispatch = useDispatch();
    const budgetRef = useRef(null)
    const addBudget = (e) => {
        e.preventDefault();
        let budget = budgetRef.current.value;
        localStorage.setItem('budget', budget);
        dispatch({ type: 'BUDGET', payload: Number(budget) })
    }
    return (
        <div className="">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Please Enter Your Budget</Form.Label>
                    <Form.Control type="Number" ref={budgetRef} />
                </Form.Group>
                <Button onClick={addBudget} variant="outline-success">Calculate</Button>
            </Form>
        </div>
    )
}
