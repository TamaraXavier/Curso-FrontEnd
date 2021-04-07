import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FormStyled, NewTextField, CreateBody, CreateTitle, ButtonOrganization, ButtonCreate, ButtonCancel } from '../styles/Form'

import "../styles/style.css";

const Form = ({ func: onSubmit }) => {  
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      body: "",
      id: 1
    }
  });

  return (
    
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <CreateTitle>Título</CreateTitle>
      <NewTextField 
        id="outlined-search"
        size="small"
        type="search"
        variant="outlined"
        inputProps = {{ref: register, name: "title"} } 
      />
      <CreateBody>Descrição</CreateBody>
      <NewTextField 
        id="outlined-search"
        size="small"
        type="search"
        variant="outlined"
        inputProps = {{ref: register, name: "body"} } 
      />
      <ButtonOrganization className="m-top-25">
        <ButtonCreate variant="contained" type="submit" color="primary">
        Criar
        </ButtonCreate>
        <Link to="/">
        <ButtonCancel variant="contained" name="create" type="submit" >
          Cancelar
        </ButtonCancel>
        </Link>
      </ButtonOrganization>
    </FormStyled>
  );
};

export default Form;