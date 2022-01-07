
import './profile.css';
import Header from '../../components/Header';
import Title from '../../components/Title';

import {FiSettings, FiUpload} from 'react-icons/fi';

export default function Profile(){
    return(
        <div>
            <Header/>
            
            <div className="content">
                <Title name="Meu perfil">
                    <FiSettings size={25}/>
                </Title>

                <div className="container">
                    <form className="form-profile">
                        <label className="label-avatar">
                            <span>
                                <FiUpload color="#FFF" size={25}/>
                            </span>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}