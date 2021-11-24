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




export const Section1 = () => {
  const { connected } = useWallet();
  return (
    <>
     <div className="Section1" style={{display: connected ? 'none' : 'flex'}}>
     <h1>HI I AM Section1</h1>
     </div>
    </>
  );
};






