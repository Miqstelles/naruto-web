interface index {
    key: number;
}

export function Skeleton(props: index) {
    return (
        <div role="status" key={props.key} className="w-[330px] h-[219px] rounded-[5px] dark:bg-[#b87f65] animate-pulse transition-opacity duration-500">
            <div className="w-[330px] h-[132px] dark:bg-[#e9a07f] rounded-t-[5px]"></div>
            <div className="grid gap-[20px] justify-center">
                <div className="flex gap-[20px]">
                    <div className="w-[50px] h-[12px] dark:bg-[#b45f37]"></div>
                    <div className="w-[50px] h-[12px] dark:bg-[#b45f37]"></div>
                </div>

                <div className="flex gap-[20px]">
                    <div className="w-[50px] h-[12px] dark:bg-[#b45f37]"></div>
                    <div className="w-[50px] h-[12px] dark:bg-[#b45f37]"></div>
                </div>
            </div>
        </div>
    )
}