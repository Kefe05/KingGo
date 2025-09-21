import { Card, Stack, Button, Chip } from '@mui/material';
import Image from 'next/image';
import React from 'react';


export default function RolePage() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Stack gap={10}>
        <Stack direction={'row'} gap={5}>
          <Card className={'w-[200px]'}>
            <Chip
              label="Driver"
              sx={{ backgroundColor: 'black', color: 'white' }}
            />
            <Image
              src={'/driver.svg'}
              alt="driver image"
              height={200}
              width={200}
              className="w-full h-full"
            />
          </Card>
          <Card className={'w-[200px]'}>
            <Chip
              label="Rider"
              sx={{ backgroundColor: 'black', color: 'white' }}
            />
            <Image
              src={'/rider.svg'}
              alt="rider image"
              height={200}
              width={200}
              className="w-full h-full"
            />
          </Card>
        </Stack>
        <Button sx={{ color: 'white', backgroundColor: 'black' }}>
          Continue
        </Button>
      </Stack>
    </div>
  );
}
