import {
  Card,
  CardBody,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
} from "../../features/destinationSlice";
import { useEffect, useState } from "react";
import HeaderSection from "../../components/sections/HeaderSection";
import { useDestinations } from "../../hooks/useDestination";
import ActivityCard from "../../components/listings/ActivityCard";
import { Destination } from "../../components/sections/AddActivity";
import InputSelect from "../../components/inputs/InputSelect";

const Home: React.FC = () => {
  const { destinos } = useDestinations();
  const activities = destinos?.map((dest) => dest.activities);
  console.log(activities)
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);  
  if (loading) { return <div>Cargando destinos...</div> }
  if (error) { return <div>Error al cargar destinos: {error} </div> }
  const randomDestination = destinos ? destinos[Math.floor(Math.random() * destinos.length)] : null;
  let activitiesArray: any[] = []
  console.log(activitiesArray)
  const [selectedLocation, setSelectedLocation] = useState('');
 
  
  if (activities) {
    activities?.forEach((activities) => {
      if (Array.isArray(activities)) {
      activities.forEach((activity) => {
        if (typeof activity === 'object' && activity !== null) {
          activitiesArray.push({
            title: activity.title,
            _id: activity._id,
            description: activity.description,
            location: activity.location,
            galleryImage: activity.galleryImage,
          });
      }});
    }  
  });  
}

  const handleSelectChange = (selectedLocation: string) => {
    setSelectedLocation(selectedLocation);
  };

  const filteredActivities = selectedLocation
  ? activitiesArray.filter((activity) => activity.location === selectedLocation)
  : activitiesArray;
  
  return (
    <>
      <div className="mt-20 gap-3 lg:mx-3">
      <HeaderSection
				title='CHOOSE YOUR OWN ADVENTURE!'
				subtitle='Explore the best destinations in the world'
        image={randomDestination?.galleryImage}        
				 />	
         <InputSelect onSelectChange={handleSelectChange} />
      <ActivitySection destinations={filteredActivities} />
      </div>
    </>
  )
}

const ActivitySection: React.FC<{ destinations?: Destination[] }> = ({ destinations }) => {
  return (
    <Card className="mt-20">
      <CardBody>
        <div>
          <div className="flex px-5">
            <div className="grid grid-cols-1 min-[950px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1440px]:grid-cols-4 min-[1540px]:grid-cols-5 min-[1640px]:grid-cols-6 gap-1">
              {destinations?.map((activity) => (
                <ActivityCard key={activity._id} data={activity} />
              ))}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default Home;