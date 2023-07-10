import { motion } from "framer-motion";

interface InputProps {
    search: boolean;
}

export function Input(props: InputProps) {
    return (
        <div className="flex justify-center">
            <motion.input
                initial={{ opacity: 1, y: props.search && location.pathname === '/Characters' ? 0 : -40 }}
                animate={{ opacity: props.search && location.pathname === '/Characters' ? 1 : 0, y: props.search ? 0 : -40 }}
                transition={{ duration: 0.4 }}
                placeholder="Search some character"
                className={`w-[390px] h-[80px] text-[1.5rem] rounded focus: mt-[20px] px-4 border-2 border-black font-MPLUS1CODE bg-[#dfd7d7] ${props.search ? 'absolute z-[2]' : 'hidden'}`}
            />
        </div>
    )
}