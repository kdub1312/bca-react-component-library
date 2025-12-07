const { useState, useEffect } = React;

export default function ReactNav({ customClass = [], items =[] }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkCookie = () => {
      const loggedIn = localStorage.getItem('loggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };

    checkCookie();
  }, []);

  return (
    <nav className={`${customClass.join(' ')}`}>
    <div className="container-fluid">
        <a className="navbar-brand" href="#">BCA</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
              {items.map((item) => (
                <li key={item.name}>
                  <a className="nav-link" href={item.link}>{item.name}</a>
                </li>
              ))}
              {console.log("TEST FROM nav.jsx")}
            {isLoggedIn ? (
              <li>
                <a className="nav-link" href="/auth/sign-out">Sign Out</a>
              </li>
            ) : (
              <>
              <li>
                <a className="nav-link" href="/auth/sign-in">Sign In</a>
              </li>
              <li>
                <a className="nav-link" href="/auth/sign-up">Sign Up</a>
              </li>
              </>
            )}
          </ul>
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
  );
}