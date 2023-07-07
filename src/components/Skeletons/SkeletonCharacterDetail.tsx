export function SkeletonCharacterDetail() {
    return (
        <div className="w-[330px] h-[915px] rounded-[5px] dark:bg-[#C9683C] animate-pulse transition-opacity duration-500 mt-[20px] flex flex-col items-center">
            <div className="w-[330px] h-[291px] dark:bg-[#e9a07f] rounded-t-[5px]"></div>

            <div className="w-[280px] h-[40px] rounded-[5px] dark:bg-[#b45f37] mt-[48px]"></div>

            <div className="grid grid-cols-2 gap-[20px] mt-[40px]">
                <div className="w-[130px] h-[25px] rounded-[5px] dark:bg-[#b45f37]"></div>
                <div className="w-[130px] h-[25px] rounded-[5px] dark:bg-[#b45f37]"></div>
            </div>

            <div className="w-[130px] h-[25px] rounded-[5px] dark:bg-[#b45f37] mt-[20px]"></div>

            <div className="w-full h-[66px]  dark:bg-[#E29A79] mt-[48px]"></div>

            <div className="mt-[38px]">
                <div className="w-[230px] h-[25px] rounded-[5px] dark:bg-[#b45f37] mt-[20px]"></div>
                <div className="w-[230px] h-[25px] rounded-[5px] dark:bg-[#b45f37] mt-[20px]"></div>
                <div className="w-[230px] h-[25px] rounded-[5px] dark:bg-[#b45f37] mt-[20px]"></div>
                <div className="w-[230px] h-[25px] rounded-[5px] dark:bg-[#b45f37] mt-[20px]"></div>
                <div className="w-[230px] h-[25px] rounded-[5px] dark:bg-[#b45f37] mt-[20px]"></div>
            </div>
        </div>
    )
}