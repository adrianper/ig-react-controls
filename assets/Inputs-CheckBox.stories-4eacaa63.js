import{a as r,j as l}from"./jsx-runtime-29545a09.js";import{r as p}from"./index-76fb7be0.js";import{m as c,G as u,T as i}from"./Text-80669967.js";import"./index-d3ea75b5.js";import{c as s}from"./customArgTypes-1ca5ba6d.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";const v={title:"Inputs/CheckBox",component:c,parameters:{layout:"centered",controls:{sort:"alpha"}},tags:["autodocs"],argTypes:{className:s.className,onChange:s.onChange}},e={render:()=>{const[a,m]=p.useState(!1);return r(u,{gap:"1rem",itemsX:"center",children:[l(c,{value:a,onChange:m}),r(i,{children:["Value is ",a?"true":"false"]})]})}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(false);
    return <Grid gap='1rem' itemsX='center'>
                <CheckBox value={value} onChange={setValue} />
                <Text>Value is {value ? 'true' : 'false'}</Text>
            </Grid>;
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const V=["Example"];export{e as Example,V as __namedExportsOrder,v as default};
