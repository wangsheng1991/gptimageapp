"use client";

import { useState } from "react";
import { Gift, Flame, Calendar, Check } from "lucide-react";
import { usePoints } from "./PointsContext";
import { Button } from "@/components/ui/button";

export default function CheckInButton() {
  const { points, streak, canCheckIn, checkIn, totalCheckIns } = usePoints();
  const [showReward, setShowReward] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState(0);

  const handleCheckIn = () => {
    checkIn();
    setEarnedPoints(10 + Math.floor(streak * 0.5));
    setShowReward(true);
    setTimeout(() => setShowReward(false), 3000);
  };

  return (
    <div className="relative">
      <Button
        onClick={handleCheckIn}
        disabled={!canCheckIn}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
          canCheckIn
            ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-orange-500/30"
            : "bg-gray-800 text-gray-400 cursor-not-allowed"
        }`}
      >
        {canCheckIn ? (
          <>
            <Gift className="w-4 h-4" />
            <span>Daily Check-in</span>
          </>
        ) : (
          <>
            <Check className="w-4 h-4" />
            <span>Checked In</span>
          </>
        )}
      </Button>

      {/* Points Display */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs">
        <div className="flex items-center gap-1 bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full">
          <Gift className="w-3 h-3" />
          <span>{points} pts</span>
        </div>
        {streak > 0 && (
          <div className="flex items-center gap-1 bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full">
            <Flame className="w-3 h-3" />
            <span>{streak} day streak</span>
          </div>
        )}
      </div>

      {/* Reward Animation */}
      {showReward && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 animate-bounce">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
            +{earnedPoints} points!
          </div>
        </div>
      )}
    </div>
  );
}
