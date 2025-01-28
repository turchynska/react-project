import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CamperCard from "../CamperCard/CamperCard";
import { fetchCampers } from "../../redux/campers/operations.js";

const CampersList = () => {
  const [campers, setCampers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCampersData = async () => {
      try {
        const data = await dispatch(fetchCampers());
        setCampers(data);
      } catch (error) {
        console.error("Error fetching campers:", error);
      }
    };

    fetchCampersData();
  }, [dispatch]);

  return (
    <div>
      {campers.length > 0 ? (
        campers.map((camper) => <CamperCard key={camper.id} data={camper} />)
      ) : (
        <p>Loading campers...</p>
      )}
    </div>
  );
};

export default CampersList;
