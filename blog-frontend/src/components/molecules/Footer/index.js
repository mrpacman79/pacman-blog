import React from 'react'
import { ICDiscord, ICFacebook, ICGithub, ICInstagram, ICTelegram, ICTwitter, Logo } from '../../../assets'
import './footer.scss';

const Icon = ({img}) => {
    return (
        <div className='icon-wrapper'>
            <img className='icon-medsos' src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div>
                <img className="logo" src={Logo} alt="logo"/>
            </div>
            <div className='social-wrapper'>
                <Icon img={ICFacebook} />
                <Icon img={ICInstagram} /> 
                <Icon img={ICTelegram} /> 
                <Icon img={ICDiscord} /> 
                <Icon img={ICGithub} /> 
                <Icon img={ICTwitter} />  
            </div>
        </div>
        <div className='copyright'>
            <p>Mr.Pacman79 2022 Copyright All Right Reversed. </p>
        </div>
    </div>
  )
}

export default Footer