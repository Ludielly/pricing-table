import "../styles/title.css"

const Title = ({children, price}) => {
    return (
        <p className="title">{children}
            {price && <span>R$ {price}/mês</span>}
        </p>
    )
}

export default Title;