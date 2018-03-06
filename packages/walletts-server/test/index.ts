import anyTest, {ExecutionContext, TestInterface} from 'ava';
import WalletServer from '../src/bin/service';
import {WalletServiceOpts} from "../src/config";
const path = require('path');

type testWalletServiceContext = {
  service: WalletServer;
}
const test = anyTest as TestInterface<testWalletServiceContext>
let service: WalletServer;

test.before((t: ExecutionContext<testWalletServiceContext>) => {
  let opts: WalletServiceOpts = {
    datadir: path.join(__dirname, "tmp"),
    debugFile: "./tmp/debug.log",
    conf: "./fixtures/test.conf"
  };
  service = new WalletServer(opts)
});

test.only("wallet service", async t => {
  t.truthy(service)
});