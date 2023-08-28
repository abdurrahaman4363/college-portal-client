import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import {  useContext, useState } from "react";
import { UserContext } from "../../providers/AuthProvider";

const Login = () => {
    const { logUser, googleSignIn, githubSignIn} = useContext(UserContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logUser(email, password)
      .then((result) => {
        const logUser = result.user;
        console.log(logUser);
        form.reset();
        setSuccess("User successfully login");
        setError("");
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setSuccess("");
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const signInUser = result.user;
        console.log(signInUser);
        setSuccess("User sign in by google successfully");
        setError("");
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        console.log(result);
        setSuccess("User sign in by google successfully");
        setError("");
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });
  }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content md:flex">
  <div className="w-1/2">
        <img className="shadow-2xl" src="https://i.postimg.cc/rscHpTvN/6325230-1.jpg" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogIn}>
      <div className="card-body">
      <h1 className="text-4xl text-center font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" required placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn bg-teal-400 border-none" type="submit" value="Login" />
        </div>
        <p className="font-medium text-center"><small>New To College Portal? <Link to="/register" className="text-rose-500 font-bold">Please Register</Link> </small></p>
        <div className="divider">OR</div>
        <div className="text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent" style={{width: '90%'}}><FaGoogle style={{width: '2rem', height: '1.5rem'}}></FaGoogle> Login With Google</button>
        <button onClick={handleGithubSignIn} className="btn btn-outline btn-accent w-full mt-3" style={{width: '90%'}}><FaGithub style={{width: '2rem', height: '1.5rem'}}></FaGithub> Login With Github</button>
        </div>
        <p className="font-bold text-enter text-rose-300"><small>{error}</small></p>
        <p className="font-bold text-enter text-teal-300"><small>{success}</small></p>
      </div> 
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;