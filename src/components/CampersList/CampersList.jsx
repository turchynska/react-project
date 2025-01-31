import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations.js";
import CamperCard from "../CamperCard/CamperCard";

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.items);
  const isLoading = useSelector((state) => state.campers.isLoading);
  const error = useSelector((state) => state.campers.error);

  useEffect(() => {
   
    dispatch(fetchCampers({ page: 1, perPage: 10 }));
  }, [dispatch]);;

  if (isLoading) return <p>Loading campers...</p>;
  if (error) return <p>Error loading campers: {error}</p>;
  return (
    <div>
      {campers.length > 0 ? (
        campers.map((camper) => <CamperCard key={camper.id} camper={camper} />)
      ) : (
        <p>No campers available.</p>
      )}
    </div>
  );
}
  export default CampersList;