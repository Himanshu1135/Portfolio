import React from 'react'
import  {useState} from 'react'

import { useParams } from "react-router-dom";
import { ProjectList } from './ProjectList';

function ProjectDisplay() {

  const { id } = useParams();
  const project = ProjectList[id];
  const [data,setData] = useState([]);

  const formSubmit = (event) => {
    console.log(input)
    event.preventDefault()
    post_data()
  
  }
  const [input,getInput] = useState({
    vairance:1,
    skewness:1,
    curtosis:1,
    entropy:1
  })

  const post_data = async ()=>{
    console.log(input)
    await fetch('http://16.16.171.171/predict', {
         method: 'POST',
         body: JSON.stringify({
          'variance': input.vairance, 
          'skewness': input.skewness, 
          'curtosis': input.curtosis, 
          'entropy': input.entropy
      }),
         headers: {
           'Content-type': 'application/json; charset=UTF-8',
         },
       })
         .then((response) => response.json())
          .then((json) => setData(json.prediction))
            
 }

  return (

    <div className="proj_dis">
      <h1> {project.title}</h1>
      <img src={project.imgUrl} alt='proj_img' />
      <p><b>Skills : </b> {project.skills} </p>
      <p>
        <b>Description : </b> {project.description}
      </p>

      <h3>Demo</h3>

      <form onSubmit = {formSubmit}>
      <div className="form-group">
        <label for="exampleInputEmail1">Inputs1</label>
        <input  name="vairance" value = {input.vairance} onChange = {(e) => getInput({...input,vairance:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Input1"/>
        <small id="emailHelp" class="form-text text-muted"></small>
      </div>
      <div className="form-group">
        <label for="exampleInputEmail1">Inputs2</label>
        <input  name="curtosis" value = {input.curtosis} onChange = {(e) => getInput({...input,curtosis:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Input1"/>
        <small id="emailHelp" class="form-text text-muted"></small>
      </div>
      <div className="form-group">
        <label for="exampleInputEmail1">Inputs3</label>
        <input  name="skewness" value = {input.skewness} onChange = {(e) => getInput({...input,skewness:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Input1"/>
        <small id="emailHelp" class="form-text text-muted"></small>
      </div>
      <div className="form-group">
        <label for="exampleInputEmail1">Inputs4</label>
        <input  name="entropy" value = {input.entropy} onChange = {(e) => getInput({...input,entropy:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Input1"/>
        <small id="emailHelp" class="form-text text-muted"></small>
      </div>
      <button type="submit" class="btn btn-primary">Try It Out</button>
    </form>
    <h1>Result: {data}</h1>
    </div>
  );
}

export default ProjectDisplay