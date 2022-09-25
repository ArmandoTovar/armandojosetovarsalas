export default function Style({theme}){
return(
      <style jsx global>
        {`
:root{
  --background:${theme !== undefined ? theme.backgroundColor.primary : 'white'};
  --primary_text:${theme !==undefined ? theme.textColor.primary : 'white'};
  --secondary_text:${theme !== undefined ? theme.textColor.secundary : 'white'};
  --other_text:${theme !== undefined ? theme.textColor.other : 'white'};
  --backgroun-card:${theme !== undefined ? theme.backgroundColor.secundary : 'white'};
  --font:${theme !== undefined ? theme.font : 'Arial'};
  --secondary_font:${theme !== undefined ? theme.font : 'Inter'};
  --bacground-card-secondary:${theme !== undefined ? theme.backgroundColor.hover : 'white'};
  }
`}
      </style>
    
)


}