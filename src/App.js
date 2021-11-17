import React,{Suspense} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Home = React.lazy(()=>import("./components/Home")) 
const Login = React.lazy(()=>import("./components/Login")) 
const Registration = React.lazy(()=>import("./components/Registration")) 
export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>...loading</div>}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/registration" exact component={Registration} />
        <Route path="/home" exact component={Home} />
      </Switch>
      </Suspense>
    </Router>
  )
}
