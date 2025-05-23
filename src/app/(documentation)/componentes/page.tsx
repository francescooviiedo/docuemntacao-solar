import { Box, Button, OutlinedInput, Typography } from '@mui/material';
import * as React from 'react';
import CopyPaste from '../../components/CopyPaste';
import { codeSnippets } from '../paginas/validation/codeSnippets';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
export default function ComponentsPage() {
  return (
    <Box sx={{ padding: '16px' }}>
       <Typography variant="subtitle1" sx={{ marginBottom: '32px', marginTop: '40px' }}>
        Nessa sessao será discutido o usdo de componentes Material UI
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: '32px', marginTop: '40px' }}>
        Os componentes ja foram configurados no tema para vir com cores e tamamhos padronizados. Caso seja necessário 
        os estilos podem ser sobrescritos.
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '40px', fontWeight: 'bold' }}>      
          Input padrão:
      </Typography>
          <OutlinedInput
            name="nome"
            placeholder="Digite seu nome"
            sx={{ marginBottom: '16px'}}
          />
      <CopyPaste type='jsx' content={`<OutlinedInput 
  name="nome"
  placeholder="Digite seu nome"
  />`} />
   <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '40px', fontWeight: 'bold' }}>      
          Botões padrão:
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
          <Button
            sx={{ marginBottom: '16px'}}
          >
            primário
          </Button>
           <Button
            sx={{ marginBottom: '16px'}}
            color='secondary'
          >
            secundário
          </Button>
           <Button
            sx={{ marginBottom: '16px'}}
            disabled
          >
            desabilitado
          </Button>
          </Box>
      <CopyPaste type='jsx' content={codeSnippets.buttonStandard} />
      <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '40px', fontWeight: 'bold' }}>      
          Botões com icone:
      </Typography>
       <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, marginBottom: '16px' }}>
         <Button startIcon={<ChevronLeftIcon />}>
            Voltar
          </Button>
          <Button endIcon={<ChevronRightIcon />}>
            Avançar
          </Button>
          </Box>
      <CopyPaste type='jsx' content={codeSnippets.buttonStandard} />
          </Box>
     
  );
}
