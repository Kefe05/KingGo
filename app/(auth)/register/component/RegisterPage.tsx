import { TextField, Stack, Button, ListItem, Divider } from '@mui/material';
import { IoLogoAppleAppstore } from 'react-icons/io5';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center ">
      <div className="  p-6 h-full w-[500px]">
        <h1 className="text-center font-bold text-4xl mb-10">KingGo</h1>
        <h2 className="text-center font-semibold text-2xl my-4">
          Sign Up Today
        </h2>

        <Stack spacing={3} marginBottom={'16px'}>
          <TextField label="Full Name" />
          <TextField label="Email" />
          <TextField label="Phone" type="tel" />
          <TextField label="Password" />
          <Button sx={{ backgroundColor: 'black', color: 'white' }}>
            Sign Up
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
            I have an account,{' '}
            <Link
              href={'/login'}
              className={'text-stone-500 hover:underline transistion-all'}
            >
              Login
            </Link>
          </p>
        </Stack>
      </div>
    </div>
  );
}
