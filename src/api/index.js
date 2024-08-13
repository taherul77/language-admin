export async function fetchData(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

export const DesignationData = () => fetchData('http://103.219.160.253:5051/empgps_tracking/hrvdesignation/findAllHrvdesignationByAsStatus');
export const AllEmployee = () => fetchData('http://103.219.160.253:5051/empgps_tracking/bovEmpInfo/findAllBovEmployeeInfos');
export const AllLocationEmployee = () => fetchData('http://103.219.160.253:5051/empgps_tracking/empTrackInfo/allEmpGpsTrackInfos');
