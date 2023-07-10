import React from "react"

interface CardOptions {
  cardTitle: string,
  cardWidth: string,
  planPrice: string,
  planSubTxt: string,
  optionData: string[],
  // optionData: Record<string,any>[],
}

const Card: React.FC<CardOptions> = ({ cardTitle, cardWidth, planPrice, planSubTxt, optionData, }) => {

  return (
    <section className={`m-1 border border-relianceRed/50 ${cardWidth}`}>
      <div className="bg-[#E59999] p-2 text-center text-[#505050] uppercase font-semibold min-h-[40px]">
        {cardTitle}
      </div>

      <div className="bg-[#F2CCCC] p-3 text-lg text-center text-[#505050] uppercase font-semibold ">
        <p>₦{parseFloat(planPrice).toLocaleString('us')}</p>
        <p className="capitalize text-base">{planSubTxt}</p>
      </div>

      <ul>
        {
          optionData?.map((option) => (
            <li className="bg-white even:bg-[#F2CCCC] p-2 text-center">{option}</li>
          ))
        }
      </ul>

    </section>
  )
}

export default Card