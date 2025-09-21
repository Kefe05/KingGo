'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  LinearProgress,
  Stack,
  Chip,
} from '@mui/material';
import { AccessTime, FlashOn, Star, Construction } from '@mui/icons-material';

interface ComingSoonCardProps {
  title?: string;
  description?: string;
  sx?: object;
}

export default function ComingSoonCard({
  title = 'Coming Soon',
  description = 'This feature is currently under development. Stay tuned for updates!',
  sx = {},
}: ComingSoonCardProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
        p: 3,
        ...sx,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <Card
          sx={{
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'white',
            border: '2px solid black',
            borderRadius: 2,
            boxShadow: '8px 8px 0px 0px #000',
          }}
        >
          {/* Animated background pattern */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.05,
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                #000 10px,
                #000 20px
              )`,
            }}
          />

          <CardContent
            sx={{ position: 'relative', zIndex: 10, p: 4, textAlign: 'center' }}
          >
            {/* Animated icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Box
                sx={{
                  mx: 'auto',
                  mb: 3,
                  width: 64,
                  height: 64,
                  backgroundColor: 'black',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AccessTime sx={{ fontSize: 32, color: 'white' }} />
              </Box>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 'bold',
                  color: 'black',
                  mb: 2,
                }}
              >
                {title}
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  lineHeight: 1.6,
                }}
              >
                {description}
              </Typography>
            </motion.div>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Stack spacing={1} sx={{ mb: 3 }}>
                {[
                  { icon: FlashOn, text: 'Lightning fast performance' },
                  { icon: Star, text: 'Premium user experience' },
                ].map((item, index) => (
                  <motion.div key={index} whileHover={{ x: 5 }}>
                    <Chip
                      icon={<item.icon />}
                      label={item.text}
                      variant="outlined"
                      sx={{
                        borderColor: 'black',
                        color: 'black',
                        '& .MuiChip-icon': {
                          color: 'black',
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </motion.div>

            {/* Animated progress bar */}
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}
              >
                <Typography variant="caption" color="text.secondary">
                  Development Progress
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  75%
                </Typography>
              </Box>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 1.5, ease: 'easeOut' }}
                style={{ transformOrigin: 'left' }}
              >
                <LinearProgress
                  variant="determinate"
                  value={75}
                  sx={{
                    height: 8,
                    borderRadius: 1,
                    border: '1px solid black',
                    backgroundColor: '#f5f5f5',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'black',
                    },
                  }}
                />
              </motion.div>
            </Box>

            {/* CTA Button */}
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                fullWidth
                variant="contained"
                startIcon={<Construction />}
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  fontWeight: 'bold',
                  py: 1.5,
                  border: '2px solid black',
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                    boxShadow: '4px 4px 0px 0px #000',
                  },
                }}
              >
                Notify Me When Ready
              </Button>
            </motion.div>
          </CardContent>

          {/* Decorative corner elements */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 0,
              height: 0,
              borderLeft: '20px solid transparent',
              borderBottom: '20px solid black',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 0,
              height: 0,
              borderRight: '20px solid transparent',
              borderTop: '20px solid black',
            }}
          />
        </Card>
      </motion.div>
    </Box>
  );
}
