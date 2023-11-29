import footerstyles from "../styles/footer.module.css";
import instalogo from "../images/insta.png";
import tweetlogo from "../images/tweet.png";
import utubelogo from "../images/utube.png";
import facebooklogo from "../images/facebook.png";
import whatsapplogo from "../images/whatsapp.png";

function Footer() {
	return (
		<>
			<div className={footerstyles.footer_body}>
				<p className={footerstyles.footer_p}>
					<img src={instalogo} width="40" height="40" alt="footer logo insta" />
					<img src={tweetlogo} width="40" height="40" alt="footer  logo tweet" />
					<img src={utubelogo} width="40" height="40" alt="footer  logo utube" />
					<img src={facebooklogo} width="40" height="40" alt="footer logo facebook" />
					<img src={whatsapplogo} width="40" height="40" alt="footer logo whats app" />
				</p>
			</div>
		</>
	);
}

export default Footer;
