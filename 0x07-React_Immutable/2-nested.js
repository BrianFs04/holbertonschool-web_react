import { fromJS } from 'immutable';

function accessImmutableObject(object, array) {
	const map = fromJS(object);
	return map.getIn(array);
}

export default accessImmutableObject;
