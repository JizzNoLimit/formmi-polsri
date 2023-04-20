import Link from "next/link";

function Navbars() {
  return (
    <nav className="navbar-formmi shadow-sm">
      <div className="container-formmi text-center">
        <div className="brand">
          <a href="/">FORMMI <b>POLSRI</b></a>
        </div>
        <div className="nav-search">
          <div className="search">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-search icon-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>                </svg>
            <input type="search" className="form-search form-control" placeholder="Pencarian diskusi..." />
          </div>
        </div>
        <div className="nav-auth">
          <Link href="/auth/login">
            <button className="btn btn-login btn-sm w-100">Masuk</button>
          </Link>
          <Link href="/auth/register">
            <button className="btn btn-success btn-sm w-100">Daftar</button>
          </Link>
        </div>
        <div className="nav-users">
          <div className="dummy"></div>
          <div className="users">
            <div className="notif-icon btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
              </svg>
            </div>
            <div className="user-icon btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
              <div className="user-detail">
                <span className="name">JizzNoLimit</span>
                <span className="level">Lvl. 0</span>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>    
  );
}

export default Navbars;