import * as Font from 'expo-font';

export async function bootstrap() {
    await Font.loadAsync({
        'open-bold-italic': require('../assets/fonts/OpenSans-SemiBoldItalic.ttf'),
        'open-italic': require('../assets/fonts/OpenSans-Italic.ttf')
    })
}