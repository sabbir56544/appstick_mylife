import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import img from '../../images/SignUp.png';


const Login = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	}
	return (
		<>
			<section className=" login">
				<div className="h-100">
					<div className="row d-flex ">
						<div className="col-md-6 d-none d-md-block login_image">
							<img src={img}
								className="img-fluid " alt="Sample" />
						</div>
						<div className="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
							<div className='mt-5'>
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-5">
										<h2 className="mb-0 me-3 login">Log In</h2>

									</div>


									<div className="form-outline mb-4 form-group">
										<input type="email" id="form3Example3" className="form-control form-control-lg"
											placeholder="Your Email" {...register("email", { required: true })} />
										<p className="text-left">{errors.email && <span className="text-danger">This field is required</span>}</p>
									</div>


									<div className="form-outline mb-3">
										<input type="password" id="form3Example4" className="form-control form-control-lg"
											placeholder="Your Password" {...register("password", { required: true })} />
										{errors.password && <span className="text-danger">This field is required</span>}
									</div>

									<div className="d-flex justify-content-between align-items-center">
										<a href style={{ color: '#19A526', textDecoration: 'none' }}>Forgot password?</a>
									</div>

									<div className="text-center text-lg-start mt-4 pt-2">
										<button type="submit" className="btn btn-block shadow-lg mt-2 button">Log In</button>
										<p className="small fw-bold mt-4 pt-1 mb-0" style={{ color: '#909090' }}>Don't have an account? <Link to="/signup"
											style={{ color: '#19A526', textDecoration: 'none' }}>Create New Account</Link></p>
									</div>


									<div className="row justify-content-space-around">
										<div className="col-md-6 mt-3 p-1">
											<a className="btn btn-block icon_button" href
												role="button">
												<img src={google} alt="Google" className="icon_img me-2" />
												Continue with Google
											</a>

										</div>


										<div className="col-md-6 mt-3 p-1">
											<a className="btn btn-block shadow-lg icon_button" href
												role="button">
												<img src={facebook} alt="Facebook" className="icon_img me-2" />
												Continue with Facebook
											</a>
										</div>
									</div>


								</form>
							</div>
						</div>
					</div>
				</div>

			</section>
		</>
	)
}

export default Login