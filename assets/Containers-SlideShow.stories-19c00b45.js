import{a as s,j as e}from"./jsx-runtime-29545a09.js";import{r as m}from"./index-76fb7be0.js";import{S as d,G as S,F as r,I as a}from"./Text-80669967.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";const b={title:"Containers/SlideShow",component:d,parameters:{layout:"centered",controls:{sort:"alpha"}},tags:["autodocs"],argTypes:{containerProps:{control:"none",description:"**Flex** container properties"},currentScreen:{control:"none",description:"Control current screen  component properties"}}},u=x=>{const[o,c]=m.useState(0);return s(S,{gap:"10px",children:[s(d,{currentScreen:o,containerProps:{style:{height:"100px"}},children:[e(r,{justify:"center",align:"center",padding:"6px",style:{backgroundColor:"#ff000088"},children:"Screen 1"}),e(r,{justify:"center",align:"center",padding:"6px",style:{backgroundColor:"#00ff0088"},children:"Screen 2"}),e(r,{justify:"center",align:"center",padding:"6px",style:{backgroundColor:"#0000ff88"},children:"Screen 3"})]}),s(r,{gap:"10px",justify:"center",children:[e(a,{className:o===0?"disabled":"",onClick:()=>{c(t=>t-1)},icon:"arrow",direction:"down"}),e(a,{className:o===2?"disabled":"",onClick:()=>{c(t=>t+1)},icon:"arrow"})]})]})},n={render:u};var i,p,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: SlideShowExample
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const k=["Example"];export{n as Example,k as __namedExportsOrder,b as default};
