
"use client"
import React from 'react'
import dynamic from "next/dynamic";
import Check from '@/components/Demo/Check';
// const MapComponent = dynamic(() => import("../../components/Map/MapComponent.js"), { ssr: false });

const CheckPage = () => {
  return (
  <Check></Check>
  )
}

export default CheckPage