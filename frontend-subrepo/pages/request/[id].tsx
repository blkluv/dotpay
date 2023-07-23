/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LinearProgress from '@mui/material/LinearProgress';
import Drawer from '@mui/material/Drawer';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import Link from 'next/link';
import ProcessItem from '../../src/components/ProcessItem';
import { apiHost } from '../../src/utils/constant';
import axios from 'axios';
import { Requests } from '../../src/utils/types';

interface Props {
    connectWallet: any,
    connected: boolean,
    address: string,
    errmsg: string,
    side: boolean,
    role: string
}

const upperCase = (s: any) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
}



const Request: React.FC<Props> = ({ connectWallet, connected, address, errmsg }) => {

    const router = useRouter()
    const { id } = router.query
    const [load, setLoad] = useState(false);
    const [request, setRequest] = useState<Requests>({
        _id: "",
        emissary: "",
        owner: address,
        name: "",
        program: {
            pid: "",
            program: ""
        },
        amount: {
            amount: "",
            token: ""
        },
        created: ""
    })

    useEffect(() => {
        if (id) {
            readRequest(id.toString())
        }
    }, [id])

    const readRequest = async (id: string) => {
        try {
            const res = await axios.get(apiHost + 'request/one/' + id)
            console.log("res", res)
            setRequest(res.data)
        } catch (e) {
        }
    }



    return (
        <>
            <div className='semi-header'>
                <Link href="/request">
                    <p className='transfer-btn'><ArrowCircleLeftOutlinedIcon className='icon-btn' />Transfer Requests</p>
                </Link>
            </div>
            <Divider />
            <div className='semi-body'>
                <div className='filter-sect'>
                    <div className=''>
                        <p className='m0 number-pink'>Transfer Request</p>
                        <p className='m0 number-pink-big mt-10'> #{request._id.length > 0 && request._id.substring(12, 24)}</p>
                        <p className='m0 item-hash mt-15'>Created on {request.created}</p>
                    </div>
                    <Button variant="outlined" className='trans-pink-btn'>Approved</Button>
                </div>
                <Divider className='mt-15' />
                <div className='inputs-wrap mt-30'>
                    <div className='flex-start custom-input mt-10'>
                        <p className='mp0 input-title'>Applier</p>
                        <input value={request.owner} readOnly />
                    </div>
                    <div className='flex-start custom-input mt-10'>
                        <p className='mp0 input-title'>Program</p>
                        <input value={request.program.program} readOnly />
                    </div>
                    <div className='flex-start custom-input mt-10'>
                        <p className='mp0 input-title'>Project Name</p>
                        <input value={request.name} readOnly />
                    </div>
                    <div className='flex-start custom-input mt-10 '>
                        <p className='mp0 input-title'>Requested Amount</p>
                        <input className='pink-text' value={request.amount.amount + " " + request.amount.token} readOnly />
                    </div>
                </div>
                <div className='tax-wrap mt-30'>
                    <p className='part-title'>Tax Documents</p>
                    <div className='tax-form flex-start'>
                        <TaskOutlinedIcon className=' mr-10' />
                        <p className='pink-text'> form_w8.pdf</p>
                    </div>
                </div>
                <Divider className='mt-30' />
                <div className='process-wrap mt-30'>
                    <p className='part-title'>Processing Timestamp</p>
                    <ProcessItem address='8Eo3...KAFL' state1='APPROVED' state2='PAID' byDate='1/7/2023, 11:25:01am' />
                </div>

            </div>
        </>
    );
}

export default Request
