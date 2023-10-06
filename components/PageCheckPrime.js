import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import PrimeNumberController from '../controller/primeNumber.controller.js';

const PageCheckPrime = () => {
    const [number, onChangeNumber] = useState('');
    const [primo, setPrimo]= useState(false);
    
    function getPrimo(){
        return PrimeNumberController.isPrimeNumber(number);
    };
    
    return (
        <View>
            <Text>Digite seu número</Text>
            <TextInput
                placeholder="Digite seu número"
                keyboardType="numeric"
                onChangeText={onChangeNumber}
                autoFocus={true}
                blurOnSubmit={true}
            />

            <Button
                title="Descubra seu número é primo"
                color="#841584"
                accessibilityLabel="Botão com texto 'Descubra seu número é primo'"
                onPress={getPrimo}>
            </Button>
            
            {primo ? (
                <Text>é primo em amigão parabéns, mentira seu verme</Text>
            ) : (
                    <Text></Text>
            )}
        </View>
    );
};
export default PageCheckPrime;