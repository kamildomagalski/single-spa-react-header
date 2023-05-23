import './styles.css'; 
export default function Header(props) {
  console.log(props)
  return (
    <div className='container'>
      <a href="/" className="logo">
        LOGO
      </a>
      <div className="navigation">
        <a href="/todoApp" className="link">To Do App</a>
        <a href="/notesApp" className="link">Notes</a>
      </div>
      <div className="user">
        <p className="name">Kamil D.</p>
        <div className="avatar"></div>
      </div>
    </div>
  );
}
