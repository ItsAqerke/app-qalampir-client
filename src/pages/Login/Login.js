import React from 'react';
import "./login.scss";
import {Formik} from "formik";
import {connect} from "formik";
import {login} from '../../redux/action/loginAction'

const Login = (props) => {
    return (
        <div className="container">
            <div className="row vh-100 justify-content-center align-items-center" >
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center"> Admin </h3>
                    </div>
                    <div className="card-body">
                        <Formik
                            initialValues={{ username: '', password: '' }}
                            onSubmit={(values ) => {
                                props.login(values);
                            }}
                        >
                            {({
                                  values,
                                  handleChange,
                                  handleSubmit,
                                  isSubmitting,
                              }) => (
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control "
                                        placeholder="UserName"
                                        onChange={handleChange}
                                        value={values.username}
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control mt-3"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        value={values.password}
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-success mt-3 ">
                                        Submit
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, {login})(Login);