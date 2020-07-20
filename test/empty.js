const { afterEachSuite, afterSuite, beforeEachSuite, beforeSuite } = require('../lib')
const { expect } = require('chai')

describe('a test suite with no suites defined', function () {
    describe('beforeSuite/afterSuite', function () {
        const orderOfHooks = []

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

    describe('beforeEachSuite/afterEachSuite', function () {
        const orderOfHooks = []

        context('when the suite is executed', function () {
            beforeEachSuite(function () {
                orderOfHooks.push('beforeEachSuite')
            })
            afterEachSuite(function () {
                orderOfHooks.push('afterEachSuite')
            })

            it('does not invoke beforeSuite', function () {
                expect(orderOfHooks).to.be.empty
            })
        })

        context('after the suite completes', function () {
            it('does not invoke afterEachSuite', function () {
                expect(orderOfHooks).to.be.empty
            })
        })
    })
})
