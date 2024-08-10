
"use client"
import React from 'react'
import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import("../../components/Map/MapComponent.js"), { ssr: false });

const CheckPage = () => {
  return (
   <MapComponent></MapComponent>
  )
}

export default CheckPage