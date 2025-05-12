import { Box, Typography } from '@mui/material';
import * as React from 'react';

const colors = [
  { name: 'Primary Main', color: '#207840' },
  { name: 'Primary Light', color: '#A4E559' },
  { name: 'Primary Dark', color: '#21783B' },
  { name: 'Secondary Main', color: '#38833B' },
  { name: 'Secondary Light', color: '#8BC34A' },
  { name: 'Secondary Dark', color: '#2E7D32' },
  { name: 'Error', color: '#DA3737' },
  { name: 'Warning', color: '#FA8518' },
  { name: 'Info', color: '#4165E7' },
  { name: 'Success', color: '#23A740' },
  { name: 'Background Default', color: '#FFFFFF' },
  { name: 'Background Paper', color: '#F5F5F5' },
  { name: 'Text Primary', color: '#444444' },
  { name: 'Text Secondary', color: '#757575' },
  { name: 'Text Disabled', color: '#949494' },
];

export default function ColorPage() {
  return (
    <Box sx={{ padding: '16px' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {colors.map((color) => (
          <Box
            key={color.name}
            sx={{
              width: '120px',
              height: '120px',
              backgroundColor: color.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              color: '#FFFFFF',
              textAlign: 'center',
              padding: '8px',
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {color.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
