const { afterEachSuite, afterSuite, beforeEachSuite, beforeSuite } = require('../lib')
const { expect } = require('chai')

describe('a test suite with a child suite', function () {
    describe('beforeSuite/afterSuite', function() {
        const orderOfHooks = []

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

            context('when the child suite is executed', function () {
                before('before', function () {
                    orderOfHooks.push('before')
                })
                after('after', function () {
                    orderOfHooks.push('after')
                })

                context('when the grandchild suite is executed', function () {
                    beforeEach('beforeEach', function () {
                        orderOfHooks.push('beforeEach')
                    })
                    afterEach('afterEach', function () {
                        orderOfHooks.push('afterEach')
                    })

                    it('ran the beforeSuite hook first', function () {
                        expect(orderOfHooks).not.to.be.empty
                        expect(orderOfHooks[0]).to.equal('beforeSuite')
                    })
                })
            })
        })

        context('after the suite completes', function () {
            it('executed all of the hooks in order', function () {
                expect(orderOfHooks).to.eql(['beforeSuite', 'before', 'beforeEach', 'afterEach', 'after', 'afterSuite'])
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

            it('does not invoke beforeEachSuite until the child suite starts', function () {
                expect(orderOfHooks).to.be.empty
            })

            context('when the child suite is executed', function () {
                before('before', function () {
                    orderOfHooks.push('before')
                })
                after('after', function () {
                    orderOfHooks.push('after')
                })

                context('when the grandchild suite is executed', function () {
                    beforeEach('beforeEach', function () {
                        orderOfHooks.push('beforeEach')
                    })
                    afterEach('afterEach', function () {
                        orderOfHooks.push('afterEach')
                    })

                    it('ran the beforeSuite hook first', function () {
                        expect(orderOfHooks).not.to.be.empty
                        expect(orderOfHooks[0]).to.equal('beforeEachSuite')
                    })
                })
            })
        })

        context('after the suite completes', function () {
            it('executed all of the hooks in order', function () {
                expect(orderOfHooks).to.eql(['beforeEachSuite', 'before', 'beforeEachSuite', 'beforeEach', 'afterEach', 'afterEachSuite', 'after', 'afterEachSuite'])
            })
        })
    })
})
