import React, { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import ErrorAlert from "../components/ErrorAlert";
import SuccessAlert from "../components/SuccessAlert";

const Login = () => {
    const { loginUser, errorMsg} = useAuthContext();
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [loading, setLoading] = useState(false); 
	const [successMsg, setSuccessMsg] = useState(""); 

	
	const navigate = useNavigate();
	const location = useLocation(); 

	useEffect(() => {
		setSuccessMsg(""); 
		if (location.state?.response?.message) {
			setSuccessMsg(location.state.response.message);
		}
		else if (location?.state?.message) {
			setSuccessMsg(location.state.message); 
		}
	}, [location.state])

	const onSubmit = async (data) => {
		setSuccessMsg(""); 
		setLoading(true); 
		try {
			const response = await loginUser(data); 
			if (response.success) {
				navigate("/dashboard"); 
			}
		}
		catch (error) {
			console.log("Login Error: ", error.response.data?.detail); 
		}
		finally {
			setLoading(false); 
		}
		
    }; 
    
	return (
		<div className="flex min-h-screen items-center justify-center px-4 py-12 bg-base-200">
			<div className="card w-full max-w-md bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="card-title text-2xl font-bold">Sign in</h2>
					<p className="text-base-content/70"> Enter your email and password to access your account</p>
					{errorMsg && <ErrorAlert err={errorMsg} />}
					{successMsg && <SuccessAlert err={successMsg} />}
					<form action="" className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
						<div className="">
							<label htmlFor="email" className="label text-lg">
								<span className="label-text">Email</span>
							</label>
							<input
								id="email"
								type="email"
								placeholder="name@example.com"
								className={`input input-bordered w-full outline-none ${errors.email ? "input-error" : ""}`}
								{...register("email", { required: "Email is required" })}
							/>
							{errors.email && <span className="label-text-alt text-error">{errors.email.message}</span>}
						</div>
						<div>
							<label htmlFor="password" className="label text-lg">
								<span>Password</span>
							</label>
							<input
								id="password"
								type="password"
								placeholder=". . . . . . . . . ."
								className={`input input-bordered w-full outline-none ${errors.email ? "input-error" : ""}`}
								{...register("password", { required: "Password is required" })}
							/>
							{errors.password && (
								<span className="label-text-alt text-error">{errors.password.message}</span>
							)}
						</div>

						<button type="submit" className="btn btn-secondary w-full" disabled={loading}>
							{loading ? "Logging in..." : "Login"}
						</button>
					</form>
					<div className="flex justify-between">
						<Link to="/reset_password" className="link link-secondary">
							Forgot Password?
						</Link>
						<Link to="/resend_activation" className="link link-secondary">
							resend activation email?
						</Link>
					</div>
					<div className="text-center mt-4">
						<p className="text-base-content/70">
							Dont have an account?{" "}
							<Link to="/register" className="link link-secondary">
								Sign up
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
