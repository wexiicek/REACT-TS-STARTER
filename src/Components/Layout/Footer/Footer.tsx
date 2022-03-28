import React from 'react';
import { useTranslation } from 'react-i18next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from '../Container/Container';
import OutsideLink from '../../OutsideLink';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <h5 className="h1 text-white">WEX STARTER</h5>
            <p className="small text-muted">{t('layout.footer.introduction')}</p>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="text-white mb-3">{t('link.footer.social-links')}</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <OutsideLink href="#" title={t('link.footer.instagram')} />
              </li>
              <li>
                <OutsideLink href="#" title={t('link.footer.facebook')} />
              </li>
              <li>
                <OutsideLink href="#" title={t('link.footer.linkedin')} />
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="text-white mb-3">{t('link.footer.social-links')}</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <OutsideLink href="#" title={t('link.footer.instagram')} />
              </li>
              <li>
                <OutsideLink href="#" title={t('link.footer.facebook')} />
              </li>
              <li>
                <OutsideLink href="#" title={t('link.footer.linkedin')} />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
