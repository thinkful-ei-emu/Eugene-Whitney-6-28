import React from 'react';
import FeatureItem from './FeatureItem';
import '../App.css';

function Features(props) {
  // console.log(props.updateFeature);

 // Features.js (in Tech Specs and Customizations)


 const features = Object.keys(props.features)
 .map(key => {
    const options = props.features[key].map((item, index) => {
     const selectedClass = item.name === props.state.selected[key].name ? 'feature__selected' : '';
     const featureClass = 'feature__option ' + selectedClass;

     return <FeatureItem 
              key={index}
              id={key} 
              updateFeature={(key, item) => props.updateFeature(key, item)} 
              featureClass={featureClass} 
              selectedClass={selectedClass}
              item={item}
              itemName={item.name}
              itemCost={item.cost}/>
   });

   return <div className="feature" key={key}>
     <div className="feature__name">{key}</div>
     <ul className="feature__list">
       {options}
     </ul>
   </div>
 }); 

return (
  <section className="main__form">
    <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
    {features}
  </section>
)

}

export default Features;