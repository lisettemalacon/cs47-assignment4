import { StyleSheet, SafeAreaView, Text, View, Image, FlatList } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import images from "./assets/Images/images";
import { DetailedSongScreen, PreviewSongScreen } from "./app/components/songScreens";
import Song from "./app/components/song"
import AuthButton from "./app/components/authButton";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const renderSongs = ({ item, index }, navigation) => {
  return (
    <Song item={item} index={index} navigation={navigation} />
  )
}

const List = ({ navigation, tracks }) => {
  return (
    <View style={styles.container}>
      <View style={styles.tracksHeader}>
        <Image style={styles.tracksHeaderImage} source={images.spotify} />
        <Text style={styles.topTracksText}>My Top Tracks</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={(params) => renderSongs(params, navigation)}
        keyExtractor={(item, index) => index}
      />
    </View>
  )
}

function HomeScreen({ navigation }) {
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed
  if (token) {
    contentDisplayed = <List tracks={tracks} navigation={navigation} />
  } else {
    contentDisplayed = <AuthButton authFunction={getSpotifyAuth} />
  }

  return (<SafeAreaView style={styles.container}>
    {contentDisplayed}
  </SafeAreaView>)
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Back" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Song preview" component={PreviewSongScreen} options={{
          headerStyle: { backgroundColor: Themes.colors.background, shadowColor: 'transparent' },
          headerTitleStyle: { color: Themes.colors.white} }} />
        <Stack.Screen name="Song details" component={DetailedSongScreen} options={{
          headerStyle: { backgroundColor: Themes.colors.background, shadowColor: 'transparent' },
          headerTitleStyle: { color: Themes.colors.white} }} />
      </Stack.Navigator>
    </NavigationContainer>
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
