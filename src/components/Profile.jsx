import { useState } from 'react';
import { useFakeProfileContext } from '../context/FakeProfileContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faBuilding, faBuildingColumns, faCalendar, faGear, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { UpdatePersonalInfo, UpdateProfessionalInfo } from '../components';

export const Profile = () => {

    const { personalData, professionalData, socialMediaUrls } = useFakeProfileContext();
    const [showForms, setShowForms] = useState(false);
    const [isCollapseOneOpen, setCollapseOne] = useState(false);
    const [isCollapseTwoOpen, setCollapseTwo] = useState(false);

    const toggleCollapse = (collapse) => {
        switch (collapse) {
            case 'forms':
                setShowForms(true);
                setCollapseOne(true);
                break;

            case 'close':
                setCollapseOne(false);
                setCollapseTwo(false);
                break;

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
                            <img src="images/default_profile_photo.png" alt="Profile Img" />
                        </div>
                        <div className="profile-personal-info">
                            <div className="profile-name">
                                <p>{personalData.name + ' ' + personalData.lastname}</p>
                                <p>{personalData.age} y/o</p>
                            </div>
                            <div className="profile-profession">
                                <p>{professionalData.profession}</p>
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
                                <p>
                                    <a href={`mailto:${personalData.email}`} target="_blank">
                                        {personalData.email}
                                    </a>
                                </p>
                            </div>
                            <div className="profile-flex phone-contact">
                                <p><FontAwesomeIcon icon={faPhone} /></p>
                                <p>
                                    <a href={`tel:${personalData.phone}`} target="_blank">
                                        {personalData.phone}
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="profile-professional-info">
                            <div className="profile-flex professional-job">
                                <p><FontAwesomeIcon icon={faBuilding} /></p>
                                <p>{professionalData.company}</p>
                            </div>
                            <div className="profile-flex professional-study">
                                <p><FontAwesomeIcon icon={faBuildingColumns} /></p>
                                <p>{personalData.education}</p>
                            </div>
                            <div className="profile-flex professional-experience">
                                <p><FontAwesomeIcon icon={faCalendar} /></p>
                                <p>
                                    {professionalData.experience}
                                    {` ${professionalData.experience > 1 ? ' years' : ' year'} `}
                                    of experience
                                </p>
                            </div>
                        </div>
                        <div className="profile-social-media">
                            <div className={onSocialMediaChecker(socialMediaUrls.linkedin)}>
                                <a href={`${socialMediaUrls.linkedin}`} target="_blank">
                                    {onSocialMediaHandler(socialMediaUrls.linkedin, faLinkedin)}
                                </a>
                            </div>
                            <div className={onSocialMediaChecker(socialMediaUrls.github)}>
                                <a href={`${socialMediaUrls.github}`} target="_blank">
                                    {onSocialMediaHandler(socialMediaUrls.github, faGithub)}
                                </a>
                            </div>
                            <div className={onSocialMediaChecker(socialMediaUrls.twitter)}>
                                <a href={`${socialMediaUrls.twitter}`} target="_blank">
                                    {onSocialMediaHandler(socialMediaUrls.twitter, faTwitter)}
                                </a>
                            </div>
                            <div className={onSocialMediaChecker(socialMediaUrls.facebook)}>
                                <a href={`${socialMediaUrls.facebook}`} target="_blank">
                                    {onSocialMediaHandler(socialMediaUrls.facebook, faFacebook)}
                                </a>
                            </div>
                            <div className={onSocialMediaChecker(socialMediaUrls.instagram)}>
                                <a href={`${socialMediaUrls.instagram}`} target="_blank">
                                    {onSocialMediaHandler(socialMediaUrls.instagram, faInstagram)}
                                </a>
                            </div>
                            <div className={onSocialMediaChecker(socialMediaUrls.youtube)}>
                                <a href={`${socialMediaUrls.youtube}`} target="_blank">
                                    {onSocialMediaHandler(socialMediaUrls.youtube, faYoutube)}
                                </a>
                            </div>
                            <div className={onSocialMediaChecker(socialMediaUrls.website)}>
                                <a href={`${socialMediaUrls.website}`} target="_blank">
                                    {onSocialMediaHandler(socialMediaUrls.website, faGlobe)}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="profile-config">
                        <button
                            data-bs-toggle="collapse"
                            data-bs-target="#show-forms"
                            aria-expanded="false"
                            aria-controls="show-forms"
                            onClick={() => toggleCollapse('forms')}
                        >
                            <FontAwesomeIcon icon={faGear} />&nbsp;
                            Update information
                        </button>
                    </div>
                </div>
                <div
                    className={`profile-form collapse${isCollapseOneOpen ? ' show' : '' || isCollapseTwoOpen ? ' show' : ''}`}
                    id="show-forms"
                >
                    <div className="select-forms">
                        <button
                            className={`${isCollapseOneOpen ? 'active' : ''}`}
                            data-bs-toggle="collapse"
                            data-bs-target="#forms-collapse1"
                            aria-expanded="false"
                            aria-controls="forms-collapse1"
                            onClick={() => toggleCollapse('first')}
                        >
                            personal
                        </button>
                        <button
                            className={`${isCollapseTwoOpen? 'active' : ''}`}
                            data-bs-toggle="collapse"
                            data-bs-target="#forms-collapse2"
                            aria-expanded="false"
                            aria-controls="forms-collapse2"
                            onClick={() => toggleCollapse('second')}
                        >
                            professional
                        </button>
                        <button
                            onClick={() => toggleCollapse('close')}
                        >
                            Done
                        </button>
                    </div>

                    <div className="forms-container">
                        <div className={`collapse${isCollapseOneOpen ? ' show' : ''}`} id="forms-collapse1">
                            <UpdatePersonalInfo />
                        </div>

                        <div className={`collapse${isCollapseTwoOpen ? ' show' : ''}`} id="forms-collapse2">
                            <UpdateProfessionalInfo />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
