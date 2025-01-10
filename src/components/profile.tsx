import react from 'react';
import './profile.css';

const Profile = () => {
    return (
    <div className="profile">
        <img src="/public/imgs/avatarProfile.jpg" alt="avatar" />
        <div>
            <h2>Nombre</h2>
            <h3>Carrera</h3>
            <p>Description</p>
            <div className="profile-socials">
                <button><i className="lni lni-instagram"></i></button>
                <button><i className="fa-brands fa-pinterest"></i></button>
                <button><i className="fa-brands fa-codepen"></i></button>
            </div>
        </div>
    </div>
    );
};

export default Profile;