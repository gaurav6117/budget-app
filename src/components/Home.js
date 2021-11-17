import React, { Suspense } from 'react'
const AddBudget = React.lazy(() => import('./AddBudget'))
const Addexpense = React.lazy(() => import('./Addexpense'))
const Calculation = React.lazy(() => import('./Calculation'))

export default function Home() {
    return (
        <Suspense fallbcak={<div>...loading</div>}>
            <div style={{ width: "90%" }} className="m-auto my-3">
                <h2>BUDGET APP</h2>
                <div className="row m-auto">
                    <div style={{ border: "solid green 2px", padding: "15px", marginBottom: "10px" }} className="col-lg-4">
                        <AddBudget />
                    </div>
                    <div className="col-lg-8">
                        <Calculation />
                    </div><br />
                </div>
                <div >
                    <Addexpense />
                </div>
            </div>
        </Suspense>)
}
