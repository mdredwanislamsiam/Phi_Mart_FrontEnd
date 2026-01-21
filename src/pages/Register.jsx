import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../components/ErrorAlert";
import SuccessAlert from "../components/SuccessAlert";

const Register = () => {
    const { registerUser, errorMsg } = useAuthContext(); 
    

	const {
		register,
        handleSubmit,
        watch,
		formState: { errors },
	} = useForm();
    
	const navigate = useNavigate(); 

    const onSubmit = async(data) => {
        delete data.confirm_password; 
        try {
            const response = await registerUser(data); 
            if (response.success){  
				navigate("/login", { state: { response: response } }); 
            }
        }
        catch (error) {
            console.log("Registration failed: ", error); 
        }
    }

	return (
		<div className="flex min-h-screen items-center justify-center px-4 py-12 bg-base-200">
			<div className="card w-full max-w-md bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="card-title text-2xl font-bold">Sign Up</h2>
					<p className="text-base-content/70"> Create an account to get started</p>
					{errorMsg && <ErrorAlert err={errorMsg} />}
					<form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
						<div className="form-control">
							<label htmlFor="first_name" className="label">
								<span className="label-text">First Name</span>
							</label>
							<input
								id="first_name"
								type="text"
								placeholder="First Name"
								className="input input-bordered w-full outline-none"
								{...register("first_name", { required: "First Name is required" })}
							/>
							{errors.first_name && (
								<span className="label-text-alt text-error">{errors.first_name.message}</span>
							)}
						</div>
						<div className="form-control">
							<label htmlFor="last_name" className="label">
								<span className="label-text">Last Name</span>
							</label>
							<input
								id="last_name"
								type="text"
								placeholder="Last Name"
								className="input input-bordered w-full outline-none"
								{...register("last_name", { required: "Last Name is required" })}
							/>
							{errors.last_name && (
								<span className="label-text-alt text-error">{errors.last_name.message}</span>
							)}
						</div>
						<div className="form-control">
							<label htmlFor="email" className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								id="email"
								type="email"
								placeholder="name@example.com"
								className="input input-bordered w-full outline-none"
								{...register("email", { required: "Eamil is required" })}
							/>
							{errors.email && <span className="label-text-alt text-error">{errors.email.message}</span>}
						</div>
						<div className="form-control">
							<label htmlFor="address" className="label">
								<span className="label-text">Address</span>
							</label>
							<input
								id="address"
								type="text"
								placeholder="Address"
								className="input input-bordered w-full outline-none"
								{...register("address")}
							/>
						</div>
						<div className="form-control">
							<label htmlFor="phone_number" className="label">
								<span className="label-text">Phone Number</span>
							</label>
							<input
								id="phone_number"
								type="text"
								placeholder="Phone Number"
								className="input input-bordered w-full outline-none"
								{...register("phone_number")}
							/>
						</div>
						<div className="form-control">
							<label htmlFor="password" className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								id="password"
								type="password"
								placeholder=". . . . . . . . ."
								className="input input-bordered w-full outline-none"
								{...register("password", {
									required: "Password is required",
									minLength: { value: 8, message: "Password must be at least 8 charecters" },
								})}
							/>
							{errors.password && (
								<span className="label-text-alt text-error">{errors.password.message}</span>
							)}
						</div>
						<div className="form-control">
							<label htmlFor="confirmPassword" className="label">
								<span className="label-text">Confirm Password</span>
							</label>
							<input
								id="confirmPassword"
								type="password"
								placeholder=". . . . . . . . ."
								className="input input-bordered w-full outline-none"
								{...register("confirm_password", {
									required: "Confirm password is required",
									validate: (value) => value === watch("password") || "Password do not match!",
								})}
							/>
							{errors.confirm_password && (
								<span className="label-text-alt text-error">{errors.confirm_password.message}</span>
							)}
						</div>
						<button type="submit" className="btn btn-secondary w-full">
							Sign Up
						</button>
					</form>
					<div className="text-center mt-4">
						<p className="text-base-content/70">
							Already have an account?{" "}
							<Link to="/login" className="link link-primary">
								Sign in
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
