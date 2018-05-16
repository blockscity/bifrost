import React from 'react';
import {StyleSheet, ScrollView, Text, Alert} from 'react-native';
import Row from '../components/Row';
import {Wallet} from 'ethers';
import Identities from '../contracts/Identities.json'
import Transaction from 'ethereumjs-tx';
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
            console.log(random.address);


            web3.setProvider(new web3.providers.HttpProvider("http://127.0.0.1:8545"))
            let IdentitiesContract = web3.eth.contract(Identities.abi);
            let identities = IdentitiesContract.at("0xf04ed3ee45b5898f19d3991e31bd1a994e4e5068");
            let data = identities.createIdentity.getData(random.address, random.address);

            identities.createIdentity.estimateGas(random.address, random.address, (err, gas) => {
                if (err) {
                    Alert.alert("error", err.toString());
                } else {
                    let tx = new Transaction({
                        from: random.address,
                        to: Config.IDENTITES_ADDR,
                        gas: gas,
                        data: data,
                        gasLimit: web3.toHex(25000),
                        gasPrice: web3.toHex(10e9),
                    });
                    tx.sign(Buffer.from(random.privateKey.slice(2), 'hex'));
                    let serialize = tx.serialize().toString("hex");
                    console.log(Wallet.parseTransaction("0x" + serialize));

                    this.setState({
                        ser: serialize
                    });
                    // web3.eth.sendRawTransaction('0x' + serialize, (err, res) => {
                    //     if (err) {
                    //         console.log("err", err)
                    //     } else {
                    //         console.log("res", res);
                    //     }
                    // })
                }
            });
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