/*
 * Connect / Express Request servicePolicy
 * http://github.com/UsabilityDynamics/node-express-schema
 *
 * @class servicePolicy
 * @constructor
 * @version 0.1.0
 */
function servicePolicy( options ) {

  // Force Instantiation.
  if( !( this instanceof servicePolicy ) ) {
    return servicePolicy.create( options || {} );
  }

  // Extend Instance Properties.
  var self = Object.defineProperties( this, {
    options: {
      value: this.utility.defaults( options || {}, servicePolicy.defaults ),
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
  return function servicePolicy( req, res, next ) {
    //servicePolicy.debug( 'servicePolicy' );

    Object.defineProperties( req, {
      schema: {
        value: {},
        enumerable: false,
        configurable: true,
        writable: true
      },
      is_valid: {
        /**
         * Request Validity Check
         *
         */
        get: function is_valid() {

          return true;

        },
        enumerable: false,
        configurable: true
      }
    });

    Object.defineProperties( res, {
      is_valid: {
        /**
         * Response Validity Check
         *
         */
        get: function is_valid() {
          return true;
        },
        enumerable: false,
        configurable: true
      }
    });

    // Set Based on Route Policy.
    res.set({
      "access-control-allow-origin": "*",
      "x-scopes": ""
    });

    // Send response.
    return next();

  };

}

/**
 * Instance Properties
 *
 */
Object.defineProperties( servicePolicy.prototype, {
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
Object.defineProperties( module.exports = servicePolicy, {
  debug: {
    value: require( 'debug' )( 'connect:policy' ),
    enumerable: false,
    writable: false
  },
  create: {
    /**
     * Create Instance
     *
     * @for servicePolicy
     */
    value: function create( options ) {
      return new servicePolicy( options || {} );
    },
    enumerable: true,
    configurable: true,
    writable: true
  },
  defaults: {
    /**
     * Default Options.
     *
     * @for servicePolicy
     */
    value: {},
    enumerable: true,
    configurable: true,
    writable: true
  }
});