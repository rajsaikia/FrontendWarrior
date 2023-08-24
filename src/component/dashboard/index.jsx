import { Link, Route, Routes } from 'react-router-dom';
import './style.css';
import ReactInterview from '../reactInterview';
import Javascript from '../javascript';
import JavascriptInterview from '../javascriptInterview';
import ReactPrec from '../reactPrec';


const Dashboard = () => {
    return (
        <>
            <div className="four-blocks-container">
                <Link to="/javascript" className="block">
                    Javascript
                </Link>
                <Link to="/block2" className="block">
                    JavascriptInterview
                </Link>
                <Link to="/block3" className="block">
                    ReactPrec
                </Link>
                <Link to="/block4" className="block">
                    ReactInterview
                </Link>
            </div>
            <Routes>
                <Route exect path="/javascript" element={<Javascript />} />
                <Route path="/block2" element={<JavascriptInterview />} />
                <Route path="/block3" element={<ReactPrec />} />
                <Route path="/block4" element={<ReactInterview />} />
                <Route path="*" element={<>No Match</>} />
            </Routes>
        </>
    );
};

export default Dashboard;
