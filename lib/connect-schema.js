/*
 * express-schema
 * http://github.com/UsabilityDynamics/node-express-schema
 *
 * @class express-schema
 * @constructor
 * @version 0.1.0
 */
function Schema() {

  // @chainable
  return this;

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
     * @for express-schema
     */
    value: function create() {

    },
    enumerable: true,
    configurable: true,
    writable: true
  }
});