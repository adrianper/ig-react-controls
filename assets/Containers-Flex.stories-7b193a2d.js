import{j as r,a as d}from"./jsx-runtime-29545a09.js";import{F as c}from"./Text-80669967.js";import"./index-d3ea75b5.js";import{c as e,a as s}from"./customArgTypes-1ca5ba6d.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";const t=i=>r(c,{...i}),S={title:"Containers/Flex",component:t,parameters:{layout:"centered",controls:{sort:"alpha"}},tags:["autodocs"],argTypes:{className:e.className,style:e.style,margin:e.margin,padding:e.padding,direction:{control:"radio",description:"**flex-direction** CSS property",options:["column","row"],table:s.string},gap:e.gap,align:{control:"text",description:"**align-items** CSS property",table:s.string},justify:{control:"text",description:"**justify-content** CSS property",table:s.string},maxWidth:e.maxWidth,skipClickOutside:e.skipClickOutside,wrap:{control:"boolean",description:"**flex-wrap** CSS property",table:s.bool}}},o={border:"1px solid gray",borderRadius:"4px",padding:"2px"},m=i=>d(t,{...i,children:[r(t,{style:o,children:"Item1"}),r(t,{style:o,children:"Item2"}),r(t,{style:o,children:"Item3"}),r(t,{style:o,children:"Item4"}),r(t,{style:o,children:"Item5"})]}),a={args:{wrap:!0,gap:"10px",maxWidth:"300px",padding:"1rem",style:{border:"1px solid black",minHeight:"100px"}},render:m};var n,p,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    wrap: true,
    gap: '10px',
    maxWidth: '300px',
    padding: '1rem',
    style: {
      border: '1px solid black',
      minHeight: '100px'
    }
  },
  render: FlexExample
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const C=["Example"];export{a as Example,C as __namedExportsOrder,S as default};
