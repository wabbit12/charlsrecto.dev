import Reveal from './Reveal';

const skills = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Tailwind CSS' },
  { name: 'Java' },
  { name: 'PHP' },
  { name: 'Python' },
  { name: 'C#' },
  { name: 'Firebase' },
  { name: 'MySQL' },
  { name: 'MongoDB' },
  { name: 'Ionic' },
  { name: 'Angular' },
  { name: 'React Native' },
  { name: 'Express' },
  { name: 'Node.js' },
  { name: 'Arduino (C++)' },
  { name: 'GitHub' },
];

const iconFor = (name) => {
  switch (name) {
    case 'React':
      return <i className="devicon-react-original colored text-3xl" />;
    case 'Next.js':
      return <i className="devicon-nextjs-plain text-3xl" />;
    case 'Tailwind CSS':
      return <i className="devicon-tailwindcss-original colored text-3xl" />;
    case 'Java':
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
          alt="Java"
          className="h-8 w-8"
        />
      );
    case 'PHP':
      return <i className="devicon-php-plain colored text-3xl" />;
    case 'Python':
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          alt="Python"
          className="h-8 w-8"
        />
      );
    case 'C#':
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
          alt="C#"
          className="h-8 w-8"
        />
      );
    case 'Firebase':
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
          alt="Firebase"
          className="h-8 w-8"
        />
      );
    case 'MySQL':
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
          alt="MySQL"
          className="h-8 w-8"
        />
      );
    case 'MongoDB':
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
          alt="MongoDB"
          className="h-8 w-8"
        />
      );
    case 'Ionic':
      return <i className="devicon-ionic-original colored text-3xl" />;
    case 'Angular':
      return <i className="devicon-angularjs-plain colored text-3xl" />;
    case 'React Native':
      return <i className="devicon-reactnative-original-wordmark colored text-3xl" />;
    case 'Express':
      return <i className="devicon-express-original text-3xl" />;
    case 'Node.js':
      return <i className="devicon-nodejs-plain colored text-3xl" />;
    case 'Arduino (C++)':
      return <i className="devicon-arduino-plain-wordmark colored text-3xl" />;
    case 'GitHub':
      return <i className="devicon-github-original text-3xl text-white" />;
    default:
      return null;
  }
};

function SkillLogo({ name }) {
  const icon = iconFor(name);
  return (
    <div className="h-10 w-10 shrink-0 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
      {icon || (
        <span className="text-sm font-bold text-slate-200">
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section scroll-mt-24 space-y-6">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Skills</p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="text-3xl sm:text-4xl font-bold">What I use</h2>
      </Reveal>
      <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3">
        {skills.map((skill, idx) => (
          <Reveal key={skill.name} delay={0.02 * idx}>
            <div className="glass rounded-lg border-white/10 px-2 py-2 text-xs font-semibold text-slate-100 flex flex-col items-center gap-1.5">
              <SkillLogo name={skill.name} />
              <span className="text-center">{skill.name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

