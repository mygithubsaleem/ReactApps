import footerstyles from "../styles/footer.module.css";
import instalogo from "../images/insta.png";
import tweetlogo from "../images/tweet.png";
import utubelogo from "../images/utube.png";
import facebooklogo from "../images/facebook.png";
import whatsapplogo from "../images/whatsapp.png";
import { Col, Row } from "react-bootstrap";

function Footer() {
	return (
		<>
			<div className={footerstyles.footer_body}>
				<Row>
					<Col>
						{" "}
						<p className={footerstyles.footer_p}>
							<img src={instalogo} width="40" height="40" alt="footer logo insta" />
							<img src={tweetlogo} width="40" height="40" alt="footer  logo tweet" />
							<img src={utubelogo} width="40" height="40" alt="footer  logo utube" />
							<img src={facebooklogo} width="40" height="40" alt="footer logo facebook" />
							<img src={whatsapplogo} width="40" height="40" alt="footer logo whats app" />
							<h3>Contact No: +92-3270767029</h3>
							
						</p>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default Footer;
