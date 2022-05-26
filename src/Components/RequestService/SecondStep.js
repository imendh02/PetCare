import React,{useContext} from 'react'
import { multiStepContext } from './StepContext';
import {Checkbox,InputLabel,TextField,MenuItem,Select,FormControl} from '@material-ui/core';
import {ReactComponent as Boarding} from '../../images/icon_house.svg';
import {ReactComponent as Dogwalking} from '../../images/walking-the-dog-svgrepo-com.svg';
import {ReactComponent as Training} from '../../images/dog_training.svg';
import {ReactComponent as Veterinary} from '../../images/Icon veterinary-care.svg';
import {ReactComponent as Petdaycare} from '../../images/sun.svg';
import {FaArrowRight} from "react-icons/fa";
import {FaArrowLeft} from "react-icons/fa";

const SecondStep = () => {
  const {setStep} = useContext(multiStepContext);
  const [city, setCity] = React.useState('');
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <div id="secondstep">
      <div className="form">
        <div className='check'>
          <h3>I'm looking for service for my: </h3>
          <Checkbox aa defaultChecked color="4589EF" style ={{color: "#4589EF",}}/>Dog
          <Checkbox aa defaultChecked color="4589EF" style ={{color: "#4589EF",}}/>cat
        </div>
        <div class="secondstep_services">
          <h3>For when you're away</h3>
          <div className="step_services">
            <div className='step_service'>
              <Boarding/>
              <h4>Boarding</h4>
            </div>
            <div className='step_service'>
              <Training/>
              <h4>Training</h4>
            </div>
            <div className='step_service'>
              <Veterinary/>
              <h4>Online Veterinary</h4>
            </div>
            <div className='step_service'>
              <Dogwalking/>
              <h4>Dog walking</h4>
            </div>
            <div className='step_service'>
              <Petdaycare/>
              <h4>Pet Day Care</h4>
            </div>
          </div>
        </div>
        <div className='step_price'>
          <h3>Price</h3>
          <div className=''>
            <TextField InputProps={{ inputProps: { min: 1} }} className="field" type="number" id="outlined-basic" label="From" variant="outlined" />
            <TextField InputProps={{ inputProps: { min: 1} }} className="field" type="number" id="outlined-basic" label="To" variant="outlined" />
          </div>
        </div>
        <div className='step_detail'>
          <div className='detail'>
            <h3>Near</h3>
            <FormControl className='field2'>
            <InputLabel id="demo-select-small">City</InputLabel>
            <Select labelId="demo-select-small" id="demo-select-small" value={city} label="City" onChange={handleChange}>
              <MenuItem value={10}>Tunis</MenuItem>
              <MenuItem value={20}>Ariana</MenuItem>
              <MenuItem value={30}>Ben Arous</MenuItem>
              <MenuItem value={30}>Manouba</MenuItem>
              <MenuItem value={30}>Nabeul</MenuItem>
              <MenuItem value={30}>Zaghouan</MenuItem>
              <MenuItem value={30}>Bizerte</MenuItem>
              <MenuItem value={30}>Sousse</MenuItem>
            </Select>
          </FormControl>
          </div>
          <div className='detail'>
            <h3>Number of pets</h3>
            <TextField InputProps={{ inputProps: { min: 1} }} className="field" type="number" id="outlined-basic" variant="outlined" />
          </div>
        </div>
        <div className='step_dates'>
          <div className='step_date'>
            <h3>Drop Off</h3>
            <TextField type="datetime-local" className="field" id="outlined-basic" variant="outlined" />
          </div>
          <div className='step_date'>
            <h3>Pick Up</h3>
            <TextField type="datetime-local" className="field" id="outlined-basic" variant="outlined" />
          </div>
        </div>
        <div className='buttons'>
          <button className="backstep" onClick={()=>setStep(1)}>
            <FaArrowLeft/>
            <span>Back</span>
          </button>
          <button className="nextstep" onClick={()=>setStep(3)}>
            <span>Next</span>
            <FaArrowRight/>
          </button>
      </div>
      </div>
    </div>
  )
}
export default SecondStep