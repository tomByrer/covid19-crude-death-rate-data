/**
 * Stringifies into JSON then minimally prettifies it with only newlines
 * @typedef {array} array of objects
 */
exports.JSONprettifyMin = function( arr ){
	return JSON.stringify( arr ).replace( /([{,](?="))|(.(?=}))/g, '$&\n' )
}
