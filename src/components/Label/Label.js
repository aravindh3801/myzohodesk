import {useState} from 'react'
const Label = ({field}) => {
  const [fontSize, setFontSize] = useState(20)
  const [fontColor, setFontColor] = useState('red')
  // if(field.isMandatory){
  //   setFontColor('red')
  // }
    return (
      <div type={field.type} id={field.id} style={{fontSize:`${fontSize}px`,fontColor:`${fontColor}`}}>
        {field.displayLabel}
      </div>
    );
}
export default Label