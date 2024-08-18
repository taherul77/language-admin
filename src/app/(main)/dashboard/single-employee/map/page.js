import React from 'react'
import dynamic from "next/dynamic";
const SingleEmployeeMapComponent = dynamic(() => import("../../../../../components/SingleEmployeeComponent/SingleEmployeeMapComponent/SingleEmployeeMapComponent.js"), { ssr: false });

const page = () => {
  return (
    <>
    
    <SingleEmployeeMapComponent/>
    
    
    
    </>
  )
}

export default page