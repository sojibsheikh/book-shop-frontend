import React from 'react'

function LoginView(props) {
    return (
        <React.Fragment>
            <div className="container mb-5">
                <div className="card mx-auto mt-5 pb-3 shadow rounded" >
                    <div className="card-body">
                        <h4 className="card-title">Register</h4>
                        <form className="needs-validation" autocomplete="off" method="post" action="#" novalidate>
                            <div className="form-group">
                                <label for="userName">Your name: </label>
                                <input type="text" name="name" className="form-control" placeholder="Name" id="userName" required minlength="10" />
                                <div className ="valid-feedback">
                                <i className ="far text-success fa-thumbs-up"></i> OK
                                </div>
                                <div className ="invalid-feedback">
                                <i className ="fas text-danger fa-exclamation-triangle"></i> Some error in your name.
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="userEmail">Email: </label>
                                <input type="email" name="email" className="form-control" placeholder="abc@gmail.com" id="userEmail"
                                    aria-describedby="emailHelp" required />
                                <small id="emailHelp" className ="form-text text-muted"><i className ="fas text-primary fa-info"></i> We'll never share your email with anyone else.</small> -->
                                <div className ="valid-feedback">
                                <i className ="far text-success fa-thumbs-up"></i> OK
                                </div>
                                <div className ="invalid-feedback">
                                <i className ="fas text-danger fa-exclamation-triangle"></i> Some error in email.
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="userPassword">Password: </label>
                                <input type="password" className="form-control" placeholder="******" name="password" id="userPassword"
                                    aria-describedby="passwordHelp" required minlength="6" />
                                <small id="passwordHelp" className ="form-text text-muted"><i className ="fas text-primary fa-info"></i> Password must be at least 6 characters.</small> -->
                                <div className ="valid-feedback">
                                <i className ="far text-success fa-thumbs-up"></i> OK
                                </div>
                                <div className ="invalid-feedback">
                                <i className ="fas text-danger fa-exclamation-triangle"></i> Some error in password.
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="userPassword2">Password again: </label>
                                <input type="password" className="form-control" placeholder="******" name="password2" id="userPassword2"
                                    aria-describedby="passwordHelp2" required minlength="6" />
                                <small id="passwordHelp2" className ="form-text text-muted"><i className ="fas text-primary fa-info"></i> Password must match the above.</small> -->
                                <div className ="valid-feedback">
                                <i className ="far text-success fa-thumbs-up"></i> OK
                                </div>
                                <div className ="invalid-feedback">
                                <i className ="fas text-danger fa-exclamation-triangle"></i> Some error in re-type password.
                                </div>
                            </div>
                            <button type="submit" className="btn btn-warning w-100 shadow btn-sm rounded">Register</button>
                        </form> 

                        
                        <hr className="hr-text" data-content="OR" />

                        <p className ="text-center">Already have an account?<a href="login.html">Sign in <i className ="fas fa-caret-right"></i></a></p>
                        <a href="/" className ="btn btn-outline-success btn-sm w-100 mt-2" >
                        <i className ="fab fa-google"></i> Sign in with Google
                        </a>
                        <a href="/" className ="btn btn-outline-primary btn-sm w-100 mt-2" >
                        <i className ="fab fa-facebook-square"></i> Sign in with Facebook
                        </a> 
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginView