import{a as t,j as l}from"./jsx-runtime-29545a09.js";import{r as d}from"./index-76fb7be0.js";import{q as S,G as L,T as b}from"./Text-80669967.js";import"./index-d3ea75b5.js";import{c as A}from"./customArgTypes-1ca5ba6d.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";const k={title:"Inputs/SearchBox",component:S,parameters:{layout:"centered",controls:{sort:"alpha"}},tags:["autodocs"],argTypes:{onChange:A.onChange,value:{control:"none"}}};function E(n,a){let r;return(...c)=>{clearTimeout(r),r=setTimeout(()=>{n(...c)},a)}}const s={1:{brand:"Dodge",name:"Charger"},2:{brand:"Honda",name:"Accord"},3:{brand:"Honda",name:"Civic"},4:{brand:"Subaru",name:"Legacy"},5:{brand:"Subaru",name:"WRX"},6:{brand:"Volkswagen",name:"Arteon"},8:{brand:"Kia",name:"K5"},9:{brand:"MAZDA",name:"MAZDA3"},10:{brand:"Nissan",name:"Maxima"},11:{brand:"Kia",name:"Rio"},12:{brand:"Toyota",name:"Crown"},13:{brand:"Volkswagen",name:"Jetta GLI"},14:{brand:"Audi",name:"A3"},15:{brand:"Honda",name:"Accord Touring"},16:{brand:"Toyota",name:"Prius"},18:{brand:"Acura",name:"Integra"},19:{brand:"BMW",name:"i4"},20:{brand:"Cadillac",name:"CT4"},21:{brand:"Lexus",name:"ES"},22:{brand:"Volkswagen",name:"Passat"},23:{brand:"Hyundai",name:"Elantra N"}},o={args:{},render:n=>{const[a,r]=d.useState(""),[c,T]=d.useState({}),[f,i]=d.useState(!1),v=e=>{r(e)},I=e=>{i(!0),setTimeout(()=>{const m={};let u=0;for(const g in s){if(u>=5)break;const p=s[g].name;p.toUpperCase().search(RegExp(`${e.toUpperCase()}`))>=0&&(u++,m[g]=p)}T(m),i(!1)},600)},y=E(e=>{I(e)},600);return t("div",{style:{display:"grid",gap:"1rem",alignContent:"start",minHeight:"300px"},children:[l(S,{label:n.label||"Search car",placeholder:n.placeholder,value:a,onChange:v,onChangeSearchText:y,options:c,isLoadingOptions:f}),a!==""&&t(L,{children:[t(b,{children:[l("b",{children:"Brand:"})," ",s[a].brand]}),t(b,{children:[l("b",{children:"Model:"})," ",s[a].name]})]})]})},toolbar:!1};var h,C,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    // className: 'custom_textfield',
    // type: 'email',
    // label: 'Email',
  },
  render: args => {
    const [value, setValue] = useState('');
    const [cars, setCars] = useState({});
    const [isLoadingCars, setIsLoadingCars] = useState(false);
    const handleChangeCar = value => {
      setValue(value);
    };
    const getCars = value => {
      setIsLoadingCars(true);
      setTimeout(() => {
        const result = {};
        let counter = 0;
        for (const carId in carsObject) {
          if (counter >= 5) break;
          const carName = carsObject[carId].name;
          if (carName.toUpperCase().search(RegExp(\`\${value.toUpperCase()}\`)) >= 0) {
            counter++;
            result[carId] = carName;
          }
        }
        setCars(result);
        setIsLoadingCars(false);
      }, 600);
    };
    const handleChangeSearchText = debounce(value => {
      getCars(value);
    }, 600);
    return <div style={{
      display: 'grid',
      gap: '1rem',
      alignContent: 'start',
      minHeight: '300px'
    }}>
            <SearchBox label={args.label || 'Search car'} placeholder={args.placeholder} value={value} onChange={handleChangeCar} onChangeSearchText={handleChangeSearchText} options={cars} isLoadingOptions={isLoadingCars} />
            {value !== '' && <Grid>
                    <Text><b>Brand:</b> {carsObject[value].brand}</Text>
                    <Text><b>Model:</b> {carsObject[value].name}</Text>
                </Grid>}
        </div>;
  },
  toolbar: false
}`,...(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const G=["Example"];export{o as Example,G as __namedExportsOrder,k as default};
