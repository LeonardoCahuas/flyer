import "../styles/loginSection.css";

export const LoginForm = () => {
  return (
    <div className="hero login-section-container">
      <div className="hero-content login-container max-w-screen flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div className="card-body form-body-container">
            <div className="form-control" id="end-page-login">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control form-container">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control flex flex-row mt-12 items-start max-w-fit">
              <button className="btn btn-primary btn-generic">Login</button>
              <div className="text-base mt-3 mx-4"> Oppure </div>
              <button className="btn btn-primary btn-generic">Registrati ora</button>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center inizia-chat-text-container">
          <h2 className="text-4xl font-bold"> Inizia una chat <span classname=""><i className="fa-solid fa-plane"></i></span></h2>
        </div>
      </div>
    </div>
  );
};
