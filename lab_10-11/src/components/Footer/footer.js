import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__text">
                    <h4 className="footer__text-title">Lamps store</h4>
                    <p className="footer__text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="footer__logo">
                    <img src="logos/logo.png" alt="logo" width="70" height="70" />
                </div>
                <div className="footer__logos">
                    <a href="#"><img className="footer__logos1" src="logos/facebook.png" alt="facebook" /></a>
                    <a href="#"><img className="footer__logos1" src="logos/twitter.png" alt="twitter" /></a>
                    <a href="#"><img className="footer__logos1" src="logos/google.png" alt="google" /></a>
                    <a href="#"><img className="footer__logos1" src="logos/linkedin.png" alt="linkedin" /></a>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-line"></div>
                <p className="footer__bottom-copyrights">2024 IoT © Copyright all rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
