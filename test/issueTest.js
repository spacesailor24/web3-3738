const TruffleAssert = require('truffle-assertions')

const LoggerContract = artifacts.require('Logger')

contract('Logger', async () => {
    const randomBytes32 = '0x62697264736172656e747265616c3d3d3d676f767375727665696c6c616e6365'
    const randomUint256 = 42

    let loggerContract

    before(async () => {
        loggerContract = await LoggerContract.new()
    })

    it(`Successful emission of LogRequest event`, async () => {
        const tx = await loggerContract.request(randomBytes32, randomBytes32, randomBytes32, randomBytes32, randomUint256);
        TruffleAssert.eventEmitted(tx, 'LogRequest', event => {
            return event.requester === randomBytes32 &&
                event.source === randomBytes32 &&
                event.target === randomBytes32 &&
                event.command === randomBytes32 &&
                event.requestedTime.toNumber() === randomUint256
        })
    })

    it(`Successful emission of LogResponse event`, async () => {
        const tx = await loggerContract.response(randomBytes32, randomBytes32, randomBytes32, randomBytes32, randomBytes32);
        TruffleAssert.eventEmitted(tx, 'LogResponse', event => {
            return event.requester === randomBytes32 &&
                event.source === randomBytes32 &&
                event.target === randomBytes32 &&
                event.command === randomBytes32 &&
                event.result === randomBytes32
        })
    })
})
