'use client';
import { TextField, Stack, Button, Divider, Checkbox } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IoLogoAppleAppstore } from 'react-icons/io5';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export default function ResetPassword() {
  return (
    <div className="flex justify-center items-center ">
      <div className="  p-6 h-full w-[500px]">
        <h1 className="text-center font-bold text-4xl mb-10">KingGo</h1>
        <h2 className="text-center font-semibold text-2xl my-4">
          Reset Password
        </h2>

        <Stack spacing={3} marginBottom={'16px'}>
          <TextField label="Email" />
          <TextField label="Password" />
          <Stack
            direction={'row'}
            alignContent={'center'}
            justifyContent={'space-between'}
          ></Stack>
          <Button sx={{ backgroundColor: 'black', color: 'white' }}>
            Reset Password
          </Button>
        </Stack>
      </div>
    </div>
  );
}
