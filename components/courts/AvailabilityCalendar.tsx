"use client";

import { cn } from "@/lib/cn";
import { timeSlots } from "@/lib/placeholder-data";

const mockAvailability: Record<string, boolean> = {
  "07:00": true,
  "08:00": true,
  "09:00": false,
  "10:00": false,
  "11:00": true,
  "12:00": true,
  "13:00": true,
  "14:00": false,
  "15:00": true,
  "16:00": true,
  "17:00": false,
  "18:00": false,
  "19:00": true,
  "20:00": true,
  "21:00": true,
  "22:00": true,
};

export function AvailabilityCalendar() {
  return (
    <div>
      <h3 className="font-semibold text-foreground mb-4">Today&apos;s Availability</h3>
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
        {timeSlots.map((slot) => {
          const available = mockAvailability[slot] ?? true;
          return (
            <div
              key={slot}
              className={cn(
                "h-10 rounded-lg flex items-center justify-center text-xs font-medium",
                available
                  ? "bg-accent/10 text-accent"
                  : "bg-muted-foreground/10 text-muted line-through"
              )}
            >
              {slot}
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-6 mt-4 text-xs text-muted">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-accent/10" />
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-muted-foreground/10" />
          <span>Booked</span>
        </div>
      </div>
    </div>
  );
}
