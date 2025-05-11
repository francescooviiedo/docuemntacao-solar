import { Box, Typography } from '@mui/material';
import * as React from 'react';

export default function TypographyPage() {
  return (
    <Box sx={{ padding: '16px', display: 'flex', flexDirection: 'row', gap: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'left', flexDirection: 'column', gap: 1 }}>
      <Typography variant="h5" gutterBottom>
        Inter
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 300 }} gutterBottom>
        Aa - Light (Peso Light: 300)
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 400 }} gutterBottom>
        Aa - Regular (Peso Regular: 400)
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 500 }} gutterBottom>
        Aa - Medium (Peso Medium: 500)
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 600 }} gutterBottom>
        Aa - Semibold (Peso Semibold: 600)
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 700 }} gutterBottom>
        Aa - Bold (Peso Bold: 700)
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 900 }} gutterBottom>
        Aa - Black (Peso Black: 900)
      </Typography>
      </Box>
    <Box sx={{ display: 'flex', alignItems: 'left', flexDirection: 'column', gap: 1, ml: 10 }}>

      <Typography variant="h6" gutterBottom>
        Examples:
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 600 }} gutterBottom>
        AaBbCcDdEeFfGgHh 1234567890
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 700 }} gutterBottom>
        AaBbCcDdEeFfGgHh 1234567890
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 900 }} gutterBottom>
        AaBbCcDdEeFfGgHh 1234567890
      </Typography>
            </Box>

    </Box>
  );
}
