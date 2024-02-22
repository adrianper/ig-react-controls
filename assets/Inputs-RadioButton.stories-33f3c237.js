import{j as u}from"./jsx-runtime-29545a09.js";import{r as p}from"./index-76fb7be0.js";import{R as r}from"./Text-80669967.js";import"./index-d3ea75b5.js";import{c as m,a as e}from"./customArgTypes-1ca5ba6d.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";const w={title:"Inputs/RadioButton",component:r,parameters:{layout:"centered",controls:{sort:"alpha"}},tags:["autodocs"],argTypes:{value:{control:"none"},onChange:m.onChange,direction:{description:"**grid-auto-flow** property",options:["row","column"],table:{type:{summary:"'row' 'column'"}},control:"radio"},inputs:{description:"Object with input and label names",table:{type:{summary:'{ "inputName": "label" }'}}},gap:{table:e.string},templateColumns:{control:"text",table:e.string},templateRows:{control:"text",table:e.string},likert:{table:{disable:!0}}}},t={args:{inputs:{F:"Femenino",M:"Masculino"},templateColumns:"auto auto",gap:"8px",containerStyle:{direction:"rtl"},direction:"row"},render:s=>{const[i,l]=p.useState("");return u(r,{...s,value:i,onChange:l})}};var o,n,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    inputs: {
      'F': 'Femenino',
      'M': 'Masculino'
    },
    templateColumns: 'auto auto',
    gap: '8px',
    containerStyle: {
      direction: 'rtl'
    },
    direction: 'row'
  },
  render: args => {
    const [value, setValue] = useState('');
    return <RadioButton {...{
      ...args,
      value,
      onChange: setValue
    }} />;
  }
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const C=["Example"];export{t as Example,C as __namedExportsOrder,w as default};
