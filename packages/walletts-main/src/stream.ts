import {Readable, Writable} from 'stream'

// stream for encrypting/decrypting WalletDB data
export class EncryptStream extends Writable {
  private box: any;
  constructor(opts: any) {
    super(opts)
  }

  public _write(chunk: Buffer, encoding: string, callback: Function) {
    console.log("not implemented!")
  }

  public end(cb: Function) {
    console.log(`not implemented !`)
  }
}

export class DecryptStream extends Readable {

}

export class PSBTParserStream {

}