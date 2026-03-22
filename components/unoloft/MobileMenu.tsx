import type { Mode } from "@/components/unoloft/types";
import { cn } from "@/components/unoloft/utils";

type MobileMenuProps = {
  open: boolean;
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  onClose: () => void;
};

const MODES: Mode[] = ["all", "boys", "girls"];

export default function MobileMenu({
  open,
  mode,
  onModeChange,
  onClose,
}: MobileMenuProps) {
  return (
    <>
      <div
        className={cn("mob-ov", open && "on")}
        id="mobOv"
        onClick={onClose}
      />
      <div className={cn("mob-m", open && "on")} id="mobM">
        <span className="mob-x" onClick={onClose}>
          <i className="fa-solid fa-xmark" />
        </span>

        <div className="mob-tabs-w">
          {MODES.map((value) => (
            <button
              key={value}
              className={cn("pg-tab", mode === value && "active")}
              data-mode={value}
              onClick={() => {
                onModeChange(value);
                onClose();
              }}
            >
              {value === "all" ? "All" : value === "boys" ? "Boys" : "Girls"}
            </button>
          ))}
        </div>

        <a href="#pg-intro" onClick={onClose}>
          About
        </a>
        <a href="#facilities" onClick={onClose}>
          Facilities
        </a>
        <a href="#rooms" onClick={onClose}>
          Rooms
        </a>

        <a href="#gallery" onClick={onClose}>
          Gallery
        </a>
        <a href="#faq" onClick={onClose}>
          FAQ
        </a>
        <a href="#map-sec" onClick={onClose}>
          Location
        </a>
        <a
          href="#contact"
          onClick={onClose}
          style={{ color: "var(--brand)", fontWeight: 700 }}
        >
          Contact Us
        </a>
      </div>
    </>
  );
}
