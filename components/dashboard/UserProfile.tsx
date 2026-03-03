import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function UserProfile() {
  return (
    <div className="max-w-lg space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
          <span className="text-xl font-bold text-accent">JD</span>
        </div>
        <div>
          <h3 className="font-semibold text-foreground">John Doe</h3>
          <p className="text-sm text-muted">Premium Member</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="First Name" id="profile-first" defaultValue="John" />
          <Input label="Last Name" id="profile-last" defaultValue="Doe" />
        </div>
        <Input label="Email" id="profile-email" type="email" defaultValue="john@example.com" />
        <Input label="Phone" id="profile-phone" type="tel" defaultValue="+971 50 123 4567" />
      </div>

      <Button variant="primary">Save Changes</Button>
    </div>
  );
}
