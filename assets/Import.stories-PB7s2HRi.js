import{a4 as o,h as e,_ as m}from"./iframe-C561pEjZ.js";const u={title:"Components/Import",component:o,tags:["autodocs"],argTypes:{}},i=r=>({components:{VImport:o},setup(){return{args:r}},render(){return e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e(o,{...r,multiple:!0,onUpload:(p,l)=>{console.log(p,l)}},()=>e(m,{},()=>"Import"))])}}),n=i.bind({});n.args={};var t,s,a;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    VImport
  },
  setup() {
    return {
      args
    };
  },
  render() {
    return h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }
    }, [h(VImport, {
      ...args,
      multiple: true,
      onUpload: (files, event) => {
        // eslint-disable-next-line no-console
        console.log(files, event);
      }
    }, () => h(VButton, {}, () => "Import"))]);
  }
})`,...(a=(s=n.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const d=["Primary"];export{n as Primary,d as __namedExportsOrder,u as default};
