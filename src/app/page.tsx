import Job from "@/components/job";
import List from "@/components/list";
import Section from "@/components/section";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-[296mm] w-[210mm] flex-col justify-between p-12 font-[family-name:var(--font-roboto-flex)] text-base font-light screen:border">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-normal">Krzysztof Adam Witalewski</h1>
          <div className="text-xl font-normal">Staff Software Engineer</div>
        </div>
        <div className="flex flex-col items-end gap-1 px-5 py-3 text-lg">
          <Link className="screen:underline" href="mailto:witalewski@gmail.com">
            witalewski@gmail.com
          </Link>
          <Link className="screen:underline" href="tel:+48607193307">
            +48607193307
          </Link>
        </div>
      </div>
      <Section title="Top skills">
        <List
          items={[
            "15+ years of development experience with modern stacks - React, TypeScript, etc.",
            "Always a team player who is willing to help others to increase overall team productivity",
            "Pragmatic and impact-oriented, with solid analytical and resource management skills",
            "Passionate about writing clean and maintainable, yet highly performant code",
          ]}
        />
      </Section>
      <Section title="Experience">
        <div className="flex flex-col gap-4">
          <Job
            company="Orchid (YC W23)"
            position="Senior Software Engineer"
            startDate={new Date("2023-06-01")}
          >
            <List
              items={[
                "Built an AI note-taking assistant on top of an existing EHR solution",
                "Used technical SEO to bring Orchid’s content to the front page of Google search results",
                "Established a process for rapidly developing new features based on the fluctuating demands of an emerging market while maintaining the existing 50k+ lines of legacy code",
                "Tech Stack: TypeScript, React, React Native, Redux, TanStack Query, Python, FastAPI",
              ]}
            />
          </Job>
          <Job
            company="Berry (YC W23)"
            position="Senior Software Engineer"
            startDate={new Date("2023-01-01")}
            endDate={new Date("2023-04-01")}
          >
            <List
              items={[
                "Built a complete software solution during  the YC W23 batch (a fixed-term greenfield project)",
                "Developed Chrome extension and web application for remote control of a shared screen",
                "Tech Stack: TypeScript, React, CSS, Chrome API",
              ]}
            />
          </Job>
          <Job
            company="Walnut"
            position="Senior Software Engineer"
            startDate={new Date("2022-09-01")}
            endDate={new Date("2022-12-01")}
          />
          <Job
            company="Kind"
            position="Senior Front-End Engineer"
            startDate={new Date("2019-10-01")}
            endDate={new Date("2022-08-01")}
          >
            <List
              items={[
                "Developed mobile and web applications for multimodal healthcare communication",
                "Onboarded and mentored new team members",
                "Led the adoption of new and improved techniques – transition from recompose to hooks, Reselect for Redux",
                "Tech Stack: TypeScript, React Native with Native Modules, React Native for Web, Redux",
              ]}
            />
          </Job>
          <Job
            company="Cleeng"
            position="Senior Front-End Engineer"
            startDate={new Date("2019-02-01")}
            endDate={new Date("2019-09-01")}
          />
          <Job
            company="Workfront / ProofHQ"
            position="Front-End Developer"
            startDate={new Date("2013-01-01")}
            endDate={new Date("2019-01-01")}
          >
            <List
              items={[
                "Developed a web application and browser extensions for the review and approval of digital media",
                "The company was eventually acquired by Adobe for 1.5 billion USD",
                "Tech Stack: React, MobX, CSS-in-JS, Mocha, Previously: Adobe/Apache Flex, ActionScript",
              ]}
            />
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
    </main>
  );
}
