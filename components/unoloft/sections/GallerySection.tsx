import { GALLERY_ITEMS } from "@/components/unoloft/data";
import type { GalleryFilter, Mode } from "@/components/unoloft/types";
import { cn } from "@/components/unoloft/utils";

type GallerySectionProps = {
  mode: Mode;
  filter: GalleryFilter;
  onFilterChange: (filter: GalleryFilter) => void;
  onOpenLightbox: (index: number) => void;
};

function shouldShowItem(
  mode: Mode,
  filter: GalleryFilter,
  category: Exclude<GalleryFilter, "all">,
) {
  if (filter === "all") {
    if (mode === "boys") {
      return (
        category === "boys-room" ||
        category === "common" ||
        category === "facilities"
      );
    }

    if (mode === "girls") {
      return (
        category === "girls-room" ||
        category === "common" ||
        category === "facilities"
      );
    }

    return true;
  }

  return category === filter;
}

export default function GallerySection({
  mode,
  filter,
  onFilterChange,
  onOpenLightbox,
}: GallerySectionProps) {
  return (
    <section id="gallery">
      <div className="sh sh-c rv">
        <div className="s-ey">Photo Gallery</div>
        <h2 className="s-t">
          Life at <em>Unoloft</em>
        </h2>
        <p className="s-sub">
          A visual tour of our beautiful spaces, rooms &amp; community.
        </p>
      </div>

      <div className="gal-tabs">
        <button
          className={cn("gf", filter === "all" && "active")}
          onClick={() => onFilterChange("all")}
        >
          All
        </button>
        <button
          className={cn("gf boys-only", filter === "boys-room" && "active")}
          onClick={() => onFilterChange("boys-room")}
        >
          Boys Rooms
        </button>
        <button
          className={cn("gf girls-only", filter === "girls-room" && "active")}
          onClick={() => onFilterChange("girls-room")}
        >
          Girls Rooms
        </button>
        <button
          className={cn("gf", filter === "common" && "active")}
          onClick={() => onFilterChange("common")}
        >
          Common Areas
        </button>
        <button
          className={cn("gf", filter === "facilities" && "active")}
          onClick={() => onFilterChange("facilities")}
        >
          Facilities
        </button>
      </div>

      <div className="gal-masonry" id="galGrid">
        {GALLERY_ITEMS.map((item, index) => {
          const visible = shouldShowItem(mode, filter, item.category);

          return (
            <div
              className="gi"
              data-cat={item.category}
              key={`${item.alt}-${index}`}
              onClick={() => onOpenLightbox(index)}
              style={{ display: visible ? undefined : "none" }}
            >
              <img src={item.image} alt={item.alt} />
              <div className="gi-ov">
                <i className="fa-solid fa-expand" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
