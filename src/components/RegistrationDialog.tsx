import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import seminarSpeaker from "@/assets/seminar-speaker.png";

const RegistrationDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("registration-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("registration-dismissed", "true");
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); }}>
      <DialogContent className="sm:max-w-sm p-0 overflow-hidden border-0">
        {/* Full background image */}
        <div
          className="relative w-full min-h-[420px] bg-cover bg-center flex flex-col justify-end"
          style={{ backgroundImage: `url(${seminarSpeaker})` }}
        >
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Content over image */}
          <div className="relative z-10 p-5 text-white">
            <DialogHeader>
              <DialogTitle className="text-center text-lg font-heading text-white">
                🎓 Career Counselling Seminar
              </DialogTitle>
              <DialogDescription className="text-center text-white/80 text-xs">
                A Comprehensive Career Counselling Seminar is coming up!
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-2 pt-3 text-sm">
              <div className="flex items-center gap-2 text-white/90">
                <CalendarDays size={15} className="shrink-0" />
                <span>Check Events page for schedule</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin size={15} className="shrink-0" />
                <span> IBCS,Seminar hall SOA Campus 2 Near sum Hospital,Bhubaneswar</span>
              </div>
              <a
                href="/Events"
      
                className="mt-2 inline-flex w-full items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-saffron-gradient text-primary-foreground font-medium shadow-saffron hover:opacity-90 transition-opacity text-sm"
              >
                <ExternalLink size={14} /> View All Events
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;
