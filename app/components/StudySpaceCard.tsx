import ReserveButton from "./ReserveButton";

interface StudySpaceCardProps {
  name: string;
  capacity: number;
  isReserved: boolean;
  onReserve: () => void;
}

export default function StudySpaceCard({
  name,
  capacity,
  isReserved,
  onReserve,
}: StudySpaceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start justify-between">
      <h2 className="text-gray-900 text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">Capacity: {capacity}</p>
      <ReserveButton isReserved={isReserved} onClick={onReserve} />
    </div>
  );
}
