import{j as e,a as d}from"./jsx-runtime-29545a09.js";import{G as c,F as m}from"./Text-80669967.js";import"./index-d3ea75b5.js";import{c as t}from"./customArgTypes-1ca5ba6d.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";const l=r=>e(c,{...r}),o=r=>e(m,{...r}),b={title:"Containers/Grid",component:l,parameters:{layout:"centered",controls:{sort:"alpha"}},tags:["autodocs"],argTypes:{style:t.style,className:t.className,padding:t.padding,margin:t.margin,gap:t.gap,columns:{control:"text",description:"**grid-template-columns** CSS property"},rows:{control:"text",description:"**grid-template-rows** CSS property"},direction:{control:"radio",description:"**grid-auto-flow** CSS property",options:["column","row"],table:{type:{summary:"string"},defaultValue:""}},itemsX:{control:"text",description:"**justify-items** CSS property"},itemsY:{control:"text",description:"**align-items** CSS property"},contentX:{control:"text",description:"**justify-content** CSS property"},contentY:{control:"text",description:"**align-content** CSS property"},maxWidth:t.maxWidth,selfX:{control:"text",description:"**justify-self** CSS property"},selfY:{control:"text",description:"**align-self** CSS property"},skipClickOutside:t.skipClickOutside}},i={border:"1px solid gray",borderRadius:"4px",padding:"2px"},x=r=>d(l,{...r,children:[e(o,{style:i,children:"Item1"}),e(o,{style:i,children:"Item2"}),e(o,{style:i,children:"Item3"}),e(o,{style:i,children:"Item4"}),e(o,{style:i,children:"Item5"})]}),s={args:{gap:"10px",maxWidth:"300px",padding:"1rem",style:{border:"1px solid black",minHeight:"100px"}},render:x};var n,p,a;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    gap: '10px',
    maxWidth: '300px',
    padding: '1rem',
    style: {
      border: '1px solid black',
      minHeight: '100px'
    }
    // direction: 'column'
  },
  render: GridExample
}`,...(a=(p=s.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const G=["Example"];export{s as Example,G as __namedExportsOrder,b as default};
