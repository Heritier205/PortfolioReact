import './Sidebar.css';

function sidebarRight({ Email }) {
    return (
        <div className="Sidebar Right">
            <ul>
                <li>
                    <a className='mail' href={`mailto:${Email}`} target="_Blank" rel="noopener noreferrer">{Email}</a>
                </li>
                <li>
                    <span className='Vertical-line'></span>
                </li>
            </ul>
        </div>
    )
}

export default sidebarRight;