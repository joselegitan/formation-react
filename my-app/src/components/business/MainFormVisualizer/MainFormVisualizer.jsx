function MainFormVisualizer({ data: { gender, name, lover, multiple } }) {
  return (
    <div className={'MainForm-visualiser'}>
      <p>{`Le genre de la personne est : ${gender}`}</p>
      <p>{`Son nom est : ${name}`}</p>
      <p>{`Est-ce la personne une kiffeuse ? ${lover ? 'oui' : 'non'}`}</p>
      <p>Quels sont ses choix ?</p>
      {multiple.map((response) => (<p>{response}</p>))}
    </div>
  );
}

export default MainFormVisualizer;
