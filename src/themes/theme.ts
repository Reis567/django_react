"use client"
import { createTheme } from "@mui/material";

const tema = createTheme({
    palette: {
        primary: {
            main: '#341d08',
        },
        secondary: {
            main: '#f7f2ee',
        },
        text: {
            primary: '#131111',
            secondary:'#f7f2ee',
        },
        
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    color:'#f7f2ee',
                    borderRadius:'10px',
                    backgroundColor:'#341d08',
                    textTransform:'none',
                    fontWeight:'bold',
                    paddingTop:'12px',
                    paddingBottom:'12px',
                    ":hover":{
                        backgroundColor:'#f7f2ee',
                        color:'#341d08',
                    }
                }
            }
        },
        MuiTextField:{
            defaultProps:{
                InputLabelProps:{
                    required:false,
                },
                required:true,
            }
        }
    }
});

export default tema