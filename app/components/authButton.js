import { StyleSheet, Text, View, Image, Dimensions, Pressable } from "react-native";
import images from "../../assets/Images/images";
import { Themes } from "../../assets/Themes";

const AuthButton = ({ authFunction }) => {
    return (<Pressable onPress={authFunction}>
        <View style={styles.authButtonStyle}>
            <Image style={styles.authImage} source={images.spotify}></Image>
            <Text style={styles.authText}>CONNECT WITH SPOTIFY</Text>
        </View>
    </Pressable>)
}

export default AuthButton;

const styles = StyleSheet.create({
    authButtonStyle: {
        backgroundColor: Themes.colors.spotify,
        borderRadius: 99999,
        width: '57%',
        height: 35,
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center'
    },
    authText: {
        color: Themes.colors.white,
        marginRight: 10,
        marginLeft: 4,
        fontWeight: 'bold',
    },
    authImage: {
        height: 17,
        width: 17,
        marginLeft: 10
    },
})