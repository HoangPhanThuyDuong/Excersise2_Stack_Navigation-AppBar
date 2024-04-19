import { useState } from "react"
import { View } from "react-native"
import { HelperText, Text, TextInput } from "react-native-paper";

const DemoHelperText = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [showpassword, setShowPassWord] = useState(false);
    const checkEmailError =()=>{
        return !email.includes('@')
    }
    const checkPassWordError =()=>{
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return !re.test(password);
    }
    return(
        <View style={{flex:1, justifyContent: "center",}}>
            <TextInput
                label={<Text style={{color:checkEmailError()?"red":"green"}}>Input Email</Text>}
                value={email}
                onChangeText={setEmail}
                left={<TextInput.Icon icon={"email"}/>}
            />
            <HelperText type="error" visible={checkEmailError()}>
                Sai địa chỉ email
            </HelperText>
            <TextInput
                label={<Text style={{color:checkPassWordError()?"red":"green"}}>Input PassWord</Text>}
                value={password}
                onChangeText={setPassWord}
                left={<TextInput.Icon icon={"key"}/>}
                right={<TextInput.Icon icon={"eye"} onPress={()=> setShowPassWord(!showpassword)}/>}
                secureTextEntry={!showpassword}
            />
            <HelperText type="error" visible={checkPassWordError()}>
                mật khẩu tối thiểu 8 chữ cái, có ít nhất một ký hiệu, chữ hoa và chữ thường và một số            </HelperText>
        </View>
    )
}
export default DemoHelperText