"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface PointsData {
  points: number;
  lastCheckIn: string | null;
  streak: number;
}

interface PointsContextType {
  points: number;
  streak: number;
  canCheckIn: boolean;
  checkIn: () => void;
  totalCheckIns: number;
}

const PointsContext = createContext<PointsContextType | undefined>(undefined);

const STORAGE_KEY = "gpt_image_points";
const POINTS_PER_CHECKIN = 10;
const STREAK_BONUS_MULTIPLIER = 0.5;

export function PointsProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PointsData>({
    points: 0,
    lastCheckIn: null,
    streak: 0,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setData(JSON.parse(stored));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const canCheckIn = () => {
    if (!data.lastCheckIn) return true;
    const last = new Date(data.lastCheckIn);
    const now = new Date();
    const diffDays = Math.floor(
      (now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24)
    );
    return diffDays >= 1;
  };

  const checkIn = () => {
    if (!canCheckIn()) return;

    const now = new Date();
    const isConsecutive =
      data.lastCheckIn &&
      Math.floor(
        (now.getTime() - new Date(data.lastCheckIn).getTime()) /
          (1000 * 60 * 60 * 24)
      ) === 1;

    const newStreak = isConsecutive ? data.streak + 1 : 1;
    const streakBonus = Math.floor(POINTS_PER_CHECKIN * (newStreak - 1) * STREAK_BONUS_MULTIPLIER);
    const earnedPoints = POINTS_PER_CHECKIN + streakBonus;

    const newData: PointsData = {
      points: data.points + earnedPoints,
      lastCheckIn: now.toISOString(),
      streak: newStreak,
    };

    setData(newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));

    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent("checkIn", { detail: { earnedPoints, streak: newStreak } }));
  };

  const totalCheckIns = data.lastCheckIn ? data.streak : 0;

  return (
    <PointsContext.Provider
      value={{
        points: data.points,
        streak: data.streak,
        canCheckIn: canCheckIn(),
        checkIn,
        totalCheckIns,
      }}
    >
      {children}
    </PointsContext.Provider>
  );
}

export function usePoints() {
  const context = useContext(PointsContext);
  if (!context) {
    throw new Error("usePoints must be used within PointsProvider");
  }
  return context;
}
