export function Skeleton() {
    return (
        <div role="status" className="w-[330px] h-[219px] rounded-[5px] dark:bg-[#b87f65] animate-pulse transition-opacity duration-500">
            <div className="w-[330px] h-[132px] dark:bg-[#e9a07f] rounded-t-[5px]"></div>
            <div className="grid gap-[20px] mt-[10px] mx-[14px]">
                <div className="flex justify-between gap-[20px]">
                    <div className="w-[140px] h-[20px] rounded-[5px] dark:bg-[#b45f37]"></div>
                    <div className="w-[90px] h-[20px] rounded-[5px] dark:bg-[#b45f37]"></div>
                </div>

                <div className="flex justify-between gap-[20px]">
                    <div className="w-[120px] h-[15px] rounded-[5px] dark:bg-[#b45f37]"></div>
                    <div className="w-[80px] h-[15px] rounded-[5px] dark:bg-[#b45f37]"></div>
                </div>
            </div>
        </div>
    )
}