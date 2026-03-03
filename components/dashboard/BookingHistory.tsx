import { cn } from "@/lib/cn";
import { bookings } from "@/lib/placeholder-data";

export function BookingHistory() {
  const past = bookings.filter((b) => b.status !== "upcoming");

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-muted-foreground/10">
            <th className="text-left text-xs font-semibold uppercase tracking-wider text-muted py-3 pr-4">Court</th>
            <th className="text-left text-xs font-semibold uppercase tracking-wider text-muted py-3 pr-4">Date</th>
            <th className="text-left text-xs font-semibold uppercase tracking-wider text-muted py-3 pr-4">Time</th>
            <th className="text-left text-xs font-semibold uppercase tracking-wider text-muted py-3 pr-4">Duration</th>
            <th className="text-left text-xs font-semibold uppercase tracking-wider text-muted py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {past.map((booking) => (
            <tr key={booking.id} className="border-b border-muted-foreground/5">
              <td className="py-4 pr-4 text-sm font-medium text-foreground">{booking.courtName}</td>
              <td className="py-4 pr-4 text-sm text-muted">
                {new Date(booking.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </td>
              <td className="py-4 pr-4 text-sm text-muted">{booking.time}</td>
              <td className="py-4 pr-4 text-sm text-muted">{booking.duration}</td>
              <td className="py-4">
                <span
                  className={cn(
                    "inline-block px-2.5 py-1 text-xs font-medium rounded-full capitalize",
                    booking.status === "completed" && "bg-accent/10 text-accent",
                    booking.status === "cancelled" && "bg-red-50 text-red-600"
                  )}
                >
                  {booking.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
