import { StyleSheet, View } from 'react-native';
import { Header, Input, Button } from 'react-native-elements';

export default function Register({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Header
                leftComponent={{ 
                    icon: 'arrow-left',
                    type: 'font-awesome',
                    color: '#fff', 
                    onPress: () => navigation.navigate('Login') }}
            />
            <View style={{ flex: 1 }}></View>
            
            <Input
                label='E-mail'
            />
            <Input
                label='Senha'
                secureTextEntry={true}
            />
            <Button
                title={'Salvar'}
                buttonStyle={styles.button}
            />
            <View style={{ flex: 1 }}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 4,
        marginRight: 4,
    }
})

