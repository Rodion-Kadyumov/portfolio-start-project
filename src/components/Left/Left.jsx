import "./Left.scss";

const Left = () => {
  return (
    <div className='left'>
        <div>
          <h1>Portfolio</h1>
          <div className='left-desc'>
            <p>Hi There</p>
            <p>I am Rodion</p>
            <p>A Web Developer</p>
          </div>
        </div>
          
        <div>
          <img src="/images/css.svg" alt="" />
          <img src="/images/html.svg" alt="" />
          <img src="/images/react.svg" alt="" />
          <img src="/images/typeScript.svg" alt="" />
          <img src="/images/lac.svg" alt="" />
        </div>
      </div>
  );
}

export default Left;