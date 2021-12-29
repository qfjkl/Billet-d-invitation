import  React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
export default function MediaCard() {
    const [loading, setLoading] = useState(false);
    function handleClick() {
        
    }
  return (
    <Card sx={{ maxWidth: 500 }}>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nouvelle invitation
        </Typography>
        <Grid  container spacing={3}>
            <Grid item xs={12}>
                <TextField
                fullWidth
                required
                id="outlined-required"
                label="Nom"
                          
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                fullWidth
                required
                id="outlined-required"
                label="Prénom"
                          
                />
                  </Grid>
            <Grid item xs={12}>
                <InputLabel id="choise-table-simple-select-autowidth-label">Choix de table</InputLabel>
                <Select
                labelId="choise-table-simple-select-autowidth-label"
                id="choise-table-simple-select-autowidth"
                fullWidth
                label="Choix de table"
                >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Table A</MenuItem>
                <MenuItem value={2}>Table B</MenuItem>
                <MenuItem value={3}>Table C</MenuItem>
                </Select>
                  </Grid>
            <Grid item xs={12}>
                <InputLabel id="invitation-type-simple-select-autowidth-label">Type d'invitation</InputLabel>
                      <Select
                labelId="invitation-type-simple-select-autowidth-label"
                id="invitation-type-simple-select-autowidth"
                fullWidth
                label="Type d'invitation"
                >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={1}> Mariage</MenuItem>
                <MenuItem value={2}>Anniversaire</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12}>
                <TextField
                fullWidth
                required
                id="outlined-required"
                label="Numéro de téléphone"
                          
                />
                  </Grid>
                  
            <Grid item xs={12}>
                <LoadingButton
                color="secondary"
                onClick={handleClick}
                loading={loading}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
                >
                Enregistrer
                </LoadingButton>
            </Grid>
                  
        </Grid>

      </CardContent>

    </Card>
  );
}
