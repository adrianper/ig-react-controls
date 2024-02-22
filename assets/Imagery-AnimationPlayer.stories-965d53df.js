import{a as n,j as r}from"./jsx-runtime-29545a09.js";import{b as e,F as a,c,d as m,e as p,f as u,g as d,h as y,i as A,j as P,k as h}from"./Text-80669967.js";import"./index-d3ea75b5.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";const T={title:"Imagery/AnimationPlayer",component:e,parameters:{layout:"centered",controls:{sort:"alpha"}},tags:["autodocs"],argTypes:{}},o={args:{animation:"zoomIn",hoverAnimate:!0},render:s=>n(a,{direction:"column",align:"center",children:[r(e,{...s,children:r(c,{size:"5rem",style:{cursor:"pointer"},color:"var(--color--red--1)"})}),n(a,{children:[r(e,{animation:"pulse",children:r(m,{size:"5rem",color:"var(--color--red--1)"})}),r(e,{animation:"pulse",children:r(p,{size:"5rem",color:"var(--color--blue--4)"})}),r(e,{animation:"pulse",children:r(u,{size:"5rem",color:"var(--color--yellow--1)"})}),r(e,{animation:"pulse",children:r(d,{size:"5rem",color:"var(--color--green--1)"})})]}),n(a,{children:[r(e,{animation:"pulse",children:r(y,{size:"5rem",color:"var(--color--red--1)"})}),r(e,{animation:"pulse",children:r(A,{size:"5rem",color:"var(--color--blue--4)"})}),r(e,{animation:"pulse",children:r(P,{size:"5rem",color:"var(--color--yellow--1)"})}),r(e,{animation:"pulse",children:r(h,{size:"5rem",color:"var(--color--green--1)"})})]})]})};var i,l,t;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    animation: 'zoomIn',
    hoverAnimate: true
  },
  render: props => {
    return <Flex direction='column' align='center'>
                <AnimationPlayer {...props}>
                    <IoClose size='5rem' style={{
          cursor: 'pointer'
        }} color='var(--color--red--1)' />
                </AnimationPlayer>
                <Flex>
                    <AnimationPlayer animation='pulse'>
                        <BiErrorCircle size='5rem' color='var(--color--red--1)' />
                    </AnimationPlayer>
                    <AnimationPlayer animation='pulse'>
                        <TbInfoSquare size='5rem' color='var(--color--blue--4)' />
                    </AnimationPlayer>
                    <AnimationPlayer animation='pulse'>
                        <TbAlertTriangle size='5rem' color='var(--color--yellow--1)' />
                    </AnimationPlayer>
                    <AnimationPlayer animation='pulse'>
                        <BsPatchCheck size='5rem' color='var(--color--green--1)' />
                    </AnimationPlayer>
                </Flex>
                <Flex>
                    <AnimationPlayer animation='pulse'>
                        <BiSolidErrorCircle size='5rem' color='var(--color--red--1)' />
                    </AnimationPlayer>
                    <AnimationPlayer animation='pulse'>
                        <TbInfoSquareFilled size='5rem' color='var(--color--blue--4)' />
                    </AnimationPlayer>
                    <AnimationPlayer animation='pulse'>
                        <TbAlertTriangleFilled size='5rem' color='var(--color--yellow--1)' />
                    </AnimationPlayer>
                    <AnimationPlayer animation='pulse'>
                        <BsPatchCheckFill size='5rem' color='var(--color--green--1)' />
                    </AnimationPlayer>
                </Flex>
            </Flex>;
  }
}`,...(t=(l=o.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const C=["Example"];export{o as Example,C as __namedExportsOrder,T as default};
