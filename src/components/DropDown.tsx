import { useState, useEffect, JSX, use } from 'react';
import { 
    FormControl, 
    InputLabel, 
    ListSubheader,
    MenuItem, 
    Select, 
    SelectChangeEvent,
    SxProps
} from '@mui/material';
import type { DropDownItem } from '../types';   
import { readDropDownData } from '../services/recipe';
import { capitalize } from '../utils/formatter';

interface DropDownProps {
    domain: string
    parentItemsOnly?: boolean
    path: string
    sx?: SxProps
    setDropDownItem?: (value: DropDownItem) => void
}

export default function DropDown({ domain, setDropDownItem, path, sx, parentItemsOnly = false }: DropDownProps) {
    const defaultItem: DropDownItem = {
        id: '',
        name: ''
    };

    const [dropDownItems, setDropDownItems] = useState<DropDownItem[]>([]);
    const [selectedItem, setSelectedItem] = useState<DropDownItem>(defaultItem);

    // TODO: Call the drop down data apis at page load and put the values in state, then use that state to populate the drop down options
    useEffect(() => {
        const fetchData = async () => {
            const data = await readDropDownData(domain, path);
            setDropDownItems(data);
        };
    
        fetchData();
    }, []);

    const handleChange = (event: SelectChangeEvent) => {
        const selectedItem = dropDownItems.find(item => item.id === event.target.value);

        setSelectedItem(selectedItem || defaultItem);

        setDropDownItem && setDropDownItem(selectedItem || defaultItem);

        //alert(`Selected item value: ${selectedItem?.id}, text: ${selectedItem?.name}`);
    }

    const menuItems: JSX.Element[] = [];

    if (dropDownItems.some(item => item.parentId)) {
        const groupedItems: { [key: string]: DropDownItem[] } = {};

        dropDownItems.forEach(item => {
            const parentId = item.parentId || 'ungrouped';
            if (!groupedItems[parentId]) {
                groupedItems[parentId] = [];
            }
            groupedItems[parentId].push(item);
        });

        for (const parentItem of groupedItems.ungrouped || []) {
            if (parentItemsOnly) {
                menuItems.push(
                    <MenuItem key={parentItem.id} value={parentItem.id}>
                        {parentItem.name}
                    </MenuItem>
                );
            } else {
                menuItems.push(
                    <ListSubheader>
                        {parentItem.name}
                    </ListSubheader>
                );
                for (const childItem of groupedItems[parentItem.id] || []) {
                    menuItems.push(
                        <MenuItem key={childItem.id} value={childItem.id}>
                            {childItem.name}
                        </MenuItem>
                    );
                }
            }
        }
    } else {
        for (const item of dropDownItems) {
            menuItems.push(
                <MenuItem key={item.id} value={item.id}>
                    {item.name}
                </MenuItem>
            );
        }
    }

    return (
        <FormControl sx={{ ...sx, m: 1, minWidth: 200 }}>       
            <InputLabel id={`select-${path}-label`}>{capitalize(path)}</InputLabel>
            <Select
                label={capitalize(path)}
                labelId={`select-${path}-label`}
                onChange={handleChange}
                value={selectedItem.id}
            >
                {menuItems}
            </Select>
        </FormControl>
    )
}