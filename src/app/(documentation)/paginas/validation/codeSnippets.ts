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
//correto:
class CategoryService {
    private readonly baseUrl = '/categories';
    private readonly cacheTime: CacheTimeOption = '1day';

    async getAll(params: GetAllCategoriesRequest) {
        return api.get<Array<GetCategoryResponse>>(this.baseUrl, {
            params,
            cache: {
                tag: 'categories', // tag for revalidation
                time: this.cacheTime, // time to revalidate the cache
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
    count: number
    next: null
    previous: null
    results: T[]
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
}`

}