import React from 'react';

function FeatureItem(props) {
  // console.log(props);

return (
   <li key={props.id} className="feature__item">
       <div className={props.featureClass}
         
         onClick={e => props.updateFeature(props.id, props.item)}>
           { props.itemName }
           ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
             .format(props.itemCost) })
       </div>
     </li>
)
}

export default FeatureItem