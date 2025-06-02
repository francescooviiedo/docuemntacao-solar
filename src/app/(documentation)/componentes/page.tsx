'use client';
import { Autocomplete, Box, Button, FormControlLabel, OutlinedInput, Switch, TextField, Typography } from '@mui/material';
import * as React from 'react';
import CopyPaste from '../../components/CopyPaste';
import { codeSnippets } from '../utils/codeSnippets';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import dayjs, { Dayjs }  from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/pt-br';

const disabledDates = [
  '2025-06-01',
  '2025-06-03',
  '2025-06-05',
  '2025-06-07',
  '2025-06-10',
  '2025-06-12',
  '2025-06-15',
  '2025-06-18',
  '2025-06-22',
  '2025-06-25',
].map(date => dayjs(date));

const isWeekend = (date: Dayjs) => {
  const day = date.day();
  return (
    day === 0 ||
    day === 6 ||
    disabledDates.some(disabledDate => date.isSame(disabledDate, 'day'))
  );
};



export default function ComponentsPage() {
  const options = [
    { label: 'Belo Horizonte', id: 1 },
    { label: 'Recife', id: 2 },
  ];
  const [initialDate, setInitialDate] = React.useState<Dayjs | null>(null);
  const [finalDate, setFinalDate] = React.useState<Dayjs | null>(null);
  const [withHolidays, setWithHolidays] = React.useState(false);
  const [disableBeforeInitial, setDisableBeforeInitial] = React.useState(false);
  const [disableInitialDependency, setInitialDependency] = React.useState(false);

React.useEffect(()=> {
  console.log(initialDate?.format('YYYY-MM-DD'));
  }, [initialDate]);

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
        sx={{ marginBottom: '16px' }}
      />
      <CopyPaste type='jsx' content={`<OutlinedInput 
  name="nome"
  placeholder="Digite seu nome"
  />`} />
      <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '40px', fontWeight: 'bold' }}>
        Botões padrão:
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
        <Button sx={{ marginBottom: '16px' }}>
          primário
        </Button>
        <Button
          sx={{ marginBottom: '16px' }}
          color='secondary'
        >
          secundário
        </Button>
        <Button
          sx={{ marginBottom: '16px' }}
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
      <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '40px', fontWeight: 'bold' }}>
        Select com busca:
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, marginBottom: '16px' }}>
        <Autocomplete
          disablePortal
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Exemplo" />}
        />
      </Box>
      <CopyPaste type='jsx' content={codeSnippets.autocompleteStandard} />
      <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '40px', fontWeight: 'bold' }}>
        O componente Autocomplete entende a lista nos seguintes formatos:
      </Typography>
      <CopyPaste type='jsx' content={codeSnippets.autocompleteListStandard} />
      <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '40px', fontWeight: 'bold' }}>
        Componente de data:
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'pt-br'}>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'flex-start', marginBottom: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={withHolidays}
                  onChange={(_, checked) => setWithHolidays(checked)}
                />
              }
              label="Com lista de feriados"
              sx={{ mt: 1}}

            />
            <FormControlLabel
              control={
                <Switch
                  checked={disableBeforeInitial}
                  onChange={(_, checked) => setDisableBeforeInitial(checked)}
                />
              }
              label="desabilita datas anteriores a hoje"
            />
             <FormControlLabel
              control={
                <Switch
                  checked={disableInitialDependency}
                  onChange={(_, checked) => setInitialDependency(checked)}
                />
              }
              label="habilita dependencia de data inicial"
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <DatePicker
              value={initialDate}
              onChange={setInitialDate}
              disablePast={disableBeforeInitial}
              shouldDisableDate={withHolidays ? isWeekend : undefined}
              label="Data inicial"
            />
            <DatePicker
              value={finalDate}
              onChange={setFinalDate}
              disablePast={disableBeforeInitial}
              minDate={disableBeforeInitial ? (initialDate ? initialDate.add(1, 'day') : undefined) : undefined}
              disabled={disableInitialDependency ? initialDate === null : false}
              shouldDisableDate={withHolidays ? isWeekend : undefined}
              label="Data final"
            />
          </Box>
        </Box>
      </LocalizationProvider>
       <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '40px' }}>
        Os componentes de data podem ser configurados de diversas maneiras, como demonstrado acima, eles podem bloquear datas especificas,
        como feriados, finais de semana, datas anteriores a hoje e também podem ter dependências entre si, como bloquear a data inicial na inexistencia de uma data inicial.
      </Typography>
       <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '40px' }}>
        Agora vamos demonstrar alguns exemplos:
      </Typography>
            <CopyPaste type='jsx' content={codeSnippets.datePickerStandard} />
      <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '40px', fontWeight: 'bold' }}>
        Componente de data inicial e final dependentes:
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '40px' }}>
        Como podemos ver , no codigo abaixo, a data final é dependente da seleção da data inicial e a data final não poderá ser menor ou igual a data inicial.
      </Typography>
        <CopyPaste type='jsx' content={codeSnippets.datePickerDependent} />
      <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '40px', fontWeight: 'bold' }}>
        Componente de data com datas desabilitadas:
      </Typography>
       <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '40px' }}>
        Como podemos ver , no codigo abaixo, algumas datas no componente estão desabilitadas, como finais de semana e datas especificas.
      </Typography>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
              value={initialDate}
              onChange={setInitialDate}
              shouldDisableDate={isWeekend}
              label="Data inicial"
              
            />
    </LocalizationProvider>
    <Typography variant="subtitle1" sx={{ marginBottom: '16px', marginTop: '40px' }}>
        O código abaixo demonstra como desabilitar datas especificas, como finais de semana e datas especificas:
      </Typography>
        <CopyPaste type='jsx' content={codeSnippets.datePickerDisableDates} />
    </Box>
  );
}
