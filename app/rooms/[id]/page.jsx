import rooms from '@/data/rooms.json';
const RoomPage = ({ params }) => {
    const { id } = params;
    return ( <>Room {id}</> );
}
 
export default RoomPage;