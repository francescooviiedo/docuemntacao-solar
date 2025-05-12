'use client'
import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Button, Tooltip, Box } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CopyPaste = ({ content }: { content: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(content).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
        });
    };

    return (
        <Box display="flex" alignItems="center">
            <Box sx={{
                display: 'flex', 
                flexDirection: 'row', 
                gap: 1, 
                borderRadius: 1,  
                bgcolor: 'grey.900',
                justifyContent: 'space-between',
                width: '100%',
            }}>
                <Box sx={{ bgcolor: 'grey.900', borderRadius: 1, padding: 1, flex: 1 }}>
                   <SyntaxHighlighter language="jsx" style={dracula}>
                        {content}
                        </SyntaxHighlighter>
                </Box>
                <Box sx={{ borderRadius: 1, flexDirection: 'column', display: 'flex', alignItems: 'flex-start', backgroundColor:'grey.900' }}>
                    <Tooltip title={copied ? "Copied!" : "Copy"}>
                        <Button onClick={handleCopy} sx={{ height: 10, width: 10, borderRadius: 1, backgroundColor:'grey.900'  }}>
                            <ContentCopyIcon />
                        </Button>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    );
};

export default CopyPaste;

