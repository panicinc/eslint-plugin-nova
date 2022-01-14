const plugin = require( "../../eslint-plugin-nova" );

/**
 * This is a very rudimentary tests file. See ../../tests/README.md for more information.
 */

try
{
	// Plugin should define all supported Nova globals
	console.assert( plugin.environments.nova.globals, "`environments.nova.globals` is not defined" );
	console.assert( plugin.environments.nova.globals instanceof Object, "`environments.nova.globals` is not an Object" );

	let expectedGlobals = Object.keys( this );
	expectedGlobals.forEach( expected =>
	{
		let actual = plugin.environments.nova.globals[expected];
		console.assert( actual !== undefined, `\`environments.nova.globals.${expected}\` is not defined` );
		console.assert( actual === "readonly", `\`environments.nova.globals.${expected}\` is not readonly` );
	})

	console.log( "OK" );
}
catch( error )
{
	let errorDetails = "";

	if( error.message.includes( "`environments.nova.globals` is not" ) )
	{
		errorDetails = "Please report this error to the Nova development team.";
	}
	else
	{
		let globalName = error.message.match( /environments\.nova\.globals\.([^\s`]+)/ )[1];
		errorDetails = `If \`${globalName}\` is a valid new global in the Nova extension runtime, add the following property in eslint-plugin-nova.js located at the root of this project:

	environments: {
		nova: {
			globals: {
				"${globalName}": "readonly"
			}
		}
	}

Otherwise, please report this to the Nova development team.
		`;
	}

	console.error( error.message + "\n\n" + errorDetails );
}
