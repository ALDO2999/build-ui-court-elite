import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { bookings } from "@/lib/placeholder-data";

export function UpcomingReservations() {
  const upcoming = bookings.filter((b) => b.status === "upcoming");

  if (upcoming.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted">No upcoming reservations.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {upcoming.map((booking) => (
        <div
          key={booking.id}
          className="bg-white border border-muted-foreground/10 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">{booking.courtName}</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(booking.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {booking.time} ({booking.duration})
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                Court Elite
              </span>
            </div>
          </div>
          <Button variant="outline" className="shrink-0">
            Cancel
          </Button>
        </div>
      ))}
    </div>
  );
}
