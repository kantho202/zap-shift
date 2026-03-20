import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
const Coverage = () => {
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null)
  const handleSearch = (e) => {
    e.preventDefault()
    const location = e.target.location.value;
    const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()))
    if (district) {
      const coord = [district.latitude, district.longitude]
      mapRef.current.flyTo(coord, 14)
    }
  }
  const position = [23.8103, 90.4125]

  return (
    <div className='bg-white mt-8 px-4 sm:px-10 md:px-16 rounded-4xl pb-20 mb-20'>
      <h1 className='font-extrabold text-3xl sm:text-4xl md:text-[56px] text-secondary pt-10 md:pt-20 pb-8 md:pb-12'>We are available in 64 districts</h1>

      <div className='pb-10'>
        <form onSubmit={handleSearch} className='flex flex-wrap gap-2'>
          <label className="input join-item rounded-[50px] rounded-l-full border-0 flex-1 min-w-0">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" name='location' required placeholder="Search district..." className='w-full' />
          </label>
          <button className="btn btn-primary join-item rounded-[50px] text-black">Search</button>
        </form>
      </div>

      <h1 className='font-extrabold text-secondary text-xl sm:text-2xl md:text-3xl pb-8 md:pb-12'>We deliver almost all over Bangladesh</h1>

      <div className='w-full'>
        <MapContainer
          className='h-[350px] sm:h-[450px] md:h-[550px] w-full'
          center={position} zoom={7} ref={mapRef}
          scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            serviceCenters.map((center, i) =>
              <Marker key={i} position={[center.latitude, center.longitude]}>
                <Popup>
                  <strong>{center.district}</strong> <br />
                  Service Area: {center.covered_area.join(",")} <br />
                </Popup>
              </Marker>
            )
          }
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
