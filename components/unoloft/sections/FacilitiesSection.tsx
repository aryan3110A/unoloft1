import { FACILITIES } from "@/components/unoloft/data";

export default function FacilitiesSection() {
  return (
    <section id="facilities">
      <div className="sh sh-c rv">
        <div className="s-ey">Amenities</div>
        <h2 className="s-t">
          World-Class <em>Facilities</em>
        </h2>
        <p className="s-sub">
          Everything you need for a comfortable, productive, and joyful stay —
          all under one roof.
        </p>
      </div>

      <div className="fac-grid">
        {FACILITIES.map((facility) => (
          <div
            className="fac-c rv"
            key={facility.name}
            style={{ transitionDelay: facility.delay }}
          >
            <div className="fac-ic">
              <i className={facility.icon} />
            </div>
            <div className="fac-n">{facility.name}</div>
            <div className="fac-d">{facility.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
