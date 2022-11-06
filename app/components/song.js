import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Themes } from "../../assets/Themes";
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview'
import millisToMinutesAndSeconds from "../../utils/millisToMinutesAndSeconds";

const Song = ({ item, index, navigation }) => {
    const duration = millisToMinutesAndSeconds(item.duration_ms);
    return (
        <Pressable onPress={() => navigation.navigate("Song details", {
            external_url: item.external_urls.spotify,
        })}>
            <View style={styles.songContainer}>
                <Pressable>
                    <Ionicons name="play-circle" size={24} color={Themes.colors.spotify}
                        onPress={() => navigation.navigate("Song preview", {
                            preview_url: item.preview_url,
                        })} />
                </Pressable>
                <Image style={styles.songImage} source={{ uri: item.album.images[0].url }} />
                <View style={styles.songNameArtistBox}>
                    <Text numberOfLines={1} style={styles.songName}>{item.name}</Text>
                    <Text numberOfLines={1} style={styles.artistName}>{item.artists[0].name}</Text>
                </View>
                <View style={styles.albumNameBox}>
                    <Text numberOfLines={1} style={styles.songName}>{item.album.name}</Text>
                </View>
                <Text style={{ color: Themes.colors.white }}>{duration}</Text>

            </View>
        </Pressable>
    )
}

export default Song;

const styles = StyleSheet.create({
    songContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    songImage: {
        height: 70,
        width: 70,
        margin: 8
    },

    songNameArtistBox: {
        width: 100,
        marginRight: 25
    },
    songName: {
        color: Themes.colors.white
    },
    albumNameBox: {
        width: 100,
        marginRight: 5
    },
    artistName: {
        color: Themes.colors.gray
    }
})