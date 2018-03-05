# blockchain-proxy

CAUTION: this package is under development and lack many important features! please use at your own risk.
PRs are wellcome

when you want to query the information from blockchain while you are building bitcoin wallet-like application,
there are often several possible choices for "Single source of truth". For example

1. bitcoind running in trusted environment.
2. block explorer of 3rd party service
3. BIP157 style filter-header-chain in local

Purpose of this package is to abstructing away those difference for bitcoin project using TypeScript.
