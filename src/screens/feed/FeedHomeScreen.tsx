import React from 'react';
import { Button, requireNativeComponent, SafeAreaView, Text, View, Pressable, Platform } from 'react-native';
import { launchImageLibrary, launchCamera } from "react-native-image-picker";




const FeedHomeScreen = () => {
	const imagePickerOption : any = {
		mediaType: "photo",
		maxWidth: 768,
		maxHeight: 768,
		includeBase64: Platform.OS === "android",
	};
	const onPickImage = (res) => { 
		if (res.didCancel || !res) {
		  return;
		}
		console.log("PickImage", res);
	 }

	const onLaunchCamera = () => {
		launchCamera(imagePickerOption, onPickImage);
	 };
	 
	 // 갤러리에서 사진 선택
	 const onLaunchImageLibrary = () => {
		launchImageLibrary(imagePickerOption, onPickImage);
	 };

	return (
		<SafeAreaView>
			<View>
				<Button title="사진촬영" onPress={onLaunchCamera}/>
				<Button title="사진선택" onPress={onLaunchImageLibrary}/>
			</View>
		</SafeAreaView>
	);
};

export default FeedHomeScreen;