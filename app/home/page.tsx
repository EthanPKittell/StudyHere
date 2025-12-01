"use client";

import { useState, useEffect } from "react";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import StudySpaceCard from "../components/StudySpaceCard";

interface StudySpace {
  id: string;
  name: string;
  capacity: number;
  isReserved: boolean;
}

export default function HomePage() {
  const [studySpaces, setStudySpaces] = useState<StudySpace[]>([]);
  const [loading, setLoading] = useState(true);

  // Real-time listener for study spaces
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "studySpaces"),
      (snapshot) => {
        const spaces = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as StudySpace[];
        setStudySpaces(spaces);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching study spaces:", error);
        setLoading(false);
      }
    );

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  // Toggle reservation in Firebase
  const handleToggleReserve = async (id: string, currentStatus: boolean) => {
    try {
      const spaceRef = doc(db, "studySpaces", id);
      await updateDoc(spaceRef, {
        isReserved: !currentStatus,
      });
    } catch (error) {
      console.error("Error updating reservation:", error);
    }
  };

  if (loading) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-600">Loading study spaces...</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-gray-900 text-4xl font-bold mb-6">
        📚 Study Hall Reservations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {studySpaces.map((space) => (
          <StudySpaceCard
            key={space.id}
            name={space.name}
            capacity={space.capacity}
            isReserved={space.isReserved}
            onReserve={() => handleToggleReserve(space.id, space.isReserved)}
          />
        ))}
      </div>
    </main>
  );
}