
interface CardCinemaProps {
    text: string,
    url: string
}

const CardCinema = (props: CardCinemaProps) => {
    return <button
        style={{
            background: `url(${props.url})`,
            backgroundRepeat: 'no-repeat',
            border: 'none',
            width: '300px',
            padding: '300px 20px 45px',
            fontWeight: 600,
            fontSize: '22px',
            color: '#fff',
            borderRadius: '10px'
        }}
    >
        {props.text}
    </button>
}

export default CardCinema;