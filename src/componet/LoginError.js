import { Button } from '@mui/material';

import CancelIcon from '@mui/icons-material/Cancel';
import {Link} from 'react-router-dom'
export default function Popup(props)
{
    return(props.trigger)?(
            <div className="popup1">
            <div className="popup-inner1">
                <CancelIcon style={{color:'red',width:'35px',height:'35px',marginRight:'15px',marginTop:'4px'}}/>
                {/* <h3 className='success'>Success</h3> */}
                <p style={{color:'red',marginTop:'10px',marginRight:'15px',fontSize:'15px'}}>Invalid username or password</p>
                {/* <Link to="/Login"><Button style={{backgroundColor:'#72C341', color:'white',borderRadius:'15px',marginTop:'10px'}}>Login</Button></Link> */}
            </div>
        </div>
        ):"";

}