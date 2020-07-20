const { afterSuite, beforeSuite } = require('../lib')
const { expect } = require('chai')

const orderOfHooks = []

describe('a test suite with no suites defined', function () {
    describe('beforeSuite/afterSuite', function () {
        context('when the suite is executed', function () {
            beforeSuite(function () {
                orderOfHooks.push('beforeSuite')
            })
            afterSuite(function () {
                orderOfHooks.push('afterSuite')
            })

            it('does not invoke beforeSuite', function () {
                expect(orderOfHooks).to.be.empty
            })
        })

        context('after the suite completes', function () {
            it('does not invoke afterSuite', function () {
                expect(orderOfHooks).to.be.empty
            })
        })
    })
})
