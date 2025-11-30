"use client";

import { useState } from "react";
import StudySpaceCard from "../components/StudySpaceCard";

export default function HomePage() {
  // State: which study spaces are reserved
  const [reserved, setReserved] = useState<{ [key: string]: boolean }>({});

  // Hardcoded list of study spaces
  const studySpaces = [
    { id: 1, name: "Lidon Library 202", capacity: 6 },
    { id: 2, name: "Lidon Library 203", capacity: 6 },
    { id: 3, name: "Crossroads study room", capacity: 10 },
    { id: 4, name: "CS lounge room 1", capacity: 20 },
    { id: 5, name: "East Campus - The Pod table", capacity: 6 },
    { id: 6, name: "Southwick dining hall table", capacity: 4 },
  ];

  // Event handler: toggle reservation
  const handleToggleReserve = (id: number) => {
    setReserved((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-gray-900 text-4xl font-bold mb-6">📚 Study Hall Reservations</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {studySpaces.map((space) => (
          <StudySpaceCard
            key={space.id}
            name={space.name}
            capacity={space.capacity}
            isReserved={!!reserved[space.id]}
            onReserve={() => handleToggleReserve(space.id)}
          />
        ))}
      </div>
    </main>
  );
}
