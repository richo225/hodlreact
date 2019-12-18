import React, { useEffect } from 'react';

const CoinChart = ({ selectedCoin }) => {
  return (
    <div style={{height: '560px', backgroundColor: '#1D2330', overflow: 'hidden', boxSizing: 'border-box', border: '1px solid #282E3B', borderRadius: '4px', textAlign: 'right', lineHeight: '14px', fontSize: '12px', fontFeatureSettings: 'normal', textSizeAdjust: '100%', boxShadow: 'inset 0 -20px 0 0 #262B38', padding: '0px', margin: '0px', width: '100%'}}>
      <div style={{height: '540px', padding: '0px', margin: '0px', width: '100%'}}>
        <iframe src={`https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=${selectedCoin.coinio_id}&pref_coin_id=1508`} scrolling="auto" marginWidth={0} marginHeight={0} border={0} style={{border: 0, margin: 0, padding: 0, lineHeight: '14px'}} width="100%" height="536px" frameBorder={0} />
      </div>
      <div style={{color: '#626B7F', lineHeight: '14px', fontWeight: 400, fontSize: '11px', boxSizing: 'border-box', padding: '2px 6px', width: '100%', fontFamily: 'Verdana, Tahoma, Arial, sans-serif'}} />
    </div>
  )
}

export default CoinChart;
