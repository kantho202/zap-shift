import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AssignDeliveries = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcels', user.email, 'driver_assigned'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/riders?riderEmail=${user.email}&deliveryStatus=driver_assigned`)
            return res.data;
        }
    })
    const handleDeliveryStatusUpdate = (parcel,status) => {
        const statusInfo = {
             deliveryStatus: status ,
             riderId:parcel.riderId,
             trackingId:parcel.trackingId
            }
        let message =`parcel status is updated with ${status.split('_').join(' ')}`
        axiosSecure.patch(`/parcels/${parcel._id}/status`, statusInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <h1>parcel pending pickup :{parcels.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Parcel name</th>
                            <th>Confirm</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((parcel, i) => <tr key={parcel._id}>
                            <th>{i + 1}</th>
                            <td>{parcel.senderName}</td>
                            <td>{parcel.parcelName}</td>
                            <td className='space-x-3'>
                                {
                                    parcel.deliveryStatus === 'driver_assigned' ? <>
                                        <button onClick={() => handleDeliveryStatusUpdate(parcel,'rider_arriving')} 
                                        className="btn btn-primary text-black">Accept</button>
                                        <button className="btn btn-warning text-black">Reject</button>
                                    </> : <span>Accepted</span>
                                }
                            </td>
                            <td className='space-x-3.5'>
                                <button onClick={() => handleDeliveryStatusUpdate(parcel,'parcels_picked_up')} 
                                className="btn btn-primary text-black">Mark as Picked Up</button>

                                <button onClick={() => handleDeliveryStatusUpdate(parcel,'parcel_delivered')} 
                                className="btn btn-primary text-black">Mark as Delivered</button>

                            </td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssignDeliveries;