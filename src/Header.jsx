export function Header() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              ShopR
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#posts-index">
                    All Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#posts-new">
                    Cart
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#signup">
                    Signup
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#login">
                    Login
                  </a>
                </li>
                <li className="nav-item"></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
