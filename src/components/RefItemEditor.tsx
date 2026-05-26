import { useState, useEffect } from 'react';
import { 
    Box, 
    Button, 
    Drawer, 
    Stepper,
    Step,
    StepLabel,
    TextField, 
    Typography 
} from '@mui/material';
import DropDown from './DropDown';
import { capitalize } from '../utils/formatter';

interface RefItemEditorProps {
    domain: string
    path: string
}

enum OperationType {
    addTopLevel = 'addTopLevel',
    addChild = 'addChild',
    edit = 'edit'
}

const steps = ['Select Add/Edit', 'Enter New Values & Save'];

export default function RefItemEditor({ domain, path }: RefItemEditorProps) {
    const [activeStep, setActiveStep] = useState(0);
    const [operationType, setOperationType] = useState<OperationType | null>(null);
    const [operationMessage, setOperationMessage] = useState('');
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleBack = () => { setActiveStep(0);}
    const handleNext = () => {
        if (activeStep === 0) {
            setActiveStep(1);
        } else {
            // Add save logic here
        }    
    }

    function handleSetOperationType (type: OperationType) {
        setOperationType(type);
        switch(type) {
            case OperationType.addTopLevel:
                setOperationMessage(`Add new top level ${path}`);
                break;
            case OperationType.addChild:
                setOperationMessage(`Add new child level ${path}`);
                break;
            case OperationType.edit:
                setOperationMessage(`Edit ${path}`);
                break;
        }
    }

    return (
        <>
            <Button 
                onClick={handleOpen} 
                variant='outlined'
                sx={{ m: 1, minWidth: 200 }}
            >
                {`Add/Edit ${capitalize(path)}`}
            </Button>
            <Drawer
                anchor='right'
                open={open}
                onClose={handleClose}
            >
                <Box sx={{ m: 2 }}>
                    <Stepper activeStep={activeStep} sx={{ m: 2 }}>
                        {steps.map((label, index) => {
                            const stepProps: { completed?: boolean } = {};
                            const labelProps: {
                                optional?: React.ReactNode;
                            } = {};
                            return (
                                <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === 0 && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', m: 2 }}>
                            <Button
                                onClick={() =>handleSetOperationType(OperationType.addTopLevel)}
                                variant={operationType === OperationType.addTopLevel ? 'contained' : 'outlined'}
                                sx={{ m: 2 }}
                            >
                                {`New top level ${capitalize(path)}`}
                            </Button>
                            <Button
                                onClick={() => handleSetOperationType(OperationType.addChild)}
                                variant={operationType === OperationType.addChild ? 'contained' : 'outlined'}
                                sx={{ m: 2 }}
                            >
                                {`New child level ${capitalize(path)}`}
                            </Button>
                            <Button
                                onClick={() => handleSetOperationType(OperationType.edit)}
                                variant={operationType === OperationType.edit ? 'contained' : 'outlined'}
                                sx={{ m: 2 }}
                            >
                                {`Edit ${capitalize(path)}`}
                            </Button>
                        </Box>
                    )}
                    {activeStep === 1 && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', m: 2 }}>
                            <Typography variant='body1' sx={{ m: 2 }}>{operationMessage}</Typography>
                            {
                               operationType !== OperationType.addTopLevel &&
                                    <DropDown domain={domain} path={path} parentItemsOnly={operationType === OperationType.addChild} />
                            }
                            <TextField
                                variant='outlined'
                                label={`New ${capitalize(path)}`}
                                sx={{ m: 2 }}
                            />
                            {
                                path != 'tag' &&                         
                                    <TextField
                                        variant='outlined'
                                        label={'Description'}
                                        sx={{ m: 2 }}
                                    />
                            }
                        </Box>
                    )}
                    <Box sx={{ display: 'flex', flexDirection: 'row', m: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ m: 2 }}
                            variant='outlined'
                        >
                            Back
                        </Button>
                        <Button 
                            onClick={handleNext}
                            variant='outlined'
                            sx={{ m: 2, ml: 'auto' }}
                        >
                            {activeStep === 0 ? 'Next' : 'Save'}
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}