import react from 'react';
import './profile.css';

const Profile = () => {
    return (
    <div className="profile">
        <img src="/public/imgs/avatarProfile.jpg" alt="avatar" />
        <div>
            <h2>Jeyllon Sandoval</h2>
            <h3>Systems Engineer</h3>
            <p>I am a Systems Engineering student with a diverse set of technical and interpersonal skills. 
                I am a native Spanish speaker and possess a basic proficiency in English, 
                which I continuously strive to improve. 
                My academic background and personal interests have allowed me to develop a strong foundation 
                in problem-solving, programming, and analytical thinking.</p>
            <div className="profile-socials">
                <button><i className="lni lni-instagram"></i></button>
                <button><i className="lni lni-linkedin"></i></button>
                <button><i className="lni lni-github"></i></button>
            </div>
        </div>
    </div>
    );
};

export default Profile;