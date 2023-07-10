interface myProps{
    pagetitle: string,
    header: string, 
    textContent: string,
    textJustify: string,
}

const SmallHeader:React.FC<myProps> = ({pagetitle, header, textContent, textJustify}) => {
    return (
        <div className="container mx-auto my-[5vh] space-y-10">
            <div className="flex items-center justify-between">
                <p className="font-semibold text-relianceRed/70 text-2xl">{pagetitle}</p>
                <p className="space-x-3 text-sm font-medium">
                    <span>Management</span>
                    <span>Chain</span>
                    <span>Supply</span>
                </p>
            </div>

            <p className="text-center font-semibold text-2xl text-relianceRed/70">{header}</p>
            <div className={` text-${textJustify} text-sm font-medium`}>
               {textContent}
            </div>
        </div>
    )
}

export default SmallHeader