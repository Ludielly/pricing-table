import "../styles/subtitle.css"

const Subtitle = ({children, onDarkMode}) => {
    return (
        <span className={`subtitle ${onDarkMode}`}>{children}</span>
    )
}

export default Subtitle;