"use client";

import React, { Suspense } from 'react'
import { Header } from '../components'

import Footer from '../components/Footer';
// import ServicesInfo from '../components/ServiceInfo';
import { useState } from 'react';
import ServicesProduct from '../components/ServicesProduct';

const page = () => {
  const searchValue = ""
  const selectedServiceFromHeader = null;
  return (
    <div>
      <ServicesProduct/>
      
     {/* <Suspense fallback={<></>}><ServicesInfo searchValue={searchValue}  selectedServiceFromHeader={selectedServiceFromHeader}/></Suspense>  */}
   
     </div>
)
}
export default page