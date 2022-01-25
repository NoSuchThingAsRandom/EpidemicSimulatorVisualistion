import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});
function loadData(){
	console.log("Test");
}
export default app;