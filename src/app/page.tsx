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
            Track record of shipping{" "}
            <span className="font-semibold">0→1 products</span>,{" "}
            <span className="font-semibold">AI-enabled features</span>, growth
            initiatives and full-stack internal tools
          </ListItem>
          <ListItem>
            Product-minded,{" "}
            <span className="font-semibold">AI-native engineer</span> with
            strong computer science fundamentals and leadership experience
          </ListItem>
          <ListItem>
            Committed and pragmatic{" "}
            <span className="font-semibold">activist</span> for{" "}
            <span className="font-semibold">animal welfare</span> and a{" "}
            <span className="font-semibold">plant-based future</span>
          </ListItem>
        </List>
      </Section>
      <Section title="Top skills">
        TypeScript • React • React Native • Next.js • Prisma • PostgreSQL •
        Supabase/Firebase • Python • FastAPI • AI toolchain
      </Section>
      <Section title="Work experience">
        <div className="flex flex-col gap-2">
          <Job
            company="Cleo"
            position="Senior Software Engineer"
            startDate={new Date("2025-09-01")}
          >
            <List>
              <ListItem>
                Built the <span className="font-semibold">React Native</span>{" "}
                client for Money IQ, a trivia and prize-draw product designed to
                drive organic growth
              </ListItem>
              {/* <ListItem>
                Created interactive animated experiences using{" "}
                <span className="font-semibold">Reanimated</span> and{" "}
                <span className="font-semibold">Rive</span>
              </ListItem> */}
              <ListItem>
                Designed and shipped a{" "}
                <span className="font-semibold">full-stack</span> internal
                Workforce Planning tool (
                <span className="font-semibold">React, Prisma, PostgreSQL</span>
                ) with AI
              </ListItem>
              <ListItem>
                Drove{" "}
                <span className="font-semibold">adoption of AI tools</span> and
                practices in the Front-End Chapter (
                <span className="font-semibold">
                  Claude Code, Codex, Conductor
                </span>
                , etc.)
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
                EHR product using <span className="font-semibold">React</span>{" "}
                and <span className="font-semibold">TypeScript</span>
              </ListItem>
              <ListItem>
                Continuously{" "}
                <span className="font-semibold">resolved the ambiguity</span> of
                shifting requirements in an emerging market niche
              </ListItem>
              <ListItem>
                Worked directly with the founders to turn{" "}
                <span className="font-semibold">vague problems</span> into{" "}
                <span className="font-semibold">shipped solutions</span>
              </ListItem>
              <ListItem>
                Owned the <span className="font-semibold">React Native</span>{" "}
                mobile recorder implementation{" "}
                <span className="font-semibold">
                  from technical design through launch
                </span>
              </ListItem>
              {/* <ListItem>
                Tech Stack:{" "}
                <span className="font-semibold">
                  TypeScript, React, React Native, Redux, TanStack Query
                </span>
                , Python, FastAPI
              </ListItem> */}
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
                Built an in-browser, real-time remote collaboration solution{" "}
                <span className="font-semibold">0→1</span> during the{" "}
                <span className="font-semibold">3-month incubator batch</span>
              </ListItem>
              <ListItem>
                <span className="font-semibold">Owned</span> the technical
                architecture and stack selection (
                <span className="font-semibold">TypeScript</span>,{" "}
                <span className="font-semibold">React</span>, WebSockets)
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
                Developed mobile and web applications to liberate doctors in
                private clinics from administrative overhead
              </ListItem>
              <ListItem>
                Onboarded and <span className="font-semibold">mentored</span>{" "}
                new team members on adopting{" "}
                <span className="font-semibold">TypeScript</span> and{" "}
                <span className="font-semibold">React</span> Hooks
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
                review for{" "}
                <span className="font-semibold">
                  millions of daily active users
                </span>
              </ListItem>
              <ListItem>
                Contributed to the platform&apos;s scale and reliability leading
                up to its{" "}
                <span className="font-semibold">
                  $1.5B acquisition by Adobe
                </span>
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
                to cut licensing and maintenance costs
              </ListItem>
              <ListItem>
                Built and shipped a working e-detailing iPad app,{" "}
                <span className="font-semibold">from scratch</span>, in a{" "}
                <span className="font-semibold">2-person</span> team over{" "}
                <span className="font-semibold">2 months</span>
              </ListItem>
            </List>
          </Job>
        </div>
      </Section>
      <Section title="Volunteering">
        <Job
          company="Otwarte Klatki / Open Cages"
          position="Organisational Development Coordinator"
          startDate={new Date("2013-12-01")}
          endDate={new Date("2017-12-01")}
        >
          <List>
            <ListItem>
              Helped{" "}
              <span className="font-semibold">
                grow the nonprofit organisation
              </span>{" "}
              from 15 volunteers to over 30 professionals + 200 volunteers
            </ListItem>
            <ListItem>
              Directly contributed to securing a{" "}
              <span className="font-semibold">$500k development grant</span>{" "}
              from Silicon Valley Community Foundation
            </ListItem>
            <ListItem>
              Worked on a range of campaigns, from{" "}
              <span className="font-semibold">promoting plant-based foods</span>{" "}
              via restaurant and gym partnerships , to improving the welfare of
              egg-laying hens through{" "}
              <span className="font-semibold">corporate outreach</span>
            </ListItem>
          </List>
        </Job>
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
      {/* <Section title="Personal Life">
        <div className="flex justify-between py-0.5">
          <div>🐕 Caring for a rescue dog named Batman</div>
          <div>·</div>
          <div>⛵️ Avid sailor</div>
          <div>·</div>
          <div>🎬 Film buff</div>
          <div>·</div>
          <div>💬 Speaks Polish, English, and a bit of Spanish</div>
        </div>
      </Section> */}
    </main>
  );
}
