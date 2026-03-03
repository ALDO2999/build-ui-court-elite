"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { UpcomingReservations } from "@/components/dashboard/UpcomingReservations";
import { BookingHistory } from "@/components/dashboard/BookingHistory";
import { UserProfile } from "@/components/dashboard/UserProfile";
import { cn } from "@/lib/cn";

const tabs = ["Upcoming", "History", "Profile"] as const;

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Upcoming");

  return (
    <>
      <div className="bg-foreground pt-32 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Dashboard
          </h1>
          <p className="mt-4 text-white/60 text-lg">
            Manage your bookings and account.
          </p>
        </div>
      </div>

      <Section>
        {/* Tabs */}
        <div className="flex border-b border-muted-foreground/10 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all border-b-2 -mb-px cursor-pointer",
                activeTab === tab
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted hover:text-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "Upcoming" && <UpcomingReservations />}
        {activeTab === "History" && <BookingHistory />}
        {activeTab === "Profile" && <UserProfile />}
      </Section>
    </>
  );
}
