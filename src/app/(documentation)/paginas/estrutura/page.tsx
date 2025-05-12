import { Box, Divider, Typography } from '@mui/material';
import * as React from 'react';
import CopyToClipboard from '../../../components/CopyPaste';
import { codeSnippets } from '../validation/codeSnippets';
import FolderStructure from '../../../components/Folderstructure';
export default function StructurePage() {
  return (
    <Box sx={{ padding: '16px' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1px', flexDirection: 'column' }}>
        <Typography variant="h4" sx={{ marginBottom: '1px', marginTop: '16px' }}>
          <strong>Estrutura de pastas:</strong>
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: '1px', marginTop: '16px' }}>
          A estrutura a seguir descreve como as pastas e os arquivos devem ser organizados dentro do projeto Solar V2:
        </Typography>
        <Divider sx={{ marginBottom: '32px', marginTop: '64px' }} />
        <FolderStructure />
        <Divider sx={{ marginBottom: '32px', marginTop: '16px' }} />

      </Box>
    </Box>
  );
}
