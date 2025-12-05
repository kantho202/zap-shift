import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaUserShield, FaUserSlash } from 'react-icons/fa6';
import { LiaUserAltSlashSolid } from 'react-icons/lia';
import Swal from 'sweetalert2';
import { FaSearch } from 'react-icons/fa';

const UsersManagement = () => {
    const axiosSecure = useAxiosSecure();
    const [searchText, setSearchText] = useState('')
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users',searchText],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?searchText=${searchText}`)
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        const roleInfo = { role: 'admin' }
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${user.role} status is update`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleRemoveAdmin = user => {
        const roleInfo = { role: 'user' }
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${user.role} status is update`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <h1 className="text-3xl">Users management{users.length} </h1>

            <div className='flex flex-col py-5 justify-center items-center'>
            {/* <h1>Search text {searchText}</h1> */}
                    
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input onChange={e=>setSearchText(e.target.value)} type="search" required placeholder="Search" />
                </label>

                {/* <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input onChange={e=>setSearchText(e.target.value)} type="search" className="grow" placeholder="Search" />
                   
                </label> */}

            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin</th>
                            <th>Others Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user?._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user?.photoURL}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user?.displayName}</div>
                                            <div className="text-sm opacity-50">{user?.createdAt}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user?.email}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{user?.role}</span>
                                </td>
                                <td>{user.role}</td>
                                <td>
                                    {
                                        user?.role === 'admin' ? <button className='btn bg-red-300' onClick={() => handleRemoveAdmin(user)}> <FaUserSlash size={22} /></button> :
                                            <button className='btn bg-green-500' onClick={() => handleMakeAdmin(user)}>
                                                <FaUserShield size={22} /> </button>
                                    }

                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default UsersManagement;