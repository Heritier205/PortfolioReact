import './Sidebar.css';

function SidebarLeft({ Socials }) {
  return (
    <div className='Sidebar Left'>
      <ul>
        {Socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <li key={index} className="sidebarLeft-item">
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <Icon className="sidebarLeft-icon" />
              </a>
            </li>
          );
        })}
        <li>
          <span className='Vertical-line'></span>
        </li>
      </ul>
    </div>
  );
}


export default SidebarLeft;
