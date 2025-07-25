import Image from "next/image";
import Link from "next/link";
const RoomCard = ({ handymans }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div key={handymans.id} className="flex flex-col sm:flex-row sm:space-x-4">
        <Image
          src={`/images/rooms/${handymans.image}`}
          width={400}
          height={100}
          alt="Grand Conference Hall"
          className="w-full sm:w-32 sm:h-32 mb-3 sm:mb-0 object-cover rounded-lg"
        />
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">Electricity</h4>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800"> Book:</span> Check our Availability
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800"> Availability:</span>From 9
            AM - 5 PM
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800"> Price:</span>
            ${handymans.price_per_hour}/hour
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0">
        <Link
          href={`/rooms/${handymans.$id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
