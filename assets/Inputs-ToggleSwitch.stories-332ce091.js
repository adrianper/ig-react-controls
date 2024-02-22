import{a as i,j as s}from"./jsx-runtime-29545a09.js";import{r as g}from"./index-76fb7be0.js";import{s as c,G as p,T as u}from"./Text-80669967.js";import"./index-d3ea75b5.js";import{c as t}from"./customArgTypes-1ca5ba6d.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";const M={title:"Inputs/ToggleSwitch",component:c,parameters:{layout:"centered",controls:{sort:"alpha"}},tags:["autodocs"],argTypes:{className:t.className,onChange:t.onChange}},e={render:d=>{const[a,l]=g.useState(document.body.classList.contains("dark"));return i(p,{gap:"1rem",itemsX:"center",children:[s(u,{children:"Dark mode"}),s(c,{value:a,onChange:()=>{document.body.classList.toggle("dark",!a),l(m=>!m)},alwaysActive:d.alwaysActive})]})}};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [darkMode, setDarkMode] = useState(document.body.classList.contains('dark'));
    const handleChange = () => {
      document.body.classList.toggle('dark', !darkMode);
      setDarkMode(value => !value);
    };
    return <Grid gap='1rem' itemsX='center'>
                <Text>Dark mode</Text>
                <ToggleSwitch value={darkMode} onChange={handleChange} alwaysActive={args.alwaysActive} />
            </Grid>;
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const S=["Example"];export{e as Example,S as __namedExportsOrder,M as default};
