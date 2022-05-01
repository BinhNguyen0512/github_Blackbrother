
import {BrowserRouter as Router} from 'react-router-dom'

import Header from './Header'
import Routes1 from '../routes/Routes1'
import Footer from './Footer'

const Layouts = () => {

    return (
        <Router>
            <div>
                <Header/>
                <div className="container">
                    <div className="main">
                        <Routes1/>
                    </div>
                </div>
                <Footer/>
            </div>

        </Router>
    )

}

export default Layouts