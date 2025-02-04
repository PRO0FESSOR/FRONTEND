
const PassingProps = ({id,ammount=0,children}) => {
return (
  <>
    <p>Get the id from the prop</p>
    <p>Id is {id}</p>
    <p>Get the first component from children prop</p>
   <p>Childen prop is = {children}</p>
    <p>If ammount data is not in prop</p>
    <p>Default ammount is = {ammount}</p>
  </>
)
}

export default PassingProps
