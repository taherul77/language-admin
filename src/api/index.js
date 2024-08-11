 
export default async function DesignationData() {
    const res = await fetch('http://103.219.160.253:5051/empgps_tracking/hrvdesignation/findAllHrvdesignationByAsStatus')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      return res.json()
  }