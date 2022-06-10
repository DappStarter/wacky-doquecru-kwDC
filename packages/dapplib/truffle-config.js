require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture stone dash shift protect gloom neck equal gaze'; 
let testAccounts = [
"0xd1c19ca571bcbc2f847cdba7aab6f284297f28ecae26cc3d0aa02e639e58e11e",
"0x07f925b8253831c0cbeeff09c8d0815dd5d21ab0c35b6c792dcfbc3b522694ae",
"0xc6d2d358f146864e05a758832043d90c293d6191d923b9e774f9977f4e964515",
"0xdf9fec4110bae370f1b88f07f0ec98e170b175c1547e868b6f8a4b58a2c631cf",
"0xc073579ccadc485fdfe9401455d44f1339f7aec9d31b4ff4845fe8455c58ef13",
"0x901efec9388e156dc8b38ef0b329555c1df7351b6366a9f1b52954da9d57b55c",
"0x3a80cd442ceea4c8048a2674d6989099b8d4020132133794bdb90f61dca73ec4",
"0x10bffc457badeffef1ed3f563dabc74873fd31d2ddba793be4589a119419168f",
"0x572eafb27b1c4ea6d22d58d7769585c257c2e5a9963f1eeae25219cde84e7b4f",
"0x7ba91fb69b8035df3d81de51ccf99488477ab9e9a349431f5cb91e1aa001687a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

