import Job from "@/components/job";
import List from "@/components/list";
import ListItem from "@/components/list-item";
import Section from "@/components/section";
import { TITLE } from "@/constants";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-[296mm] w-[210mm] flex-col justify-between p-12 font-[family-name:var(--font-roboto-flex)] text-base font-light screen:border">
      <div className="align-center flex justify-between">
        <h1 className="text-2xl font-normal">Chris Witalewski</h1>
        <div className="text-2xl font-normal text-gray-600">{TITLE}</div>
      </div>
      <div className="flex justify-between self-stretch py-0.5 font-normal">
        <div>📍 Poznań, Poland </div>
        <div>·</div>
        <div>
          📱{" "}
          <Link className="screen:underline" href="tel:+48607193307">
            +48607193307
          </Link>
        </div>
        <div>·</div>
        <div>
          ✉️{" "}
          <Link className="screen:underline" href="mailto:witalewski@gmail.com">
            witalewski@gmail.com
          </Link>
        </div>
        <div>·</div>
        <div>
          🌍{" "}
          <Link
            className="underline"
            href="https://www.linkedin.com/in/witalewski/"
          >
            linkedin.com/in/witalewski
          </Link>
        </div>
      </div>
      <Section title="Summary">
        <List>
          <ListItem>
            {TITLE} with 16 years of professional experience building web and
            mobile products
          </ListItem>
          <ListItem>
            Track record of shipping 0→1 products, AI-enabled features, growth
            initiatives and full-stack internal tools
          </ListItem>
          <ListItem>
            Pragmatic, product-minded engineer focused on simple, maintainable
            systems and high team leverage
          </ListItem>
        </List>
      </Section>
      <Section title="Skills">
        TypeScript, React, React Native, Next.js, Redux, TanStack Query, Jest,
        Reanimated, Rive, Python, FastAPI, Prisma, PostgreSQL
      </Section>
      <Section title="Work experience">
        <div className="flex flex-col gap-2">
          <Job
            company="Cleo"
            position="Senior Product Engineer"
            startDate={new Date("2025-09-01")}
          >
            <List>
              <ListItem>
                Built the React Native client for Money IQ, a trivia and
                prize-draw product designed to drive organic growth
              </ListItem>
              <ListItem>
                Created interactive animated experiences using{" "}
                <span className="font-semibold">Reanimated</span> and{" "}
                <span className="font-semibold">Rive</span>
              </ListItem>
              <ListItem>
                Designed and shipped a full-stack internal Workforce Planning
                tool (
                <span className="font-semibold">React, Prisma, PostgreSQL</span>
                )
              </ListItem>
            </List>
          </Job>
          <Job
            company="Orchid (Y Combinator W23)"
            position="Senior Software Engineer"
            startDate={new Date("2023-06-01")}
            endDate={new Date("2025-08-31")}
          >
            <List>
              <ListItem>
                Built an AI note-taking assistant integrated into an existing
                EHR product
              </ListItem>
              <ListItem>
                Applied technical SEO that moved Orchid content onto page one of
                Google Search
              </ListItem>
              <ListItem>
                Owned the mobile recorder implementation from technical design
                through launch
              </ListItem>
              <ListItem>
                Tech Stack:{" "}
                <span className="font-semibold">
                  TypeScript, React, React Native, Redux, TanStack Query
                </span>
                , Python, FastAPI
              </ListItem>
            </List>
          </Job>
          <Job
            company="Berry (Y Combinator W23)"
            position="Senior Software Engineer (fixed-term)"
            startDate={new Date("2023-01-01")}
            endDate={new Date("2023-04-01")}
          >
            <List>
              <ListItem>
                Built an in-browser, real-time remote collaboration solution 0→1
                during the 3-month incubator batch
              </ListItem>
              <ListItem>
                Owned the technical architecture and stack selection
              </ListItem>
            </List>
          </Job>
          <Job
            company="Kind"
            position="Senior Front-End Engineer"
            startDate={new Date("2019-10-01")}
            endDate={new Date("2022-08-01")}
          >
            <List>
              <ListItem>
                Developed mobile and web applications for multi-modal healthcare
                communication
              </ListItem>
              <ListItem>Onboarded and mentored new team members</ListItem>
              <ListItem>
                Drove adoption of{" "}
                <span className="font-semibold">TypeScript</span> and{" "}
                <span className="font-semibold">React Hooks</span>, replacing
                JavaScript and Recompose
              </ListItem>
            </List>
          </Job>
          <Job
            company="Workfront / ProofHQ"
            position="Front-End Developer"
            startDate={new Date("2013-01-01")}
            endDate={new Date("2019-01-01")}
          >
            <List>
              <ListItem>
                Built a web application and browser extensions for digital media
                review for millions of daily active users
              </ListItem>
              <ListItem>
                The company was eventually acquired by Adobe for $1.5B
              </ListItem>
            </List>
          </Job>
          <Job
            company="Baroo Software / Cognifide"
            position="Full-Stack Developer"
            startDate={new Date("2010-09-01")}
            endDate={new Date("2012-12-01")}
          >
            <List>
              <ListItem>
                Migrated enterprise websites from a legacy CMS to Adobe CQ/WCM
              </ListItem>
              <ListItem>Built an e-detailing iPad app</ListItem>
            </List>
          </Job>
        </div>
      </Section>
      <Section title="Education">
        <Job
          company="Adam Mickiewicz University in Poznań"
          position=""
          startDate={new Date("2005-10-01")}
          endDate={new Date("2010-07-01")}
        >
          <div>
            Master of Science Degree in Computer Science with specialisation in
            Software Engineering
          </div>
        </Job>
      </Section>
      <Section title="Personal Life">
        <div className="flex justify-between py-0.5">
          <div>🐕 Caring for a rescue dog named Batman</div>
          <div>·</div>
          <div>⛵️ Avid sailor</div>
          <div>·</div>
          <div>🎬 Film buff</div>
          <div>·</div>
          <div>💬 Speaks Polish, English, and a bit of Spanish</div>
        </div>
      </Section>
    </main>
  );
}
