import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import profile from '../../assets/image-upload-icon.png'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
const Register = () => {
    const {createUser,updateUserProfile}=useAuth();
    const {register,handleSubmit,formState:{errors}}=useForm()
    const axiosSecure =useAxiosSecure()
    const location =useLocation()
    // console.log(location)
    const navigate =useNavigate()
    const handleRegister=(data)=>{
        // console.log(data)
        const profileImage =data.photo[0];
        createUser(data.email,data.password)
        .then(result=>{
            console.log(result.user)
            // store the image in form data 
            const fromData = new FormData();
            fromData.append('image',profileImage)

            // send the photo to store and get the url
            const image_API_URL =`https://api.imgbb.com/1/upload?&key=${import.meta.env.VITE_image_host_key}`
            axios.post(image_API_URL,fromData)
            .then(res=>{
                // console.log('after image upload ',res.data.data.url)
                const photoURL=res.data.data.url;
                // create user in the database 
                const userInfo ={
                    email:data.email,
                    displayName:data.name,
                    password:data.password,
                    photoURL:photoURL
                }
                axiosSecure.post('/users',userInfo)
                .then(res=>{
                    if(res.data.insertedId){
                        console.log('user created in the database ')
                    }
                })
                // update profile to firebase
                const userProfile ={
                    displayName:data.name,
                    photURL:photoURL
                }
                updateUserProfile(userProfile)
                .then(()=>{
                    console.log("user profile updated")
                    navigate(location.state || "/")
                })
                .catch(error=>{
                    console.log(error)
                })
            })


        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="card  w-full max-w-lg pt-14  pl-40 bg-white">
                    <div className="card-body">
                        <h1 className="text-2xl lg:text-3xl font-extrabold text-[42px]"> Create an Account</h1>
                        <p className='text-base font-normal'>Register with ZapShift </p>

                        <form onSubmit={handleSubmit(handleRegister)}>

                            <fieldset className="fieldset">

                                <img src={profile} alt="" />
                                {/* name */}
                                <label className="label text-black">Name</label>
                                <div className=' '>
                                    <input type="text"  {...register('name',{required:true})}
                                        className="input bg-white w-full"  
                                        placeholder="Email Address" />
                                        {
                                            errors.name?.type ==="required" && 
                                            <p className='text-red-500'>Name is required</p>
                                        }
                                </div>
                                {/* photo */}
                                <label className="label text-black">Photo Url</label>
                                <div className=' '>
                                    <input type="file"  {...register('photo',{required:true})}
                                        className="file-input bg-white w-full"  
                                        placeholder="Photo url" />
                                        {
                                            errors.name?.type ==="required" && 
                                            <p className='text-red-500'>Photo is required</p>
                                        }
                                </div>
                                {/* email */}
                                <label className="label text-black">Email Address</label>
                                <div className=' '>
                                    <input type="email"  {...register('email',
                                    {required:true})}
                                        className="input bg-white w-full" 
                                        placeholder="Email Address" />
                                    {
                                        errors.email?.type ==="required" && 
                                        <p className='text-red-500'>Email is required</p>
                                    }
                                </div>

                                {/* password */}
                                <label className="label text-black">Password</label>
                                <input type="password"  {...register("password",
                                {required:true,
                                    minLength:6,
                                    pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                                })}
                                 className="input bg-white w-full"
                                  placeholder="Password"  />


                                {
                                    errors.password?.type ==="required"  &&
                                     <p className='text-red-500'>Password is required</p>
                                }
                                {
                                    errors.password?.type ==="minLength" && 
                                    <p className='text-red-500'>Password must be 6 character</p>
                                }
                                {
                                    errors.password?.type ==="pattern"  && 
                                    <p className='text-red-500'>Password must have One Uppercase,
                                     One LowerCase and One Special character</p>
                                }
                                <button className="btn btn-primary text-black mt-4">Register</button>
                                {/* Google */}
                                <p className='text-base description'>Already have an account? 
                                    <Link  state={location.state}
                                     to="/login" className='text-primary'> Login</Link></p><br /> 
                                <SocialLogin></SocialLogin>
                            </fieldset>
                        </form>
                    </div>
                </div>
    );
};

export default Register;