import type { Mode } from "@/components/unoloft/types";
import { cn } from "@/components/unoloft/utils";

type NavbarProps = {
  mode: Mode;
  navScrolled: boolean;
  onModeChange: (mode: Mode) => void;
  onMobileOpen: () => void;
};

const MODES: Mode[] = ["all", "boys", "girls"];

export default function Navbar({
  mode,
  navScrolled,
  onModeChange,
  onMobileOpen,
}: NavbarProps) {
  return (
    <nav id="nav" className={cn(navScrolled && "s")}>
      <a href="#hero" className="nav-logo">
        <div className="logo-sq">U</div>
        <span className="logo-n">Unoloft</span>
      </a>

      <div className="nav-tabs">
        {MODES.map((value) => (
          <button
            key={value}
            className={cn("pg-tab", mode === value && "active")}
            data-mode={value}
            onClick={() => onModeChange(value)}
          >
            {value === "all" ? "All" : value === "boys" ? "Boys" : "Girls"}
          </button>
        ))}
      </div>

      <ul className="nav-r">
        <li>
          <a href="#pg-intro">About</a>
        </li>
        <li>
          <a href="#facilities">Facilities</a>
        </li>
        <li>
          <a href="#availability">Availability</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#contact" className="nav-cta">
            Contact Us
          </a>
        </li>
      </ul>

      <div className="hbg" onClick={onMobileOpen}>
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}
