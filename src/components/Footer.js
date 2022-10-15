import react from 'react';
import styled from 'styled-components';

const footer = () => {
	return(
	<FooterContainer className="main-footer">
		<FooterContainer className="footer-middle">
		<FooterContainer className="container">
			<FooterContainer className="row">
				<FooterContainer className="col-md-3 col-sm-6">
				<h4>LAYANAN PELANGGAN</h4>
				<ul className="list-unstyled">
					<li>Bantuan</li>
					<li>Metode Pembayaran</li>
					<li>Hubungi Kami</li>
				</ul>
			</FooterContainer>
			<FooterContainer className="col-md-3 col-sm-6">
				<h4>JELAJAHI JAJALINE</h4>
				<ul className="list-unstyled">
					<li>Tentang Kami</li>
					<li>Karir</li>
					<li>Kebijakan Privasi</li>
				</ul>
			</FooterContainer>
			<FooterContainer className="col-md-3 col-sm-6">
				<h4>PEMBAYARAN</h4>
				<ul className="list-unstyled">
					<li>DANA</li>
					<li>Alfamart</li>
					<li>Indomaret</li>
					<li>Alfamidi</li>
					<li>BCA</li>
					<li>BNI</li>
					<li>Mandiri</li>
				</ul>
			</FooterContainer>
			<FooterContainer className="col-md-3 col-sm-6">
				<h4>IKUTI KAMI</h4>
				<ul className="list-unstyled">
					<li>Facebook</li>
					<li>Instagram</li>
					<li>Twitter</li>
				</ul>
			</FooterContainer>
			</FooterContainer>
			<FooterContainer className="footer-bottom">
				<p className="text-xs-center">
					&copy;{new Date().getFullYear()} - All Rights Reserved
				</p>
				</FooterContainer>
			</FooterContainer>
			</FooterContainer>
		</FooterContainer>
	);
}

export default footer

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-botton {
    padding-top: 3rem;
    padding-botton: 2rem;
}
`;