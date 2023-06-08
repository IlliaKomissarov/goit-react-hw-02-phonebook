import styled from 'styled-components';

export const Li = styled.li`
display: flex;
flex-direction: column;
flex-wrap: wrap;
margin-bottom: 10px;
padding: 0 10px 2px;
letter-spacing: .2rem;
border-width: 0 0 1px 0;
border-style: dotted;
border-color: maroon;
`;

export const Ul = styled.ul`
padding: 0;
margin: 20px 20px 0 20px;
list-style: none;
`;

export const Button = styled.button`
margin: 0;
height: 25px;
width: 70px;
border: 0.3px solid black;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
cursor: pointer;
transform: scale(1);
transition: transform 250ms, background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1), color 500ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover {
  background-color: maroon;
  color: white;
  transform: scale(0.95);
  transition: transform 500ms;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}
`;

export const Name = styled.span`
margin-bottom: 5px;
font-size: 18px;
font-weight: 700;
`;

export const Number = styled.span`
margin-bottom: 5px;
font-size: 16px;
font-weight: 500;
`;