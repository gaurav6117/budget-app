import React from 'react'
import  {useSelector } from 'react-redux'
export default function Calculation(props) {
    const mystates = useSelector((state)=>state.budget);
    const myexpenses = useSelector((state)=>state.expense);
    const mybalances = useSelector((state)=>state.balance);
    return (
        <>
            <div className="row">
                <div className="m-auto col-lg-4">
                    <h5><b>BUDGET</b></h5>
                    <img alt="" src="a.svg" height="70px" width="70px"/>
                    <h4 style={{color: "green"}}>$ {mystates}</h4>
                </div>
                <div className="m-auto col-lg-4">
                    <h5><b>EXPENSES</b></h5>
                    <img alt="" src="b.svg" height="70px" width="70px"/>
                    <h4 style={{color: "red"}}>$ {myexpenses}</h4>
                </div>
                <div className="m-auto col-lg-4">
                    <h5><b>BALANCE</b></h5>
                    <img alt="" src="c.svg" height="70px" width="70px"/>
                    <h4 style={{color: "green"}}>$ {mybalances}</h4>
                </div>
            </div>
        </>
        )
}
