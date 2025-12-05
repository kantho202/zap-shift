import React from 'react';
import { useLoaderData, } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { useForm, useWatch } from 'react-hook-form';
import rider from '../../assets/agent-pending.png'
import Swal from 'sweetalert2';
const Rider = () => {
    const serviceCenter = useLoaderData()
    const regionsDuplicate = serviceCenter.map(c => c.region)
    const regions = [...new Set(regionsDuplicate)]
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    // const navigate =useNavigate()
    const districtsByRegion = region => {
        const regionDistricts = serviceCenter.filter(c => c.region === region)
        const districts = regionDistricts.map(d => d.district)
        return districts
    }
    // console.log(regions)
    const { register, handleSubmit, control, formState: { errors } } = useForm()
    const riderRegion = useWatch({ control, name: "region" })
    const handleRiderApplication = (data) => {
        console.log(data)
        axiosSecure.post('/riders', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your application has been submitted.We will reach to you in 6 days",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className='bg-white mt-8 px-26 rounded-4xl mb-20 py-20'>
            <h1 className='font-extrabold text-[56px] text-secondary '>Be a rider </h1>
            <p className='description font-normal pb-10'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                From personal <br /> packages to business shipments — we deliver on time, every time.</p>
            <form onSubmit={handleSubmit(handleRiderApplication)}>
                {/* document */}

                {/* parcel info  */}


                <hr className='text-[000000] opacity-10' />
                {/* two column */}
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20'>
                    {/*  rider info */}

                    <div className='space-y-5 pt-7'>
                        <h1 className='font-extrabold text-[28px] text-secondary pt-7'>Tell me about yourself</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                            <fieldset className="fieldset">
                                <label className="label font-medium text-[14px] text-[#0F172A]">Your Name</label>
                                <input type="text" defaultValue={user?.displayName}
                                    {...register('name', { required: true })}
                                    className="input bg-white w-full"
                                    placeholder="sender Name" />
                                {
                                    errors.yourName?.type === "required" && <p className='text-red-600'> your name is required</p>
                                }
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label font-medium text-[14px] text-[#0F172A]">Your age</label>
                                <input type="text"
                                    {...register('age', { required: true })}
                                    className="input bg-white w-full"
                                    placeholder="Your age" />
                                {
                                    errors.yourAge?.type === "required" && <p className='text-red-600'> your age is required</p>
                                }
                            </fieldset>
                        </div>
                        <fieldset className="fieldset">
                            <label className="label font-medium text-[14px] text-[#0F172A]">Your Email</label>
                            <input type="text" defaultValue={user?.email}
                                {...register('email', { required: true })}
                                className="input bg-white w-full"
                                placeholder="Your Email" />
                            {
                                errors.senderEmail?.type === "required" && <p className='text-red-600'> Your Email is required</p>
                            }
                        </fieldset>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                            <fieldset className="fieldset">
                                <label className="label font-medium text-[14px] text-[#0F172A]">Address</label>
                                <input type="text"
                                    {...register('address', { required: true })}
                                    className="input bg-white w-full"
                                    placeholder="Address" />
                                {
                                    errors.senderAddress?.type === "required" &&
                                    <p className='text-red-600'>Sender address  is required</p>
                                }
                            </fieldset>
                            <fieldset className='fieldset'>

                                <label className="label font-medium text-[14px] text-[#0F172A]">Your Contact No</label>
                                <input type="number"
                                    {...register('contact', { required: true })}
                                    className="input bg-white w-full"
                                    placeholder="Contact Number" />
                                {
                                    errors.senderContact?.type === "required" &&
                                    <p className='text-red-600'> Contact  is required</p>
                                }
                            </fieldset>
                        </div>
                        <fieldset className='fieldset'>

                            <label className="label font-medium text-[14px] text-[#0F172A]">Your NID</label>
                            <input type="number"
                                {...register('nidNumber', { required: true })}
                                className="input bg-white w-full"
                                placeholder="Nid Number" />
                            {
                                errors.senderContact?.type === "required" &&
                                <p className='text-red-600'>Nid number  is required</p>
                            }
                        </fieldset>
                        <fieldset className='fieldset'>
                            <label className="label font-medium text-[14px] text-[#0F172A]">Your Region</label>
                            <select defaultValue="Pick a font"
                                {...register('region', { required: true })}
                                className="select bg-white w-full">
                                <option defaultValue={true}>Select your region</option>
                                {
                                    regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                }
                            </select>
                            {
                                errors.senderRegion?.type === "required" &&
                                <p className='text-red-600'>Sender region is required</p>
                            }
                        </fieldset>
                        <fieldset className='fieldset'>
                            <label className="label font-medium text-[14px] text-[#0F172A]">Your District</label>
                            <select defaultValue="Pick a font"
                                {...register('district', { required: true })}
                                className="select bg-white w-full">
                                <option defaultValue={true}>Select your region</option>
                                {
                                    districtsByRegion(riderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                                }
                            </select>
                        </fieldset>

                        <fieldset className='fieldset'>
                            <label className="label font-medium text-[14px] text-[#0F172A]">Which wire-house you want to work?</label>
                            <select defaultValue="Pick a font"
                                {...register('warHouse', { required: true })}
                                className="select bg-white w-full">
                                <option disabled={true} >Select Wire house</option>
                                <option >Pathao</option>
                                <option >FoodPanda</option>
                                <option >SteadFast Courier</option>
                                <option >Uber Moto</option>
                                <option >Shohoz Ride</option>
                                <option >RedX</option>


                            </select>
                            {
                                errors.senderWireHouse?.type === "required" &&
                                <p className='text-red-600'> wire house is required</p>
                            }
                        </fieldset>

                        <button type="submit" className='bg-primary btn w-full ' value="">Submit</button>

                    </div>

                    {/* rider  image info */}
                    <div className='flex justify-end items-end'>

                        <img className='' src={rider} alt="" />
                    </div>

                </div>
                {/* <input type="submit" className='bg-primary btn ' value="send" /> */}

            </form>

        </div>
    );
};

export default Rider;