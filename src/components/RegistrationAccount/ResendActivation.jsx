import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import apiClient from '../../services/api-client';
import { useNavigate } from 'react-router';
import ErrorAlert from '../ErrorAlert';

const ResendActivation = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(); 
    const [loading, setLoading] = useState(false); 
    const [errorMsg, setErrorMsg] = useState(""); 

    const navigate = useNavigate(); 

    const onSubmit = async (data) => {
        setErrorMsg(""); 
        setLoading(true); 
        try {
            await apiClient.post("/auth/users/resend_activation/", data); 
            navigate("/login", {state: {message: "An Activation email was sent to your email.Please activate to login"}}); 
        }
        catch (error) {
            setErrorMsg(error); 
        }
        finally {
            setLoading(false); 
        }
    }; 

    return (
		<div className="flex min-h-screen items-center justify-center px-4 py-12 bg-base-200">
			<div className="card w-full max-w-md bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="card-title text-2xl font-bold">Resend Activation</h2>
					<p className="text-base-content/70">Enter the email you have registered with and an activation email will be sent to your email.</p>
					{errorMsg && <ErrorAlert err={errorMsg} />}
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
						<button type="submit" className="btn btn-secondary w-full" disabled={loading}>
							{loading ? "Sending..." : "Send"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ResendActivation;