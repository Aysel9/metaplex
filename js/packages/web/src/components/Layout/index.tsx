import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import {
  Cog,
  CurrentUserBadge,
  CurrentUserBadgeMobile,
} from '../CurrentUserBadge';
import { Link } from 'react-router-dom';
import { Button, Menu, Modal } from 'antd';
import { Notifications } from '../Notifications';
import useWindowDimensions from '../../utils/layout';
import { MenuOutlined } from '@ant-design/icons';
import { HowToBuyModal } from '../HowToBuyModal';
import { ConnectButton } from '@oyster/common';
import { Layout } from 'antd';
import { AppBar } from '../AppBar';
import { Footer } from '../Footer';
import { Section1 } from '../Section1';
import { Section2 } from '../Section2';


const { Header, Content } = Layout;



export const AppLayout = React.memo((props: any) => {
 const { connected } = useWallet();
 useEffect(() => {
    console.log(connected ? 'none' : 'block')
  });

  return (
    <>
      <Layout id={'main-layout'}>
        <Header className="App-Bar">
          <AppBar />
        </Header> 
        <Layout id={'width-layout'} style={{display: connected ? 'block' : 'none' }}>
          <Content
            style={{
              overflow: 'scroll',
              padding: '30px 48px ',          
            }} 
          >
            {props.children}                 
          </Content>   
        </Layout>
      </Layout>
      <Section1 />
      <Section2 />
                
     
      
    </>
  );
});






