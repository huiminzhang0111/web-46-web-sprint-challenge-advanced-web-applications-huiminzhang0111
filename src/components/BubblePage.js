import React, { useEffect, useState } from "react";
import {useParams, useHistory} from 'react-router-dom'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import axios from "axios";
import {axiosWithAuth} from './../helpers/axiosWithAuth'

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  const { id } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    fetchColorService()
      .then(res => {
        setColors(res.data)
      }).catch(err => {console.log(err)})
  }, [])

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    axiosWithAuth().put(`/colors/${id}`, editColor)
      .then(res => {
        const newColors = colors.map(color => color.id === editColor.id ? res.data : color) 
        setColors(newColors)
      }).catch(err => {console.log(err)})
      
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth().delete(`/colors/${id}`)
      .then(res => {
        setColors(colors.filter(color => (color.id !== colorToDelete.id)))
        push('/bubble-page')
      }).catch(err => {console.log(err)})
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
