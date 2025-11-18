import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
const Coverage = () => {
  const serviceCenters = useLoaderData();
  const handleSearch =(e)=>{
    e.preventDefault()
    const location =e.target.location.value;
    const district =serviceCenters.find(c=>c.district.toLowerCase().include(location.toLowerCase()  ))
    if(district){
      const coord =[district.latitude.district.longitude]
      console.log(district,coord)
    }
  }
  // console.log(serviceCenter)
  const position = [23.8103, 90.4125]
  
  return (
    <div className='px-30 bg-white mt-8 pb-20 mb-31 rounded-4xl'>
      <h1 className='font-extrabold text-[56px] text-secondary pt-20 pb-12'>We are available in 64 districts</h1>

      <div className='pb-25 '>
       <form onSubmit={handleSearch}>
         <label className="input join-item rounded-[50px] rounded-l-full border-0 ">
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
          <input type="search"
            name='location'
          required placeholder="Search" />

        </label>
        <button className="btn btn-primary join-item rounded-[50px] ">Search</button>
       </form>
      </div>
      <h1 className='font-extrabold text-secondary text-3xl pb-12'>We deliver almost all over Bangladesh</h1>

      <div className='h-550px]  '>
        <MapContainer
          className='h-[550px] '
          center={position} zoom={7} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            serviceCenters.map(center =>
              <Marker position={[center.latitude, center.longitude]}>
                <Popup>
                  <strong>{center.district}</strong> <br />
                  Service Area: {center.covered_area.join(",")} <br />
                </Popup>
              </Marker>
            )
          }
        </MapContainer>,
      </div>
    </div>
  );
};

export default Coverage;