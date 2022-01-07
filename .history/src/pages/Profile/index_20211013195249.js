import { useState, useContext } from 'react';
import './profile.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import avatar from '../../assets/avatar.png';

import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';

import {FiSettings, FiUpload} from 'react-icons/fi';

export default function Profile(){
    const { user, signOut, setUser, storageUser } = useContext(AuthContext);
    const [nome, setNome] = useState(user && user.nome);
    const [email, setEmail] = useState(user && user.email);

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [imageAvatar, setImageAvatar] = useState(null);
   
   async function handleSave(e){
       e.preventDefault();

       if(imageAvatar === null && nome !== ''){
            await firebase.firestore().collection('users')
            .doc(user.uid)
            .update({
                nome: nome
            })
            .then(()=>{
                let data = {
                    ..user
                }
            })
       }
   }
    return(
        <div>
            <Header/>
            
            <div className="content">
                <Title name="Meu perfil">
                    <FiSettings size={25}/>
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleSave}>
                        <label className="label-avatar">
                            <span>
                                <FiUpload color="#FFF" size={25}/>
                            </span>

                            <input type="file" accept="image/*"/> <br/>
                            {avatarUrl === null ?
                                <img src={avatar} width="250" height="250" alt="Foto de perfil"/>
                                :
                                <img src={avatarUrl} width="250" height="250" alt="Foto de perfil"/>
                                    
                            }
                        </label>

                        <label>Nome</label>
                        <input type="text" value={nome} onChange={ (e)=> setNome(e.target.value)} />
                        <input type="text" value={email} disabled={true} />

                        <button type="submit" >Salvar</button>

                    </form>
                </div>

                <div className="container">
                    <button className="logout-btn" onClick={()=>signOut()}>Sair</button>
                </div>
            </div>
        </div>
    )
}