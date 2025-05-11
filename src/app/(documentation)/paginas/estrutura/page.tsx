import { Box, Typography } from '@mui/material';
import * as React from 'react';
import CopyToClipboard from '../../../components/CopyPaste';
export default function StructurePage() {
  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="h4" gutterBottom>
        Estrutura
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <CopyToClipboard content={`<Tooltip title={copied ? "Copied!" : "Copy"}>
  <Button onClick={handleCopy} sx={{ height: 10, width: 10, borderRadius: 1 }}>
      <ContentCopyIcon />
  </Button>
</Tooltip>`}
                        />
          </Box>
    </Box>
  );
}
