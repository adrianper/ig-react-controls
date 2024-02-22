import{j as o}from"./jsx-runtime-29545a09.js";import{v as m,y as a,G as u}from"./Text-80669967.js";import"./index-d3ea75b5.js";import{c as h}from"./customArgTypes-1ca5ba6d.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";function g(e){return m({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"17",y2:"17"},child:[]}]})(e)}const f={title:"Modal/Tooltip",component:a,parameters:{layout:"centered",controls:{sort:"alpha"}},tags:["autodocs"],argTypes:{className:h.className,position:{control:"select"}}},t={args:{title:"This is an interactive tooltip",titleSize:2,position:"top",closeDelay:300,interactive:!0},render:e=>{const{position:s,title:l,titleSize:c,closeDelay:p,interactive:d}=e;return o(u,{children:o(a,{position:s,title:l,titleSize:c,closeDelay:p,interactive:d,children:o(g,{size:"2em",className:"react_icon react_icon--hover_colored"})})})}};var i,r,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'This is an interactive tooltip',
    titleSize: 2,
    position: 'top',
    closeDelay: 300,
    interactive: true
  },
  render: props => {
    const {
      position,
      title,
      titleSize,
      closeDelay,
      interactive
    } = props;
    return <Grid>
                <Tooltip position={position} title={title} titleSize={titleSize} closeDelay={closeDelay} interactive={interactive}>
                    <LuBadgeHelp size='2em' className='react_icon react_icon--hover_colored' />
                </Tooltip>
            </Grid>;
  }
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const D=["Example"];export{t as Example,D as __namedExportsOrder,f as default};
