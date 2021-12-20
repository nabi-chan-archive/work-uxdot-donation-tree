export interface FormElement extends HTMLFormElement {
	readonly elements: {
		[name in string]: HTMLInputElement;
	} & HTMLFormControlsCollection;
}
