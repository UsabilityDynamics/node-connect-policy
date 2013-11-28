/*
 * Connect / Express Request Schema
 * http://github.com/UsabilityDynamics/node-express-schema
 *
 * @class Schema
 * @constructor
 * @version 0.1.0
 */
function Schema( options ) {

  // Force Instantiation.
  if( !( this instanceof Schema ) ) {
    return Schema.create( options || {} );
  }

  if( options.handle ) {
    options = { __proto__: options, app: options };
  }

  // Extend Instance Properties.
  var _self = Object.defineProperties( this, {
    options: {
      value: this.utility.defaults( options || {}, Schema.defaults ),
      enumerable: true,
      configurable: true,
      writable: true
    },
    app: {
      value: options.app && options.app.handle ? options.app : null
    }
  });

  /**
   * Handle Request.
   *
   * @method requestHandler
   */
  return function requestHandler( req, res, next ) {
    Schema.debug( 'requestHandler' );

    req.schema = {
      exists: false
    };

    // Send response.
    return next();

  };

}

/**
 * Instance Properties
 *
 */
Object.defineProperties( Schema.prototype, {
  utility: {
    value: require( './common/utility' ),
    enumerable: false,
    writable: false
  },
  some_action: {
    /**
     * Some Actions
     *
     * @for express-schema
     */
    value: function some_action() {},
    enumerable: true,
    configurable: true,
    writable: true
  }
});

/**
 * Constructor Properties
 *
 */
Object.defineProperties( module.exports = Schema, {
  debug: {
    value: require( 'debug' )( 'connect:schema' ),
    enumerable: false,
    writable: false
  },
  create: {
    /**
     * Create Instance
     *
     * @for Schema
     */
    value: function create( options ) {
      return new Schema( options || {} );
    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  defaults: {
    /**
     * Default Options.
     *
     * @for Schema
     */
    value: {},
    enumerable: true,
    configurable: true,
    writable: true
  }
});