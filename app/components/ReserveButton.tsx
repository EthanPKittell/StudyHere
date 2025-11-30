interface ReserveButtonProps {
  isReserved: boolean;
  onClick: () => void;
}

export default function ReserveButton({ isReserved, onClick }: ReserveButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`mt-3 px-4 py-2 rounded-lg text-white font-medium transition
        ${isReserved ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}
      `}
    >
      {isReserved ? "Cancel Reservation" : "Reserve"}
    </button>
  );
}
