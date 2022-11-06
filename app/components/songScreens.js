import { WebView } from 'react-native-webview'

export function DetailedSongScreen({ route }) {
    const external_url = route.params.external_url
    return <WebView source={{ uri: external_url }} />;
}

export function PreviewSongScreen({ route }) {
    const preview_url = route.params.preview_url
    return <WebView source={{ uri: preview_url }} />;
}