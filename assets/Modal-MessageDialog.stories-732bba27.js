import{a as p,j as o}from"./jsx-runtime-29545a09.js";import{r as u}from"./index-76fb7be0.js";import{M as a,F as h,B as r}from"./Text-80669967.js";import"./index-d3ea75b5.js";import{c as w}from"./customArgTypes-1ca5ba6d.js";import{P as t}from"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const k={title:"Modal/MessageDialog",component:a,parameters:{layout:"centered",controls:{sort:"alpha"}},tags:["autodocs"],argTypes:{ref:{control:"none",description:`Object of type
            
    {
            
        show: fn(showArgs),
            
        showConfirm: fn(showArgs): Promise,
            
        hide: fn(),
            
        error: fn(errors: [string])
            
    }
            
    Object showArgs = {
            
        type: [ALERT, ERROR, INFO, SUCCESS],
            
        title: string|node,
            
        content: string|[string]
            
    }`,table:{type:{summary:"ref object"},defaultValue:{summary:"undefined"}}},className:w.className,confirmText:{control:"text"},cancelText:{control:"text"},closeBtn:{control:"boolean"}}};t.func,t.func,t.func;const e={args:{confirmText:void 0,cancelText:void 0,closeBtn:!1},render:({confirmText:i,cancelText:m,closeBtn:f})=>{const n=u.useRef(),d=()=>{console.log("Dialog is confirmed")},g=()=>{console.log("Dialog is canceled")};return p(h,{children:[o(r,{onClick:()=>{n.current.show({type:"ERROR",title:"Oops! Something went wrong!",content:"Error processing request"})},children:"Alert dialog"}),o(r,{onClick:async()=>{await n.current.showConfirm({type:"INFO",title:"Dialog confirm title",content:"Please confirm action"})?d():g()},children:"Confirm dialog"}),o(a,{ref:n,confirmText:i,cancelText:m,closeBtn:f})]})}};var s,c,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    confirmText: undefined,
    cancelText: undefined,
    closeBtn: false
  },
  render: ({
    confirmText,
    cancelText,
    closeBtn
  }) => {
    /**
     * @type MdRefType
     */
    const mdRef = useRef();
    const confirmCallback = () => {
      console.log('Dialog is confirmed');
    };
    const cancelCallback = () => {
      console.log('Dialog is canceled');
    };
    const showAlert = () => {
      mdRef.current.show({
        type: 'ERROR',
        title: 'Oops! Something went wrong!',
        content: 'Error processing request'
      });
    };
    const showConfirm = async () => {
      const confirmResult = await mdRef.current.showConfirm({
        type: 'INFO',
        title: 'Dialog confirm title',
        content: 'Please confirm action'
      });
      if (confirmResult) confirmCallback();else cancelCallback();
    };
    return <Flex>
                <Button onClick={showAlert}>Alert dialog</Button>
                <Button onClick={showConfirm}>Confirm dialog</Button>
                <MessageDialog ref={mdRef} confirmText={confirmText} cancelText={cancelText} closeBtn={closeBtn} />
            </Flex>;
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const D=["Example"];export{e as Example,D as __namedExportsOrder,k as default};
