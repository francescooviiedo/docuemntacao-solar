'use client'

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import FolderIcon from '@mui/icons-material/Folder';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import * as React from 'react';

export default function FolderStructure() {

    const ListIcon = ({text, subText, padding = 4}:{ text:string, subText:string, padding?: number })  => {
        return (
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: padding, pt: 0 }}>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} secondary={subText} />
                </ListItemButton>
            </List>
        );
    };

    const CollapseIcon = ({ children, text, subText = '',padding, isOpen = false }: { children: React.ReactNode, text:string, subText?:string,padding: number, isOpen?: boolean }) => {
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
            <CollapseIcon text='App' subText='' padding={0} isOpen={true}>
                <CollapseIcon text='(private)' padding={4}>
                <ListIcon text='Pagina' subText='contém layout e page' padding={8}/>
            </CollapseIcon>
                <CollapseIcon text='Actions' padding={4}>
                <ListIcon text='Action' subText='contém as ações por contexto' padding={8}/>
            </CollapseIcon>
            <CollapseIcon text='Auth' padding={4}>
                <ListIcon text='login' subText='exemplo de contexto' padding={8}/>
            </CollapseIcon>            
                <ListIcon text='Middleware' subText='contém as funções de middleware' padding={4}/>
            </CollapseIcon>
        </List>
    );
}
