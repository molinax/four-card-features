export const FeatureCard = ({ title, paragraph, imageUrl, mainColor, index }) => {
  const handlePositionsCard = (index) => {
    if (index === 0) { //card-supervisor
      return "lg:row-start-2 lg:row-span-2"
    } else if (index === 1) { //card-team-builder
      return "lg:col-start-2 lg:row-span-2"
    } else if (index === 2) { //card karma
      return "lg:col-start-2 lg:row-start-3 lg:row-span-2"
    } else if (index === 3) { //card-calculator
      return "lg:col-start-3 lg:row-start-2 lg:row-span-2"
    }
  }

  return (
    <article
      className={`w-full max-w-xs lg:h-60 flex flex-col gap-8 bg-white p-6 rounded-md drop-shadow-xl ${handlePositionsCard(index)}`}
      style={{ boxShadow: `inset 0px 4px 0px 0px ${mainColor}` }}
    >
      <div>
        <h3 className="text-very-dark-blue font-semibold text-xl mb-2">{title}</h3>

        <p>{paragraph}</p>
      </div>

      <img
        src={imageUrl}
        alt="Feature card image"
        className="w-14 h-14 self-end"
      />
    </article>
  )
}
