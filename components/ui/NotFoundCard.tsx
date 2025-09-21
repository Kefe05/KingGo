'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
} from '@mui/material';
import {
  SearchOff,
  Home,
  ArrowBack,
  SentimentVeryDissatisfied,
} from '@mui/icons-material';

interface NotFoundCardProps {
  title?: string;
  description?: string;
  showBackButton?: boolean;
  showHomeButton?: boolean;
  onBack?: () => void;
  onHome?: () => void;
  sx?: object;
}

export default function NotFoundCard({
  title = '404 - Not Found',
  description = "Oops! The page you're looking for seems to have vanished into thin air. Let's get you back on track.",
  showBackButton = true,
  showHomeButton = true,
  onBack,
  onHome,
  sx = {},
}: NotFoundCardProps) {
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
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
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        style={{ width: '100%', maxWidth: '450px' }}
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
          {/* Animated background dots */}
          <motion.div
            animate={{
              backgroundPosition: ['0px 0px', '40px 40px'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.03,
              backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          <CardContent sx={{ position: 'relative', zIndex: 10, p: 4, textAlign: 'center' }}>
            {/* Animated 404 illustration */}
            <motion.div animate={floatingAnimation}>
              <Box
                sx={{
                  mx: 'auto',
                  mb: 3,
                  width: 120,
                  height: 120,
                  backgroundColor: 'black',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <SearchOff sx={{ fontSize: 48, color: 'white' }} />
                
                {/* Floating sad face */}
                <motion.div
                  animate={{
                    rotate: [-5, 5, -5],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                  }}
                  style={{
                    position: 'absolute',
                    top: -10,
                    right: -10,
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      backgroundColor: 'white',
                      border: '2px solid black',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <SentimentVeryDissatisfied sx={{ fontSize: 20, color: 'black' }} />
                  </Box>
                </motion.div>
              </Box>
            </motion.div>

            {/* Title with typewriter effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  color: 'black',
                  mb: 2,
                  fontFamily: 'monospace',
                }}
              >
                {title}
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  lineHeight: 1.6,
                }}
              >
                {description}
              </Typography>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Stack direction="row" spacing={2} justifyContent="center">
                {showBackButton && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outlined"
                      startIcon={<ArrowBack />}
                      onClick={onBack}
                      sx={{
                        borderColor: 'black',
                        color: 'black',
                        fontWeight: 'bold',
                        border: '2px solid black',
                        '&:hover': {
                          borderColor: 'black',
                          backgroundColor: 'black',
                          color: 'white',
                          boxShadow: '4px 4px 0px 0px #666',
                        },
                      }}
                    >
                      Go Back
                    </Button>
                  </motion.div>
                )}
                
                {showHomeButton && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      startIcon={<Home />}
                      onClick={onHome}
                      sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        fontWeight: 'bold',
                        border: '2px solid black',
                        '&:hover': {
                          backgroundColor: 'white',
                          color: 'black',
                          boxShadow: '4px 4px 0px 0px #000',
                        },
                      }}
                    >
                      Home
                    </Button>
                  </motion.div>
                )}
              </Stack>
            </motion.div>
          </CardContent>

          {/* Decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 0,
              height: 0,
              borderRight: '20px solid transparent',
              borderBottom: '20px solid black',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 0,
              height: 0,
              borderLeft: '20px solid transparent',
              borderTop: '20px solid black',
            }}
          />
        </Card>
      </motion.div>
    </Box>
  );
}