import Card from "components/Card"
import SmallHeader from "components/SmHeader/SmallHeader"
import { useState } from "react"

const mytxt = `Opermadic is a single workspace application for your team, organization, or small to medium-sized business.`
function Pricing() {

    const [monthly, setmonthly] = useState(true)
    const [yearly, setyearly] = useState(false)

    function togglePlanDuration() {
        setmonthly(!monthly)
        setyearly(!yearly)
    }

    console.log(monthly, yearly)

    const cardopotions = ["Name", "Name", "Name", "Name", "Name", "Name", "Name"]


    return (
        <div className="min-h-[80vh] pt-[10vh]">
            <SmallHeader pagetitle="Pricing" header="Affordable Pricing" textContent={mytxt} textJustify="center" />
            <div className="container mx-auto min-h-[50vh] mb-10 p-1 flex flex-col justify-between">
                <div className="flex items-center justify-center h-[7vh] w-1/4 mx-auto">
                    <button onClick={() => togglePlanDuration()} disabled={monthly === true} className="disabled:opacity-30 bg-[#EBC5C5] text-[#505050] font-medium basis-1/2 h-full text-center border border-black flex items-center justify-center">Monthly</button>
                    <button onClick={() => togglePlanDuration()} disabled={yearly === true} className="disabled:opacity-30 bg-[#EBC5C5] text-[#505050] font-medium basis-1/2 h-full text-center border border-black flex items-center justify-center">Yearly</button>
                </div>

                <div className="min-h-[40vh] flex justify-center gap-10 mt-[10vh]">
                    <Card cardTitle="" cardWidth="w-[300px]" optionData={cardopotions} planPrice={"Free"} planSubTxt={""} />
                    <Card cardTitle="small" cardWidth="w-[200px]" optionData={cardopotions} planPrice={"5000"} planSubTxt={"Billed Monthly"} />
                    <Card cardTitle="small" cardWidth="w-[200px]" optionData={cardopotions} planPrice={"5000"} planSubTxt={"Billed Monthly"} />
                    <Card cardTitle="small" cardWidth="w-[200px]" optionData={cardopotions} planPrice={"5000"} planSubTxt={"Billed Monthly"} />
                </div>

            </div>
        </div>
    )
}

export default Pricing