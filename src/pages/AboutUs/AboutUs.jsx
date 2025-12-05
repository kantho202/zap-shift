import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AboutUs = () => {

    return (
        <div className='bg-white mt-8 mb-48 py-20 px-25 rounded-4xl'>
            <h1 className='font-extrabold text-[56px] text-secondary'>About Us</h1>
            <p className='pt-4 pb-25 font-normal text-base description'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                From personal <br /> packages to business shipments — we deliver on time, every time.</p>
            <div className='flex gap-12 text-[#000000] opacity-50'>
              
        
                

                <Tabs>
                    <TabList className="flex ">
                        <Tab className="font-normal text-[28px] active mr-12 cursor-pointer react-tabs__tab"
                        selectedClassName="text-[#5B6A2E]"
                        >Story</Tab>
                        <Tab  className="font-normal text-[28px] mr-12 cursor-pointer react-tabs__tab"
                            selectedClassName="text-[#5B6A2E]"
                        >Mission</Tab>
                        <Tab  
                        selectedClassName="text-[#5B6A2E]"
                        className="font-normal text-[28px] mr-12 cursor-pointer react-tabs__tab">Success</Tab>
                        <Tab 
                        selectedClassName="text-[#5B6A2E]"
                        className="font-normal text-[28px] mr-12 cursor-pointer react-tabs__tab">Team & Others</Tab>
                    </TabList>

                    <TabPanel>
                        <p className='description font-normal text-[20px] pt-12 pb-4'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
                            Over the years, our commitment to real-time tracking, efficient logistics, and customer-first
                             service has made us a trusted partner for thousands. Whether it's a personal gift
                              or a time-sensitive business delivery, we ensure it reaches its destination — on time,
                               every time.</p>
                        <p className='description font-normal text-[20px]  pb-4'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
                            Over the years, our commitment to real-time tracking, efficient logistics, and customer-first
                             service has made us a trusted partner for thousands. Whether it's a personal gift
                              or a time-sensitive business delivery, we ensure it reaches its destination — on time,
                               every time.</p>
                        <p className='description font-normal text-[20px]  pb-4'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
                            Over the years, our commitment to real-time tracking, efficient logistics, and customer-first
                             service has made us a trusted partner for thousands. Whether it's a personal gift
                              or a time-sensitive business delivery, we ensure it reaches its destination — on time,
                               every time.</p>
                        
                    </TabPanel>
                    <TabPanel>
                       <p className='description font-normal text-[20px] pt-12 pb-4'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
                            Over the years, our commitment to real-time tracking, efficient logistics, and customer-first
                             service has made us a trusted partner for thousands. Whether it's a personal gift
                              or a time-sensitive business delivery, we ensure it reaches its destination — on time,
                               every time.</p>
                      
                    </TabPanel>
                    <TabPanel>
                       <p className='description font-normal text-[20px] pt-12 pb-4'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
                            Over the years, our commitment to real-time tracking, efficient logistics, and customer-first
                             service has made us a trusted partner for thousands. Whether it's a personal gift
                              or a time-sensitive business delivery, we ensure it reaches its destination — on time,
                               every time.</p>
                       <p className='description font-normal text-[20px] pt-12 pb-4'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
                            Over the years, our commitment to real-time tracking, efficient logistics, and customer-first
                             service has made us a trusted partner for thousands. Whether it's a personal gift
                              or a time-sensitive business delivery, we ensure it reaches its destination — on time,
                               every time.</p>
                      
                    </TabPanel>
                    <TabPanel>
                       <p className='description font-normal text-[20px] pt-12 pb-4'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
                            Over the years, our commitment to real-time tracking, efficient logistics, and customer-first
                             service has made us a trusted partner for thousands. Whether it's a personal gift
                              or a time-sensitive business delivery, we ensure it reaches its destination — on time,
                               every time.</p>
                       <p className='description font-normal text-[20px] pt-12 pb-4'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
                            Over the years, our commitment to real-time tracking, efficient logistics, and customer-first
                             service has made us a trusted partner for thousands. Whether it's a personal gift
                              or a time-sensitive business delivery, we ensure it reaches its destination — on time,
                               every time.</p>
                       <p className='description font-normal text-[20px] pt-12 pb-4'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
                            Over the years, our commitment to real-time tracking, efficient logistics, and customer-first
                             service has made us a trusted partner for thousands. Whether it's a personal gift
                              or a time-sensitive business delivery, we ensure it reaches its destination — on time,
                               every time.</p>
                      
                    </TabPanel>
                </Tabs>


            </div>


            {/* <p className=' pb-4 description'>We started with a simple promise — to make parcel delivery fast,
                reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics,
                and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift
                or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p> */}
        </div>
    );
};

export default AboutUs;