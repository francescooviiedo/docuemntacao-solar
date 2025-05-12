import { Box, Divider, Typography } from '@mui/material';
import * as React from 'react';
import CopyToClipboard from '../../../components/CopyPaste';
import { codeSnippets } from '../validation/codeSnippets';
import FolderStructure from '../../../components/Folderstructure';
export default function StructurePage() {
  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="subtitle1" sx={{ marginBottom: '32px', marginTop: '40px' }}>
        Nessa sessão vamos discutir os padrões a serem seguidos para a construção de componentes e páginas dentro do Solar V2.
      </Typography>
      <Divider sx={{ marginBottom: '32px', marginTop: '40px' }} />
      <Typography variant="subtitle1" sx={{ marginBottom: '32px', marginTop: '40px' }}>
        No Solar V2 a nomeclatura das funções e componentes é em inglês, camel case:
      </Typography>
        <CopyToClipboard content={codeSnippets.functionsStandard} />
      <Typography variant="subtitle1" sx={{ marginBottom: '32px', marginTop: '40px' }}>
        Uso de <strong>ENUMS</strong> e não de textos:
      </Typography>
        <CopyToClipboard content={codeSnippets.enumStandard} />
      <Typography variant="subtitle1" sx={{ marginBottom: '32px', marginTop: '40px' }}>
        A camada de services é separada por contexto, ou seja, um arquivo para endpoint ( CRUD ) e não um arquivo por função:
      </Typography>
        <CopyToClipboard content={codeSnippets.serviceStandard} />
    </Box>
  );
}
