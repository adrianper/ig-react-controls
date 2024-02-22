import{j as t}from"./jsx-runtime-29545a09.js";import{r as p}from"./index-76fb7be0.js";import{o as n}from"./Text-80669967.js";import"./index-d3ea75b5.js";import{c as e}from"./customArgTypes-1ca5ba6d.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";const y={title:"Inputs/ComboBox",component:n,parameters:{layout:"centered",controls:{sort:"alpha"}},tags:["autodocs"],argTypes:{className:e.className,ref:e.ref,onChange:e.onChange}},c={1:"New York",2:"Los Angeles",3:"San Francisco",4:"Chicago",5:"San Diego"},u=i=>{const[m,l]=p.useState("");return t("div",{style:{width:"100vw",maxWidth:"200px",minHeight:"250px"},children:t(n,{...i,value:m,onChange:l})})},o={args:{floatingLabel:!0,nullValue:!0,label:"City",options:c},render:u};var r,a,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    floatingLabel: true,
    nullValue: true,
    label: 'City',
    options: citiesObj
  },
  render: ComboBoxExample
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const E=["Example"];export{o as Example,E as __namedExportsOrder,y as default};
