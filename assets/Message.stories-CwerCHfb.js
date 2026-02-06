import{z as f,ab as h,M as x,B as b,O as k,Q as M,_ as B,ac as p,h as e}from"./iframe-C561pEjZ.js";const n=f({__name:"ButtonMessage",props:{type:{},process:{type:Boolean},text:{}},setup(s){const a=s,o=h();function m(){if(a.process){const i=o(a.text??"Please wait loading",{type:"loading",duration:0});setTimeout(()=>{o(a.text??"The loading has been completed",{type:"success",id:i})},2e3)}else o(a.text??"Some interesting message",{type:a.type??"success"})}return(i,v)=>(b(),x(B,{"icon-position":"left",size:"large",shape:"default",onClick:m},{default:k(()=>[M(i.$slots,"default")]),_:3}))}});n.__docgenInfo={exportName:"default",displayName:"ButtonMessage",type:1,props:[{name:"type",global:!1,description:"",tags:[],required:!1,type:"MessageType",declarations:[],schema:{kind:"enum",type:"MessageType",schema:['"error"','"loading"','"success"','"warning"','"info"']}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"text",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"process",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"type",type:"MessageType",description:"",declarations:[],schema:{kind:"enum",type:"MessageType",schema:['"error"','"loading"','"success"','"warning"','"info"']}},{name:"text",type:"string",description:"",declarations:[],schema:"string"},{name:"process",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"C:/Users/polina/Documents/JS/bbt/vue-ui/src/tech/ButtonMessage.vue"};const w={title:"Components/Message",component:p,tags:["autodocs"],argTypes:{}},_=s=>({setup(){return{args:s}},render(){return e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e(p,{...s},()=>e("div",{style:{display:"flex",gap:"20px",paddingBlockStart:"300px"}},[e(n,{type:"success"},()=>"Success")]))])}}),t=_.bind({});t.args={};const r={render:s=>({setup(){return{args:s}},render(){return e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e(p,{...s,maxCount:5},()=>e("div",{style:{display:"flex",gap:"20px",paddingBlockStart:"300px"}},[e(n,{type:"success"},()=>"Success"),e(n,{type:"warning"},()=>"Warning"),e(n,{type:"error"},()=>"Error"),e(n,{type:"info"},()=>"Info"),e(n,{type:"loading"},()=>"Loading"),e(n,{process:!0},()=>"Process")]))])}}),args:{}};var c,l,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
    }, [h(VMessage, {
      ...args
    }, () => h("div", {
      style: {
        display: "flex",
        gap: "20px",
        paddingBlockStart: "300px"
      }
    }, [h(ButtonMessage, {
      type: "success"
    }, () => "Success")]))]);
  }
})`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
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
      }, [h(VMessage, {
        ...args,
        maxCount: 5
      }, () => h("div", {
        style: {
          display: "flex",
          gap: "20px",
          paddingBlockStart: "300px"
        }
      }, [h(ButtonMessage, {
        type: "success"
      }, () => "Success"), h(ButtonMessage, {
        type: "warning"
      }, () => "Warning"), h(ButtonMessage, {
        type: "error"
      }, () => "Error"), h(ButtonMessage, {
        type: "info"
      }, () => "Info"), h(ButtonMessage, {
        type: "loading"
      }, () => "Loading"), h(ButtonMessage, {
        process: true
      }, () => "Process")]))]);
    }
  }),
  args: {}
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const C=["Primary","AllInOne"];export{r as AllInOne,t as Primary,C as __namedExportsOrder,w as default};
