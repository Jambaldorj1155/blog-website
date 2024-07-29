


export const Content = () => {
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center gap-[80px]">
                <div className="flex flex-col items-center gap-[32px]">
                    <div className="flex flex-col items-start gap-[32px] self-stretch">
                        <p className="w-[184px] font-sans text-2xl not-italic font-bold leading-7">All Blog Post</p>
                        <div className="flex w-[1216px] items-center gap-[30px]">
                            <div className="flex items-center gap-[20px]">
                                <p className="font-sans text-xs not-italic font-bold leading-[25px] text-[#D4A373]">All</p>
                                <p className="font-sans text-xs not-italic font-bold leading-[25px]">Design</p>
                                <p className="font-sans text-xs not-italic font-bold leading-[25px]">Travel</p>
                                <p className="font-sans text-xs not-italic font-bold leading-[25px]">Fashion</p>
                                <p className="font-sans text-xs not-italic font-bold leading-[25px]">Technology</p>
                                <p className="font-sans text-xs not-italic font-bold leading-[25px]">Branding</p>
                            </div>
                            <p className="text-right font-sans text-xs not-italic font-bold leading-[25px]">View All</p>

                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}