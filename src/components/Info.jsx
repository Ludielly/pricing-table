import { Check, Info as InfoIcon } from "@phosphor-icons/react"
import "../styles/info.css"

const Info = ({children, onDarkMode, noInfoIcon}) => {
    return (
        <li className="info">
            <Check color={onDarkMode ? "var(--green-100)" : "var(--green-200)"} weight="bold" size={16} />
            <span>{children}</span>
            {!noInfoIcon && <InfoIcon className="info-icon" color={onDarkMode ? "var(--gray-400)" : "var(--gray-800)"} weight="bold" alt={children} />}
        </li>
    )
}

export default Info;