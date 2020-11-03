I tested this repo using the [release candidate for 1.3.1](https://github.com/ethereum/web3.js/pull/3757) that contains the fix for issue [3738](https://github.com/ethereum/web3.js/issues/3738) via [3744](https://github.com/ethereum/web3.js/pull/3744)

You'll notice that `web3.js` is installed via local path (in `package.json`):

```javascript
"web3.js": "file:../../code/ChainSafe/git-repos/web3.js"
```

This is because I pulled the `release/1.3.1` branch from web3.js repo and built the library to test if this issue was persistent in the release candidate
