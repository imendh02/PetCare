import React,{useContext, useState} from 'react';
import { multiStepContext } from './StepContext';
import '../RequestService/RequestService.css';
import {FaPlus} from "react-icons/fa";
import {TiDeleteOutline} from "react-icons/ti";
import {TextField,InputLabel,MenuItem,Select,FormControl} from '@material-ui/core';
import {FaArrowRight} from "react-icons/fa";

const FirstStep = () => {
  const [city, setCity] = React.useState('');
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);
  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };
  const {setStep} = useContext(multiStepContext);
  
  return (
    <div id="firststep">
      {error && <p className="errorMsg">File not supported</p>}
      <div className="imgPreview" style={{background: imgPreview ? `url("${imgPreview}") no-repeat center/cover`: ""}}>
        {!imgPreview && (
          <>
          <label htmlFor="fileUpload" className="customFileUpload"><FaPlus className='iconfile'/><span>Cover Photo</span></label>
          <input type="file" id="fileUpload" onChange={handleImageChange} />
          </>
        )}
      {imgPreview && (
        <button onClick={() => setImgPreview(null)} className="delete"><TiDeleteOutline /></button>
      )}
      </div>
      <div class="form">
        <TextField type="text" className="field" id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField type="number" InputProps={{ inputProps: { min: 1, max: 100 } }} className="field" id="outlined-basic" label="Age" variant="outlined"/>
        <TextField type="tel" className="field" id="outlined-basic" label="Phone" variant="outlined" />
        <TextField type="text" className="field" id="outlined-basic" label="Adress" variant="outlined" />
        <div className='field'>
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
          <TextField type="text" className="field2" id="outlined-basic" label="ZIP Code" variant="outlined" />
        </div>
        <button className="nextfirst" onClick={()=>setStep(2)}>
          <span>Next</span>
          <FaArrowRight/>
        </button>
      </div>
    </div>
    
  )
}

export default FirstStep