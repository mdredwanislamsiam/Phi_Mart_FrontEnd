import React from "react";
import { Route, Routes } from "react-router";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/register";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import ActivateAccount from "../components/RegistrationAccount/ActivateAccount";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import ResendActivation from "../components/RegistrationAccount/ResendActivation";
import ForgotPassword from "../components/RegistrationAccount/ForgotPassword";
import ForgotPasswordConfirm from "../components/RegistrationAccount/ForgotPasswordConfirm";

const AppRoutes = () => {
	return (
		<Routes>
			{/* <Route index element={<Home />} /> 
            <Route path="about" element={<About/>} />  */}

			<Route element={<MainLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="about" element={<About />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="activate/:uid/:token" element={<ActivateAccount />} />
				<Route path="password/reset/confirm/:uid/:token" element={<ForgotPasswordConfirm />} />
				<Route path="resend_activation" element={<ResendActivation />} />
				<Route path="reset_password" element={<ForgotPassword /> } /> 
				
			</Route>

			{/* Private Routes */}
			<Route
				path="dashboard"
				element={
					<PrivateRoute>
						<DashboardLayout />
					</PrivateRoute>
				}>
				<Route index element={<Dashboard />} />
				<Route path="profile" element={<Profile />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
