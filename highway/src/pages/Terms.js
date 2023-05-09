import React from 'react';
import { items } from '../utils/Agree';
import { Anchor } from 'antd';
import { BackToSign, TermGroup, TermWrapper } from '../styles/TermsStyle';
import Service from '../components/Terms/Service';
import Private from '../components/Terms/Private';
import YoungPrivate from '../components/Terms/YoungPrivate';
import { Link, useNavigate } from 'react-router-dom';

const Terms = () => {
    const navigator = useNavigate();
    return (
        <TermWrapper>
            <Anchor
                direction="horizontal"
                items={items}
            />
            <TermGroup>
                <div
                    id="service"
                    style={{
                    textAlign: 'center',
                    background: '#FFFFFF',
                    }}
                >
                    <Service />
                </div>
                <div
                    id="private"
                    style={{
                    textAlign: 'center',
                    background: '#FFFFFF',
                    }}
                >
                    <Private />
                </div>
                <div
                    id="youngprivate"
                    style={{
                    textAlign: 'center',
                    background: '#FFFFFF',
                    }}
                >
                    <YoungPrivate />
                </div>
            </TermGroup>
            <Link to ={navigator(-1)}>
            <BackToSign>
              돌아가기
            </BackToSign>
          </Link>
        </TermWrapper>
        
    );
};

export default Terms;