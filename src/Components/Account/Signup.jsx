import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useForm } from 'react-hook-form';
import Country from './Country';
import signup from '../../images/SignUp.png';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';

const Signup = () => {
	const [country, setCountry] = useState([])
	const { register, handleSubmit, formState: { errors } } = useForm();

	const SubmitForm = (data) => {
		console.log(data);
	}

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all')
			.then(response => response.json())
			.then(data => setCountry(data))
	}, [])

	return (
		<div>

<section className=" login">
				<div className="h-100">
					<div className="row d-flex ">
						<div className="col-md-6 d-none d-md-block login_image">
							<img src={signup}
								className="img-fluid " alt="Sample" />
						</div>
						<div className="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
							<form onSubmit={handleSubmit(SubmitForm)}>
								<div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-5">
									<h2 className="mb-0 me-3 login">Sign Up</h2>

								</div>

								<div className="form-outline mb-4 form-group">
									<input type="email" id="form3Example3" className="form-control form-control-lg"
										placeholder="Your Email" {...register("email", { required: true })} />
								</div>
								{errors.email && <span className="text-danger">This field is required</span>}


								<div className="row">
									<div className="col-md-6">
										<div className="form-outline mb-4 form-group">
											<input type="text" id="form3Example3" className="form-control form-control-lg"
												placeholder="First Name" {...register("first_name", { required: true })} />
										</div>
										{errors.first_name && <span className="text-danger">This field is required</span>}
									</div>


									<div className="col-md-6">
										<div className="form-outline mb-4 form-group">
											<input type="text" id="form3Example3" className="form-control form-control-lg"
												placeholder="Last Name" {...register("last_name", { required: true })} />
										</div>
										{errors.last_name && <span className="text-danger">This field is required</span>}
									</div>

								</div>


								<div className="form-outline mb-4 form-group input-group">

									<select id="inputState" className="form-control" {...register("country", { required: true })}>
										<option selected disabled>Select Country</option>
										{/* add background image on option tag */}
										{

											country.map((val, key) => {
												return (

													<Country val={val} key={key} />

												);
											})
										}
									</select>
									<input type="tel" id="form3Example3" className="form-control form-control-lg"
										placeholder="Your Phone" {...register("phone", { required: true })} />

								</div>
								{errors.phone && <span className="text-danger">This field is required</span>}



								<div className="form-outline mb-3">
									<input type="password" id="form3Example4" className="form-control form-control-lg"
										placeholder="Your Password" {...register("password", { required: true })} />
								</div>
								{errors.password && <span className="text-danger">This field is required</span>}

								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label me-3" htmlFor="flexCheckDefault" style={{ color: '#909090' }}>Yes I am going with the <span style={{ color: '#19A526', fontWeight: 'bold' }} className="me-2">Terms of Conditions </span> & <span className="me-2" style={{ color: '#19A526', fontWeight: 'bold' }}>Privacy and Policy</span></label>
								</div>

								<div className="text-center text-lg-start mt-4 pt-2">

									<button type="submit" className="btn btn-block shadow-lg mt-2 button">Sign Up</button>

									<p className="small fw-bold mt-2 pt-1 mb-0" style={{ color: '#909090' }}>Already have an account? <Link to="/login"
										style={{ color: '#19A526', textDecoration: 'none' }}>Log in</Link></p>
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

			</section>
		</div>
	);
};

export default Signup;