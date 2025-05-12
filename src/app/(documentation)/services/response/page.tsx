import { Box, Typography } from '@mui/material';
import * as React from 'react';
import CopyToClipboard from '../../../components/CopyPaste';
import { codeSnippets } from '../../paginas/validation/codeSnippets';
export default function ServiceFormatPage() {
  return (
    <Box sx={{ padding: '16px' }}>
       <Typography variant="subtitle1" sx={{ marginBottom: '32px', marginTop: '40px' }}>
                Todas as services tem a resposta tipada:
      </Typography>
        <CopyToClipboard content={codeSnippets.responseStandard} />
    </Box>
  );
}
