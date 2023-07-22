import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext} from "../../providers/AuthProvider";

const Register = () => {
    const {registerUser, googleSignIn, githubSignIn, setLoad} = useContext(UserContext);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const registerHandle = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        registerUser(email, password)
        .then(result =>{
          setLoad(false)
            const registerUser = result.user;
            console.log(registerUser);
            form.reset();
            setError('');
            setSuccess('User are register successfully')
            updateUserData(result.user, name, photo)
        })
        .catch(error =>{
            console.log(error.message);
            setError(error.message);
            setSuccess('');
        });
    }

    const updateUserData = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
      .then(() => {
        setLoad(true);
        console.log('user profile updated');
        setError('');
      })
      .catch((error)=>{
        setError(error.message);
      })
      
    }

    const handleGoogleSignIn = () => {
      googleSignIn()
        .then((result) => {
          const signInUser = result.user;
          console.log(signInUser);
          setSuccess("User sign in by google successfully");
          setError("");
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
        })
        .catch((error) => {
          setError(error.message);
          setSuccess("");
        }); 
      }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={registerHandle}>
      <div className="card-body">
      <h1 className="text-4xl text-center font-bold">Register now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" required placeholder="Name" className="input input-bordered" />
        </div>
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
          <input type="password" required name="password" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" required placeholder="Photo URL" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <input className="btn bg-teal-400 border-none" type="submit" value="Register" />
        </div>
        <p className="font-medium text-center"><small>Already have an account? <Link to="/login" className="text-rose-500 font-bold">Please Login</Link> </small></p>
        <div className="divider">OR</div>
        <div className="text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent" style={{width: '90%'}}><FaGoogle style={{width: '2rem', height: '1.5rem'}}></FaGoogle> Sign In With Google</button>
        <button onClick={handleGithubSignIn} className="btn btn-outline btn-accent w-full mt-3" style={{width: '90%'}}><FaGithub style={{width: '2rem', height: '1.5rem'}}></FaGithub> Sign In With Github</button>
        </div>
        <p className="text-center font-bold text-rose-600"><small>{error}</small></p>
        <p className="text-center font-bold text-teal-500"><small>{success}</small></p>
      </div> 
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;