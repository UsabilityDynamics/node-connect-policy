/*
 * Connect / Express Request Policy
 * http://github.com/UsabilityDynamics/node-express-schema
 *
 * @class Policy
 * @constructor
 * @version 0.1.0
 */
function Policy( options ) {

  // Force Instantiation.
  if( !( this instanceof Policy ) ) {
    return Policy.create( options || {} );
  }

  if( options.handle ) {
    options = { __proto__: options, app: options };
  }

  // Extend Instance Properties.
  var _self = Object.defineProperties( this, {
    options: {
      value: this.utility.defaults( options || {}, Policy.defaults ),
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
    Policy.debug( 'requestHandler' );

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
Object.defineProperties( Policy.prototype, {
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
Object.defineProperties( module.exports = Policy, {
  debug: {
    value: require( 'debug' )( 'connect:schema' ),
    enumerable: false,
    writable: false
  },
  create: {
    /**
     * Create Instance
     *
     * @for Policy
     */
    value: function create( options ) {
      return new Policy( options || {} );
    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  defaults: {
    /**
     * Default Options.
     *
     * @for Policy
     */
    value: {},
    enumerable: true,
    configurable: true,
    writable: true
  }
});