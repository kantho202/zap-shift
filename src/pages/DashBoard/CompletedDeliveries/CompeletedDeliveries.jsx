import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const CompletedDeliveries = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: parcels = [],  } = useQuery({
        queryKey: ['parcels', user.email, 'driver_assigned'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/riders?riderEmail=${user.email}&deliveryStatus=parcel_delivered`)
            return res.data;
        }
    })

    const calculatePayOut =parcel =>{
        if(parcel.senderDistrict  ===parcel.receiverDistrict){
            return parcel.cost*0.8
        }
        else{
            return parcel.cost *0.6
        }
    }
    return (
        <div>
            <h1>Completed deliveries :{parcels.length}</h1>

             <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Parcel Name</th>
                            <th>Crated At</th>
                            <th>PickUp District</th>
                            <th>Cost</th>
                            <th>Payout</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((parcel, index) => <tr key={parcel._id}>
                            <th>{index + 1}</th>
                            <td>{parcel.senderName}</td>
                            <td>{parcel.parcelName}</td>
                            <td>{parcel.createdAt}</td>
                            <td>{parcel.senderDistrict}</td>
                            <td>{parcel.cost}</td>
                            <td>{calculatePayOut(parcel)}</td>
                            <td>
                                <button 
                                    className="btn btn-primary text-black">Cash out</button>
                            </td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompletedDeliveries;