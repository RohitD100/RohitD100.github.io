import "./About.css";
import { Type } from "./Type";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";

const subListStyle = {
  listStyle: "none",
  paddingLeft: 0,
  marginTop: "0.75rem",
  color: "white",
  fontSize: "0.95rem",
};

export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Rohit Dorage</span>
        </h1>
        <Type />
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="about__desc" data-aos="fade-right">
            I’m a Full-Stack Engineer with 3+ years of experience building
            scalable SaaS products, secure authentication systems, and desktop
            applications used in production by real users.
          </p>
          <p>
            I specialize in complex, non-trivial engineering problems—the kind
            where reliability, performance, and security actually matter.
          </p>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>
              🔧 What I Do Best
            </h2>

            <ol
              style={{
                listStylePosition: "inside",
                padding: 0,
                margin: 0,
              }}
            >
              <li style={{ marginBottom: "1.5rem" }}>
                <strong>Electron.js Desktop Applications</strong>
                <ul style={subListStyle}>
                  <li>Production-grade apps with terabyte-scale uploads</li>
                  <li>
                    Resumable uploads, fault tolerance & secure auth flows
                  </li>
                </ul>
              </li>

              <li style={{ marginBottom: "1.5rem" }}>
                <strong>Full-Stack SaaS Development</strong>
                <ul style={subListStyle}>
                  <li>React.js, Next.js, Node.js, Golang</li>
                  <li>Clean, maintainable REST APIs</li>
                </ul>
              </li>

              <li style={{ marginBottom: "1.5rem" }}>
                <strong>Authentication & Security</strong>
                <ul style={subListStyle}>
                  <li>Refresh-token based auth systems</li>
                  <li>Enterprise SSO (Next.js + iron-session)</li>
                  <li>Secure token lifecycle & encryption</li>
                </ul>
              </li>

              <li style={{ marginBottom: "1.5rem" }}>
                <strong>Cloud & Infrastructure</strong>
                <ul style={subListStyle}>
                  <li>AWS (S3, SQS, CI/CD with GitHub Actions)</li>
                  <li>Dockerized services & microservice architectures</li>
                </ul>
              </li>

              <li>
                <strong>Payments & Integrations</strong>
                <ul style={subListStyle}>
                  <li>Stripe, Dolby Media, TalkJS</li>
                  <li>Secure server-side validation & error handling</li>
                </ul>
              </li>
            </ol>
          </div>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>🧠 Recent Work Highlights</h2>
            <p style={{ textAlign: "center" }}>
              Architected a desktop uploader (Electron.js) for terabyte-scale
              data ingestion into AWS S3 with event-driven notifications.
              Designed a shared authentication package used across multiple
              microservices, standardizing security and reducing duplication.
              Built and maintained scalable backend services in Node.js and
              Golang for production SaaS platforms. Integrated Stripe payments
              and real-time messaging systems, improving user engagement and
              reliability.
            </p>
          </div>
        </div>
      </div>
      <Introduction />
      <Timeline />
    </>
  );
};
