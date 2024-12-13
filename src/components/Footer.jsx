import React from 'react'

function Footer() {
  return (

    <div className='flex justify-center space-x-10 items-center p-8'>
      <hr />
      <span className="footer">
        For better experience, download the Swiggy app now
      </span>
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
        alt="Download on the App Store"
      />
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
        alt="Get it on Google Play"
      />
    </div>
  );
}

export default Footer
