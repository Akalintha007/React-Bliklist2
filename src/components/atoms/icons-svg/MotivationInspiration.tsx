import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as clockImg} from './MotivationInspiration.svg';



const MotivationInspirationSvgIcon = (props:any) => {
    return (
        <SvgIcon component={clockImg}  inheritViewBox  fontSize='medium' />
    )
}

export default MotivationInspirationSvgIcon