import { v4 as uuidv4 } from 'uuid';
import { setSelectionString } from './utils';


export function generateUUID() {
	const uuid = uuidv4();
	setSelectionString(uuid);
}