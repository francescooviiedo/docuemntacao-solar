'use client'

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import FolderIcon from '@mui/icons-material/Folder';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import * as React from 'react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export default function FolderStructure() {
    const ListIcon = ({ text, subText, padding = 4, isFile = false }: { text: string; subText: string; padding?: number; isFile?: boolean }) => {
        return (
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: padding, pt: 0 }}>
                    <ListItemIcon>
                        {isFile ? <InsertDriveFileIcon /> : <FolderIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} secondary={subText} />
                </ListItemButton>
            </List>
        );
    };

    const CollapseIcon = ({ children, text, subText = '', padding, isOpen = false }: { children: React.ReactNode; text: string; subText?: string; padding: number; isOpen?: boolean }) => {
        const [open, setOpen] = React.useState(isOpen);

        const handleClick = () => {
            setOpen(!open);
        };

        return (
            <List>
                <ListItemButton onClick={handleClick} sx={{ pl: padding, pt: 0 }}>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} secondary={subText} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {children}
                </Collapse>
            </List>
        );
    };

    return (
        <List>
            <CollapseIcon text="App" subText="" padding={0}>
                <CollapseIcon text="(private)" subText='telas com auth' padding={4}>
                    <CollapseIcon text="Pagina" subText="contém layout e page" padding={8}>
                        <ListIcon text="layout.tsx" subText="exemplo de contexto" padding={16} isFile={true} />
                        <ListIcon text="page.tsx" subText="exemplo de contexto" padding={16} isFile={true} />
                    </CollapseIcon>
                </CollapseIcon>
                <CollapseIcon text="Actions" subText='ações do projeto' padding={4}>
                    <CollapseIcon text="Pagination" subText='exemplo de pasta' padding={8}>
                    <ListIcon text="changePageAction.ts" subText="exemplo de ação" padding={16} isFile={true} />
                    </CollapseIcon>
                </CollapseIcon>
                <CollapseIcon text="Auth" subText='autenticação do projeto' padding={4}>
                    <ListIcon text="login" subText="exemplo de contexto" padding={8} isFile={true} />
                </CollapseIcon>
            </CollapseIcon>
            <CollapseIcon text="Hooks" subText="custom hooks" padding={0} >
                    <ListIcon text="usePagination.ts" subText="exemplo de hook" padding={4} isFile={true} />
            </CollapseIcon>
                <ListIcon text="Middleware" subText="contém as funções de middleware" padding={0} />
                <CollapseIcon text="Models" padding={0}>
                    <ListIcon text="Shared" subText="models compartilhadas" padding={4} />
                    <CollapseIcon text="Request" subText="models de requisição" padding={4}>
                        <ListIcon text="category" subText="exemplo de contexto" padding={8} isFile={true} />
                    </CollapseIcon>
                    <CollapseIcon text="Response" subText="models de resposta" padding={4}>
                        <ListIcon text="category" subText="exemplo de contexto" padding={8} isFile={true} />
                    </CollapseIcon>
                </CollapseIcon>
                 <CollapseIcon text="Public" subText="pasta pública" padding={0} >
                    <CollapseIcon text="Images" subText="pasta de imagens" padding={4} >
                        <ListIcon text="logo.png" subText="exemplo de imagem" padding={8} isFile={true} />
                </CollapseIcon>
            </CollapseIcon>
                <CollapseIcon text="Schemas" subText="validações de formularios" padding={0}>
                    <CollapseIcon text="Auth" subText="validações de autenticação" padding={4}>
                        <ListIcon text="loginSchema" subText="Validação do form de login" padding={8} isFile={true} />
                    </CollapseIcon>
                </CollapseIcon>
                <CollapseIcon text="Services" subText="services por contexto" padding={0}>
                        <ListIcon text="Shared" subText="services compartilhadas" padding={4}/>
                        <ListIcon text="categoryService" subText="exemplo de arquivo por contexto" padding={4} isFile={true} />

                </CollapseIcon>
                <CollapseIcon text="Theme" subText="temas do projeto" padding={0}>
                        <ListIcon text="Index" subText="arquivo que centraliza os estilos" padding={4} isFile={true}/>
                </CollapseIcon>
                <CollapseIcon text="Ui" subText="componentes reutilizaveis" padding={0}>
                        <ListIcon text="Pagination.tsx" subText="exemplo de componente" padding={4} isFile={true}/>
                </CollapseIcon>
                <CollapseIcon text="Utils" subText="funções reutilizaveis" padding={0}>
                    <CollapseIcon text="Constants" subText="pasta de ENUMS" padding={4}>
                        <ListIcon text="AUTH_ROUTES.ts" subText="exemplo de arquivo de enums" padding={8} isFile={true}/>
                    </CollapseIcon>
                    <ListIcon text="formatDate.ts" subText="exemplo de função reutilizavel" padding={8} isFile={true}/>
                </CollapseIcon>
        </List>
    );
}
