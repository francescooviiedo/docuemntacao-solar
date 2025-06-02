export const codeSnippets = {
    loginForm: `//componente LoginForm.tsx
  ...
  const [state, action] = useActionState(loginAction, {
    data: {
      username: '',
      password: '',
    },
  });
        ...
      <form action={action}>
        <Stack spacing={3}>
          <FormControl error={!!formErrors?.username}>
            <FormLabel>Usuário</FormLabel>
            <OutlinedInput
              name="username"
              defaultValue={data.username}
              placeholder="Digite seu usuário"
              fullWidth
            />
            ...`,
    loginAction: `
//loginAction.tsx
export async function loginAction(_: unknown, formData: FormData): 
Promise<LoginFormState> {
  const data: LoginRequest = {
    username: formData.get('username') as string,
    password: formData.get('password') as string,
  };

  const validation = loginSchema.safeParse(data);
  
  if (!validation.success) {
    return {
      data,
      formErrors: validation.error.flatten().fieldErrors,
    };
  }`,
    loginSchema: `//schema zod

import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, 'Usuário é obrigatório'),
  password: z.string().min(1, 'Senha é obrigatória'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export type LoginFormErrors = {
  [K in keyof LoginFormData]?: string[];
};
`,
functionsStandard:`
//errado:
function fecharModal() {
  setShowToast(false);
}
//correto:
const handleCloseToast = () => {
    setShowToast(false);
  };
`,
enumStandard: `
//errado:

return httpClient.request<T>(url, {
      method: 'GET',

//correto:

export enum HttpMethod {
    GET = "GET",
...
return httpClient.request<T>(url, {
      method: HttpMethod.GET,
...
`,
serviceStandard: `
class CategoryService {
    private readonly baseUrl = '/categories';
    private readonly cacheTime: CacheTimeOption = '1day';

    async getAll(params: GetAllCategoriesRequest) {
        return api.get<Array<GetCategoryResponse>>(this.baseUrl, {
            params,
            cache: {
                tag: 'categories',
                time: this.cacheTime,
            }
        });
    }

    async getById(id: number) {
        return api.get<GetCategoryResponse>(\`\${this.baseUrl}/\${id}\`,
            cache: {
                tag: \`categories-\${id}\`,
                time: this.cacheTime,
            }
        );
    }

    async create(body: CreateCategoryRequest) {
        await api.post(this.baseUrl, body);
    }

    async update(body: UpdateCategoryRequest) {
        await api.put(\`\${this.baseUrl}/\${body.id}\`, body);
    }

    async delete(id: number) {
        await api.delete(\`\${this.baseUrl}/\${id}\`);
    }
}

export const categoryService = new CategoryService();`,
importStandard: `
//errado:
import { Box } from '../../../components/Box';
//correto:
import { Box } from '@solar/solar-ui';`,
requestStandard: `
//PaginatedRequest

export type PaginatedRequest = {
    limit?: string;
    offset?: string;
}
...

//GetAllAssistedsRequest

import { PaginatedRequest } from "../shared/PaginatedRequest";

export type GetAllAssistedsRequest = PaginatedRequest & {
    cpf?: string;
    nome?: string;
    filiacao?: string;
}`,
responseStandard: `
//GetListSharedResponse

export type GetListSharedResponse<T> = {
    count: number;
    next: null;
    previous: null;
    results: T[];
}

...

//GetAllAssistedsResponse
  
import { GetListSharedResponse } from "../shared/GetListSharedResponse";

export type GetAllAssistedsResponse = GetListSharedResponse<Assisted>;

export type Assisted = {
    id: number;
    cpf: string;
    nome: string;
    nome_social: string | null;
    apelido: string | null;
    tipo: number;
    data_nascimento: string;
    filiacao: {
        nome: string;
    }[];
}`,
buttonStandard: 
`// standard

<Button>
  primário
</Button>

// cor secundária

<Button color="secondary">
  secundário
</Button>

//desabilitado

<Button disabled>
  desabilitado
</Button>`,
autocompleteStandard: `
//lista:

const options = [
      { label: 'Belo Horizonte', id: 1 },
      { label: 'Recife', id: 2 },
    ];

//componente:
    <Autocomplete
      disablePortal
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Exemplo" />}
    />`,
autocompleteListStandard: `
const options = [
   { label: 'Belo Horizonte', id: 1 },
   { label: 'Recife', id: 2 },
];
// ou
const options = ['Belo Horizonte', 'Recife'];
`,
booleanStandard: `//is: esta

    isLoading={pending}

//has: tem

    const hasToken = !!request.cookies.get('token');

//should: deveria

    const shouldGoBack = formData.get('go_back') === 'true';
        
        if (shouldGoBack) {
            return {
                data,
                step: previousState.step - 1,
            };
        }

//can: pode

    if(response) canClose`,
    datePickerStandard: `
    //date picker padrão

    import dayjs, { Dayjs }  from 'dayjs';
    import { DatePicker } from '@mui/x-date-pickers/DatePicker';
    import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
    import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
    import 'dayjs/locale/pt-br';

      const [initialDate, setInitialDate] = React.useState<Dayjs | null>(null);

          <LocalizationProvider 
            dateAdapter={AdapterDayjs}  
            adapterLocale={'pt-br'} //formato da data
          >
          <DatePicker
              value={initialDate}
              onChange={setInitialDate}
              disablePast //define se as datas anteriores a hoje serão desabilitadas
              shouldDisableDate // recebe uma função para desabilitar datas específicas
              label="Data inicial"
            />
    `,
    datePickerDependent: `
     //Date Picker dependentes

     //data inicial

    <DatePicker
      label="Data inicial"
      value={initialDate}
      onChange={setInitialDate}
    />
    
    //data final

    <DatePicker
      label="Data final"
      value={finalDate}
      onChange={setFinalDate}
      disabled={initialDate === null}
      minDate={initialDate.add(1, 'day')}

    />
    `,
    datePickerDisableDates: `
     //Date Picker com datas desabilitadas
    import dayjs, { Dayjs } from 'dayjs';onst disabledDates = [
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

     //data inicial

      <DatePicker
        value={initialDate}
        onChange={setInitialDate}
        shouldDisableDate={isWeekend}
        label="Data inicial"
      />
    `
}