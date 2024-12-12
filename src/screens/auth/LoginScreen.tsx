import React, {useRef, useState} from 'react';
import { Text, View, Pressable, Button, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import axios, {AxiosRequestConfig} from 'axios';

const LoginScreen = ({navigation} :any) => {
	const idRef = useRef(null)
	const [id, setId] = useState<string>('')
	const [pw, setPw] = useState<string>('')

	const onPress = (e :any) => {
		console.log("로그인")
		console.log(id, pw)
		const credentials : any = {
			userId : id,
			password : pw
		}
		axios.post(`http://172.16.10.59:8585/v2/auth/signIn`, credentials,
			
		{
			withCredentials: true
			// headers: {
				// 'Authorization': 'Bearer eyJjdHkiOiJKV1QiLCJlbmMiOiJBMTI4R0NNIiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.vzE5ziIrT2kRT4Voy3FF-Tjlb8rk8CYE-tEt-S8Bq-VF7rX-2Pw-6RtxKrQRaRHXSVUJUF66KADhLf3vfYVFgSG4WnTRtC5YZpZA6mHbQmKfnldBIDhcDd8T6gXB-d5Tv3IUtjAPgBDeEQy04IPyn9-l1BoO3rP_GxsqkQ_zac-a47f13nM73AE_8UjgJSFjVWyUiBHwZXmJ-LeaETrf2TQ9n2xOuZ31S08HfZOqiVJ1CZJdPDmP9badfDA1FjyRBWJvhD5VkQy4ugXBUFz473S-IMhQQdXMmryNP-QmlQPKNy5hmYshRgQjUkc_lewNnZl7z6eCranYR8qCRkxCKQ.g4yjXlIrPjqAJV86.Do_sAuetxgvkjZH9XCwskJNe1W4euT8xlQpxjR8XBjAXoA8YDzLJeBGAttFTMsIT4TLfoEbkhc81rcJIVs5bhmxe0vai6yJBBu6arxQLJRmIIdXInm6DvcDFRx1Iu88U2bZ--jaqs6AO0AYmnNTKHh5I-JseN3ERjacmMDuQrSW14G0ljRQI17gvHZTms_UYR9ujFtXWpHZS8Wz7LBESjBF5ikPjrgIDf1Uw4XDH5KsqkhMa0yEmq2zxso41zsBMBeIsAOWsWziBGUgCuj-ziSxuRuObfMAvI58oJNEHgBl1f1FRJED2qbi_Ov_zB4XFgd-6Cu1q-lixXOQQHbZ-cGH50kg8FO4wZRShbBM4LVlf6HQJUIOhVla3NNNjrhF2upr1mTSbGSo69sZxz6UFOsGsWAghAg0A5rk_HrRHfFP8B5F1sh2zVSSJhzu3aOGzFHnM6o39rWcGTPTA3rOMR5x3tWPKYHNEMcUX5hYdeavJDep_T2wTs2lg-y_7jb8wQ4VtQHGm1kxgfoer5e2WKb83vbm8HwIV1ZBVcs2pZ4M-Yv6NSEm6sn1oy_ll831k7c8AToHJqCsPR2v84cFKHBqyd3EFEhqwUaPXT0QYs55X4mKeA3lFBqSoWruTdGy1zi1y6xU2sbeimdEFEd9AcmCjqW7pFNYHIctCahr6x5YfRXD3pYliNCumGnOBUZ3bsCOFoPD11m5GWgQwhgvJMhbYC4nTQD67AsbwWvLRqgVpaa7fX_NtE5k94xPGIjOBpeld4preWstW_yKHC6WAkS8CXylXUcJk2FLYEM54UQe-_EaLL5TQnjZJooH0HNCMtsHji0f7DWfFMmjE8Ftd6MuFUZu3eBszuN3KN8vj.vxnU4-8TFML00IF6WtqVow', // 인증 토큰
				// 'Content-Type': 'application/json',          // 콘텐츠 유형
				// 'Custom-Header': 'CustomValue'               // 사용자 정의 헤더
			// }
		}
		)
		.then((res)=> console.log(res.data))
		.catch((err) => console.log(err.code))
	}

	const test =  [1,2,3,4,5]

	return (
		<View>
			<Pressable>
				<Text>ID : </Text>
				<TextInput
					ref={idRef}
					editable={true}
					placeholderTextColor={'gray'}
					style={styles.inputFiled}
					autoCapitalize="none"
					spellCheck={false}
					autoCorrect={false}
					onChangeText={(value) => setId(value)}
            />
				<Text>PW : </Text>
				<TextInput
					ref={idRef}
					editable={true}
					placeholderTextColor={'gray'}
					style={styles.inputFiled}
					autoCapitalize="none"
					spellCheck={false}
					autoCorrect={false}
					secureTextEntry
					onChangeText={(value) => setPw(value)}
            />
				<Button title="로그인" onPress={onPress}/>
			</Pressable>
			{
				test.map((item) => (
					<Text>{item}</Text>
				))
			}
		</View>
	);
};


const styles = StyleSheet.create({
	loginBtn : {
		backgroundColor : 'gray',
		textShadowColor : "red",
		borderColor : "blue",
		width : "100%",
		height : 50,
		alignItems : "center",
		textAlign : "center",
		justifyContent : "center",
		fontSize : 20,
	},
	inputFiled : {
		backgroundColor : 'white',
		color : "black"
	}
})

export default LoginScreen;