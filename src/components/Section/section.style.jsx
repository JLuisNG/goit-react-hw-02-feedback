import styled from 'styled-components';

export const Container = styled.div`

  max-width: 300px; 
  height: 400px;
  margin: 0 auto;
  text-align: center;  
  border-radius: 40px;
  box-shadow: 2px 2px 3px #EFEFEF;

  display: flex;
  place-content: center;  
  flex-direction: column; 
  gap: 30px;

  box-shadow: 0 0 2000px red, 
  inset 0 0 300px #460f0f;  

  h2{
    color: #d16767a2;
    text-shadow: 0 0 10px rgba(255,255,255,0.5);
  }

  li{
    color: #a664c0a2;
    text-shadow: 0 0 1px rgba(255,255,255,0.3); 
  }

`;