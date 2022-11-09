import {Paper, Typography} from "@mui/material";
import styled from "@emotion/styled";

const Wrapper = styled(Paper)`
  min-width: 300px;
  text-align: left;
  padding: 20px;
  display: flex;
  flex-flow: column;
  gap: 30px;
`

function MainFormVisualizer({ data: { gender, name, lover, multiple, className } }) {
  return (
    <Wrapper className={className}>
      <Typography>{`Le genre de la personne est : ${gender}`}</Typography>
      <Typography>{`Son nom est : ${name}`}</Typography>
      <Typography>{`Est-ce la personne une kiffeuse ? ${lover ? 'oui' : 'non'}`}</Typography>
      <div>
        <Typography variant={'subtitle1'} color={'primary'}>Quels sont ses choix ?</Typography>
        {multiple.map((response, index) => (<Typography>{`${index+1}/ ${response}`}</Typography>))}
      </div>

    </Wrapper>
  );
}

export default MainFormVisualizer;
