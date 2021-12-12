import React from 'react';

function Footer(props) {
  const dt=new Date();
  return (
    <div className='footer'>
      Created by It-center  {dt.getFullYear()}
    </div>
  );
}

export default Footer;