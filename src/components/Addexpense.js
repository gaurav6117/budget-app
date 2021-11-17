import React, { useRef, useState, useEffect } from 'react'
import { Form, Button, Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
export default function Addexpense() {
    const dispatch = useDispatch();
    useEffect(() => {
        calculateExpense()
        dispatch({ type: 'EXPENSE', payload: Number(localStorage.getItem('totalExpense')) })
    }, [])
    const titleRef = useRef(null)
    const amountRef = useRef(null)
    const [state, setstate] = useState({ myExpenses: [] })
    useEffect(() => {
        setstate({ ...state, myExpenses: JSON.parse(localStorage.getItem("myExpenses")) })
    }, [])
    const calculateExpense = () => {
        let arr = JSON.parse(localStorage.getItem("myExpenses"));
        var totalTemp = 0;
        arr.map(elem => {
            totalTemp = totalTemp + Number(elem.amount)
            localStorage.setItem('totalExpense', totalTemp)
        })
    }
    const addExpense = () => {
        if (localStorage.getItem("myExpenses") != undefined) {
            let arr = JSON.parse(localStorage.getItem("myExpenses"));
            const data = { "title": titleRef.current.value, "amount": amountRef.current.value }
            arr.push(data);
            localStorage.setItem('myExpenses', JSON.stringify(arr));
            setstate({ ...state, myExpenses: JSON.parse(localStorage.getItem("myExpenses")) })
            calculateExpense();
            dispatch({ type: 'EXPENSE', payload: Number(localStorage.getItem('totalExpense')) })
        }
        else {
            const arr = [];
            const data = { "title": titleRef.current.value, "amount": amountRef.current.value }
            arr.push(data);
            localStorage.setItem('myExpenses', JSON.stringify(arr));
            setstate({ ...state, myExpenses: JSON.parse(localStorage.getItem("myExpenses")) })
            calculateExpense();
            dispatch({ type: 'EXPENSE', payload: Number(localStorage.getItem('totalExpense')) })
        }
    }
    const deleteItem = (index) => {
        let arr = JSON.parse(localStorage.getItem("myExpenses"));
        arr.splice(index, 1)
        localStorage.setItem('myExpenses', JSON.stringify(arr));
        setstate({ ...state, myExpenses: JSON.parse(localStorage.getItem("myExpenses")) })
        calculateExpense();
        dispatch({ type: 'EXPENSE', payload: Number(localStorage.getItem('totalExpense')) })
    }
    const editItem = (index) =>{
        let arr = JSON.parse(localStorage.getItem("myExpenses"));
        let data = arr[index];
        document.getElementById('title').value = data.title;
        document.getElementById('amount').value = data.amount;
        arr.splice(index, 1)
        localStorage.setItem('myExpenses', JSON.stringify(arr));        
        setstate({ ...state, myExpenses: JSON.parse(localStorage.getItem("myExpenses")) })
    }
    return (
        <div className="row m-auto">
            <div style={{ border: "solid green 2px", padding: "15px" }} className="col-lg-4">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Please Enter Your Expense</Form.Label>
                        <Form.Control id="title" type="text" ref={titleRef} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Please Enter Expense Amount</Form.Label>
                        <Form.Control id="amount" type="Number" ref={amountRef} required />
                    </Form.Group>
                    <Button onClick={addExpense} variant="outline-success">Add Expense</Button>
                </Form>
            </div>
            <div className="col-lg-8">
                <Table hover variant="light">
                    <thead>
                        <tr>
                            <th>Expense Title</th>
                            <th>Expense Value</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.myExpenses !== undefined && state.myExpenses.map((elem, index) =>
                            <tr key={index + "tr"}>
                                <td>{elem.title}</td>
                                <td>{elem.amount}</td>
                                <td><input alt="" type="image" src="e.svg" height="20px" width="20px" onClick={() => editItem(index)} />
                                    <input alt="" style={{marginLeft:"10px"}} type="image" src="d.svg" height="20px" width="20px" onClick={() => deleteItem(index)} />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}