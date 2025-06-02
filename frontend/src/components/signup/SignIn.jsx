import HeadingComp from "./HeadingComp";
import "./Signup.css";
const SignIn = () => {
  return (
    <div>
      <div className="signup">
        <div className="container">
          <div className="row">
            <div className=" column col-left col-lg-4 d-flex justify-content-center align-items-center">
              <HeadingComp first="Sign" second="In" />
            </div>
            <div className="col-lg-8 column d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column  w-100 p-5 ">
                <input
                  className="p-2 my-3 input-signup "
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
                <input
                  className="p-2 my-3 input-signup"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                />

                <button className="btn-signup p-2">SignIn</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
