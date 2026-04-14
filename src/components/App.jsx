import logo from '../images/logo.svg';


function App() {
  return (
    <div className="page">
      <header className="header">
        <img src={logo} alt="logo-page" className="header__image" />
      </header>

      <main className="main">
        <div className="main__profile">
          <div className="main__content-image">
            <img
              src="./images/me.jpg"
              alt="profile-image"
              className="main__profile-image"
            />
            <div className="main__profile-edit-icon"></div>
          </div>

          <div className="main__content-paragraph">
            <p className="main__paragraph main__paragraph_name">
              Alejandra Toro Arcila
            </p>
            <p className="main__paragraph main__paragraph_about">
              Estudiante
            </p>
            <button
              type="button"
              className="main__button main__button_edit"
            >
              🖌
            </button>
          </div>

          <button
            type="button"
            className="main__button main__button_add"
          >
            🞣
          </button>
        </div>

        <div className="main__gallery"></div>
      </main>

      <footer className="footer">
        <p className="footer__copyright">
          &copy; 2025 Around The U.S.
        </p>
      </footer>
    </div>
  );
}

export default App;