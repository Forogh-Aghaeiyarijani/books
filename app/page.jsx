import RoomCard from '@/components/RoomCard';
import Heading from '@/components/Heading';
import getAllHandyman from './actions/getAllHandyman';
export default async function Home() {
  const handyman =  await getAllHandyman()
  return (
    <>
    <Heading title='Available Booking' />
     {handyman.length > 0 ? (
      handyman.map((handymans) => <RoomCard key={handymans.id} handymans={handymans} />) ) : (
        <p>No rooms available at the moment</p>
     )}
    </>
  );
} 
