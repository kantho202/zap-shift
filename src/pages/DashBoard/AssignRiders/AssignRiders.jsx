import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AssignRiders = () => {
    const [selectedParcel, setSelectedParcel] = useState(null)
    const axiosSecure = useAxiosSecure()
    const riderModalRef = useRef();
    const { data: parcels = [], refetch: parcelsRefetch } = useQuery({
        queryKey: ['parcels', 'pending_pickup'],
        queryFn: async () => {
            const res = await axiosSecure.get('/parcels?deliveryStatus=pending_pickup')
            console.log(res.data)
            return res.data;
        }
    })
    // to do : invalided query after assign a rider
    const { data: riders = [] } = useQuery({
        queryKey: ['riders', selectedParcel?.senderDistrict, 'available'],
        enabled: !!selectedParcel,
        queryFn: async () => {
            const res = await axiosSecure.get(`/riders?status=approved&district=${selectedParcel?.senderDistrict}&workStatus=available`)
            // console.log(riders)
            return res.data;
        }
    })
 
    const openAssignRiderModal = parcel => {
        setSelectedParcel(parcel);
        console.log(parcel.senderDistrict)
        riderModalRef.current.showModal()
    }

    const handleAssignRider = rider => {
        const riderAssignInfo = {
            riderId: rider._id,
            riderName: rider.name,
            riderEmail: rider.email,
            parcelId: selectedParcel._id,
            trackingId:selectedParcel.trackingId
        }
        axiosSecure.patch(`/parcels/${selectedParcel._id}`, riderAssignInfo)
            .then(res => {
                 if (res.data.modifiedCount) {
                    riderModalRef.current.close();
                    parcelsRefetch()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `rider has been assign`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <h1>Assign riders : {parcels.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Parcel Name</th>
                            <th>Cost</th>
                            <th>Crated At</th>
                            <th>PickUp District</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((parcel, index) => <tr key={parcel._id}>
                            <th>{index + 1}</th>
                            <td>{parcel.senderName}</td>
                            <td>{parcel.parcelName}</td>
                            <td>{parcel.cost}</td>
                            <td>{parcel.createdAt}</td>
                            <td>{parcel.senderDistrict}</td>
                            <td>
                                <button onClick={() => openAssignRiderModal(parcel)}
                                    className="btn btn-primary text-black">Find Riders</button>
                            </td>
                        </tr>)}


                    </tbody>
                </table>
            </div>


            {/* modal */}

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog ref={riderModalRef} className="modal modal-bottom sm:modal-middle ">

                <div className=' modal-box  lg:max-w-3xl'>
                    <div className="">
                        <h3 className="font-bold text-lg">Rider :{riders.length}!</h3>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>District</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {riders.map((rider, i) => <tr key={rider._id}>
                                        <th>{i + 1}</th>
                                        <td>{rider.name}</td>
                                        <td>{rider.email}</td>
                                        <td>{rider.district}</td>
                                        <td><button onClick={() => handleAssignRider(rider)} className="btn btn-primary text-black">Assign</button></td>
                                    </tr>)}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>

            </dialog>
        </div>
    );
};

export default AssignRiders;