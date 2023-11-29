// import React from "react";
import headerStyles from "../styles/header.module.css";
import shiftlogo from "../images/logo2.png";

function Header() {
	return (
		<div className={headerStyles.header_body}>
			<div className={headerStyles.header_items}>
				{" "}
				<h4>
					<img src={shiftlogo} style={{ marginRight: 10 }} />
					SHFT SOLUTION
				</h4>
			</div>
		</div>
	);
}

export default Header;
