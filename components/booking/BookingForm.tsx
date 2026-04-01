"use client";

import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

interface BookingFormProps {
  courtName: string;
  date: string;
  time: string;
  onSubmit: () => void;
}

export function BookingForm({ courtName, date, time, onSubmit }: BookingFormProps) {
  return (
    <div className="space-y-8">
      {/* Summary */}
      <div className="bg-surface rounded-2xl p-6">
        <h3 className="font-semibold text-foreground mb-4">Booking Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted">Court</span>
            <span className="font-medium text-foreground">{courtName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Date</span>
            <span className="font-medium text-foreground">{date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Time</span>
            <span className="font-medium text-foreground">{time}</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="First Name" id="first-name" placeholder="John" />
          <Input label="Last Name" id="last-name" placeholder="Doe" />
        </div>
        <Input label="Email" id="email" type="email" placeholder="john@example.com" />
        <Input label="Phone" id="phone" type="tel" placeholder="+62" />
        <Select
          label="Duration"
          id="duration"
          options={[
            { value: "60", label: "1 Hour" },
            { value: "90", label: "1.5 Hours" },
            { value: "120", label: "2 Hours" },
          ]}
        />
        <Textarea
          label="Notes (Optional)"
          id="notes"
          placeholder="Any special requests..."
        />
      </div>

      <Button variant="primary" size="lg" className="w-full" onClick={onSubmit}>
        Confirm Booking
      </Button>
    </div>
  );
}
