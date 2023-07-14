import { useState } from 'react';
import { useFakeProfileContext } from '../context/FakeProfileContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faBuilding, faBuildingColumns, faCalendar, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Profile = () => {

    const { personalData, socialMediaUrls, profilePhotoUrl } = useFakeProfileContext();
    const [isCollapseOneOpen, setCollapseOne] = useState(false);
    const [isCollapseTwoOpen, setCollapseTwo] = useState(false);

    const toggleCollapse = (collapse) => {
        switch (collapse) {
            case 'first':
                setCollapseOne(true);
                setCollapseTwo(false);
                break;

            case 'second':
                setCollapseOne(false);
                setCollapseTwo(true);
                break;

            default:
                break;
        }
    }

    const onSocialMediaHandler = (rrss, icon) => {
        if (rrss) {
            return (
                <FontAwesomeIcon icon={icon} />
            )
        } else {
            return null;
        }
    }

    const onSocialMediaChecker = (rrss) => {
        if (rrss) {
            return ('social-media-container');
        } else {
            return ('social-media-container no-rrss');
        }
    }

    return (
        <>
            <div className="profile-container">
                <div className="profile-info">
                    <div className="info-left-side">
                        <div className="profile-photo">
                            <img src={`images/${profilePhotoUrl}`} alt="Profile Img" />
                        </div>
                        <div className="profile-personal-info">
                            <div className="profile-name">
                                <p>{personalData.name + ' ' + personalData.lastname}</p>
                                <p>{personalData.age} y/o</p>
                            </div>
                            <div className="profile-profession">
                                <p>{personalData.profession}</p>
                            </div>
                            <div className="profile-about">
                                <p>{personalData.aboutMe}</p>
                            </div>
                        </div>
                    </div>
                    <div className="info-right-side">
                        <div className="profile-contact">
                            <div className="profile-flex contact-email">
                                <p><FontAwesomeIcon icon={faAt} /></p>
                                <p>{personalData.email}</p>
                            </div>
                            <div className="profile-flex phone-contact">
                                <p><FontAwesomeIcon icon={faPhone} /></p>
                                <p>{personalData.phone}</p>
                            </div>
                        </div>
                        <div className="profile-professional-info">
                            <div className="profile-flex professional-job">
                                <p><FontAwesomeIcon icon={faBuilding} /></p>
                                <p>{personalData.company}</p>
                            </div>
                            <div className="profile-flex professional-study">
                                <p><FontAwesomeIcon icon={faBuildingColumns} /></p>
                                <p>{personalData.education}</p>
                            </div>
                            <div className="profile-flex professional-experience">
                                <p><FontAwesomeIcon icon={faCalendar} /></p>
                                <p>
                                    {personalData.experience}
                                    {` ${personalData.experience > 1 ? ' years' : ' year'} `}
                                    of experience
                                </p>
                            </div>
                        </div>
                        <div className="profile-social-media">
                            <div className={onSocialMediaChecker(socialMediaUrls.linkedin)}>
                                {onSocialMediaHandler(socialMediaUrls.linkedin, faLinkedin)}
                            </div>
                            <div className={onSocialMediaChecker(socialMediaUrls.github)}>
                                {onSocialMediaHandler(socialMediaUrls.github, faGithub)}
                            </div>
                            <div className={onSocialMediaChecker(socialMediaUrls.twitter)}>
                                {onSocialMediaHandler(socialMediaUrls.twitter, faTwitter)}
                            </div>
                            <div className={onSocialMediaChecker(socialMediaUrls.facebook)}>
                                {onSocialMediaHandler(socialMediaUrls.facebook, faFacebook)}
                            </div>
                            <div className={onSocialMediaChecker(socialMediaUrls.instagram)}>
                                {onSocialMediaHandler(socialMediaUrls.instagram, faInstagram)}
                            </div>
                            <div className={onSocialMediaChecker(socialMediaUrls.youtube)}>
                                {onSocialMediaHandler(socialMediaUrls.youtube, faYoutube)}
                            </div>
                            <div className={onSocialMediaChecker(socialMediaUrls.website)}>
                                {onSocialMediaHandler(socialMediaUrls.website, faGlobe)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-forms">
                    <p>
                        <button
                            className="btn btn-primary"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#forms-collapse1"
                            aria-expanded="false"
                            aria-controls="forms-collapse1"
                            onClick={() => toggleCollapse('first')}
                        >
                            Toggle second element
                        </button>
                        <button
                            className="btn btn-primary"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#forms-collapse2"
                            aria-expanded="false"
                            aria-controls="forms-collapse2"
                            onClick={() => toggleCollapse('second')}
                        >
                            Toggle second element
                        </button>
                    </p>
                    <div className="row" style={{ 'padding': '0', 'margin': '0' }}>
                        <div className="col-6">
                            <div className={`collapse${isCollapseOneOpen ? ' show' : ''}`} id="forms-collapse1">
                                <p>Aquí va el form</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className={`collapse${isCollapseTwoOpen ? ' show' : ''}`} id="forms-collapse2">
                                <p>Aquí va el otro form</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}