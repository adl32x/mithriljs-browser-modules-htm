import UserList from "./views/UserList.js"
import UserForm from "./views/UserForm.js"
import Layout from "./views/Layout.js"

import htm from 'https://unpkg.com/htm?module';
const html = htm.bind(m);

m.route(document.body, "/list", {
    "/list": {
        render: function() {
            return html `
                <div>
                    <h1>Mithril.js, browser modules + htm for jsx-y templates.</h1>
                    <${Layout}>
                        <${UserList}/>
                    </${Layout}>
                </div>
            `
        }
    },
    "/edit/:id": {
        render: function(vnode) {
            return m(Layout, m(UserForm, vnode.attrs))
        }
    },
})