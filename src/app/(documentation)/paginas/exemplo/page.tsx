import { Box, Divider, Typography } from '@mui/material';
import * as React from 'react';
import CopyToClipboard from '../../../components/CopyPaste';
import { codeSnippets } from '../../utils/codeSnippets';
import { codeExample } from '../../utils/codeSnippetsExamplePage';
export default function ExamplePage() {
  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="subtitle1" sx={{ marginBottom: '32px', marginTop: '40px' }}>
        Nessa sessão vamos demonstrar com um exemplo a forma de implementar a estrutura proposta na Documentação.
      </Typography>
      <Divider sx={{ marginBottom: '32px', marginTop: '40px' }} />
      <Typography variant="subtitle1" sx={{ marginBottom: '32px', marginTop: '40px' }}>
        Vamos começar criando os tipos de response:
      </Typography>
        <CopyToClipboard content={codeExample.resType} />
        <Typography variant="subtitle1" sx={{ marginBottom: '32px', marginTop: '40px' }}>
        Em seguida, vamos criar um arquivo de service:
      </Typography>
      <CopyToClipboard content={codeExample.service} />
       <Typography variant="subtitle1" sx={{ marginBottom: '32px', marginTop: '40px' }}>
        A Service deve conter todas as requisições relacionadas ao contexto, no caso nosso contexto é a agenda. 
        As requisições GET podem usar cache. O cache salva as informações por um tempo determinado, evitando que a aplicação faça requisições desnecessárias ao servidor.
        É necessário definir uma tag para indicar o que está sendo salvo e o tempo de cache, ou seja, o tempo que aquelas informações ficarão salvas.
        A tag pode ser usada em seguida para invalidar o cache, caso seja necessário atualizar as informações.  
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: '32px', marginTop: '40px' }}>
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: '32px', marginTop: '40px' }}>
       Agora vamos criar uma página. Na estrutura proposta, se a página é autenticada, ela deve ser criada dentro de private, em uma pasta com o nome da rota.
       Dentro da pasta vamos criar uma Page.tsx e, caso necessário, uma pasta de components.
      </Typography>
      <CopyToClipboard content={codeExample.page} />
      <Typography variant="subtitle1" sx={{ marginBottom: '32px', marginTop: '40px' }}>
      Como podemos ver no código acima, a página está retornando um componente <strong>Content</strong>
      </Typography>
      <CopyToClipboard content={codeExample.content} />
      <Typography variant="subtitle1" sx={{ marginBottom: '32px', marginTop: '40px' }}>
      Dentro de <strong>Content</strong> podemos ver algumas particularidades:
      A primeira é o <strong> &apos;use client&apos;</strong> que no Next indica que está usando o cliente e não o servidor para renderizar a página.
      O Next permite ter páginas e componentes que rodam no servidor e outros que rodam no cliente, o que pode ser útil para melhorar a performance da aplicação.
      A segunda é o uso de <strong>Paper</strong> e <strong>MainContent</strong> que são componentes do Material UI. O primeiro recebe o título da página e o segundo o conteúdo.
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: '32px', marginTop: '40px' }}>
      No Solar v2 priorizamos o uso do servidor para renderizar as páginas, mas em alguns casos é necessário usar o cliente.
      </Typography>
    </Box>
  );
}
