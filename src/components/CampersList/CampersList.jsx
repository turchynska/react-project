import  { useEffect, useState } from 'react';
import css from './CampersList.module.css';
import CamperCard from '../CamperCard/CamperCard';
import { fetchCampers } from '../../redux/products/operations';

const CampersList = () => {
    const [campers, setCampers] = useState([]);

    useEffect(() => {
        fetchCampers().then(data => setCampers(data));
    }, [])
    return (
        <div>
            {campers.map(camper => (
                <CamperCard key={camper.id} data={camper}/>
            ))}
        </div>
    )
}
export default CampersList;