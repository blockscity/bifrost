import React from 'react';
import {StyleSheet, ScrollView, Text, Alert} from 'react-native';
import Row from '../components/Row';
import {HDNode, providers, utils, Wallet, Contract, Interface} from 'ethers';
import Identities from '../contracts/Identities.json'
import Transaction from 'ethereumjs-tx';
// import abi from 'ethereumjs-abi';
import Config from 'react-native-config';

var Web3 = require('web3');
var web3 = new Web3();


class Transitions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from: "",
            wallet: "",
            to: "",
            raw: "",
            gas: null,
            ser: "",
            tran: null,
        };
    }

    showCollapsingHeader = () => {
        Wallet.fromBrainWallet("sjkyspa", "password").then(random => {
            this.setState({
                wallet: random.address,
            })


            web3.setProvider(new web3.providers.HttpProvider(Config.PROFIDER))
            let IdentitiesContract = web3.eth.contract(Identities.abi);
            let identities = IdentitiesContract.at(Config.IDENTITES_ADDR);
            let data = identities.createIdentity.getData(random.address, random.address);
            

            let gas = new Promise((resolve, reject) => {
                return web3.eth.estimateGas({
                    from: random.address,
                    data: data
                }, (err, gas) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(gas)
                    }
                });
            });
            gas.then(g => {
                let tx = new Transaction({
                    from: random.address,
                    to: Config.IDENTITES_ADDR,
                    gas: g,
                    data: data,
                    gasLimit: web3.toHex(25000),
                    gasPrice: web3.toHex(10e9),
                });
                tx.sign(Buffer.from(random.privateKey.slice(2), 'hex'));
                let serialize = tx.serialize().toString("hex");

                this.setState({
                    ser: utils.hexlify(serialize)
                })
                web3.eth.sendRawTransaction('0x' + serialize, (err, res) => {
                    if (err) {
                        Alert.alert("err", err.toString())
                    } else {
                        Alert.alert("succ", res.toString())
                    }
                })
            }).catch(err => {
                Alert.alert("error", err.toString())
            })
        })
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Row title={'Register'} onPress={this.showCollapsingHeader}/>
                <Text>{this.state.wallet}</Text>
                <Text>{this.state.from}</Text>
                <Text>{this.state.to}</Text>
                <Text>{this.state.raw}</Text>
                <Text>{this.state.gas}</Text>
                <Text>{this.state.ser}</Text>
                <Text>{JSON.stringify(this.state.tran)}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Transitions;