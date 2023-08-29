import { FeatureCard } from "./components/FeatureCard"

//images URL
import iconSupervisor from "./assets/images/icon-supervisor.svg"
import iconTeamBuilder from "./assets/images/icon-team-builder.svg"
import iconKarma from "./assets/images/icon-karma.svg"
import iconCalculator from "./assets/images/icon-calculator.svg"

export const App = () => {
  const featureCards = [
    {
      title: "Supervisor",
      paragraph: "Monitors activity to identify project roadblocks",
      imageUrl: iconSupervisor,
      mainColor: "hsl(180, 62%, 55%)"
    },
    {
      title: "Team Builder",
      paragraph: "Scans our talent network to create the optimal team for your project",
      imageUrl: iconTeamBuilder,
      mainColor: "hsl(0, 78%, 62%)"
    },
    {
      title: "Karma",
      paragraph: "Regularly evaluates our talent to ensure quality",
      imageUrl: iconKarma,
      mainColor: "hsl(34, 97%, 64%)"
    },
    {
      title: "Calculator",
      paragraph: "Uses data from past projects to provide better delivery estimates",
      imageUrl: iconCalculator,
      mainColor: "hsl(212, 86%, 64%)"
    }
  ]
  return (
    <main className="min-h-screen flex items-center justify-center bg-very-light-gray">
      <div className="w-[90%] max-w-7xl flex flex-col items-center gap-24 text-grayish-blue py-8 lg:p-0">
        <header className="w-full max-w-xs flex flex-col gap-4 text-center">
          <h1 className="text-[1.7rem] text-very-dark-blue font-light">
            Reliable, efficient delivery <span className="font-semibold">Powered by Technology</span>
          </h1>

          <p>
            Our Artificial Intelligence powered tools use millions of project data points
            to ensure that your project is successful
          </p>
        </header>

        <section className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-4 gap-8">
          {featureCards.map((featureCard, index) => {
            return <FeatureCard
              key={index}
              index={index}
              title={featureCard.title}
              paragraph={featureCard.paragraph}
              imageUrl={featureCard.imageUrl}
              mainColor={featureCard.mainColor}
            />
          })}
        </section>
      </div>
    </main>
  )
}
