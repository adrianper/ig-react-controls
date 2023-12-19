import{a as e,G as d,j as c,F as m}from"./Text-92da985f.js";import{c as t}from"./customArgTypes-7983fa4b.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";const l=r=>e(d,{...r}),o=r=>e(m,{...r}),f={title:"Containers/Grid",component:l,parameters:{layout:"centered",controls:{sort:"alpha"}},tags:["autodocs"],argTypes:{style:t.style,className:t.className,padding:t.padding,margin:t.margin,gap:t.gap,columns:{control:"text",description:"**grid-template-columns** CSS property"},rows:{control:"text",description:"**grid-template-rows** CSS property"},direction:{control:"radio",description:"**grid-auto-flow** CSS property",options:["column","row"],table:{type:{summary:"string"},defaultValue:""}},itemsX:{control:"text",description:"**justify-items** CSS property"},itemsY:{control:"text",description:"**align-items** CSS property"},contentX:{control:"text",description:"**justify-content** CSS property"},contentY:{control:"text",description:"**align-content** CSS property"},maxWidth:t.maxWidth,selfX:{control:"text",description:"**justify-self** CSS property"},selfY:{control:"text",description:"**align-self** CSS property"},skipClickOutside:t.skipClickOutside}},n={border:"1px solid gray",borderRadius:"4px",padding:"2px"},x=r=>c(l,{...r,children:[e(o,{style:n,children:"Item1"}),e(o,{style:n,children:"Item2"}),e(o,{style:n,children:"Item3"}),e(o,{style:n,children:"Item4"}),e(o,{style:n,children:"Item5"})]}),s={args:{gap:"10px",maxWidth:"300px",padding:"1rem",style:{border:"1px solid black",minHeight:"100px"}},render:x};var i,p,a;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(p=s.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const h=["Example"];export{s as Example,h as __namedExportsOrder,f as default};
//# sourceMappingURL=Containers-Grid.stories-ac65a9e5.js.map
