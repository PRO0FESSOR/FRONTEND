import key from './secretKey.js';

const ImportKey = ()=>{
  return (
    <>
      <div>
        <h2> Importing key from secret key file .</h2>
        <p>Sectet Key :: {key}</p>
      </div>
    </>
  )
}

export default ImportKey;
