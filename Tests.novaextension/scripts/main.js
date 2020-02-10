const plugin = require( "../../eslint-plugin-nova" );

/**
 * This is a very rudimentary tests file. See ../../tests/README.md for more information.
 */

try
{
	// Plugin should define all supported Nova globals
	console.assert( plugin.environments.nova.globals instanceof Object, "environments.nova.globals exists and is an Object" );

	let expectedGlobals = Object.keys( this );
	expectedGlobals.forEach( expected =>
	{
		let actual = plugin.environments.nova.globals[expected];
		console.assert( actual !== undefined, `environments.nova.globals.${expected} is defined` );
		console.assert( actual === "readonly", `environments.nova.globals.${expected} is readonly` );
	})

	console.log( "OK" );
}
catch( error )
{
	console.error( error.message );
}
