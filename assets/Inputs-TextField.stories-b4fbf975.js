import{j as n}from"./jsx-runtime-29545a09.js";import{r as c}from"./index-76fb7be0.js";import{r as a}from"./Text-80669967.js";import"./index-d3ea75b5.js";import{c as t}from"./customArgTypes-1ca5ba6d.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";const v={title:"Inputs/TextField",component:a,parameters:{layout:"centered",controls:{sort:"alpha"}},tags:["autodocs"],argTypes:{className:t.className,ref:t.ref,onChange:t.onChange,onBlur:{control:"none"},onFocus:{control:"none"},onValidate:{control:"none"},value:{control:"none"},rest:{control:"none",description:"Object of `input` accepted properties",table:{type:{summary:"object"},defaultValue:{summary:"undefined"}}}}},e={args:{className:"custom_textfield",label:"Address"},render:l=>{const[m,p]=c.useState("");return n("div",{style:{width:"100vw",maxWidth:"200px",minHeight:"250px"},children:n(a,{...l,value:m,onChange:p,autoComplete:"new-password"})})}};var o,r,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    className: 'custom_textfield',
    label: 'Address'
  },
  render: args => {
    const [value, setValue] = useState('');
    return <div style={{
      width: '100vw',
      maxWidth: '200px',
      minHeight: '250px'
    }}>
            <TextField {...{
        ...args,
        value,
        onChange: setValue
      }} autoComplete='new-password' />
        </div>;
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const w=["Example"];export{e as Example,w as __namedExportsOrder,v as default};
