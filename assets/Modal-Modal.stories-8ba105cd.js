import{a as r,F as m,j as e}from"./jsx-runtime-29545a09.js";import{r as g}from"./index-76fb7be0.js";import{u as l,B as n,G as x,T as h}from"./Text-80669967.js";import"./index-d3ea75b5.js";import{c as M}from"./customArgTypes-1ca5ba6d.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";const E={title:"Modal/Modal",component:l,parameters:{layout:"centered",controls:{sort:"alpha"}},tags:["autodocs"],argTypes:{className:M.className,isOpen:{control:"text"},closeBtn:{control:"boolean"},maxWidth:{control:"text"},maxHeight:{control:"text"}}},t={args:{closeBtn:!0},render:c=>{const[u,d]=g.useState(!1),o=()=>{d(p=>!p)};return r(m,{children:[e(n,{onClick:o,children:"Open modal"}),e(l,{...c,isOpen:u,onClose:o,children:r(x,{itemsX:"center",children:[e(h,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, provident nihil? Pariatur harum incidunt consectetur fuga nisi error distinctio, sint deserunt amet aut sapiente, a ducimus expedita perferendis ab consequatur?"}),e(n,{onClick:o,children:"Close"})]})})]})}};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    closeBtn: true
  },
  render: props => {
    const [value, setValue] = useState(false);
    const toggleModal = () => {
      setValue(value => !value);
    };
    return <>
                <Button onClick={toggleModal}>Open modal</Button>
                <Modal {...props} isOpen={value} onClose={toggleModal}>
                    <Grid itemsX='center'>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, provident nihil? Pariatur harum incidunt consectetur fuga nisi error distinctio, sint deserunt amet aut sapiente, a ducimus expedita perferendis ab consequatur?
                        </Text>
                        <Button onClick={toggleModal}>Close</Button>
                    </Grid>
                </Modal>
            </>;
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const G=["Example"];export{t as Example,G as __namedExportsOrder,E as default};
