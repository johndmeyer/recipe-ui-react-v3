import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useRecipeStore } from '../stores/RecipeStore';

interface ResultsTableProps {
    domain: string
    setSelectedRecipeId: (id: string | undefined) => void
    setShowRecipeDetailEdit: (show: boolean) => void
}

export default function ResultsTable({domain, setSelectedRecipeId, setShowRecipeDetailEdit}: ResultsTableProps) {
    const { data: recipes, error, fetchData } = useRecipeStore();

    const handleRowClick = (id: string) => {
        setSelectedRecipeId(id);
        setShowRecipeDetailEdit(true); 
    }
    
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const columns: GridColDef[] = [
        {
            field: 'name',
            flex: 1,
            headerName: 'Name',
        },
        {
            field: 'description',
            flex:1,
            headerName: 'Description',
        },
        {
            field: 'difficulty',
            headerName: 'Difficulty',
            width: 150
        },
        {
            align: 'left',
            field: 'cookTime',
            headerAlign: 'left',
            headerName: 'Cook Time',
            type: 'number',
            width: 150
        },
        {
            field: 'servings',
            headerName: 'Servings',
            width: 150
        }
    ];

    return (
        <Box>
            <DataGrid
                rows={recipes}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                        pageSize: 5,
                        },
                    },
                }}
                onRowClick={(params) => handleRowClick(params.row.recipeId)}
                pageSizeOptions={[5]}
            />
        </Box>
    )
}