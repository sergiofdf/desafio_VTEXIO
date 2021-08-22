import React from 'react';
import { useState } from 'react';
import * as S from './styled';
import axios from 'axios';

export default function UserForm() {


  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientId, setClientId] = useState('');

  
  function cadastrarCliente(){
    if(clientId===''  || clientName==='' || clientEmail==='' || clientPhone===''){
      alert('Campo obrigatório vazio. Preencha por favor!');
    }else{

        let clientData = {
          "id": clientId, 
          "nome": clientName, 
          "email": clientEmail,
          "phone": clientPhone
        };
    
        const api_url = "https://u37jocduy6.execute-api.us-east-2.amazonaws.com/items"
        axios.put(api_url, clientData)

      }
      setClientName('');
      setClientEmail('');
      setClientPhone('');
      setClientId('');
  };

  return (
    <S.HomeContainer>
          <S.Title>Cadastro de clientes</S.Title>
      <S.Content>
        <S.Form>
          <S.Label>Nome</S.Label>
          <S.InputTexto className = "nome" placeholder="Digite seu nome" value={clientName} onChange={e => setClientName(e.target.value)}></S.InputTexto>
          <S.Label>Email</S.Label>
          <S.InputTexto className="email" type="email" placeholder="email@email.com" value={clientEmail} onChange={e => setClientEmail(e.target.value)}></S.InputTexto>
          <S.Label>Telefone</S.Label>
          <S.InputTexto className="telefone" type="number" placeholder="99 99999 9999" value={clientPhone} onChange={e => setClientPhone(e.target.value)}></S.InputTexto>
          <S.Label>CPF</S.Label>
          <S.InputTexto className="cpf" type="number" placeholder="Digite somente números" value={clientId} onChange={e => setClientId(e.target.value)}></S.InputTexto>
          <S.Label></S.Label>
          <S.Button type="button" onClick={cadastrarCliente}>Cadastrar cliente</S.Button>
          {/* <S.Label></S.Label>
          <S.Button type="button" onClick={()=>{history.push('/')}}>Home</S.Button> */}
        </S.Form>
                
      </S.Content>
    </S.HomeContainer>
  );
}
