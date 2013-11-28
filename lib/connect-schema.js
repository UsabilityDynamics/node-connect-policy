/*
 * express-schema
 * http://github.com/UsabilityDynamics/node-express-schema
 *
 * @class express-schema
 * @constructor
 * @version 0.1.0
 */
function Schema() {

  // Force new instance.
  if( !( this instanceof Schema ) ) {
    return new Schema( arguments[0], arguments[1] );
  }

  var settings  = 'object' === typeof arguments[0] ? arguments[0] : {};
  var callback  = 'function' === typeof arguments[1] ? arguments[1] : Schema.utility.noop;
  var self      = this;

  // @chainable
  return this;

}

/**
 * Instance Properties
 *
 */
Object.defineProperties( Schema.prototype, {
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
  utility: {
    value: require( './utility' ),
    enumerable: false,
    writable: false
  },
  create: {
    /**
     * Create Instance
     *
     * @for express-schema
     */
    value: function create() {},
    enumerable: true,
    configurable: true,
    writable: true
  }
});