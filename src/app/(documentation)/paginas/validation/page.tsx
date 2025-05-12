import { Box, Typography } from '@mui/material';
import * as React from 'react';
import CopyToClipboard from '../../../components/CopyPaste';
import { codeSnippets } from './codeSnippets';
export default function StructurePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
      <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '16px' }}>
        Nesta sessao vamos explicar a estrutura de validação de formularios e compos com <code>zod</code> usando o <code>form</code> de <strong>login</strong> como exemplo:
      </Typography>
     <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '16px' }}>
        O Solar V2 usa uma estrutura de formulários com actions para salvar dados, a validação é feita dentro da ação usando a biblioteca zod.
      </Typography>
        <CopyToClipboard content={codeSnippets.loginForm} />
      <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '16px' }}>
        Validação dentro da action:
      </Typography>
      <CopyToClipboard content={codeSnippets.loginAction} />
      <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '16px' }}>
        <code>loginSchema</code> é um schema do zod que valida os dados do formulário. Se a validação falhar, o erro é retornado na propriedade <code>formErrors</code> do estado.
      </Typography>
      <CopyToClipboard content={codeSnippets.loginSchema} />
      <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '16px' }}>
        O schema é definido usando a biblioteca zod, que permite validar os dados do formulário de forma simples e eficiente.
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '16px' }}>
        A validação é feita dentro da action, e se houver erros, eles são retornados na propriedade <code>formErrors</code> do estado. Isso permite que você exiba os erros diretamente no formulário.
      </Typography>
    </Box>
  );
}
