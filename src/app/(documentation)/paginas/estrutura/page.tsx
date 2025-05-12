import { Box, Typography } from '@mui/material';
import * as React from 'react';
import CopyToClipboard from '../../../components/CopyPaste';
export default function StructurePage() {
  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="body1" sx={{ marginBottom: '16px' }}>
        Nesta sessao vamos explicar a estrutura do projeto e como ele foi organizado. O projeto é dividido em pastas principais, cada uma com sua própria função. Aqui estão as principais pastas:
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
