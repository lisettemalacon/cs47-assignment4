import { StyleSheet, Text, View, Image } from "react-native";
import { Themes } from "../../assets/Themes";
import millisToMinutesAndSeconds from "../../utils/millisToMinutesAndSeconds";

const Song = ({ item, index }) => {
    const duration = millisToMinutesAndSeconds(item.duration_ms);
    return (<View style={styles.songContainer}>
        <Text style={styles.songNumber}>{index + 1}</Text>
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
    songNumber: {
        color: Themes.colors.gray,
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