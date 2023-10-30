import Subtitle from "./Subtitle";
import Button from "./Button";
import Info from "./Info";
import "../styles/Card.css"
import Title from "./Title";
import Tag from "./Tag";

const Card = ({subtitle, title, button, buttonType, infos, tagContent, price, onDarkMode,noInfoIcon}) => {
    return (
        <div className={`card ${onDarkMode}`}>
            {tagContent && <Tag>{tagContent}</Tag>}
            <div>
                <Subtitle onDarkMode={onDarkMode}>{subtitle}</Subtitle>
                <Title price={price}>{title}</Title>
                <Button type={buttonType}>{button}</Button>
            </div>
            <hr />
            <ul>
                {infos.map((info, index) => (
                    <Info key={index} onDarkMode={onDarkMode} noInfoIcon={noInfoIcon}>{info}</Info>
                ))}
            </ul>
        </div>
    )
}

export default Card;