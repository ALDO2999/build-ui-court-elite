"use client";

import { cn } from "@/lib/cn";
import { Input } from "@/components/ui/Input";
import { timeSlots } from "@/lib/placeholder-data";

interface DateTimePickerProps {
  date: string;
  time: string | null;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}

export function DateTimePicker({
  date,
  time,
  onDateChange,
  onTimeChange,
}: DateTimePickerProps) {
  return (
    <div className="space-y-8">
      <Input
        label="Select Date"
        type="date"
        id="booking-date"
        value={date}
        onChange={(e) => onDateChange(e.target.value)}
        min={new Date().toISOString().split("T")[0]}
      />

      <div>
        <p className="block text-sm font-medium text-foreground mb-3">
          Select Time
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => onTimeChange(slot)}
              className={cn(
                "h-10 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
                time === slot
                  ? "bg-accent text-white"
                  : "bg-surface text-foreground hover:bg-surface-dark"
              )}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
