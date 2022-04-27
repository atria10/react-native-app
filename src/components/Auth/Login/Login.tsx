import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../../store/users/users.selector";
import { LoginInterface } from "./Login.interface";
import { login } from "../../../store/login/login.actions";
import ScreenFC from "../../../models/ScreenFC";
import { ThemeContext } from "../../../../App";

const Login: ScreenFC<'Login'> = ({ navigation, route }) => {
    const {backgroundColor,borderColor,color}=useContext(ThemeContext);
    const styles = StyleSheet.create({
        button: {
            backgroundColor: borderColor,
            borderRadius: 20,
            marginTop:10,
            width: '100%',
        },
        buttonView: {
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
        },
        container: {
            alignItems: 'center',
            backgroundColor: backgroundColor,
            justifyContent: 'space-around',
            height: '100%',
            padding: 10,
            width: '100%'
        },
        input: {
            borderColor: borderColor,
            borderRadius: 15,
            borderWidth: 2,
            color:color,
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
            color: borderColor
        },
    });

    const [error, setError] = useState<boolean>(false);
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors },reset } = useForm({
        defaultValues: {
            username: '',
            password: '',
        } as LoginInterface
    });
    const onSubmit = (user: LoginInterface) => {
        users.some((user1) => user1.username === user.username && user1.password === user.password) ?
            (dispatch(login({username:user.username,isLogged:true})),
                navigation.navigate('Personal', { id: user.username }),reset({} as LoginInterface)) :
            (setError(true), setTimeout(() =>setError(false),1500));
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={[styles.container, { flex: 1 }]}>
            <View style={styles.inputs}>
                <Controller control={control} rules={{ required: true }} render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input} placeholder="Name"
                        onBlur={onBlur} onChangeText={onChange} value={value} />
                )}
                    name="username"
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
                {(error) &&
                    <Text style={{ color: 'red', fontSize: 10 }}>Wrong credentials</Text>}
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                    <Text style={{
                        color:'#fff', fontSize: 20, fontWeight: 'bold', padding: 5, textAlign: 'center',
                    }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Signup')}>
                    <Text style={{
                        color:'#fff', fontSize: 20, fontWeight: 'bold', padding: 5, textAlign: 'center',
                    }}>Signup</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;