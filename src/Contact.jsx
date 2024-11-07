import Header from "./Header/Header";

const Contact = () => {
  return (
    <div>
      <Header />
      <h1 className="" style={{ textAlign: "center" }}>
        This is a Contact
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{ margin: "5%" }}>
            <form>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control border"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We will never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control border"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
