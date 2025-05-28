import { Box, Typography } from '@mui/material';
import * as React from 'react';
import CopyToClipboard from '../../../components/CopyPaste';
import { codeSnippets } from '../../utils/codeSnippets';
export default function ServiceFormatPage() {
  return (
    <Box sx={{ padding: '16px' }}>
       <Typography variant="subtitle1" sx={{ marginBottom: '32px', marginTop: '40px' }}>
        A camada de services é separada por contexto, ou seja, um arquivo para endpoint ( CRUD ) e não um arquivo por função:
      </Typography>
        <CopyToClipboard content={codeSnippets.serviceStandard} />
    </Box>
  );
}
