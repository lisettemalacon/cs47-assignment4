import { StyleSheet, SafeAreaView, Text, View, Image, FlatList } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import images from "./assets/Images/images";
import Song from "./app/components/song"
import AuthButton from "./app/components/authButton";

const renderSongs = ({ item, index }) => {
  return (
    <Song item={item} index={index} />
  )
}

const List = ({ tracks }) => {
  return (
    <View style={styles.container}>
      <View style={styles.tracksHeader}>
        <Image style={styles.tracksHeaderImage} source={images.spotify} />
        <Text style={styles.topTracksText}>My Top Tracks</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={renderSongs}
        keyExtractor={(item, index) => index}
      />
    </View>
  )
}

export default function App() {
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed
  if (token) {
    contentDisplayed = <List tracks={tracks} />
  } else {
    contentDisplayed = <AuthButton authFunction={getSpotifyAuth} />
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  tracksHeader: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20
  },
  tracksHeaderImage: {
    height: 20,
    width: 20,
    marginRight: 10
  },
  topTracksText: {
    color: Themes.colors.white,
    fontWeight: 'bold',
    fontSize: 20
  },
});
