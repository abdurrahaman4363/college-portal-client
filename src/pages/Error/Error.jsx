import { Link } from 'react-router-dom';
import errorImage from '../../../src/assets/404.gif'

const Error = () => {
    return (
        <div>
            <img src={errorImage} alt="" />
            <Link to='/'><p className='text-center'><button className='btn btn-success px-4 text-white font-bold'>Back To Home</button></p></Link>
        </div>
    );
};

export default Error;