import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FiEdit } from 'react-icons/fi';
import { FaRegTrashCan } from 'react-icons/fa6';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcel = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: parcels = [],refetch } = useQuery({
        queryKey: ['my-parcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user?.email}`)
            return res.data;
        }
    })

    const handleParcelRemove = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/parcels/${id}`)
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

    const handlePayment =async(parcel)=>{
        const parcelInfo ={
            cost:parcel.cost,
            parcelId : parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName :parcel.parcelName,
            trackingId:parcel.trackingId

        }

        const res =await axiosSecure.post('/create-checkout-session',parcelInfo)
        console.log(res.data.url)
        window.location.assign(res.data.url);

    }
    return (
        <div className='p-4 md:p-6'>
            <h2 className='text-xl font-bold mb-4'>My Parcels ({parcels.length})</h2>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra min-w-[600px]">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment </th>
                            <th>TrackingId </th>
                            <th>Delivery Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            parcels.map((parcel, index) => <tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td>{parcel.cost}</td>
                                <td>
                                    {
                                        parcel.paymentStatus ==='paid' ?
                                        <span className='text-black btn  '>Paid</span> :
                                      
                                        <button onClick={()=>handlePayment(parcel)} className="btn btn-primary text-black">Pay</button>
                                        
                                    }
                                </td>
                                <td>
                                    <Link to={`/parcel-track/${parcel.trackingId}`}>{parcel.trackingId}</Link>
                                </td>
                                <td>{parcel.deliveryStatus}</td>
                                <td className='space-x-3'>
                                    <button className='btn btn-square hover:bg-primary'><HiMiniMagnifyingGlass /></button>
                                    <button className='btn btn-square hover:bg-primary'><FiEdit /></button>
                                    <button onClick={() => handleParcelRemove(parcel._id)} className='btn btn-square hover:bg-primary'><FaRegTrashCan /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>



    );
};

export default MyParcel;