'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Stack,
  Skeleton,
} from '@mui/material';
import { Refresh, Speed, CloudSync } from '@mui/icons-material';

interface LoadingCardProps {
  title?: string;
  description?: string;
  showProgress?: boolean;
  progress?: number;
  loadingText?: string;
  sx?: object;
}

export default function LoadingCard({
  title = 'Loading',
  description = 'Please wait while we prepare everything for you...',
  showProgress = false,
  progress = 0,
  loadingText = 'Loading data',
  sx = {},
}: LoadingCardProps) {
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  };

  const spinAnimation = {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear' as const,
    },
  };

  const waveAnimation = {
    x: [-20, 20, -20],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  };

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
          {/* Animated background waves */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 0%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.03,
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 20px,
                #000 20px,
                #000 40px
              )`,
            }}
          />

          <CardContent
            sx={{ position: 'relative', zIndex: 10, p: 4, textAlign: 'center' }}
          >
            {/* Main loading animation */}
            <motion.div animate={pulseAnimation}>
              <Box
                sx={{
                  mx: 'auto',
                  mb: 3,
                  width: 100,
                  height: 100,
                  backgroundColor: 'black',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <motion.div animate={spinAnimation}>
                  <Refresh sx={{ fontSize: 40, color: 'white' }} />
                </motion.div>

                {/* Orbiting dots */}
                {[0, 120, 240].map((angle, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: index * 0.2,
                    }}
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -4,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 8,
                        height: 8,
                        backgroundColor: 'white',
                        borderRadius: '50%',
                      }}
                    />
                  </motion.div>
                ))}
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

            {/* Loading indicators */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Stack spacing={2} alignItems="center">
                {/* Progress bar or circular progress */}
                {showProgress ? (
                  <Box sx={{ width: '100%', maxWidth: 200 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: 1,
                      }}
                    >
                      <Typography variant="caption" color="text.secondary">
                        Progress
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {Math.round(progress)}%
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: '100%',
                        height: 8,
                        backgroundColor: '#f5f5f5',
                        borderRadius: 1,
                        border: '1px solid black',
                        overflow: 'hidden',
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                        style={{
                          height: '100%',
                          backgroundColor: 'black',
                        }}
                      />
                    </Box>
                  </Box>
                ) : (
                  <CircularProgress
                    size={32}
                    sx={{
                      color: 'black',
                    }}
                  />
                )}

                {/* Loading text with animation */}
                <motion.div animate={waveAnimation}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                    }}
                  >
                    {loadingText}
                    <motion.span
                      animate={{
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      ...
                    </motion.span>
                  </Typography>
                </motion.div>

                {/* Feature loading skeleton */}
                <Stack spacing={1} sx={{ width: '100%', mt: 2 }}>
                  {[Speed, CloudSync].map((Icon, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.2, duration: 0.4 }}
                    >
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <Icon sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Skeleton
                          variant="text"
                          width={`${60 + Math.random() * 40}%`}
                          height={20}
                          sx={{
                            backgroundColor: '#f0f0f0',
                          }}
                        />
                      </Box>
                    </motion.div>
                  ))}
                </Stack>
              </Stack>
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
              borderLeft: '15px solid transparent',
              borderBottom: '15px solid black',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 0,
              height: 0,
              borderRight: '15px solid transparent',
              borderTop: '15px solid black',
            }}
          />
        </Card>
      </motion.div>
    </Box>
  );
}
