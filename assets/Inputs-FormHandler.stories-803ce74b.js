import{j as r}from"./jsx-runtime-29545a09.js";import{r as d}from"./index-76fb7be0.js";import{p as s,G as i}from"./Text-80669967.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";const F={title:"Inputs/FormHandler",component:s,parameters:{layout:"centered",controls:{sort:"alpha"}},tags:["autodocs"],argTypes:{ref:{control:"none",description:"Form ref, returns **validate** function and **fieldsRef**",table:{type:{summary:"React ref"},defaultValue:{summary:"undefined"}}},fields:{control:"object",description:"Fields object",table:{type:{summary:"object"},defaultValue:{summary:"{ }"}}},formData:{control:"none",description:"Form value",table:{type:{summary:"object"},defaultValue:{summary:"{ }"}}},setFormData:{control:"none",description:"Form `onChange` event",table:{type:{summary:"function"},defaultValue:{summary:"undefined"}}}}},p={email:{type:"text_field",inputProps:{required:!0,label:"Email",type:"email",placeholder:"Type email",style:{gridArea:"a"},autoComplete:"new-password"}},password:{type:"text_field",inputProps:{required:!0,label:"Password",type:"password",placeholder:"Type password",style:{gridArea:"b"}}},city:{type:"combobox",inputProps:{required:!0,label:"City",options:{1:"San Diego",2:"Los Angeles",3:"San Francisco"},nullValue:!0,style:{gridArea:"c"}},onChange:console.log},promo_code:{type:"character_field",inputProps:{label:"Promotional code",size:4,type:"number",style:{gridArea:"d"}}},terms:{type:"checkbox",inputProps:{className:"terms_checkbox",style:{gridArea:"e"}}},label_terms:{type:"text",inputProps:{children:"Accept terms and conditions",className:"terms_label",style:{gridArea:"f"}}}},e={args:{fields:p},render:l=>{const[n,m]=d.useState({});return r(i,{gap:"1rem",itemsY:"center",style:{gridTemplateAreas:'"a a" "b b" "c c" "d d" "e f"'},children:r(s,{fields:l.fields,formData:n,setFormData:m})})}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    fields: formFields
  },
  render: args => {
    const [formData, setFormData] = useState({});
    return <Grid gap='1rem' itemsY='center' style={{
      gridTemplateAreas: '"a a" "b b" "c c" "d d" "e f"'
    }}>
                <FormHandler fields={args.fields} formData={formData} setFormData={setFormData} />
            </Grid>;
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const x=["Example"];export{e as Example,x as __namedExportsOrder,F as default};
