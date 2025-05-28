export const codeExample = {
    resType: `
//GetListSharedResponse e exportado de outro arquivo na pasta Shared:

export type GetListSharedResponse<T> = {
count: number
next: null
previous: null
results: T[]
}

export type GetCalendarResponse = GetListSharedResponse<Calendar>;

export type Calendar = {
  id: number;
  titulo: string;
  data_inicial: string;
  data_final: string;
  ativo: boolean;
  defensoria: string;
  comarca: District;
  categorias: CalendarCategory[];
}

type District = {
  id: number;
  nome: string;
}

export type CalendarCategory = {
  id: number;
  nome: string;
  vagas: number;
  duracao: number;
  simultaneos: number;
  ativo: boolean;
  dias: Record<string, CalendarDay>;
}

type CalendarDay = {
  dia_pauta: boolean;
  dia_remoto: boolean;
  dia_presencial: boolean;
  dia_extra_pauta: boolean;
}`,
service:`
class CalendarService {
    private readonly baseUrl = '/agenda-defensoria';
    private readonly cacheTime: CacheTimeOption = '1day';

    async getAll(params: PaginatedRequest) {
        return api.get<GetCalendarResponse>(this.baseUrl, {
            params,
            cache: {
                tag: CACHE_KEYS.GET_ALL_CALENDARS,
                time: this.cacheTime,
            }
        });
    }

    async create(body: CreateCalendarFormData) {
        return api.post(this.baseUrl, body);
    }
}

export const calendarService = new CalendarService();
`,
page:`
type Props = {
    searchParams: Promise<PaginatedRequest>
}

export const metadata: Metadata = {
    title: 'Agenda',
    description: 'Agenda da Defensoria Pública'
};

export default async function Calendar({ searchParams }: Props) {
    const queryParams = await searchParams;
    const calendar = await calendarService.getAll(handlePaginatedParams(queryParams));

    return (
       <Content calendar={calendar} />
    );
}
`,
content:`
"use client";

type Props = {
  calendar: GetCalendarResponse;
};

export function Content({ calendar }: Props) {
    const [isOpenSaveModal, setIsOpenSaveModal] = useState(false);
    const [isOpenViewDetailsModal, setIsOpenViewDetailsModal] = useState(false);
    const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);
    const [selectedCalendar, setSelectedCalendar] = useState<Calendar | null>(null);

    const handleToggleModal = useCallback(() => {
        setIsOpenSaveModal((prev) => !prev);
    }, []);

    const handleToggleViewDetailsModal = useCallback((calendar: Calendar) => {
        setIsOpenViewDetailsModal(prev => !prev);
        setSelectedCalendar(calendar);
    }, []);

    const handleCloseViewDetailsModal = useCallback(() => {
        setIsOpenViewDetailsModal(false);
        setSelectedCalendar(null);
    }, []);

    const handleToggleRemoveModal = useCallback((calendar: Calendar) => {
        setIsOpenRemoveModal(prev => !prev);
        setSelectedCalendar(calendar);
    }, []);

    const handleCloseRemoveModal = useCallback(() => {
        setIsOpenRemoveModal(false);
        setSelectedCalendar(null);
    }, []);

    return (
        <Paper
            title="Agenda"
            actions={
                <AddButton onClick={handleToggleModal} />
            }
        >
            <MainContent>
                <CalendarTable
                    calendar={calendar}
                    onViewDetails={handleToggleViewDetailsModal}
                    onRemove={handleToggleRemoveModal}
                />
            </MainContent>

            <CreateCalendarModal
                open={isOpenSaveModal}
                onClose={handleToggleModal}
            />

            <ViewCalendarDetailsModal
                isOpen={isOpenViewDetailsModal}
                calendar={selectedCalendar}
                onClose={handleCloseViewDetailsModal}
            />

            <DeleteCalendarModal
                isOpen={isOpenRemoveModal}
                calendar={selectedCalendar}
                onClose={handleCloseRemoveModal}
            />
        </Paper>
    );
}
`
}