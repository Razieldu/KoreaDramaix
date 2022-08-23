import classes from "./BackgroundLayout.module.css"

const BackgroundLayout = (props) => {
  let cssClasses;
  
  if(props.color==="white"){
   cssClasses = `${classes.white}`

  }
  if(props.color==="black"){
    cssClasses = `${classes.black}`
 
   }
   if(props.color==="gery"){
    cssClasses = `${classes.grey}`
 
   }
  return <div className={cssClasses}>{props.children}</div>;
};

export default BackgroundLayout;
