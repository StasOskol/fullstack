
interface ButtonCalculateProps {
    op: number
    back: (i: number, s: string) => void
}


const ButtonCalculate = (props: ButtonCalculateProps) => {
    
    const change = () => {
        props.back(2, 'Hello')
    }

    return <div>
        {props.op}
        <button
            onClick={change}
        >
            Жми
        </button>
    </div>
}

export default ButtonCalculate;