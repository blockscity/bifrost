import React from 'react';
import {StyleSheet, ScrollView, Text, Alert} from 'react-native';
import Row from '../components/Row';
import {HDNode, providers, utils, Wallet, Contract, Interface} from 'ethers';
import Identities from '../contracts/Identities.json'
import Transaction from 'ethereumjs-tx';
// import abi from 'ethereumjs-abi';


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
            tran: null
        };
    }

    showCollapsingHeader = () => {
        let random = Wallet.createRandom();
        let signed = random.sign(
            {
                to: "0xF0109fC8DF283027b6285cc889F5aA624EaC1F55",
                gas: 2000000
            }
        );


        let parseTransaction = Wallet.parseTransaction(signed);
        this.setState({
            wallet: random.address,
            from: parseTransaction.from,
            to: parseTransaction.to,
            raw: signed,
            tran: parseTransaction
        })

        let tx = new Transaction({
            from: random.address,
            to: "0xF0109fC8DF283027b6285cc889F5aA624EaC1F55",
            gas: 2000000
        });
        tx.sign(Buffer.from(random.privateKey.slice(2), 'hex'));
        let serialize = tx.serialize();

        this.setState({
            ser: utils.hexlify(serialize)
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