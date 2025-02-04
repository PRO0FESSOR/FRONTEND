function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function PureComponent() {
  return (
    <>
      <p>Pure Component</p>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}

