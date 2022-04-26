import React, { FC, useState } from "react";
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { User } from "./Signup.interface";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../store/users/users.actions";
import { selectUsers } from "../../../store/users/users.selector";
import ScreenFC from "../../../models/ScreenFC";

//SVILUPPA LA LOGIN PAGE
const Signup: ScreenFC<'Signup'> = ({ navigation }) => {
    const [existing, setExisting] = useState<boolean>(false);
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors },reset } = useForm({
        defaultValues: {
            username: '',
            country: '',
            password: '',
        } as User
    });
    const onSubmit = (user: User) => {
        let id: number = (users.length === 0) ? 1 : Math.max(...users.map(user => user.id)) + 1;
        user = { ...user, id };
        users.some((user1) => user1.username === user.username) ? setExisting(true) :
            (dispatch(signup(user!)), navigation.navigate('Login'),reset({} as User));
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={[styles.container, { flex: 1 }]}>
            <View style={styles.inputs}>
                <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input} placeholder="Username"
                        onBlur={onBlur} onChangeText={onChange} value={value} />
                )}
                    name="username"
                />
                <Controller control={control} rules={{ required: true, maxLength: 2, minLength: 2 }} render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input}
                        onBlur={onBlur} onChangeText={onChange} value={value} placeholder="country code" />
                )}
                    name="country"
                />
                <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input}
                        secureTextEntry onBlur={onBlur}
                        onChangeText={onChange} value={value} placeholder="Password" />
                )}
                    name="password"
                />
                {(errors.username || errors.password) &&
                    <Text style={{ color: 'red', fontSize: 10 }}>All fields are required</Text>}
                {(errors.country) &&
                    <Text style={{ color: 'red', fontSize: 10 }}>Please insert two letters for the country field</Text>}
                {(existing) &&
                    <Text style={{ color: 'red', fontSize: 10 }}>Sorry! Username not available</Text>}
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                    <Text style={{
                        color: 'white', fontSize: 20, fontWeight: 'bold', padding: 5, textAlign: 'center',
                    }}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={{
                        color: 'white', fontSize: 20, fontWeight: 'bold', padding: 5, textAlign: 'center',
                    }}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#17aede',
        borderRadius: 20,
        marginTop: 10,
        width: '100%',
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        height: '100%',
        padding: 10,
        width: '100%'
    },
    input: {
        borderColor: '#17aede',
        borderRadius: 15,
        borderWidth: 2,
        color: 'black',
        marginTop: 10,
        padding: 10,
        textAlign: 'center',
        width: '100%'
    },
    inputs: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: '30%',
        width: '60%'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#17aede'
    },
});

export default Signup;