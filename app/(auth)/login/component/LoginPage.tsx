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

export default function LoginPage() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="  p-6 h-full w-[500px]">
        <h1 className="text-center font-bold text-4xl mb-10">KingGo</h1>
        <h2 className="text-center font-semibold text-2xl my-4">
          Sign In Here
        </h2>

        <Stack spacing={3} marginBottom={'16px'}>
          <TextField label="Email" />
          <TextField label="Password" />
          <Stack
            direction={'row'}
            alignContent={'center'}
            justifyContent={'space-between'}
          >
            <div>
              <Checkbox />
              <label>Remember me</label>
            </div>
            <div>
              <Button
                sx={{
                  color: 'black',
                  cursor: 'pointer',
                  backgroundColor: 'white',
                  textTransform: 'capitalize',
                }}
                onClick={handleClickOpen}
              >
                Forgot Password
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  <h2 className=" font-semibold text-2xl my-4">
                    Forgot Password
                  </h2>
                  <h2 className="  text-lg my-4">
                    Input your email to get reset link
                  </h2>
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    id="alert-dialog-description"
                    sx={{ width: '400px', overflow: 'hidden' }}
                  >
                    <TextField
                      label="Email"
                      sx={{
                        width: '300px',
                        height: '100%',
                        overflow: 'hidden',
                      }}
                    />
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleClose}
                    sx={{ border: '1px solid black', color: 'black' }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleClose}
                    autoFocus
                    sx={{ backgroundColor: 'black', color: 'white' }}
                  >
                    Continue
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </Stack>
          <Button sx={{ backgroundColor: 'black', color: 'white' }}>
            Sign In
          </Button>
        </Stack>

        <Stack>
          <Stack
            direction="row"
            alignContent={'center'}
            justifyContent={'center'}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={3}
          >
            <IoLogoAppleAppstore className="text-3xl cursor-pointer" />
            <FaGoogle className="text-2xl cursor-pointer" />
            <FaFacebook className="text-3xl cursor-pointer" />
          </Stack>

          <p className="text-center mt-5">
            Don't have an account,{' '}
            <Link
              href={'/register'}
              className={'text-stone-500 hover:underline transistion-all'}
            >
              Create one
            </Link>
          </p>
        </Stack>
      </div>
    </div>
  );
}
