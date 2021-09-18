import "@/assets/scss/bridge-africa.scss";
import tabs from 'bootstrap/js/dist/tab';
import collapse from 'bootstrap/dist/js/bootstrap';
export default{
   install(Vue){
    Vue.use(tabs);
    Vue.use(collapse);
   }
}   