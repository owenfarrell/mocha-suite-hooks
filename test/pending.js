const { afterSuite, beforeSuite } = require('../lib')
const { expect } = require('chai')

const orderOfHooks = []

describe('a test suite with a pending child suite', function () {
    context('when the suite is executed', function () {
        beforeSuite(function () {
            orderOfHooks.push('beforeSuite')
        })
        afterSuite(function () {
            orderOfHooks.push('afterSuite')
        })

        it('does not invoke beforeSuite until the child suite starts', function () {
            expect(orderOfHooks).to.be.empty
        })

        xcontext('when the child suite is pending', function () {
            before('before', function () {
                orderOfHooks.push('before')
            })
            after('after', function () {
                orderOfHooks.push('after')
            })

            beforeEach('beforeEach', function () {
                orderOfHooks.push('beforeEach')
            })
            afterEach('afterEach', function () {
                orderOfHooks.push('afterEach')
            })

            it('does not run any tests', function () {
                expect.fail()
            })
        })
    })

    context('after the suite completes', function () {
        it('does not invoke afterSuite', function () {
            expect(orderOfHooks).to.be.empty
        })
    })
})
