import { AnimatedSocialIcon } from 'react-animated-social-icons';

function SocialMedia(props) {
    return (
        <ul className="list-inline unstyled-list">
            <li className="list-inline-item">
                <AnimatedSocialIcon brandName="facebook" url="https://facebook.com/username" 
                    animation={props.animation} defaultColor={props.defColor} hoverColor="#3b5998" 
                    width={props.width} animationDuration={props.animationDur} style={{margin:'0'}}/>
            </li>
            <li className="list-inline-item">
                <AnimatedSocialIcon brandName="twitter" url="https://twitter.com/username" 
                    animation={props.animation} defaultColor={props.defColor} hoverColor="#00acee" 
                    width={props.width} animationDuration={props.animationDur} style={{margin:'0'}}/>
            </li>
            <li className="list-inline-item">
                <AnimatedSocialIcon brandName="instagram" url="https://instagram.com/username" 
                animation={props.animation} defaultColor={props.defColor} hoverColor="#c13584" 
                width={props.width} animationDuration={props.animationDur} style={{margin:'0'}}/>
            </li>
        </ul>
    );
}

export default SocialMedia;