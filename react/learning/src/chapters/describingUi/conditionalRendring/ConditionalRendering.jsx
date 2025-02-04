
const ConditionalRendering = ({isEven}) => {
  let value = isEven? <p>Value is even </p> : <p>Value is odd</p>;
  
return (
  <>
    <p>Conditionaly rendering event or odd based on prop info . </p>
    {value}
  </>
)
}

export default ConditionalRendering
