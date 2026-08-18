import Job from "@/components/job";
import List from "@/components/list";
import ListItem from "@/components/list-item";
import Section from "@/components/section";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-[296mm] w-[210mm] flex-col justify-between p-12 font-[family-name:var(--font-roboto-flex)] text-base font-light screen:border">
      <div className="align-center flex justify-between">
        <h1 className="text-2xl font-normal">Chris Witalewski</h1>
        <div className="text-2xl font-normal text-gray-600">
          Senior Software Engineer
        </div>
      </div>
      <div className="flex justify-between self-stretch border-b border-t py-0.5 font-normal">
        <div>📍 Poznań, Poland </div>
        <div>
          📱{" "}
          <Link className="screen:underline" href="tel:+48607193307">
            +48607193307
          </Link>
        </div>
        <div>
          ✉️{" "}
          <Link className="screen:underline" href="mailto:witalewski@gmail.com">
            witalewski@gmail.com
          </Link>
        </div>
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
      <Section title="Top Skills">
        <List>
          <ListItem>
            15+ years of development experience&mdash;
            <span className="font-semibold">
              TypeScript, React, and React Native
            </span>
          </ListItem>
          <ListItem>
            Always a <span className="font-semibold">team player</span> who is
            willing to help others to increase overall team productivity
          </ListItem>
          <ListItem>
            <span className="font-semibold">Pragmatic</span> and{" "}
            <span className="font-semibold">results-oriented</span>, with solid
            analytical and resource management skills
          </ListItem>
          <ListItem>
            Passionate about writing{" "}
            <span className="font-semibold">simple</span> and{" "}
            <span className="font-semibold">maintainable</span>, yet{" "}
            <span className="font-semibold">highly performant</span> code
          </ListItem>
          <ListItem>
            Thriving in international, distributed and asynchronous teams&mdash;
            <span className="font-semibold">working remotely since 2013</span>
          </ListItem>
        </List>
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
                Developed the mobile client for Money IQ, Cleo's trivia &
                prize-draw game
              </ListItem>
              <ListItem>
                Built interactive animated experiences in{" "}
                <span className="font-semibold">React Native</span> with{" "}
                <span className="font-semibold">Reanimated</span> and{" "}
                <span className="font-semibold">Rive</span>
              </ListItem>
              <ListItem>
                Designed and shipped a full-stack internal Workforce Planning
                tool (
                <span className="font-semibold">React, Prisma, Postgres</span>)
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
                Built an AI note-taking assistant on top of an existing EHR
                solution in{" "}
                <span className="font-semibold">React ant TypeScript</span>
              </ListItem>
              <ListItem>
                Delivered a mobile application in{" "}
                <span className="font-semibold">React Native</span> for
                recording and transcribing meetings
              </ListItem>
              <ListItem>
                Used technical SEO to bring Orchid&apos;s content to the front
                page of Google search results
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
          {/* <Job
            company="Berry (YCombinator W23)"
            position="Senior Software Engineer (fixed&ndash;term)"
            startDate={new Date("2023-01-01")}
            endDate={new Date("2023-04-01")}
          >
            <List>
              <ListItem>
                Created a real-time in-browser remote collaboration solution
                (like Figma) during the YC W23 batch
              </ListItem>
              <ListItem>
                Tech Stack:{" "}
                <span className="font-semibold">TypeScript, React</span>, CSS,
                Chrome Extensions API
              </ListItem>
            </List>
          </Job>
          <Job
            company="Kind"
            position="Senior Software Engineer"
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
                Onboarded and mentored new team members; Led the adoption of new
                technical solutions
              </ListItem>
              <ListItem>
                Tech Stack:{" "}
                <span className="font-semibold">
                  TypeScript, React Native with Native Modules, React Native for
                  Web, Redux
                </span>
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
                Developed a web application and browser extensions for digital
                media review and approval
              </ListItem>
              <ListItem>
                The company was later acquired by Adobe for 1.5 billion USD
              </ListItem>
              <ListItem>
                Tech Stack: JavaScript,{" "}
                <span className="font-semibold">React</span>, MobX, CSS-in-JS,
                Mocha, Previously: Apache Flex
              </ListItem>
            </List>
          </Job>
          <Job
            company="Baroo Software / Cognifide"
            position="Full-Stack Developer"
            startDate={new Date("2010-09-01")}
            endDate={new Date("2012-12-01")}
          />
          <Job
            company="goEuropa"
            position="Software Developer"
            startDate={new Date("2009-05-01")}
            endDate={new Date("2010-09-01")}
          />
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
      <Section title="Personal Information">
        <div className="flex justify-between py-0.5 text-sm">
          <div>🐕 Taking care of a rescue dog named Batman</div>
          <div>⛵️ Avid sailor</div>
          <div>🎬 Film buff</div>
          <div>💬 Speaks Polish, English, and a bit of Spanish</div>
        </div>
      </Section>
    </main>
  );
}
