import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdGroupRemove } from 'react-icons/md';
import { PiUserCircleCheckDuotone, PiUserCircleCheckFill } from 'react-icons/pi';
import { IoPersonRemove } from 'react-icons/io5';
import { BsFillTrashFill } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { FaEye } from 'react-icons/fa6';

const ApproveRiders = () => {
    const axiosSecure = useAxiosSecure()
    const {refetch, data: riders = [] } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders')
            return res.data;
        }
    })
    // console.log(riders)
    const updateRiderStatus = (rider,status) => {
        const updateInfo = { status: status,email:rider.email }
        axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `Rider status is set to ${status}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    const handleApproved = (rider) => {
        updateRiderStatus(rider, 'approved')
    }

    const handleRejection=(rider)=>{
        updateRiderStatus(rider,'rejected')
    }
    const handleDeleted=(id)=>{
         Swal.fire({
                    title: "Are you sure remove rider?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        axiosSecure.delete(`/riders/${id}`)
                        .then(res=>{
                            console.log(res.data)
                            if(res.data.deletedCount){
                                refetch()
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your parcel request has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                        
                    }
                });
    }
    return (
        <div className='p-4 md:p-6'>
            <h1 className='text-2xl font-bold mb-4'>Approve Riders ({riders.length})</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra min-w-[750px]">
                    {/* head */}
                    <thead>
                        <tr>
                                <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>District</th>
                            <th>Application Status</th>
                            <th>Work Status</th>
                            <th>Create Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            riders.map((rider, i) => <tr key={rider._id}>
                                <th>{i + 1}</th>
                                <td>{rider.name}</td>
                                <td>{rider.email}</td>
                                <td>{rider.district}</td>
                                <td>
                                    <p className={`${rider.status === 'approved' ?
                                        'text-green-700' : 'text-red-700'}`}>
                                        {rider.status}
                                    </p>
                                </td>
                                <td>{rider.workStatus}</td>
                                <td>{rider.createdAt}</td>
                                <td>
                                    <button  className="btn ">
                                        <FaEye size={19}></FaEye>
                                    </button>
                                    <button onClick={() => handleApproved(rider)} className="btn ">
                                        <PiUserCircleCheckFill size={19} />
                                    </button>
                                    <Tooltip data-to content='user approved'></Tooltip>
                                    <button onClick={()=>handleRejection(rider)} className="btn">
                                        <IoPersonRemove />
                                    </button>
                                    <button onClick={()=>handleDeleted(rider._id)} className="btn">
                                        <BsFillTrashFill />
                                    </button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveRiders;