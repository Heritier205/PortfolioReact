
import { useEffect, useState } from "react"



const Typewriter = ({className, Phrase}) => {

    const [text, setText] = useState("")
    const [textIndex, setTextIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [cursor, setCursor] = useState(0)

    useEffect(() => {
        if (charIndex < Phrase[textIndex].length){
            const timeout = setTimeout(() => {
                setText((prev)=> prev + Phrase[textIndex][charIndex])
                setCharIndex(charIndex+1)
                // setCursor(!cursor)
                setCursor(charIndex === (Phrase[textIndex].length - 2) ? 0 : !cursor)
            }, 50);
            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setText("")
                setTextIndex(((textIndex + 1) % Phrase.length))
                setCharIndex(0)
            },1500)
            return () => clearTimeout(timeout)
        }
    }, [textIndex, charIndex])
    return (
        <div className={className} >{`${text}${!cursor ? "|" : ""}`}</div>
    )
}

export default Typewriter