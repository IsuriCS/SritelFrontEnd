import * as UserViews from '../constants/AllViews';
import React from 'react';
export const customerRoutes = [
	{id: 1, path: '/bill', element: <UserViews.CustomerDashboard />},
	{id: 2, path: '/home', element: <UserViews.CustomerPackages />},
	{id: 3, path: '/support', element: <UserViews.CustomerSupport />},
];
export const adminRoutes = [
	// {id: 1, path: '/home', element: <UserViews.AdminDashboard />},
	{id: 1, path: '/home', element: <UserViews.AdminPackages />},
	{id: 2, path: '/staff', element: <UserViews.AdminStaff />},
];
export const staffRoutes = [
	{id: 1, path: '/home', element: <UserViews.StaffCustomers />},
	// {id: 2, path: '/packages', element: <UserViews.AdminPackages />},
	{id: 2, path: '/assist', element: <UserViews.StaffChat />},
];