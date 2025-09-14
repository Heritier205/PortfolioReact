import './Title.css'

const Title = ({Section}) => {
    return (
        <div className="Title">
            <div className="SectionName">{Section}</div>
            <div className="Line"></div>
        </div>
    )
}

export default Title