import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

const UserManagementPage = () => {
    // Sample data - replace with actual API call
    const [users, setUsers] = useState([
        {
            id: 1, name: 'John Doe', email: 'john@example.com', plan: 'Enterprise', status: 'Active', lastLogin: '2023-06-15 14:32',
            verified: true, role: 'Admin', apiUsage: 87.5, numberRegistered: 3
        },
        {
            id: 2, name: 'Jane Smith', email: 'jane@example.com', plan: 'Professional', status: 'Active', lastLogin: '2023-06-14 09:15',
            verified: true, role: 'User', apiUsage: 45.2, numberRegistered: 1
        },
        {
            id: 3, name: 'Robert Johnson', email: 'robert@example.com', plan: 'Basic', status: 'Inactive', lastLogin: '2023-05-28 16:45',
            verified: true, role: 'User', apiUsage: 0, numberRegistered: 1
        },
        {
            id: 4, name: 'Sarah Williams', email: 'sarah@example.com', plan: 'Professional', status: 'Active', lastLogin: '2023-06-15 11:20',
            verified: true, role: 'User', apiUsage: 62.8, numberRegistered: 2
        },
        {
            id: 5, name: 'Michael Brown', email: 'michael@example.com', plan: 'Enterprise', status: 'Pending', lastLogin: 'Never',
            verified: false, role: 'User', apiUsage: 0, numberRegistered: 0
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [filterPlan, setFilterPlan] = useState('All');
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    // Filtered users based on search and filters
    const filteredUsers = users.filter(user => {
        const matchesSearch =
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = filterStatus === 'All' || user.status === filterStatus;
        const matchesPlan = filterPlan === 'All' || user.plan === filterPlan;

        return matchesSearch && matchesStatus && matchesPlan;
    });

    // Handler for user status change
    const handleStatusChange = (userId, newStatus) => {
        setUsers(users.map(user =>
            user.id === userId ? { ...user, status: newStatus } : user
        ));
    };

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    // Change page handler
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Modal for adding new user
    const AddUserModal = () => {
        const [newUser, setNewUser] = useState({
            name: '',
            email: '',
            plan: 'Basic',
            role: 'User',
            status: 'Pending',
            verified: false
        });

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setNewUser({
                ...newUser,
                [name]: value
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();

            // Add new user to the list
            const newUserId = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
            const userToAdd = {
                ...newUser,
                id: newUserId,
                lastLogin: 'Never',
                apiUsage: 0,
                numberRegistered: 0
            };

            setUsers([...users, userToAdd]);
            setIsAddUserModalOpen(false);
        };

        return (
            <div className={`fixed inset-0 z-50 flex items-center justify-center ${isAddUserModalOpen ? '' : 'hidden'}`}>
                <div className="absolute inset-0 bg-black opacity-50" onClick={() => setIsAddUserModalOpen(false)}></div>
                <div className="relative bg-emerald-900 border border-emerald-800 rounded-lg w-full max-w-md p-6 mx-4">
                    <button
                        className="absolute top-3 right-3 text-emerald-400 hover:text-emerald-300"
                        onClick={() => setIsAddUserModalOpen(false)}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <h3 className="text-xl font-medium text-white mb-4">Add New User</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-emerald-300 mb-1" htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border border-emerald-700 rounded-md bg-emerald-900/60 p-2 text-white focus:ring-emerald-500 focus:border-emerald-500"
                                value={newUser.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-emerald-300 mb-1" htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-emerald-700 rounded-md bg-emerald-900/60 p-2 text-white focus:ring-emerald-500 focus:border-emerald-500"
                                value={newUser.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-emerald-300 mb-1" htmlFor="plan">Plan</label>
                                <select
                                    id="plan"
                                    name="plan"
                                    className="w-full border border-emerald-700 rounded-md bg-emerald-900/60 p-2 text-white focus:ring-emerald-500 focus:border-emerald-500"
                                    value={newUser.plan}
                                    onChange={handleInputChange}
                                >
                                    <option value="Basic">Basic</option>
                                    <option value="Professional">Professional</option>
                                    <option value="Enterprise">Enterprise</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-emerald-300 mb-1" htmlFor="role">Role</label>
                                <select
                                    id="role"
                                    name="role"
                                    className="w-full border border-emerald-700 rounded-md bg-emerald-900/60 p-2 text-white focus:ring-emerald-500 focus:border-emerald-500"
                                    value={newUser.role}
                                    onChange={handleInputChange}
                                >
                                    <option value="User">User</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="verified"
                                name="verified"
                                className="rounded bg-emerald-900 border-emerald-700 text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                                checked={newUser.verified}
                                onChange={(e) => setNewUser({ ...newUser, verified: e.target.checked })}
                            />
                            <label className="ml-2 text-emerald-300" htmlFor="verified">
                                Mark as verified
                            </label>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button
                                type="button"
                                className="mr-3 px-4 py-2 border border-emerald-700 text-emerald-300 rounded-md hover:bg-emerald-800"
                                onClick={() => setIsAddUserModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-500"
                            >
                                Add User
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    return (
        <AdminLayout activePage="users">
            <div className="p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-white mb-2">User Management</h1>
                    <p className="text-emerald-200">Manage users, permissions, and account settings.</p>
                </div>

                {/* Filters and Search */}
                <div className="bg-emerald-900/40 backdrop-blur-sm border border-emerald-800/30 rounded-lg p-6 mb-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex-1 min-w-80">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-2 border border-emerald-700 rounded-md bg-emerald-900/60 focus:ring-emerald-500 focus:border-emerald-500 text-emerald-100 placeholder-emerald-400"
                                    placeholder="Search users by name or email"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {/* Status Filter */}
                            <div>
                                <select
                                    className="border border-emerald-700 rounded-md bg-emerald-900/60 text-emerald-100 py-2 px-3 focus:ring-emerald-500 focus:border-emerald-500"
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                >
                                    <option value="All">All Statuses</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </div>

                            {/* Plan Filter */}
                            <div>
                                <select
                                    className="border border-emerald-700 rounded-md bg-emerald-900/60 text-emerald-100 py-2 px-3 focus:ring-emerald-500 focus:border-emerald-500"
                                    value={filterPlan}
                                    onChange={(e) => setFilterPlan(e.target.value)}
                                >
                                    <option value="All">All Plans</option>
                                    <option value="Basic">Basic</option>
                                    <option value="Professional">Professional</option>
                                    <option value="Enterprise">Enterprise</option>
                                </select>
                            </div>

                            {/* Add User Button */}
                            <button
                                className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-md flex items-center"
                                onClick={() => setIsAddUserModalOpen(true)}
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Add User
                            </button>
                        </div>
                    </div>
                </div>

                {/* Users Table */}
                <div className="bg-emerald-900/40 backdrop-blur-sm border border-emerald-800/30 rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-emerald-800/30">
                            <thead className="bg-emerald-900/60">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                                        User
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                                        Plan
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                                        Last Login
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                                        API Usage
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-emerald-800/30 bg-emerald-900/20">
                                {currentUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-emerald-800/20">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 bg-emerald-700 rounded-full flex items-center justify-center text-white font-medium">
                                                    {user.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-white">{user.name}</div>
                                                    <div className="text-sm text-emerald-300">{user.email}</div>
                                                    <div className="flex items-center mt-1">
                                                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${user.verified ? 'bg-green-900/40 text-green-400' : 'bg-yellow-900/40 text-yellow-400'
                                                            }`}>
                                                            {user.verified ? 'Verified' : 'Unverified'}
                                                        </span>
                                                        <span className="inline-flex items-center ml-2 px-2 py-0.5 rounded text-xs font-medium bg-emerald-800/40 text-emerald-300">
                                                            {user.role}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.plan === 'Enterprise' ? 'bg-purple-900/40 text-purple-400' :
                                                    user.plan === 'Professional' ? 'bg-blue-900/40 text-blue-400' :
                                                        'bg-gray-900/40 text-gray-400'
                                                }`}>
                                                {user.plan}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <select
                                                className={`text-sm rounded border-0 py-1 px-2 ${user.status === 'Active' ? 'bg-green-900/40 text-green-400' :
                                                        user.status === 'Inactive' ? 'bg-red-900/40 text-red-400' :
                                                            'bg-yellow-900/40 text-yellow-400'
                                                    }`}
                                                value={user.status}
                                                onChange={(e) => handleStatusChange(user.id, e.target.value)}
                                            >
                                                <option value="Active" className="bg-emerald-900 text-green-400">Active</option>
                                                <option value="Inactive" className="bg-emerald-900 text-red-400">Inactive</option>
                                                <option value="Pending" className="bg-emerald-900 text-yellow-400">Pending</option>
                                            </select>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">
                                            {user.lastLogin === 'Never' ?
                                                <span className="text-emerald-400">Never</span> :
                                                user.lastLogin
                                            }
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-32 bg-emerald-900/60 rounded-full h-2.5">
                                                    <div
                                                        className={`h-2.5 rounded-full ${user.apiUsage > 80 ? 'bg-red-500' :
                                                                user.apiUsage > 50 ? 'bg-yellow-500' :
                                                                    'bg-emerald-500'
                                                            }`}
                                                        style={{ width: `${user.apiUsage}%` }}
                                                    ></div>
                                                </div>
                                                <span className="ml-2 text-xs text-emerald-300">{user.apiUsage}%</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex space-x-2">
                                                <button className="text-emerald-400 hover:text-emerald-300">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </button>
                                                <button className="text-emerald-400 hover:text-emerald-300">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </button>
                                                <button className="text-red-400 hover:text-red-300">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {filteredUsers.length === 0 && (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-8 text-center text-emerald-300">
                                            <div className="flex flex-col items-center">
                                                <svg className="w-12 h-12 text-emerald-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 13a3 3 0 100-6 3 3 0 000 6z" />
                                                </svg>
                                                <p className="text-lg font-medium">No users found</p>
                                                <p className="text-sm text-emerald-400 mt-1">Try adjusting your search or filter criteria</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="border-t border-emerald-800/30 bg-emerald-900/60 px-4 py-3 flex items-center justify-between">
                        <div className="flex-1 flex justify-between sm:hidden">
                            <button
                                className="relative inline-flex items-center px-4 py-2 border border-emerald-700 text-sm font-medium rounded-md text-emerald-200 bg-emerald-800/40 hover:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <button
                                className="ml-3 relative inline-flex items-center px-4 py-2 border border-emerald-700 text-sm font-medium rounded-md text-emerald-200 bg-emerald-800/40 hover:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages || totalPages === 0}
                            >
                                Next
                            </button>
                        </div>
                        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-emerald-300">
                                    Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{' '}
                                    <span className="font-medium">
                                        {Math.min(indexOfLastItem, filteredUsers.length)}
                                    </span>{' '}
                                    of <span className="font-medium">{filteredUsers.length}</span> results
                                </p>
                            </div>
                            <div>
                                {totalPages > 1 && (
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                        <button
                                            onClick={() => paginate(1)}
                                            disabled={currentPage === 1}
                                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-emerald-700 bg-emerald-800/40 text-sm font-medium text-emerald-200 hover:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <span className="sr-only">First</span>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => paginate(currentPage - 1)}
                                            disabled={currentPage === 1}
                                            className="relative inline-flex items-center px-2 py-2 border border-emerald-700 bg-emerald-800/40 text-sm font-medium text-emerald-200 hover:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <span className="sr-only">Previous</span>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        {/* Page numbers */}
                                        {/* Page numbers */}
                                        {[...Array(totalPages)].map((_, index) => {
                                            const pageNumber = index + 1;
                                            const isVisible =
                                                pageNumber === 1 ||
                                                pageNumber === totalPages ||
                                                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1);

                                            if (!isVisible && pageNumber === 2) {
                                                return (
                                                    <span
                                                        key="ellipsis-start"
                                                        className="relative inline-flex items-center px-4 py-2 border border-emerald-700 bg-emerald-800/40 text-sm font-medium text-emerald-400"
                                                    >
                                                        ...
                                                    </span>
                                                );
                                            }

                                            if (!isVisible && pageNumber === totalPages - 1) {
                                                return (
                                                    <span
                                                        key="ellipsis-end"
                                                        className="relative inline-flex items-center px-4 py-2 border border-emerald-700 bg-emerald-800/40 text-sm font-medium text-emerald-400"
                                                    >
                                                        ...
                                                    </span>
                                                );
                                            }

                                            if (!isVisible) {
                                                return null;
                                            }

                                            return (
                                                <button
                                                    key={pageNumber}
                                                    onClick={() => paginate(pageNumber)}
                                                    className={`relative inline-flex items-center px-4 py-2 border ${currentPage === pageNumber
                                                            ? 'bg-emerald-700 text-white border-emerald-600'
                                                            : 'bg-emerald-800/40 text-emerald-200 border-emerald-700 hover:bg-emerald-800'
                                                        } text-sm font-medium`}
                                                >
                                                    {pageNumber}
                                                </button>
                                            );
                                        })}
                                        <button
                                            onClick={() => paginate(currentPage + 1)}
                                            disabled={currentPage === totalPages || totalPages === 0}
                                            className="relative inline-flex items-center px-2 py-2 border border-emerald-700 bg-emerald-800/40 text-sm font-medium text-emerald-200 hover:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <span className="sr-only">Next</span>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => paginate(totalPages)}
                                            disabled={currentPage === totalPages || totalPages === 0}
                                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-emerald-700 bg-emerald-800/40 text-sm font-medium text-emerald-200 hover:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <span className="sr-only">Last</span>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </nav>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Render the modal */}
                <AddUserModal />
            </div>
        </AdminLayout>
    );
};

export default UserManagementPage;