(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{1:function(e,t,n){e.exports={enter:"slide_enter__oH2qd",enterActive:"slide_enterActive__3hgrQ",exit:"slide_exit__2fWfP",exitActive:"slide_exitActive__27pN_"}},19:function(e,t,n){e.exports={list:"list_list__1saq0",item:"list_item__3flwH"}},2:function(e,t,n){e.exports={form:"Form_form__19Wtj",name:"Form_name__1V-vd",input:"Form_input__2dhUR",button:"Form_button__2FHla"}},22:function(e,t,n){e.exports=n(33)},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),s=(n(27),n(20)),i=n(7),u=n(8),l=n(9),m=n(13),h=n(12),d=n(2),f=n.n(d),p=n(10),b=n(34),E=n(1),v=n.n(E),g=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",isError:!1,errorMessage:""},e.handleNameChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(i.a)({},a,r))},e.handleNumberChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(i.a)({},a,r))},e.pushError=function(t){e.setState({isError:!0,errorMessage:"".concat(t)}),setTimeout((function(){e.setState({isError:!1})}),2500)},e.handleSubmit=function(t){t.preventDefault();var n={id:Object(p.v4)(),name:e.state.name,number:e.state.number},a=e.state.name,r=Number(e.state.number);e.props.contacts.find((function(t){return t.name===e.state.name}))?e.pushError("".concat(a," is already in contacts.")):r||""!==a?r?a.length?Number(a)?e.pushError("Please, enter a correct name - NOT A NUMBER"):(e.props.addItem(n),e.setState({name:"",number:"",isError:!1,errorMessage:""})):e.pushError("Please, enter a name"):e.pushError("Please, enter a correct number"):e.pushError("Please, enter name and number, your input is empty")},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.isError,c=e.errorMessage;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:f.a.form},r.a.createElement(b.a,{in:a,classNames:v.a,timeout:{enter:2500,exit:500},mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("p",null,c)),r.a.createElement("p",{className:f.a.name},"name:"),r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleNameChange,className:f.a.input}),r.a.createElement("p",{className:f.a.name},"number:"),r.a.createElement("input",{type:"text",name:"number",value:n,onChange:this.handleNumberChange,className:f.a.input}),r.a.createElement("button",{className:f.a.button,disabled:!t||!n,type:"submit"},"Add contact"))}}]),n}(a.Component),_=function(e){var t=e.contact,n=e.name,a=e.number,c=e.deleteContact;return r.a.createElement("li",null,n,": ",a,r.a.createElement("button",{onClick:function(){return c(t.id)}},"Delete"))},O=n(35),C=n(19),N=n.n(C),y=function(e){var t=e.contactList,n=e.deleteContact;return r.a.createElement(O.a,{component:"ul",className:N.a.list},t.map((function(e){return r.a.createElement(b.a,{key:e.id,classNames:v.a,timeout:500,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(_,{name:e.name,number:e.number,deleteContact:n,contact:e}))})).reverse())},S=function(e){var t=e.handleFilter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Find contact by name"),r.a.createElement("input",{type:"text",onChange:t}))},x=(n(32),function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){throw new Error}}),j=function(e){try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(n){throw new Error}}("contacts"),F=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},e.updateStorage=function(t){t.contacts!==e.state.contacts&&x("contacts",e.state.contacts)},e.handleChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(i.a)({},n,a))},e.addItem=function(t){var n=t,a=[].concat(Object(s.a)(e.state.contacts),[n]);e.setState({contacts:a}),x("contacts",a)},e.handleSubmit=function(t){t.preventDefault();var n={id:Object(p.v4)(),name:e.state.name,number:e.state.number};e.addItem(n)},e.deleteContact=function(t){var n=e.state.contacts.filter((function(e){return e.id!==t}));e.setState({contacts:n}),x("contacts",n)},e.handleFilter=function(t){e.setState({filter:t.target.value})},e.getFilteredContacts=function(e,t){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){if(console.log("mount"),j){var e=j;this.setState({contacts:e})}}},{key:"componentDidUpdate",value:function(e,t){console.log("updata")}},{key:"render",value:function(){var e=this.state,t=e.filter,n=e.contacts,a=this.getFilteredContacts(t,n);return console.log("render"),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{in:this.state.contacts.length>=2,classNames:v.a,timeout:{enter:500,exit:500},mountOnEnter:!0},r.a.createElement("h2",null,"Phonebook")),r.a.createElement(g,{contacts:this.state.contacts,addItem:this.addItem}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(b.a,{in:this.state.contacts.length>=2,classNames:v.a,timeout:{enter:500,exit:500},mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(S,{handleFilter:this.handleFilter})),r.a.createElement(y,{contactList:a,deleteContact:this.deleteContact}))}}]),n}(a.Component);o.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.9efa1caf.chunk.js.map