import React, { Component } from 'react'
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForUsername = RegExp(/^[a-zA-Z0-9]{8,}$/);
export class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null, lname: null, username: null, email: null, password: null, confirmpassword: null,
            errors: { name: "", lname: "", username: "", email: '', password: '', confirmpassword: "" }
        }
    }
    handler = (event) => {
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'email':
                errors.email = regForEmail.test(value) ? '' : 'Email is not valid';
                break;
            case 'username':
                errors.username = regForUsername.test(value) ? '' : 'UserName is not valid';
                break;
            case 'password':
                errors.password = value.length < 8 ? 'Password must me 8 chanrater long' : '';
                break;
            case 'confirmpassword':
                errors.confirmpassword = (value === this.state.password) ? '' : 'Password do not match';
                break;
            case 'name':
                errors.name = value.length < 3 ? 'Name should be of min. 3 characters' : '';
                break;
            case 'lname':
                errors.lname = value.length < 3 ? 'Last Name should be of min. 3 characters' : '';
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value }, () => {
            console.log(errors)
        })
    }
    formSubmit = (event) => {
        event.preventDefault();
        if (this.validate(this.state.errors)) {
            alert("Valid Form");
            this.props.history.push('../home');
        }
        else {
            alert("Invalid Form");
        }
    }
    validate = (errors) => {
        let valid = true;
        Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
        return valid;
    }
    render() {
        const { errors } = this.state;
        return (
            <div>
                <br /><br />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section">SIGNUP</h2>
                        </div>
                    </div>
                    <form action='/vendor/signuprequest/' method="post" className="needs-validation" novalidate>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="firstname">First name</label>{errors.name.length > 0 && <span style={{ color: 'red' }}>{errors.name}</span>}
                                <input type="text" className="form-control" name="name" id="firstname" onChange={this.handler} placeholder="First name" required />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="lastname">Last name</label>{errors.lname.length > 0 && <span style={{ color: 'red' }}>{errors.lname}</span>}
                                <input type="text" className="form-control" name="lname" id="lastname" onChange={this.handler} placeholder="Last name" required />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="username">Username</label>{errors.username.length > 0 && <span style={{ color: 'red' }}>{errors.username}</span>}
                                <div className="input-group">
                                    <input type="text" className="form-control" name="username" id="username" onChange={this.handler} placeholder="Username"
                                        aria-describedby="inputGroupPrepend" required />
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="email">Email</label>{errors.email.length > 0 && <span style={{ color: 'red' }}>{errors.email}</span>}
                                <input type="email" className="form-control" id="email" name="email" onChange={this.handler} placeholder="email" required />
                                <div class="invalid-feedback">
                                    Please provide a valid email.
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label for="password">Password</label>{errors.password.length > 0 && <span style={{ color: 'red' }}>{errors.password}</span>}
                                <input type="password" className="form-control" id="password" name="password" onChange={this.handler} placeholder="password" required />
                                <div class="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label for="confirmpassword">Confirm Password</label>{errors.confirmpassword.length > 0 && <span style={{ color: 'red' }}>{errors.confirmpassword}</span>}
                                <input type="password" className="form-control" id="confirmpassword" name='confirmpassword'
                                    onChange={this.handler} placeholder="confirm password" required />
                                <div class="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label class="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div class="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div>
                        <button onClick={this.formSubmit} className="btn btn-primary" type="submit">Submit form</button>
                    </form> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br />
                </div>
            </div>
        )
    }
}

export default Registration