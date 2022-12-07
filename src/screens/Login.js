import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Input, Button } from 'react-native-elements';

export default function Login({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}></View>
            <Avatar
                size={'xlarge'}
                containerStyle={styles.avatar}
                rounded
                title='FV'
            />
            <Input
                label='Login'
            />
            <Input
                label='Senha'
            />
            <Button
                title={'Login'}
                buttonStyle={styles.button}
            />
            <Button
                title={'Cadastre-se'}
                buttonStyle={[styles.button, { backgroundColor: 'red' }]}
                style={styles.button}
                onPress={() => navigation.navigate('Register')}
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
    },
    avatar: {
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#a7b0af',
    }

})