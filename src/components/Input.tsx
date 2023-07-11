import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { setCharacterName } from "../redux/action";

interface InputProps {
    search: boolean;
}

export function Input(props: InputProps) {
    const dispatch = useDispatch()

    const handleCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCharacterName(event.target.value.toLowerCase()))
    }

    return (
        <motion.div
            className={`flex justify-center ${!props.search && 'hidden'}`}
            initial={{ opacity: 1, y: props.search ? 0 : -40 }}
            animate={{ opacity: props.search ? 1 : 0, y: props.search ? 0 : -40 }}
            transition={{ duration: 0.4 }}
        >
            <input
                className={`w-[390px] h-[80px] text-[1.5rem] rounded focus: mt-[20px] px-4 border-2 border-black font-MPLUS1CODE bg-[#dfd7d7] ${props.search ? 'absolute z-[2]' : 'hidden'}`}
                onInput={handleCheckboxClick}
                placeholder="Search some character"
            />
        </motion.div>
    )
}