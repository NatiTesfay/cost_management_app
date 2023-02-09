import * as React from 'react';
import { Card, CardContent } from '@mui/material'; 

export default function DataCard({children}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}