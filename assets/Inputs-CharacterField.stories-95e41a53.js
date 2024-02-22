import{j as m}from"./jsx-runtime-29545a09.js";import{r as i}from"./index-76fb7be0.js";import{C as l}from"./Text-80669967.js";import"./index-d3ea75b5.js";import{c as a}from"./customArgTypes-1ca5ba6d.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";const x={title:"Inputs/CharacterField",component:l,parameters:{layout:"centered",controls:{sort:"alpha"}},tags:["autodocs"],argTypes:{className:a.className,ref:a.ref,onChange:a.onChange,lblAlign:{options:["left","center","right"],description:'Label alignment, possible values "left" | "center" | "right"',table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},size:{control:"number",description:"Field length, number of input characters (1 - 12)",table:{type:{summary:"number",detail:null},defaultValue:{summary:"1"}}},type:{control:"select",description:'Label alignment, accepted values "text" | "number" | "password"',table:{type:{summary:"string"},defaultValue:{summary:"text"}}}}},p=n=>{const[o,c]=i.useState("");return m(l,{...n,value:o,onChange:c})},e={args:{className:"custom_characterfield",size:6,length:6,label:"Passcode",lblAlign:"center",type:"password"},render:p};var r,t,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    className: 'custom_characterfield',
    size: 6,
    length: 6,
    label: 'Passcode',
    lblAlign: 'center',
    type: 'password'
  },
  render: CharacterFieldExample
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const C=["Example"];export{e as Example,C as __namedExportsOrder,x as default};
