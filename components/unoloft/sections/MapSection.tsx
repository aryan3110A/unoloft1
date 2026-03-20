import { MAP_CARDS } from "@/components/unoloft/data";
import { cn } from "@/components/unoloft/utils";

const LOCATION_ADVANTAGES = [
  {
    name: "Nirma University",
    time: "Approx. 10 mins",
  },
  {
    name: "Silver Oak University",
    time: "Approx. 5 mins",
  },
  {
    name: "SG Highway",
    time: "Approx. 2 mins",
  },
  {
    name: "Gota Circle",
    time: "Approx. 2 mins",
  },
];

export default function MapSection() {
  return (
    <section id="map-sec">
      <div className="sh rv">
        <div className="s-ey">Location</div>
        <h2 className="s-t">
          Find Us <em>Easily</em>
        </h2>
        <p className="s-sub">
          Strategically located near major offices, colleges &amp; public
          transport in Ahmedabad.
        </p>
      </div>

      <div className="map-adv rv">
        <h3 className="map-adv-t">Prime Location Advantage</h3>
        <p className="map-adv-sub">
          Stay close to educational institutes, workplaces, and daily commuting
          corridors.
        </p>

        <div className="map-adv-g">
          {LOCATION_ADVANTAGES.map((item) => (
            <article className="map-adv-c" key={item.name}>
              <h4>{item.name}</h4>
              <p>{item.time}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="map-g">
        <div className="rvl">
          <div className="map-cards">
            {MAP_CARDS.map((card) => (
              <div
                className={cn(
                  "map-card",
                  card.mode === "boys" && "boys-only",
                  card.mode === "girls" && "girls-only",
                )}
                key={`${card.title}-${card.value}`}
              >
                <div className="map-ic">
                  <i className={card.icon} />
                </div>
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.value}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://www.google.com/maps?q=Royal%20Lakend%20Gota%20Jagatpur%20Road%20Sarkhej%20Gandhinagar%20Hwy%20behind%20Gota%20Lake%20opposite%20Royal%20Heights%20Ahmedabad%20Gujarat%20382481"
            target="_blank"
            className="btn-ora"
            style={{
              marginTop: 22,
              display: "inline-flex",
              fontSize: ".88rem",
            }}
            rel="noreferrer"
          >
            <i className="fa-solid fa-diamond-turn-right" /> Get Directions
          </a>
        </div>

        <div className="map-em rvr">
          <iframe
            src="https://www.google.com/maps?q=Royal%20Lakend%20Gota%20Jagatpur%20Road%20Sarkhej%20Gandhinagar%20Hwy%20behind%20Gota%20Lake%20opposite%20Royal%20Heights%20Ahmedabad%20Gujarat%20382481&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
